import readline from "node:readline";
import { stdin, stdout } from "node:process";

/**
 * Main function
 */
async function run() {
  try {
    const userInput = await getUserInput();

    console.log("Output:\n\n");

    for (let i = 1; i <= userInput; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("ByteRush");

        continue;
      }

      if (i % 5 === 0) {
        console.log("Rush");

        continue;
      }

      if (i % 3 === 0) {
        console.log("Byte");

        continue;
      }

      console.log(i);
    }

    process.exit(0);
  } catch (error) {
    console.error("Caught error while running script: ", error);

    process.exit(1);
  }
}

/**
 * Read user input from keyboard, validate it and return as a number
 * @returns {Promise<number>}
 */
function getUserInput() {
  const rl = readline.createInterface({ input: stdin, output: stdout });

  return new Promise((resolve, reject) => {
    rl.question("Input number between 1 and 30: ", (answer) => {
      const isValid = validateUserInput(answer);

      if (isValid) {
        return resolve(parseInt(answer));
      }

      return reject("Invalid input data");
    });
  });
}

/**
 * Validates input string.
 * @param {string} input Raw input string.
 * @returns {boolean} `true` if validation passed, `false` if it did not.
 */
function validateUserInput(input) {
  if (isNaN(parseInt(input))) {
    return false;
  }

  if (input < 1 || input > 30) {
    return false;
  }

  return true;
}

run();
