import IUpdateUserInfo from "./IUpdateUserInfo";
import IUsersRegistration from "./IUsersRegistration";
let readline = require("readline");
let rl = readline.createInterface(process.stdin, process.stdout);

type IProfileDetails = IUsersRegistration & IUpdateUserInfo;

class CreateAccount implements IUpdateUserInfo {
  // readline = require("readline");
  // rl = this.readline.createInterface(process.stdin, process.stdout);
  // User registration implementation
  profession: string;
  bio: string;
  hobby: string ;
  skill: string;

  format: string = "______";
  formatLong: string = "___________________________________________________";

  createAccount = (): void => {
    rl.question(
      `Please enter your profession\n${this.format}`,
      (profession: string) => {
        this.profession = profession;
        rl.question(
          `Give us brief bio about you\n${this.format}`,
          (bio: string) => {
            this.bio = bio;
            rl.question(
              `What is your hobby\n${this.format}`,
              (hobby: string) => {
                this.hobby = hobby;
                rl.question(
                  `What are your skill set?\n${this.format}`,
                  (skill: string) => {
                    this.skill = skill;
                    console.log(
                      `
                      ${this.formatLong}
                      Profile updated successfully, Here are your details
                      Profession: ${this.profession}
                      Bio: ${this.bio}
                      Hobby: ${this.hobby}
                      Skills: ${this.skill}
                      ${this.formatLong}
                      `
                  )
                  rl.close();
                  }
                );
              }
            );
          }
        );
      }
    );
  };

  userInfo = (details: IProfileDetails) => {
    //To display the details to the user
    console.log(
      `Here are your details -> 
        ${this.formatLong}
        Your full name: ${details.firstName} ${details.lastName}
        Your age: ${details.age}
        Your email: ${details.email}
        ${this.formatLong}
    `
    );
  };
}

export { CreateAccount, rl };
