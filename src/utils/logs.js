/**
 * Logs a notification on the browser dev tools
 * @param {string} value
 */
export function log (msg, value) {
  console.log(`%c${msg} %c${value}`, "color:blue; font-weight:bold");
};

/**
 * Logs a success notification on the browser dev tools.
 * Success prefix on display
 * @param {string} message
 */
export const success = (msg, value) => {
  console.log(
    `%c------------------------\n%c${msg}%c ${value}\n------------------------`,
    "color:green; font-weight:bold",
    "background-color:green; color: white; font-weight:bold",
    "color:green; font-weight:bold"
  );
};

/**
 * Logs a success notification on the browser dev tools.
 * Success prefix on display
 * @param {string} message
 */
export const info = (msg, value) => {
  console.log(
    `%c------------------------\n%c${msg}%c ${value}\n------------------------`,
    "color:black; font-weight:bold",
    "background-color:black; color: white; font-weight:bold",
    "color:black; font-weight:bold"
  );
};

/**
 * Logs a notification on the browser dev tools
 * Error prefix on display
 * @param {string} reason
 */
export const error = (status, reason) => {
  console.log(
    `%c------------------------\n%cAPI ERROR ${status}%c ${reason}\n------------------------`,
    "color:red; font-weight:bold",
    "background-color:red; color: white; font-weight:bold",
    "color:red; font-weight:bold"
  );
};
