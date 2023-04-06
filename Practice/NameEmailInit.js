class Employee {
    constructor (firstname, lastname) {
        this.firstname = firstname
        this.lastname = lastname
        this.fullname = `${this.firstname} ${this.lastname}`
        this.email = `${this.firstname}.${this.lastname}@company.com`.toLowerCase()
        // Complete the code!
    }

}
let emp1 = new Employee("John", "Smith");
console.log(emp1.email)
console.log(emp1.fullname)

class Name {
    constructor(fname, lname) {
        this.fname = fname.charAt(0).toUpperCase() + fname.slice(1).toLowerCase()
        this.lname = lname.charAt(0).toUpperCase() + lname.slice(1).toLowerCase()
        this.fullname = `${this.fname} ${this.lname}`
        this.initials = `${this.fname[0]}.${this.lname[0]}`
    }
}
let a1 = new Name ("john", "SMITH")
console.log(a1.initials)
console.log(a1.fullname)