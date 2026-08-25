import ResultsSummary from './ResultsSummary';
import data from '@/data/data.json';

export default {
    title: 'ResultsSummary',
    component: ResultsSummary,
    decorators: [(Story) => <main className="grid place-items-center bg-navy-50">{<Story />}</main>],
};

export const Default = {
    args: {
        categories: data,
    },
};

/** With no data provided, falls back to four zero-score placeholder rows instead of a blank summary panel. */
export const FallbackPlaceholders = {
    args: {
        categories: [],
    },
};