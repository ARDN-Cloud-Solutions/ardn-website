"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";

/**
 * GA4 + Google Ads (gtag) and Microsoft Clarity.
 *
 * The tiny inline gtag stub always runs right after hydration, so
 * `window.gtag` exists and queues calls into dataLayer from the start. The
 * heavy third-party files (gtag.js ~190 KB, Clarity) load after hydration on
 * most pages, but on the Google Ads landing pages (/start/*) they wait until
 * the page has loaded and the browser is idle (`lazyOnload`): they used to
 * hold up the first paint of the headline and form on phones. Nothing is
 * lost: every call made earlier sits in dataLayer until gtag.js reads it.
 */
export default function Analytics() {
  const pathname = usePathname();
  const heavy = pathname?.startsWith("/start/") ? "lazyOnload" : "afterInteractive";

  return (
    <>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());

          gtag('config', 'G-RTHTZK8BNJ');
          // Google Ads: remarketing audiences + conversion tracking. Enhanced
          // conversions for leads: the funnel sets user_data (gtag hashes it)
          // right before it fires a conversion.
          gtag('config', 'AW-16551257913', { allow_enhanced_conversions: true });
        `}
      </Script>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-RTHTZK8BNJ" strategy={heavy} />
      {/* Microsoft Clarity: session replay + heatmaps. Replace the project ID
          below if a new one is provisioned. */}
      <Script id="microsoft-clarity" strategy={heavy}>
        {`
          if (!location.pathname.startsWith('/proposals')) (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "r8a2qh178u");
        `}
      </Script>
    </>
  );
}
