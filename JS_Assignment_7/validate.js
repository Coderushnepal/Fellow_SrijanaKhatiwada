var btnSubmit = document.getElementById("submitBtn");
var username = document.getElementById("userName");
var email = document.getElementById("email");
var password = document.getElementById("password");
var confmpw = document.getElementById("cnfmpw");

var errorUsername = document.getElementById("errorUser");
var errorEmail = document.getElementById("errorEmail");
var errorPass = document.getElementById("errorPass");
var errorConfmpw = document.getElementById("errorConfmpw");

btnSubmit.addEventListener('click', function(a) {	
	
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const confmpwValue = confmpw.value.trim();

    
		if(usernameValue === '' || usernameValue.length < 3) 
		{
			username.style.border = "1px solid red";				  
			errorUsername.style.visibility = "visible";	
			errorUsername.style.color = "red";				
		} 
		else 
		{
			username.style.border = "1px solid green";							
			errorUsername.style.visibility = "hidden";	
			errorUsername.style.color = "green";			
		}


		if(emailValue === '') 
		{
			email.style.border = "1px solid red";				  
			errorEmail.style.visibility = "visible";	
			errorEmail.style.color = "red";	
		} 
		else if(!isEmail(emailValue)) {
			email.style.border = "1px solid red";				  
			errorEmail.style.visibility = "visible";	
			errorEmail.style.color = "red";	
		}
		else 
		{
			email.style.border = "1px solid green";							
			errorEmail.style.visibility = "hidden";	
			errorEmail.style.color = "green";	
		}

		function isEmail(email) 
		{
			return /^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email);
		}



		if(passwordValue === '' || passwordValue.length < 6) 
		{
			password.style.border = "1px solid red";				  
			errorPass.style.visibility = "visible";	
			errorPass.style.color = "red";	
		} 
		else 
		{
			password.style.border = "1px solid green";				  
			errorPass.style.visibility = "hidden";	
			errorPass.style.color = "green";	
		}
			
		if( confmpwValue === '' ||  confmpwValue.length < 6) 
		{
			confmpw.style.border = "1px solid red";				  
			confmpw.style.visibility = "visible";	
			confmpw.style.color = "red";
		} 
		else if(passwordValue !== confmpwValue) 
		{
			confmpw.style.border = "1px solid red";				  
			errorConfmpw.style.visibility = "visible";	
			errorConfmpw.style.color = "red";
		} 
		else {
			confmpw.style.border = "1px solid green";				  
			errorConfmpw.style.visibility = "hidden";	
			errorConfmpw.style.color = "green";
		}
			
	
});