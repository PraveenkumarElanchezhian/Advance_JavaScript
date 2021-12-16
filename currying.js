
// multi - problem

function volume(length) {
    return function(width) {
       return function(height) {
          return height * width * length;
       }
    }
 }
 console.log(volume(1)(2)(3))


 // empDetails - problem

 function employeeDetails(name){
    return function(age){
       return function(email){
          return function(contact){
             return function(address){
                console.log (name + " "+ age + " "+ email + " " + contact + " " + address)
             }
          }
       }
    }
 }

 console.log(employeeDetails("Praveen")(24)("abc@gmail.com")(987543210)("c-14,AnnaNagar"))
 console.log(employeeDetails("Kumar")(27)("XYZ@gmail.com")(987783210)("R17,T-Nagar"))

