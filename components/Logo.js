// Ohud Dental mark — an outlined tooth containing a mountain range (Ohud is
// named after a mountain). Redrawn as SVG from the supplied logo artwork so it
// stays crisp at every size and can sit on dark or light backgrounds.
//
// The tooth outline uses `currentColor`, so the parent controls it (.nlm sets
// white, matching the artwork on the navy header/footer).
//
// The mountain is #069792 — sampled from the logo artwork itself, so the mark
// reproduces the logo exactly. This is deliberately NOT the --teal token
// (#318B8B, the CMYK C82 M29 Y49 K6 brand colour used everywhere else): the
// supplied artwork is a slightly brighter teal than the print spec, and the
// clinic chose to keep the mark faithful to the artwork. Don't "fix" this to
// var(--teal) — it is an intentional difference.
//
// `id` must be unique per instance on a page: the clipPath is referenced by id,
// and duplicate ids are invalid HTML.
export default function Logo({ id = 'ohud-mark' }) {
  const tooth =
    'M50,16 C45.5,9.5 37,5.5 28.5,7 C16.5,9 8.5,19.5 8.5,33.5 ' +
    'C8.5,47 11,59 15,75 C18.5,89 20.5,107 26,112 ' +
    'C31.5,117 34.5,104 38.5,89.5 C41.5,78.5 45.5,69.5 50,69.5 ' +
    'C54.5,69.5 58.5,78.5 61.5,89.5 C65.5,104 68.5,117 74,112 ' +
    'C79.5,107 81.5,89 85,75 C89,59 91.5,47 91.5,33.5 ' +
    'C91.5,19.5 83.5,9 71.5,7 C63,5.5 54.5,9.5 50,16 Z';

  return (
    <svg
      width="58"
      height="70"
      viewBox="0 0 100 120"
      role="img"
      aria-label="Ohud Dental — a tooth containing a mountain"
    >
      <defs>
        <clipPath id={`${id}-clip`}>
          <path d={tooth} />
        </clipPath>
      </defs>
      {/* Mountain range, clipped to the inside of the tooth. */}
      <g clipPath={`url(#${id}-clip)`}>
        <path
          d="M2,120 L2,74 L22,52 L33,64 L50,28 L64,54 L74,46 L98,76 L98,120 Z"
          fill="#069792"
        />
      </g>
      {/* Tooth outline drawn last so it covers the clipped edge cleanly. */}
      <path
        d={tooth}
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}
