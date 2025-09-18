import React from "react";
import "./App.css";

// Base Person class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getInfo() {
    return `${this.name} is ${this.age} years old.`;
  }
}

// Student subclass
class Student extends Person {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }

  getInfo() {
    return `${this.name} is ${this.age} years old and studies ${this.course}.`;
  }
}

// Teacher subclass
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  getInfo() {
    return `${this.name} is ${this.age} years old and teaches ${this.subject}.`;
  }
}

function App() {
  const student = new Student("Alice", 20, "Computer Science");
  const teacher = new Teacher("Mr. Smith", 40, "Mathematics");

  return (
    <div>
      <h1>Person Class Hierarchy</h1>

      <div className="card">
        <h2>Student</h2>
        <p>{student.getInfo()}</p>
      </div>

      <div className="card">
        <h2>Teacher</h2>
        <p>{teacher.getInfo()}</p>
      </div>
    </div>
  );
}

export default App;
