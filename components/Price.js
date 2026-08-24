// Single place that decides how a price is rendered, so /pricing, /services and
// /services/[slug] can never drift apart on it.
//
// Two figures come off the clinic's rate sheet (see lib/pricing.js):
//   `was`   — the standard rate, struck through
//   `price` — what the patient pays today
// A row without a `was` simply renders the one figure, which is what the
// "Free" / "Included" / "Ask when booking" rows do.
//
// DOM shape, which the `.ptable.rates` CSS on /pricing relies on:
//   .price > .price-was (struck standard rate) + .price-pay > .price-now [+ .price-save]
// On that page `.price` is `display:contents`, so `.price-was` and `.price-pay`
// become cells of the row's own grid and the figures line up down the table.
// Their grid columns are pinned in CSS rather than auto-placed, because rows
// with no `was` would otherwise slide their one figure into the standard-rate
// column.

import { discountNote } from '@/lib/pricing';

// Prices like "Free", "Included" and "Ask when booking" are words, not figures,
// so they render without the PKR prefix (and never with a "From" before them).
export const isWordPrice = (p) => /free|included|ask/i.test(p);

// "15,000" → "PKR 15,000"; "Ask when booking" → "Ask when booking".
export const withCurrency = (p) => (isWordPrice(p) ? p : `PKR ${p}`);

// Plain-text form for meta tags, JSON-LD and anywhere markup is not allowed.
export const priceText = (price, was) =>
  was && !isWordPrice(price)
    ? `${withCurrency(price)} (${discountNote.label.toLowerCase()} ${withCurrency(was)})`
    : withCurrency(price);

// Every figure in the list is a digit group, and a few are ranges
// ("8,000 – 10,000"). `figures` pulls them out in order so the saving can be
// worked out from the published numbers rather than kept as a second, separate
// truth that could fall out of step with the rate sheet.
const figures = (p) =>
  (String(p).match(/[\d,]+/g) || []).map((n) => Number(n.replace(/,/g, ''))).filter(Number.isFinite);

// Grouped by hand rather than via toLocaleString, which can differ between the
// Node build and the browser and would break hydration on a static export.
const group = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

// The saving against the standard rate. Where the price is a range we subtract
// its TOP figure, so the number shown is the smallest saving the patient is
// certain to get — understated on purpose, never the flattering end of it, and
// marked with a "+" so the range reads honestly.
export const saving = (price, was) => {
  if (!was || isWordPrice(price)) return null;
  const rate = Math.max(...(figures(was).length ? figures(was) : [NaN]));
  const pay = figures(price);
  if (!Number.isFinite(rate) || !pay.length) return null;
  const least = rate - Math.max(...pay);
  if (least <= 0) return null;
  return { amount: least, ranged: pay.length > 1 };
};

export default function Price({ price, was, from = false, className = '' }) {
  const word = isWordPrice(price);
  const showWas = was && !word;
  const save = showWas ? saving(price, was) : null;
  // A range ("PKR 150,000 – 170,000") is nearly twice the width of a single
  // figure, so it is flagged for the CSS to set at a smaller size rather than
  // being allowed to overrun its column and collide with the standard rate.
  const ranged = !word && figures(price).length > 1;
  return (
    <span className={`price${word ? ' price-word' : ''}${ranged ? ' price-range' : ''} ${className}`.trim()}>
      {showWas && (
        <s className="price-was" title={`${discountNote.label}: PKR ${was}`}>
          {/* Visually hidden where a column heading already says "Standard
              rate"; still read aloud, so a screen reader never meets a bare
              struck-through figure with nothing to explain it. */}
          <span className="price-was-label">{discountNote.label}</span>
          <span className="price-was-fig">PKR {was}</span>
        </s>
      )}
      <span className="price-pay">
        <span className="price-now">
          {word ? price : (
            <>
              {from && 'From '}
              <span className="cur">PKR</span>
              {price}
            </>
          )}
        </span>
        {save && (
          <span
            className="price-save"
            title={
              save.ranged
                ? `At least PKR ${group(save.amount)} less than our standard rate of PKR ${was}, depending where in the range your case falls.`
                : `PKR ${group(save.amount)} less than our standard rate of PKR ${was}.`
            }
          >
            Save PKR {group(save.amount)}{save.ranged && '+'}
          </span>
        )}
      </span>
    </span>
  );
}
