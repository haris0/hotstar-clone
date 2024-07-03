export const convertDate = (dateStr: string): string => {
  const date = new Date(dateStr);

  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  });
};