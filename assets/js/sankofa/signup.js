// ////////////////////////////////////////////////////////////////
///check if email exits
//////////////////////////////////////////////////////////////////
var email_status;
var x_timer;

$("#email").keyup(function (e){ //key press

clearTimeout(x_timer); //clear any previously set timer

var email = $(this).val();
let instance = $("#new-user-email");


//each keypress will set this timer to execute code after 1 second
//but will be canceled by clearTimeout() as soon as user starts typing
//so the point is, this timer will only succeed if user stops typing.
x_timer = setTimeout(function(){
    check_username_ajax(email);
}, 1000);
});

function check_username_ajax(username){
$.post('./includes/check.php', {'email':username}, function(data) {
if (data == 0) {
  email_status = "available";
}
else if(data == 1){
  email_status = "not";
}

});
};


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                ///sign-up using ajax//////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(".Auth-class").on('submit', function(e){
              e.preventDefault();
              if($('#termsCheckbox').is(':checked') == false){
                event.preventDefault();
                return false;
             }
             if($('#email').val() != $('#confirmE').val()){
                event.preventDefault();
                return false;
             }
             if( email_status == "not"){
              event.preventDefault();
              alert("Email is already a user!");
              return false;   
           }

              $.ajax({
                    url: "./includes/post_handler.php", // Url to which the request is send
                    type: "POST",             // Type of request to be send, called as method
                    data:new FormData(this),// Data sent to server, a set of key/value pairs (i.e. form fields and values)
                    contentType: false,       // The content type used when sending data to the server.
                    cache: false,             // To unable request pages to be cached
                    processData:false,       // To send DOMDocument or non processed data file it is set to false
                     beforeSend: function(){
                      $("#submitFormBtn").attr("disabled", true);
                      $("#submitFormBtn").html('Submitting....');
                    },
                    success: function(data)   // A function to be called if request succeeds
                    {   
                        let result = $.trim(data);
                        if (result == 1) {
                          if (  $('#regRes').hasClass( "alert-danger" ) ){
                             $('#regRes').toggleClass( "alert-danger alert-success " );
                          }
                          $("#submitFormBtn").html('Great! Let\'s Continue');
                            setTimeout(function(){
                              window.location.replace("registration");
                            },2000);
                             
                        }else{
                          $('#regRes').html('<strong>' + data + '</strong>');
                          if (  $('#regRes').hasClass( "alert-success" ) ){
                             $('#regRes').toggleClass( "alert-success alert-danger " );
                          }
                          $('.login_error_alert').toggle(1000);
                          $('.login_error_alert').delay(5000).toggle(1000);
                        }
                    }
              });
          });
