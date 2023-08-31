export function formatDate(dateString) {
  const date = new Date(dateString); // Replace this with your desired date

  const options = {
    year: "numeric",
    month: "short", // This will display the month in three-letter format
    day: "numeric",
  };

  const formattedDate = new Intl.DateTimeFormat("en-NG", options).format(date);

  return formattedDate;
}

export function getDateTime(dateString) {
  // Array of three-letter month abbreviations
  const monthAbbrev = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = new Date(dateString);

  const abbreviatedMonth = monthAbbrev[date.getMonth()];

  return {
    abbreviatedMonth,
    date: date.getDate(),
  };
}
