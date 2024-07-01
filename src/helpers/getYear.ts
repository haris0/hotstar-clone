export const getYear = (dateStr: string): string => {
  const date = new Date(dateStr);

  return date.toLocaleDateString('id-ID', {
    year: 'numeric'
  });
};