  // <!--------------Login Form js validation---------------->
  $(document).ready(function(){
   // alert(hii);
        $('form[id="userlogin"]').validate({

            rules: {
                email:{
                    required:true,
                },
                password:{
                    required:true,
                    minlength: 5,
                }
            },
            messages:{
                email:{
                    required: "Please enter your email",
                },
                password:{
                    required: "Please provide a password",
                    minlength: "your password must be at least 5 characters",
                }
            },
            submitHandler: function(form) {
            form.submit();
            }
        });
    });


   // <!----------------- Register Form js validation------------>
 $().ready(function(){
        $('form[id="userReg"]').validate({
            rules: {
                fname:{
                    required:true,
                },
                lname:{
                    required:true,
                },
                email:{
                    required:true,
                },
                mobile:{
                    required:true,
                },
                password:{
                    required:true,
                    minlength: 8,
                }
            },
            messages:{
                fname:{
                    required: "Please, Enter your firstname",
                },
                lname:{
                    required: "Please, Enter your lastname",
                },
                mobile:{
                    required: "Please, Enter your mobile No",
                },
                email:{
                    required: "Please, Enter your email",
                },
                password:{
                    required: "Please provide a password",
                    minlength: "your password must be at least 5 characters",
                }
            },
            submitHandler: function(form) {
            form.submit();
            }
        });
    });