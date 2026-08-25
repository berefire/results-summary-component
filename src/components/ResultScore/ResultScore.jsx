// src/components/ResultScore/ResultScore.jsx
import { getRatingLabel } from "@/utils/rating";

/**
 * The left-hand "Your Result" panel: the overall score shown in a
 * circular badge, plus a rating label (e.g. "Great") and short message,
 * both derived from the score via `getRatingLabel`.
 *
 * @param {object} props
 * @param {number} props.score - The overall score out of 100 (already averaged/derived by the caller).
 */

function ResultScore({ score }) {
  const { label, message } = getRatingLabel(score);

  return (
    <div className="w-full md:max-w-84.5 lg:max-w-92 bg-linear-to-b from-button-gradient-from to-button-gradient-to py-8 md:py-11.25 flex flex-col gap-6 md:gap-8 items-center rounded-b-4xl md:rounded-4xl font-body">
      <h1 className="text-white/70 font-bold text-[1.125rem] md:text-2xl leading-[1.3]">Your Result</h1>
      <div aria-label={`Score: ${score} out of 100`}
      className="flex size-35 md:size-50 flex-col items-center justify-center rounded-full bg-radial-[at_70%_10%] from-brand-gradient-from via-brand-gradient-to/60 to-transparent">
        <span className="text-[3.5rem] md:text-7xl leading-none font-extrabold text-white" aria-hidden="true">{score}</span>
        <span className="text-white/70 text-[1rem] md:text-[1.125rem] leading-[1.3]">of 100</span>
      </div>
      <div className="flex flex-col items-center gap-4">
        <p className="text-white font-bold text-[2rem] leading-[1.3]">{label}</p>
        <p className="text-white/70 text-[1rem] md:text-[1.125rem] leading-[1.3] w-[30ch] md:w-[20ch] lg:w-[25ch] text-center">{message}</p>
      </div>
    </div>
  );
}

export default ResultScore;
