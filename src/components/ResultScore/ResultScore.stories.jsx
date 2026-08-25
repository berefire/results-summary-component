import ResultScore from './ResultScore';

export default {
    title: 'ResultScore',
    component: ResultScore,
    decorators: [(Story) => <div className="grid place-items-center">{<Story />}</div>],
};

export const Score = {
    args: {
        score: 76,
    },
};