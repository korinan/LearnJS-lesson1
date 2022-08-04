//Home task 1

    let Radius = prompt("Введіть радіус кола."," ");
    let circleArea = Math.pow(Radius,2)*Math.PI ;

    alert(`Площa кола = ${circleArea}`);


//Home task 2

    const fixAge = 65;
    let actualAge = prompt("Cкільки вам років?"," ");
    
if (actualAge >= 65) {
     alert("Ви вже заслуговуєте бути на пенсії");
    
    }

    let retirementStart = fixAge - actualAge;
     alert(`Вам залишилось до пенсії ${retirementStart} років`);


//Home task 3

    const yourNumber = prompt("Вaше трицифрове число");
    let numberString = yourNumber + "";
    let numberRevers = yourNumber.split("").reverse().join("");

if (numberRevers.length < 4) {
    alert(`Число задом на перед: ${numberRevers}`);

};

// End
