import Image from "next/image";

/** A real screenshot inside the page's browser-frame chrome. */
export default function Shot({
  src,
  alt,
  url,
  priority,
  tilt,
  sizes = "(max-width: 1040px) 100vw, 60vw",
}: {
  src: string;
  alt: string;
  url: string;
  priority?: boolean;
  tilt?: boolean;
  sizes?: string;
}) {
  return (
    <div className={tilt ? "gc-mock gc-shot" : "gc-mock gc-shot gc-shot-flat"}>
      <div className="gc-mock-bar">
        <span className="gc-mock-dot" />
        <span className="gc-mock-dot" />
        <span className="gc-mock-dot" />
        <span className="gc-mock-url">{url}</span>
      </div>
      <Image
        src={src}
        alt={alt}
        width={2880}
        height={1800}
        priority={priority}
        quality={90}
        sizes={sizes}
        className="gc-shot-img"
      />
    </div>
  );
}
