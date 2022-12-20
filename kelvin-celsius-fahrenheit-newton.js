/* Constant temperature of 293 degrees in Kelvin. */
const kelvin = 276;

/* Variable celsius equals temperature in Kelvin less 273. */
let celsius = kelvin - 273;


/* Fahrenheit conversion equation from Celsius using .floor method to round down to the nearest whole number. */
let fahrenheit = Math.floor(celsius * (9/5) + 32);

/* Log a string with the temperature interpolated into the string in fahrenheit. */
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

/* Convert celsius to the Newton scale. */

newton = Math.floor(celsius * (33/100));

/* Log a string with the temperature interpolated into the string in newton. */
console.log(`The temperature is ${newton} degrees Newton.`)
