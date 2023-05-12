class Person {
    constructor(firstName, lastName, age, email, phonenumber) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.email = email;
      this.phonenumber = phonenumber;
    }

    getPerson() {
        return "Name: " + this.firstName + " " + this.lastName + "\n" + "Age: " + this.age + "\n" + "Email-address: " + this.email + "\n" + "Phone Number: " + this.phonenumber;
    }
  }
  const person1 = new Person("Virat", "Kholi", 30, "virat@example.com", "9999999999");
  const person2 = new Person("Virender", "Shewag", 40, "shewag@example.com", "8888888888");
  const person3 = new Person("MS", "Dhoni", 35, "MSD@example.com", "7777777777");
  const person4 = new Person("Yuvraj", "Singh", 34, "YS@example.com", "9999787878");

  console.log(person1.getPerson());
  console.log(person2.getPerson());
  console.log(person3.getPerson());
  console.log(person4.getPerson());