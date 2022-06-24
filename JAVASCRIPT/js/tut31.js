console.log("classes in javascript");
/*
classes are the blueprint for creating thr objects

*/

class employee {
    constructor(givenname, givenexperience, givendivision) {
        this.name = givenname;
        this.experience = givenexperience;
        this.division = givendivision;
    }
    slogan() {
        return `I am ${this.name} and this company is the best`;
    }
    joiningyear() {
        return 2022 - this.experience;
    }

    //static method ko bina class ka object bnaye use kr skte hai

    static add(a, b) {
        return a + b;
    }
}

//inheritence
class programmer extends employee {
    constructor(givenname, givenexperience, givendivision, language, github) {
        //super will call the parent class construnctor
        super(givenname, givenexperience, givendivision);
        this.language = language;
        this.github = github;
    }
     faviouritrlang() {
        if (this.language == 'python') {
            return 'pythin';

        }
        else {
            return 'javascript';
        }
    }
    static multiply(a,b){
        return a*b;
    }
}
harry = new employee("harry", 34, "devision");
console.log(harry);
console.log(employee.add(3, 4));

rohan=new programmer("Rohan",2,"devison","ruby","rohan420");
console.log(rohan);
console.log(rohan.faviouritrlang());
console.log(programmer.multiply(3,4));