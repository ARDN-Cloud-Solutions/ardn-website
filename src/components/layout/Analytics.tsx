"use client";

import { useSyncExternalStore } from "react";
import Script from "next/script";

/**
 * Tracking only runs on the production site, for real browsers: not on
 * localhost, Vercel previews (*.vercel.app) or automated browsers
 * (navigator.webdriver), so tests never show up as visits in GA4, Google Ads
 * or Clarity. Elsewhere `window.gtag` is still defined (it only queues into
 * dataLayer, which nothing reads), so form code never throws.
 */
const LIVE_HOSTS = ["ardncloudsolutions.com", "www.ardncloudsolutions.com"];
const LIVE_CHECK = `(${JSON.stringify(LIVE_HOSTS)}.indexOf(location.hostname) !== -1 && !navigator.webdriver)`;

const isLive = () => LIVE_HOSTS.includes(window.location.hostname) && !navigator.webdriver;
const noSubscribe = () => () => {};

/**
 * GA4 + Google Ads (gtag) and Microsoft Clarity.
 *
 * The tiny inline gtag stub always runs right after hydration, so
 * `window.gtag` exists and queues calls into dataLayer from the start. The
 * heavy third-party files (gtag.js ~190 KB plus the Ads destination ~160 KB,
 * and Clarity) wait on every route until the page has loaded and the browser
 * is idle (`lazyOnload`): loaded earlier they held up the first paint and the
 * largest paint on phones (first on /start/*, then on the golf page and home).
 * Nothing is lost: every call made earlier, including the config that sends
 * page_view, sits in dataLayer until gtag.js reads it.
 */
export default function Analytics() {
  // false on the server and during hydration, then the real answer.
  const live = useSyncExternalStore(noSubscribe, isLive, () => false);

  return (
    <>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          if (${LIVE_CHECK}) {
            gtag('js', new Date());

            gtag('config', 'G-RTHTZK8BNJ');
            // Google Ads: remarketing audiences + conversion tracking. Enhanced
            // conversions for leads: the funnel sets user_data (gtag hashes it)
            // right before it fires a conversion.
            gtag('config', 'AW-16551257913', { allow_enhanced_conversions: true });
          }
        `}
      </Script>
      {live && (
        <>
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-RTHTZK8BNJ" strategy="lazyOnload" />
          {/* Microsoft Clarity: session replay + heatmaps. Replace the project ID
              below if a new one is provisioned. */}
          <Script id="microsoft-clarity" strategy="lazyOnload">
            {`
              if (!location.pathname.startsWith('/proposals')) (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "r8a2qh178u");
            `}
          </Script>
        </>
      )}
    </>
  );
}
