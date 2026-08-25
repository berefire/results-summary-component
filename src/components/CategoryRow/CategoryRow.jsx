// src/components/CategoryRow/CategoryRow.jsx
import { categoryStyles } from '@/utils/categoryStyles';

/**
 * A single row in the results "Summary" list — an icon, the category
 * name (color-coded per category), and the score out of 100. Meant to
 * be rendered inside a real `<ul>`, one per category.
 *
 * @param {object} props
 * @param {string} props.category - The category name (e.g. "Reaction"). Must match a key in `categoryStyles` to get its color styling.
 * @param {number} props.score - The score for this category, out of 100.
 * @param {string} props.icon - Path to the category's icon, relative to the public base URL.
 */

function CategoryRow({ category, score, icon }) {
  const styles = categoryStyles[category] ?? {};

  return (
    <li className={`flex items-center justify-between rounded-xl p-3 ${styles.bg}`}>
      <div className="flex items-center gap-4">
        <img
          src={`${import.meta.env.BASE_URL}${icon}`}
          alt=""
          className="h-5 w-5"
        />
        <span className={`font-body font-medium text-[1rem] md:text-[1.125rem] leading-[1.3] ${styles.text}`}>{category}</span>
      </div>
      <span className="font-body font-bold text-[1rem] md:text-[1.125rem] leading-[1.3] text-slate-950">
        {score} <span className="text-slate-400">/ 100</span>
      </span>
    </li>
  );
}

export default CategoryRow;