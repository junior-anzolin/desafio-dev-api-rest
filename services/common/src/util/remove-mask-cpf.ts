export const RemoveMaskCPF = (value: string) => {
  // eslint-disable-next-line prettier/prettier
  return value.split('.').join('').split('-').join('');
};
