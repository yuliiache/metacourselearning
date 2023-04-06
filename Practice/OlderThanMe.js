class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    compareAge(other) {
      let myAge = this.age;
      let otherAge = other.age;
      let otherName = other.name;
      if (otherAge > myAge) {
          return `${otherName} is older than me`
      }
      else if (otherAge < myAge) {
          return `${otherName} is younger than me`
      }
      else if (otherAge == myAge) {
          return `${otherName} is the same age as me`
      }
    }
}
p1 = new Person("Samuel", 24)
p2 = new Person("Joel", 36)
p3 = new Person("Lily", 24)
console.log(p1.compareAge(p2))
console.log(p2.compareAge(p1))
console.log(p1.compareAge(p3))