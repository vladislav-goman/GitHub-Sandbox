export const formatDate = (dateToFormat) => {
  function appendLeadingZeroes(n) {
    if (n <= 9) {
      return '0' + n;
    }
    return n;
  }

  let date = new Date(dateToFormat);
  return (
    date.getFullYear() +
    '-' +
    appendLeadingZeroes(date.getMonth() + 1) +
    '-' +
    appendLeadingZeroes(date.getDate())
  );
};
