export const chipColor = label => {
  switch (label) {
    case 'New':
      return 'primary.light';
    case 'Sale':
      return 'primary.subsidiary';
    case 'Hot':
      return 'primary.hot';
    default:
      return 'primary.hot';
  }
};
