import CategoryRow from './CategoryRow';

export default {
  title: 'CategoryRow',
  component: CategoryRow,
  decorators: [(Story) => <ul>{<Story />}</ul>],
};

export const Reaction = {
  args: {
    category: 'Reaction',
    score: 80,
    icon: 'assets/images/icon-reaction.svg',
  },
};

export const Memory = {
  args: {
    category: 'Memory',
    score: 92,
    icon: 'assets/images/icon-memory.svg',
  },
};

export const Verbal = {
  args: {
    category: 'Verbal',
    score: 61,
    icon: 'assets/images/icon-verbal.svg',
  },
};

export const Visual = {
  args: {
    category: 'Visual',
    score: 73,
    icon: 'assets/images/icon-visual.svg',
  },
};

