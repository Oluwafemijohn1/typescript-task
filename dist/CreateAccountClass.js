"use strict";
exports.__esModule = true;
exports.rl = exports.CreateAccount = void 0;
var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout);
exports.rl = rl;
var CreateAccount = /** @class */ (function () {
    function CreateAccount() {
        var _this = this;
        this.format = "______";
        this.formatLong = "___________________________________________________";
        this.createAccount = function () {
            rl.question("Please enter your profession\n" + _this.format, function (profession) {
                _this.profession = profession;
                rl.question("Give us brief bio about you\n" + _this.format, function (bio) {
                    _this.bio = bio;
                    rl.question("What is your hobby\n" + _this.format, function (hobby) {
                        _this.hobby = hobby;
                        rl.question("What are your skill set?\n" + _this.format, function (skill) {
                            _this.skill = skill;
                            console.log("\n                      " + _this.formatLong + "\n                      Profile updated successfully, Here are your details\n                      Profession: " + _this.profession + "\n                      Bio: " + _this.bio + "\n                      Hobby: " + _this.hobby + "\n                      Skills: " + _this.skill + "\n                      " + _this.formatLong + "\n                      ");
                            rl.close();
                        });
                    });
                });
            });
        };
        this.userInfo = function (details) {
            //To display the details to the user
            console.log("Here are your details -> \n        " + _this.formatLong + "\n        Your full name: " + details.firstName + " " + details.lastName + "\n        Your age: " + details.age + "\n        Your email: " + details.email + "\n        " + _this.formatLong + "\n    ");
        };
    }
    return CreateAccount;
}());
exports.CreateAccount = CreateAccount;
