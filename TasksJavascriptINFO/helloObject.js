let user = {
    name : "John",
    surname : "Smith",
};

user.name = "Pete";
delete user.name
console.log(user.name)


let schedule = {};
schedule["8:30"] = "get up";
console.log( isEmpty(schedule) );

function isEmpty(obj) {
    for (let key in obj) {
        // if the loop has started, there is a property
        return false;
    }
    return true;
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function sum(salaries) {
    let result = 0;
    for (let key in salaries) {
        result += salaries[key]
    }
    return result;
}
console.log(sum(salaries))

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number' ) {
            obj[key] *= 2;
        }
    }
}
multiplyNumeric(menu)
console.log(menu)