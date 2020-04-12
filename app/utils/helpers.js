export const formatDate = (timestamp) => {
  const date = new Date(timestamp || 0);
  const month = date.getMonth();
  const getDate = date.getDate();
  const getYears = date.getFullYear();
  let getHours = date.getHours();
  let getMinutes = date.getMinutes();

  const monthName = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'Mei',
    'Jun',
    'Jul',
    'Agu',
    'Sep',
    'Okt',
    'Nov',
    'Des',
  ];

  if (getHours < 10) {
    getHours = `0${getHours}`;
  }

  if (getMinutes < 10) {
    getMinutes = `0${getMinutes}`;
  }

  return `${getDate} ${monthName[month]} ${getYears} | ${getHours}:${getMinutes}`;
};

export const removeSource = (str) => {
  const strBaru = str.split(' - ');
  return strBaru[0];
};
