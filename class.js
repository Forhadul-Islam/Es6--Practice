class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.university = "university of Chittagong";
        
    } 
}
const student1 = new Student(11, "onamika");
const student2 = new Student(12, "tomalika");
const student3 = new Student(45, "jomila");
const student4 = new Student(50, "shuborna");
console.log(student1, student2);

console.log(student3.id); 