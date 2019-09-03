function Validation()                                    
{ 
    var name = document.forms["RegForm"]["Name"];               
    var email = document.forms["RegForm"]["EMail"];    
    var title = document.forms["RegForm"]["Title"];  
    var message =  document.forms["RegForm"]["Message"];  
      
    
    if (name.value == "")                                  
    { 
        window.alert("Please enter your name."); 
        name.focus(); 
        return false; 
    } 

    if (name.value.length < 4){
        window.alert("character must be greater than 4")
        return false
    }
       
    if (email.value == "")                                   
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 

    if (title.value == "")                           
    { 
        window.alert("Please enter your title."); 
        title.focus(); 
        return false; 
    } 
   
    if (message.value == "")                        
    { 
        window.alert("Please enter your message"); 
        title.focus(); 
        return false; 
    } 

    if (message.value.length < 20)                        
    { 
        window.alert("Message too small"); 
        title.focus(); 
        return false; 
    } 
   
    
    return true; 
}