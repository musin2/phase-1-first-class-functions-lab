const returnFirstTwoDrivers = function (p) {
    return p.slice(0,2);            //return array with first 2 elements of argument array
} 
returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']);

const returnLastTwoDrivers = function (l){
    return l.slice(-2);
}
console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));
console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));

let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(multiplier){      //return function according to argument provided
    
    if(multiplier == 5){
        return (fare) => fare *  5
    } else if(multiplier == 4){
        return (fare) => fare *  4
    } else if(multiplier == 3){
        return (fare) => fare * 3
    }else if(multiplier == 2){
        return (fare) => fare * 2
    }
}
const fareQuad = createFareMultiplier(4);
const fareTripler = createFareMultiplier(3);
const fareDoubler = createFareMultiplier(2);

console.log(fareTripler(20));

let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
function selectDifferentDrivers(driversArray, Fselector){
    return Fselector(driversArray);
}
console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'],returnFirstTwoDrivers));