$(document).on('click', '#sign-in-button', function(e){

    //get the email and password value
    var email = $("#email").val();
    var password = $("#password").val();
    
   if(email === "demo@demo.com" && password == "12345678"){
       //redirect to dashboard. 
       window.location = "./dashboard.html";
       return false;
   }
    else{
        //display some failure message. 
        window.location = "./signin_error.html";
       return false;
    }

})


$(document).on('click', '#sign-out-button', function(e){
    
    window.location = "./index.html";
    return false;
})