// src/components/ResultsSummary/ResultsSummary.jsx

import ResultScore from '@/components/ResultScore/ResultScore';
import CategoryRow from '@/components/CategoryRow/CategoryRow';
import Button from '@/components/Button/Button';

const DEFAULT_CATEGORIES = [
  { category: 'Reaction', score: 0, icon: 'assets/images/icon-reaction.svg' },
  { category: 'Memory', score: 0, icon: 'assets/images/icon-memory.svg' },
  { category: 'Verbal', score: 0, icon: 'assets/images/icon-verbal.svg' },
  { category: 'Visual', score: 0, icon: 'assets/images/icon-visual.svg' },
];

/**
 * The top-level results card: composes `ResultScore` with the category
 * breakdown (a `CategoryRow` per item) and the Continue button. The
 * overall score isn't passed in — it's derived here by averaging each
 * category's score, so there's a single source of truth for it.
 *
 * If `categories` is empty, falls back to `DEFAULT_CATEGORIES` (four
 * placeholder rows, all scored 0) so the summary panel always has
 * something to render instead of a blank gap.
 *
 * @param {object} props
 * @param {Array<{category: string, score: number, icon: string}>} props.categories - The list of quiz-result categories to summarize.
 */

function ResultsSummary({ categories }) {
    const safeCategories = Array.isArray(categories) ? categories : [];
    const data = safeCategories.length ? safeCategories : DEFAULT_CATEGORIES;
    const score = Math.round(data.reduce((total, item) => total + item.score, 0) / data.length);

    return (
        <div className="mx-auto grid gap-6 md:gap-10 w-full md:max-w-171.5 lg:max-w-184 bg-white md:shadow-xl md:grid-cols-2 md:rounded-4xl font-body">
            <ResultScore score={score} />
            <section aria-labelledby="summary-heading" className="pbe-8 px-7.5 md:ps-0 md:py-11 md:pe-10 flex flex-col justify-center gap-6 md:gap-8">
                <h2 id="summary-heading" className="text-navy-950 font-bold text-[1.125rem] md:text-2xl leading-[1.3]">
                    Summary
                </h2>
                <ul className="flex flex-col gap-4">
                    {data.map((items) => (
                        <CategoryRow
                            key={items.category}
                            category={items.category}
                            score={items.score}
                            icon={items.icon}
                        />  
                    ))}
                </ul>
                <Button href="#">Continue</Button>
            </section>
        </div>
    );
}

export default ResultsSummary;