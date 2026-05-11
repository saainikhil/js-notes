class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get personInfo() {
        console.log("name: " + this.name + ", age: " + this.age);
    }
    salary(){
        console.log(`${this.name} got his salary`);
    }
}


class employee extends person {
    constructor(name, age, salary, company) {
       super(name, age);
       this.salary = salary;
       this.company = company;
    }
        get personInfo() {
        console.log("name: " + this.name + ", age: " + this.age + ", salary: " + this.salary + ", company: " + this.company);
        }
}
p1 = new person("John", 30); 
e1 = new employee("NikhiL",25, 25000, "xyz");
p1.personInfo; 
p1.salary(); 
e1.personInfo;  