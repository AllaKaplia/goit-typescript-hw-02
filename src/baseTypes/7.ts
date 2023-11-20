/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

function isWeekend(day: string): boolean {
  if(day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday"){
    return false;
  } else if(day === "Sunday" || day === "Saturday"){
    return true;
  }
  return false;
};