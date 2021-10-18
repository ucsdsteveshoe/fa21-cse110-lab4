let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for(const prop in statistics) {

    if (prop.charAt(0) == 'r' || (statistics[prop] % 2 == 1)) {
        // Both conditions specify to print the value of the property,
        // NOT the property itself.
        console.log(statistics[prop])
    }
}