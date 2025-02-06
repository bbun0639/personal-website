export const calYearsAndMonthsDuration = (
  startYear: number,
  startMonth: number
): { years: number; months: number } => {
  const now = new Date();
  const startDate = new Date(startYear, startMonth - 1);
  const totalMonths =
    (now.getFullYear() - startDate.getFullYear()) * 12 +
    now.getMonth() -
    startDate.getMonth();

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return { years, months };
};
