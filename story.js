

 function show() 
 {

            let animalsone = document.getElementById("animals");
            let animalsanother = document.getElementById("anotheranimals");
            let animalsmore = document.getElementById("moreanimals");
            let adjective = document.getElementById("adjective");
            let verb = document.getElementById("verb");
            let number = document.getElementById("number")
            let speed = document.getElementById("speed");
            let quote = document.getElementById("quote");
            let message = document.getElementById("message");

            localStorage.setItem("animal1", animalsone.value);
            localStorage.setItem("animal2", animalsanother.value);
            localStorage.setItem("animal3", animalsmore.value);
            localStorage.setItem("adjective", adjective.value);
            localStorage.setItem("verb", verb.value);
            localStorage.setItem("number", number.value);
          
            localStorage.setItem("speed", speed.value);
            localStorage.setItem("quote", quote.value);
            localStorage.setItem("message", message.value);



        }


	 