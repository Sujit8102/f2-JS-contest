/** @format */

let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];
  
  function PrintStudentswithMap() {
    //Write your code here , just console.log
    let students = [
        { name: 'John', marks: 75 },
       {name:'karen', marks:35},
        { name: 'Jack', marks: 65 },
      ];
      
      let passStudents = students.map(student => {
        if (student.marks > 50) {
          return student.name;
        }
      });
      
      console.log(passStudents);
      
  }
  
  function PrintStudentsbyForEach() {
    //Write your code here , just console.log
    let students = [
        { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
      ];
      
      students.forEach(student => {
        if (student.marks > 50) {
          console.log(student.name);
        }
      });
  }
  
  function addData() {
    //Write your code here, just console.log
    let students = [
        { id: 1, name: "john", age: "18", marks: 80 },
        { id: 2, name: "jack", age: "20", marks: 85 },
        { id: 3, name: "karen", age: "19", marks: 35 },
      ];
      
      let newStudent = { id: 4, name: 'Susan', age: 20, marks: 45 };
      
      students.push(newStudent);
      
      console.log(students);
      
  }
  
  function removeFailedStudent() {
    //Write your code here, just console.log
    let students = [
        { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
      ];
      
      let passedStudents = students.filter(student => {
        return student.marks >= 50;
      });
      
      console.log(passedStudents);
      
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let students = [
        { id: 1, name: "john", age: "18", marks: 80 },
        { id: 2, name: "jack", age: "20", marks: 85 },
        { id: 3, name: "karen", age: "19", marks: 35 },
    ];
      
      let newStudents = [
        { id: 4, name: 'arohi', age: 26, marks: 65 },
        { id: 5, name: 'Jill', age: 21, marks: 85 },
        { id: 6, name: 'Susan', age: 20, marks: 35 }
      ];
      
      let allStudents = students.concat(newStudents);
      
      console.log(allStudents);
      
  }
