// Switches

// In class exercise 1
// What's the output?

// for (var i = 0; i < 12; i++){
//    if(i === 6){ break; }
//    var text += 'Output is' + i;
//    return text;
//}

//returns errors.
    
for (var i = 0; i < 12; i++){
    if(i === 6){ break; }
    var text = 'Output is ' + i;
    console.log(text);
}

// In Class Exercise 2

var num = 1
switch(num) {
    case 1:
        output = "ONE";
        break;
    case 2:
        output = "TWO";
        break;
    case 3:
        output = "THREE";
        break;
    case 4:
        output = "FOUR";
        break;
    case 5:
        output = "FIVE";
        break;
    case 6:
        output = "SIX";
        break;
    case 7:
        output = "SEVEN";
        break;
    case 8:
        output = "EIGHT";
        break;
    case 9:
        output = "NINE";
        break;
    default:
        output = "Please try again";
}
console.log(output);

// In Class Exercise 3 

/*
switch(timeOfDay){
    case '1pm':
        alert('Good Afternoon');
        break;
    case '6pm':
        alert('Good Evening');
        break;
}
*/

// In Class Exercise 4

// RE-WRITE CODE BELOW USING SWITCH

/*
let myReply = window.prompt('Type YES, NO, or MAYBE. Then click OK.');

if (myReply === 'YES') {
console.log('You said Yes');
} else if (myReply === 'NO') {
console.log('You said No');
} else if (myReply === 'MAYBE') {
   console.log('You said MAYBE');
} else {
  console.log('You typed: '+ myReply);
}
*/

let myReply = window.prompt('Type YES, NO, or MAYBE. Then click OK.');

switch(myReply) {
    case 'YES':
        console.log("You said Yes");
        break;
    case 'NO':
        console.log("You said No");
        break;
    case 'MAYBE':
        console.log("You said Maybe");
        break;
    default:
        console.log("You typed: " + myReply);
}

