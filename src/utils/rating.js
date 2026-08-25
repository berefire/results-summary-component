// src/utils/rating.js

/**
 * Derives a rating label and message from an overall score, matching
 * the four tiers from the design (75+, 60+, 40+, and below 40).
 *
 * Thresholds are checked from highest to lowest, so a score is graded
 * by the first bracket it qualifies for — if you add a new tier in
 * the future, insert it in the right position in this chain rather
 * than appending it at the end, or a higher score could get caught by
 * a lower check first.
 *
 * Input is defensively clamped to the 0–100 range (and non-numeric
 * input is treated as 0), since this function has no way to know
 * *why* it received an invalid score — only that grading it as-is
 * would be meaningless. A warning is logged in both cases so the
 * real problem (wherever the bad score came from) doesn't go unnoticed.
 *
 * @param {number} score - The overall score out of 100 to grade.
 * @returns {{label: string, message: string}} The rating label (e.g. "Great") and its accompanying message.
 *
 * @example
 * getRatingLabel(82);
 * // => { label: 'Great', message: 'You scored higher than 65% of the people who have taken these tests.' }
 */
export function getRatingLabel(score) {
  if (typeof score !== 'number' || Number.isNaN(score)) {
    console.warn(`getRatingLabel: expected a number, received ${JSON.stringify(score)}. Defaulting to 0.`);
    score = 0;
  }

  const clampedScore = Math.min(100, Math.max(0, score));

  if (clampedScore !== score) {
    console.warn(`getRatingLabel: score ${score} is outside the expected 0–100 range; clamping to ${clampedScore}.`);
  }

  if (clampedScore >= 75) {
    return { label: 'Great', message: 'You scored higher than 65% of the people who have taken these tests.' };
  }
  if (clampedScore >= 60) {
    return { label: 'Good', message: 'You scored higher than 45% of the people who have taken these tests.' };
  }
  if (clampedScore >= 40) {
    return { label: 'Not bad', message: 'You scored higher than 25% of the people who have taken these tests.' };
  }
  return { label: 'Keep practicing', message: 'Try again to improve your score!' };
}