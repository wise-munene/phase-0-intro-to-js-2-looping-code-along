// Code your solutions in the field below//
function writeCards(names, event){
    let messages=[]; // array going to contain the messages

    for (let i=0; i< names.length; i++){
        let message = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
        messages.push(message); // adds the messages to the array

    }
    return messages;  // all the messages are returned
    }
    let cards= writeCards(["Guadalupe", "Ollie", "Aki"], "birthday");  // function call
    
    console.log(cards); // showws the result

    //while loop
    function countDown(number){
        while(number>=0){
            console.log(number);
            number --;
        }
    }