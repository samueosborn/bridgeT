    $(document).ready(function(){
         var $input = $('#fo-email-feild');
		     var $button = $('#sbt');

		     setInterval(function(){
		        if($input.val().length > 3){
		          $button.attr('disabled', false);
		        }else{
		          $button.attr('disabled', true);
		        }
		     }, 100);

          	     // if click on submit
          $("#sbt").click(function(e){
            e.preventDefault();  
                      $("#fo-email-feild").hide();
                      $button.attr('disabled', true);
                      $(".fo-text").hide();
                      $("#anim").show();
                      
            		//get the email from email feild
            		
            		 //Ajax post
                let email =  $input.val();
            		$.post('./includes/reset_pass.php', {'email':email}, function(data) {
                    if (data == 1) {
                      $("#anim").hide();
                      $("#profileSetupDone").show();
                      
                    }
                    else if(data == 0){
                      $("#anim").hide();
                      $("profileSetupDoneErr").show();
                      $("#fo-email-feild").show();

                    }

                    
                  });

         	});
                //if click on cancel
          

           
    });
