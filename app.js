
    
      function checkAddress(ggg) {
        var val = document.getElementById(ggg).value;
      
         if (val == "@"&"email") {
         alert("Email address required.");
         }
         else if (val == ""){
            alert("Please fill the Email it is requied")

         }
         }
         
         // function validateform(){  
         // var name=document.myform.name.value;  
        
           
         // if ( name==""){  
         //   alert("Name can't be blank");  
         
         // }
         // }
         function validate(){  
              
            var password=document.f1.password.value;  
            var status=false;  
            if(password.length>8){  
            document.getElementById("passwordloc").innerHTML=  
            " Password must be 8 char ";  
            status=false;  
            }else {  
            document.getElementById("passwordloc").innerHTML="Please fill the Password ";  
            }  
            return status;  
             }  
            
            function mus(){  
               var num=document.f1.num.value;  
               var status=false;  
            if(num.length>11){  
               document.getElementById("sony").innerHTML=  
               "Please enter the 11 digit";  
               status=false;  
               }
               // else if (num.length!=11) {  
               // document.getElementById("sony").innerHTML="Please enter the full number";  
               // }  
               // return status;  
            }
            function muj(){  
              
               var name=document.f1.name.value;  
               var status=false;  
            if(name.length<1){  
               document.getElementById("sy").innerHTML=  
               "Please Again! check the First Name";  
               status=false;  
            }
         }

         function hus(){  
          
            var nameof=document.f1.nameof.value;  
            var status=false;  
         if(nameof.length<1){  
            document.getElementById("skk").innerHTML=  
            "Please Again! check the Second Name";  
            status=false;  
         }
      }

     
            // function validateemail()  
            // {  
            // var x=document.myform.email.value;  
            // var atposition=x.indexOf("@");  
            // var dotposition=x.lastIndexOf(".");  
            // if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
            //   alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
            //   return false;  
            //   }  
            // }  
          
