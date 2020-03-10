class Parents{
    constructor(){
        this.father = "tomal uddin"
        this.mother = "shujona begum"
    }

    totalAge(){
        return this.father + " " + this.mother; /**NOTE:kaj korche na ei function ta. reason khuja lagbe */
    }
}


class Child extends Parents{
    constructor(name, age){
        super();
        this.name = name;
        this.age = age;
    }
   
    
}
const baby1 = new Child("maliha", 15);
const baby2 = new Child("shuborna", 12);
const baby3 = new Child("chomok", 9);
//console.log(baby1, baby2);

console.log(totalAge());