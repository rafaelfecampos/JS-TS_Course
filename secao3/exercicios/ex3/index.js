const ehDiv5e3 = (num) => {
    if (typeof num == "number") {
        if (num % 3 === 0 && num % 5 === 0)
            return "FizzBuzz";
        else if (num % 3 === 0)
            return "Fizz";
        else if (num % 5 === 0)
            return "Buzz";
        else
            return num;
    }else{
        console.log(typeof num);
        return num
    }
}

for(i = 0; i<=100 ; i++){
    console.log(i, ehDiv5e3(i));
}