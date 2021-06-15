// Format the date without calling the Date object.
// This is to simplify timezone issues.
const dateFormatter = (() => {
  const months = {
    1: 'Jan',
    2: 'Feb',
    3: 'Mar',
    4: 'Apr',
    5: 'May',
    6: 'Jun',
    7: 'Jul',
    8: 'Aug',
    9: 'Sep',
    10: 'Oct',
    11: 'Nov',
    12: 'Dec',
  };

  const days = {
    1: '1st',
    2: '2nd',
    3: '3rd',
    4: '4th',
    5: '5th',
    6: '6th',
    7: '7th',
    8: '8th',
    9: '9th',
    10: '10th',
    11: '11th',
    12: '12th',
    13: '13th',
    14: '14th',
    15: '15th',
    16: '16th',
    17: '17th',
    18: '18th',
    19: '19th',
    20: '20th',
    21: '21st',
    22: '22nd',
    23: '23rd',
    24: '24th',
    25: '25th',
    26: '26th',
    27: '27th',
    28: '28th',
    29: '29th',
    30: '30th',
    31: '31st',
  };

  function formatDate(date) {
    const dateArray = date.split('-');
    const month = formatMonth(dateArray[1]);
    const day = formatDay(dateArray[2]);
    const year = dateArray[0];
    return `${month}-${day}-${year}`;
  }

  function formatMonth(num) {
    if (num[0] === '0') {
      return months[Number(num[1])];
    }
    return months[Number(num)];
  }

  function formatDay(num) {
    if (num[0] === '0') {
      return days[Number(num[1])];
    }
    return days[Number(num)];
  }

  return {
    formatDate,
  };
})();

export default dateFormatter;
