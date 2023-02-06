function findingBadData(array) {
    //error validation
    if (!Array.isArray(array)) {
        console.log("Please provide an array as input.");
        return;
    }

    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            count++;
        }
    }
    return count;
}
let array = [10, -5, 8, -10, 60, -9, 55, -7, -87, 100];
const isdataIs = findingBadData(array);
console.log(isdataIs);