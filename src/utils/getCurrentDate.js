export function getCurrentDate() {
  // Create a new Date object
  const currentDate = new Date();

  // Get the day, month, and year
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayOfWeek = days[currentDate.getDay()];
  const dayOfMonth = currentDate.getDate();
  const month = months[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  // Construct the date string
  const dateString = `${dayOfWeek}, ${dayOfMonth} ${month} ${year}`;

  // Return the date string
  return dateString;
}
