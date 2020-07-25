var box = document.getElementById("box");
    
//heading
    var heading = document.createElement("h1");
    var headText = document.createTextNode("Register With Us"); 
    heading.appendChild(headText);
    box.appendChild(heading);

   
//form filling area starts
    //Username Label
    var label = document.createElement("label");
    var username = document.createTextNode("Username");  
    label.appendChild(username);    
    box.appendChild(label); 

    var breaks = document.createElement("br");
    box.appendChild(breaks);   

    // text Username
    var username = document.createElement("input");
    username.setAttribute("id", "userName");
    username.setAttribute("type", "text");
    username.setAttribute("placeholder", "Enter Username");
    box.appendChild(username);

    var  breaks= document.createElement("br");
    box.appendChild (breaks);

    //error msg    
    var usererror = document.createElement("small");
    usererror.setAttribute("id", "errorUser");
    
    var usererrormsg = document.createTextNode("Username must be at least 3 characters");      
    usererror.appendChild(usererrormsg);
    box.appendChild(usererror);
    var breaks = document.createElement("br");
    box.appendChild( breaks);


    //emial label
    var email = document.createElement("label");
    var lbEmail = document.createTextNode("Email");  
    email.appendChild(lbEmail);
    box.appendChild(email);    

    var breaks = document.createElement("BR");
    box.appendChild(breaks);

    //email textbox
    var emailInput = document.createElement("input");
    emailInput.setAttribute("id", "email");
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("placeholder", "Enter Email");
    box.appendChild(emailInput);
    var breaks = document.createElement("br");
    box.appendChild(breaks);


    //error msg
    var emailerror = document.createElement("small"); 
    emailerror.setAttribute("id", "errorEmail");   
    var txtEmail = document.createTextNode("Email is not valid");  
    emailerror.appendChild(txtEmail);
    box.appendChild(emailerror); 

    var breaks = document.createElement("br");
    box.appendChild(breaks);


    //password label
    var password = document.createElement("label");
    var passwordLabel = document.createTextNode("Password");  
    password.appendChild(passwordLabel);
    box.appendChild(password);    

    var breaks = document.createElement("br");
    box.appendChild(breaks);

    //pw textbox
    var passwordInput = document.createElement("input");
    passwordInput.setAttribute("id", "password");
    passwordInput.setAttribute("type", "password");
    passwordInput.setAttribute("placeholder", "Enter Password");
    box.appendChild(passwordInput);

    var breaks = document.createElement("br");
    box.appendChild(breaks);

    //pw error msg
    var passwordError = document.createElement("small");
    passwordError.setAttribute("id", "errorPass");   
    var passwordMsg = document.createTextNode("Password must be at least 6 characters");  
    passwordError.appendChild(passwordMsg);
    box.appendChild(passwordError); 

    var breaks = document.createElement("br");
    box.appendChild(breaks);
    
    //confirm pw label
    var confmpw = document.createElement("label");
    var confmpwLabel = document.createTextNode("Confirm Password");  
    confmpw.appendChild(confmpwLabel);
    box.appendChild(confmpw);    

    var breaks = document.createElement("br");
    box.appendChild(breaks);

    //confirm pw textbox
    var cnfmpwInput = document.createElement("input");
    cnfmpwInput.setAttribute("id", "cnfmpw");
    cnfmpwInput.setAttribute("type", "password");
    cnfmpwInput.setAttribute("placeholder", "Enter Confirm Password");
    box.appendChild(cnfmpwInput);

    var breaks = document.createElement("br");
    box.appendChild(breaks);

    //confm pw error msg
    var confmpwError = document.createElement("small"); 
    confmpwError.setAttribute("id", "errorConfmpw");     
    var cnfmpwMsg = document.createTextNode("Passwords are not matching");  
    confmpwError.appendChild(cnfmpwMsg);
    box.appendChild(confmpwError); 


    //submit btn
    var submitBtn = document.createElement("input");
    submitBtn.setAttribute("id", "submitBtn");
    submitBtn.setAttribute("type", "submit");    
    box.appendChild(submitBtn);    
