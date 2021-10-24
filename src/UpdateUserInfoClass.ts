import { CreateAccount, rl } from "./CreateAccountClass";
import IUpdateUserInfo from "./IUpdateUserInfo";
import IUsersRegistration from "./IUsersRegistration";

// let readline = require("readline");
// let rl = readline.createInterface(process.stdin, process.stdout);

type IProfileDetails = IUsersRegistration & IUpdateUserInfo;

class UpdateUserInfo extends CreateAccount implements IProfileDetails {
  firstName: string;
  lastName: string;
  age: number | string;
  email: string;
  profession: string;
  bio: string;
  hobby: string;
  skill: string;

  readInput = new CreateAccount();

  // fs = require("fs");

  format: string = "______";
  formatLong: string = "____________________________________________________";

  constructor(
    firstName: string,
    lastName: string,
    age: string | number,
    email: string
  ) {
    super();
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
  }

  updateUserInfo(): void {
    rl.question(
      `Welcome to Oluwafemi facebook app

      Please enter your first name\n ${this.format}`,
      (fName: string) => {
        this.firstName = fName;
        rl.question(
          `
          Please enter your last name\n ${this.format}`,
          (lName: string) => {
            this.lastName = lName;
            rl.question(
              `
              Please enter your age\n ${this.format}`,
              (age: number) => {
                this.age = age;
                rl.question(
                  `
                  Please enter your email address\n ${this.format}`,
                  (email: string) => {
                    this.email = email;
                    console.log(
                        `
                        ${this.formatLong}
                        Account created successfully, Here are your details
                        Full name: ${this.firstName} ${this.lastName}
                        Age: ${this.age}
                        Email address: ${this.email}
                        ${this.formatLong}
                        `
                    )
                    console.log(
                      `
                      
                      You will need to update your profile`
                    );
                    this.readInput.createAccount();


                    // })
                  }
                );
              }
            );
          }
        );
      }
    );
  }
}

export default UpdateUserInfo;
