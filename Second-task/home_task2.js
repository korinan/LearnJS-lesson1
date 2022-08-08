//Home task1

const num = prompt('Введіть номер квитка');

    if ((+num[0]+ +num[1] + +num[2]) == (+num[3]+ +num[4] + +num[5])) {
    alert('Цей квиток щасливий!');
}

else if (num.length > 6){
    alert("Квиток має занадто багато цифр!");

   }

else if (num.length < 6){
    alert("Квиток має не достатню кількість цифр!");

   }
   
else { 
    alert('Спробуйте наступного разу');
}

//Home task2


//Home task 3