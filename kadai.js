for (num = 1; num < 100; num++) {
    if (num % 15 == 0) {
        console.log("FizzBuzz " + num);
    } else if(num % 3 == 0){
        console.log("Fizz " + num);
    } else if(num % 5 == 0){
        console.log("Buzz " + num);
    };
}