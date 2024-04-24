function validator(numberOne,numberTwo)
{
     if((numberOne + numberOne) % 5 == 0) {
     return true
     }
     return false
}

console.log(validator(3,10))