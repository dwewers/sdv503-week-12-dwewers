//Example

/*
Format:

class *insert name of class*{
    constructor(*Insert parameters here*){

        this.*paramaterA* = *paramaterA*;
        this.*paramaterB* = *paramaterB*;
        "etc"
    }
}
*first instance* = new *insert name of class*(*assign parameter A* , *assign parameter B*)

*/
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
studentA = new Student("Steve", "Jobs");
console.log(studentA.firstName + " " + studentA.lastName);

//Email and password printer ------------------------------------------------------------------
class Login {
  constructor(myEmail, myPassword) {
    this.myEmail = myEmail;
    this.myPassword = myPassword;
  }
}
loginA = new Login("email123@email.com", "password123");
console.log(loginA.myEmail + " " + loginA.myPassword);

loginB = new Login("myEmailIs@email.com", "myPasswordIs");
console.log(loginB.myEmail + " " + loginB.myPassword);

loginC = new Login("candyfloss@email.com", "0800password");
console.log(loginC.myEmail + " " + loginC.myPassword);

loginD = new Login("legitemail1234@email.com", "greatpassword");
console.log(loginD.myEmail + " " + loginD.myPassword);

//Full name printer ------------------------------------------------------------------
class Studentexample {
  constructor(fName, lName) {
    this.fName = fName;
    this.lName = lName;
  }
  fullName() {
    return `Your full name is ${this.fName}-${this.lName}`;
  }
}
let firstStudent = new Studentexample("Daniel", "Ewers");

console.log(firstStudent.fullName());

//Email printer -------------------------------------------------------------------

class Studentexample2 {
  constructor(fName, lName) {
    this.fName = fName;
    this.lName = lName;
  }
  fullName() {
    return `Your email is ${this.fName}-${this.lName}2@live.nmit.ac.nz`;
  }
}
let email = new Studentexample2("Daniel", "Ewers");

console.log(email.fullName().toLowerCase());
