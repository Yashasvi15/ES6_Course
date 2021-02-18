const buyFlightTickets = () =>
{
     return new Promise ((resolve,reject) => {
         setTimeout (() =>
         {
             const error = false;

             if(error)
             {
                reject("Sorry your payment wasn't successful")
             }
             else{
                 resolve("Thank you, your payment was successful");
             }
         },3000)
     })
}

buyFlightTickets()
.then((success) => console.log(success))
.catch ((error) => console.log(error));