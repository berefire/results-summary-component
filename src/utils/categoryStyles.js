// src/utils/categoryStyles.js

/**
 * Maps each category name to its literal Tailwind background/text
 * classes, used by `CategoryRow` to color-code each row.
 *
 * The classes are written out as complete literal strings on purpose
 * — Tailwind's JIT compiler only generates CSS for class names it can
 * find as plain text while scanning your source files. Building a
 * class name dynamically at runtime (e.g. `bg-${color}-50`) means
 * Tailwind never sees the literal string `bg-red-50` anywhere in the
 * code, so it won't generate that CSS and the style silently fails to
 * apply. Keeping this lookup table is what lets `CategoryRow` pick a
 * style via a variable while still giving Tailwind literal strings to
 * scan.
 *
 * @type {Object<string, {bg: string, text: string}>}
 *
 * @example
 * const styles = categoryStyles['Reaction'];
 * // => { bg: 'bg-red-50', text: 'text-red-400' }
 */

export const categoryStyles = {
  Reaction: { bg: 'bg-red-50', text: 'text-red-400' },
  Memory: { bg: 'bg-yellow-50', text: 'text-yellow-400' },
  Verbal: { bg: 'bg-green-50', text: 'text-green-500' },
  Visual: { bg: 'bg-blue-50', text: 'text-blue-800' },
};