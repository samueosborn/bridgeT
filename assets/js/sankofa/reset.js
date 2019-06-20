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
               
                //Ajax post;
                let user_k = $input.data('ke');
                let pass =  $input.val();

              
               $.post('./includes/post_handler.php', {'pass':pass,'ke':user_k,'reset':'Reset' }, function(data) {
               if (data == 1) {
                 $("#profileSetupDone").show();
                 $("#sbtCover").html('<button id="sbtdn" type="submit" class="btn btn-primary u-btn-primary transition-3d-hover">Login Now</button>');
                 
               }
               else if(data == 0){
                 $("profileSetupDoneErr").show();
                 $("#sbtCover").html('<button id="sbtdnr" type="submit" class="btn btn-primary u-btn-primary transition-3d-hover">Resend reset link</button>');
               }

               
             });

        });
           //if click on cancel
     

      
});