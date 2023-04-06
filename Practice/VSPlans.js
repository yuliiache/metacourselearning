class BasicPlan {
    static canStream = true;
    static canDownload = true;
    static numOfDevices = 1;
    static hasSD = true;
    static hasHD = false;
    static hasUHD = false;
    static price = '$8.99';
}
class StandardPlan extends BasicPlan {
    static hasHD = true;
    static numOfDevices = 2;
    static price = '$12.99';
    PrintPrice () {
       return StandardPlan.price
    }
}
class PremiumPlan extends BasicPlan {
    static hasUHD = true
    static numOfDevices = 4;
    static price = '$15.99';
}

console.log(BasicPlan.canStream)
console.log(StandardPlan.hasHD)
let standard = new StandardPlan();
console.log(standard.PrintPrice())
console.log((PremiumPlan.canStream, true, 'Remember to add the PremiumPlan class!'))