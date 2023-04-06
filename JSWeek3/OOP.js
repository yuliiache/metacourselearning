// class Bird {
//     useWings() {
//         console.log("Flying!")
//     }
//     type = "bird"
//     getType() {
//         console.log(this.type)
//     }
// }
// class Eagle extends Bird {
//     useWings() {
//         super.useWings()
//         console.log("Barely flapping!")
//     }
//     type = "eagle"
//     getType() {
//         super.getType()
//         console.log(this.type)
//     }
// }
// class Whitehead extends Eagle {
//
// }
// class Penguin extends Bird {
//     useWings() {
//         console.log("Diving!")
//     }
// }
// var baldEagle = new Eagle();
// var kingPenguin = new Penguin();
// var whiteHeadEagle = new Whitehead();
// baldEagle.useWings(); // "Flying! Barely flapping!"
// kingPenguin.useWings(); // "Diving!"
// whiteHeadEagle.useWings();
// baldEagle.getType();
//
// function Icecream(flavor) {
//     this.flavor = flavor;
//     this.meltIt = function() {
//         console.log(`The ${this.flavor} icecream has melted`);
//     }
// }
//
// let kiwiIcecream = new Icecream("kiwi");
// let appleIcecream = new Icecream("apple");
// kiwiIcecream.meltIt() // --> Icecream {flavor: 'kiwi', meltIt: ƒ}
// appleIcecream;
//
//
// class Train {
//     constructor(color, lightsOn) {
//         this.color = color;
//         this.lightsOn = lightsOn;
//     }
//     toggleLights() {
//         this.lightsOn = !this.lightsOn;
//     }
//     lightsStatus() {
//         console.log('Lights on?', this.lightsOn);
//     }
//     getSelf() {
//         console.log(this);
//     }
//     getPrototype() {
//         var proto = Object.getPrototypeOf(this);
//         console.log(proto);
//     }
// }
//
// class HighSpeedTrain extends Train {
//     constructor(passengers, highSpeedOn, color, lightsOn) {
//         super(color, lightsOn);
//         this.passengers = passengers;
//         this.highSpeedOn = highSpeedOn;
//     }
//     toggleHighSpeed() {
//         this.highSpeedOn = !this.highSpeedOn;
//         console.log('High speed status:', this.highSpeedOn);
//     }
//     toggleLights() {
//         super.toggleLights();
//         super.lightsStatus();
//         console.log('Lights are 100% operational.');
//     }
// }
//
// var myFirstTrain = new Train('red', false);
// console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}
// var mySecondTrain = new Train('blue', false);
// var myThirdTrain = new Train('blue', false);
//
// var train4 = new Train('red', false);
// train4.toggleLights(); // undefined
// train4.lightsStatus(); // Lights on? true
// train4.getSelf(); // Train {color: 'red', lightsOn: true}
// train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}
//
// var train5 = new Train('blue', false);
// var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);
//
// train5.toggleLights(); // undefined
// train5.lightsStatus(); // Lights on? true
// highSpeed1.toggleLights(); // Lights on? true, Lights are 100% operational.
//
//
// class StationaryBike {
//     constructor(position, gears) {
//         this.position = position
//         this.gears = gears
//     }
// }
//
// class Treadmill {
//     constructor(position, modes) {
//         this.position = position
//         this.modes = modes
//     }
// }
//
// class Gym {
//     constructor(openHrs, stationaryBikePos, treadmillPos) {
//         this.openHrs = openHrs
//         this.stationaryBike = new StationaryBike(stationaryBikePos, 8)
//         this.treadmill = new Treadmill(treadmillPos, 5)
//     }
// }
//
// var boxingGym = new Gym("7-22", "right corner", "left corner")
//
// console.log(boxingGym.openHrs) //
// console.log(boxingGym.stationaryBike) //
// console.log(boxingGym.treadmill) //
//
// class WithDefaultParams {
//  // Default parameters set up //
//     constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result:", bool1 = true) {
//         this.num1 = num1;
//         this.num2 = num2;
//         this.num3 = num3;
//         this.string1 = string1;
//         this.bool1 = bool1;
//     }
//     calculate() {
//         if(this.bool1) {
//             console.log(this.string1, this.num1 + this.num2 + this.num3);
//             return;
//         }
//         return "The value of bool1 is incorrect"
//     }
// }
// var better = new WithDefaultParams(3, 4, 6, "Result:", true);
// better.calculate()
//
//
// class Animal {
//     constructor(color = 'yellow', energy = 100) {
//         this.color = color;
//         this.energy = energy;
//     }
//     isActive() {
//         if(this.energy > 0) {
//             this.energy -= 20;
//             console.log('Energy is decreasing, currently at:', this.energy)
//         } else if(this.energy == 0){
//             this.sleep();
//         }
//     }
//     sleep() {
//         this.energy += 20;
//         console.log('Energy is increasing, currently at:', this.energy)
//     }
//     getColor() {
//         console.log(this.color)
//     }
// }
//
// class Cat extends Animal {
//     constructor(sound = 'purr', canJumpHigh = true, canClimbTrees = true, color, energy) {
//         super(color, energy);
//         this.sound = sound;
//         this.canClimbTrees = canClimbTrees;
//         this.canJumpHigh = canJumpHigh;
//     }
//     makeSound() {
//         console.log(this.sound);
//     }
// }
//
// class Bird extends Animal {
//     constructor(sound = 'chirp', canFly = true, color, energy) {
//         super(color, energy);
//         this.sound = sound;
//         this.canFly = canFly;
//     }
//     makeSound() {
//         console.log(this.sound);
//     }
// }
//
// class HouseCat extends Cat {
//     constructor(houseCatSound = "meow", sound,canJumpHigh,canClimbTrees, color,energy) {
//         super(sound,canJumpHigh,canClimbTrees, color,energy);
//         this.houseCatSound = houseCatSound;
//     }
//     makeSound(option) {
//         if (option) {
//             super.makeSound();
//         }
//         console.log(this.houseCatSound);
//     }
// }
//
// class Tiger extends Cat {
//     constructor(tigerSound = "Roar!", sound,canJumpHigh,canClimbTrees, color,energy) {
//         super(sound,canJumpHigh,canClimbTrees, color,energy);
//         this.tigerSound = tigerSound;
//     }
//     makeSound(option) {
//         if (option) {
//             super.makeSound();
//         }
//         console.log(this.tigerSound);
//     }
// }
//
// class Parrot extends Bird {
//     constructor(canTalk = false, sound,canFly, color,energy) {
//         super(sound,canFly, color,energy);
//         this.canTalk = canTalk;
//     }
//     makeSound(option) {
//         if (option) {
//             super.makeSound();
//         }
//         if (this.canTalk) {
//             console.log("I'm a talking parrot!");
//         }
//     }
// }
//
// var fiji = new Parrot(false); // we're passing `false` to the constructor so that fiji can't talk
// var polly = new Parrot(true); // we're passing `true` to the constructor so that polly can talk
//
// fiji.makeSound(); // undefined
// fiji.makeSound(true); // chirp
//
// polly.makeSound(); // I'm a talking parrot!
// polly.makeSound(true); // chirp, I'm a talking parrot!
//
// polly.color; // yellow
// polly.energy; // 100
//
// polly.isActive(); // Energy is decreasing, currently at: 80
//
// var penguin = new Bird("shriek", false, "black and white", 200); // setting all the custom properties
// penguin; // Bird {color: 'black and white', energy: 200, sound: 'shriek', canFly: false }
//
// penguin.sound; // 'shriek'
// penguin.canFly; // false
// penguin.color; // 'black and white'
// penguin.energy; // 200
// penguin.isActive(); // Energy is decreasing, currently at: 180
//
// var leo = new HouseCat();
//
// // leo, no purring please:
// leo.makeSound(false); // meow
// // leo, both purr and meow now:
// leo.makeSound(true); // purr, meow
//
// var cuddles = new Tiger();
// cuddles.makeSound(false); // Roar!
// cuddles.makeSound(true); // purr, Roar!



class Cake {
    constructor(lyr) {
        this.layers = lyr;
    }

    getLayers() {
        return this.layers;
    }
}

class WeddingCake extends Cake {
    constructor() {
        super(2);
    }

    getLayers() {
        return super.getLayers() * 5;
    }
}

var result = new WeddingCake();
console.log(result.getLayers());