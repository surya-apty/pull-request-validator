import inquirer from "inquirer";

inquirer
    .prompt([
      'Do you want to create pull request?',
      'Not Sure?'
    ])
    .then((answers) => {
      // Use user feedback for... whatever!!
      console.log(answers);
      
    })
    .catch((error: { isTtyError: any; }) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });