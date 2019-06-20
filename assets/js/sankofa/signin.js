(function($){
    $.fn.shake = function(settings) {
        if(typeof settings.interval == 'undefined'){
            settings.interval = 100;
        }

        if(typeof settings.distance == 'undefined'){
            settings.distance = 10;
        }

        if(typeof settings.times == 'undefined'){
            settings.times = 4;
        }

        if(typeof settings.complete == 'undefined'){
            settings.complete = function(){};
        }

        $(this).css('position','relative');

        for(var iter=0; iter<(settings.times+1); iter++){
            $(this).animate({ left:((iter%2 == 0 ? settings.distance : settings.distance * -1)) }, settings.interval);
        }

        $(this).animate({ left: 0}, settings.interval, settings.complete);  
    }; 
    $.fn.bounce = function(settings) {
        if(typeof settings.interval == 'undefined'){
            settings.interval = 100;
        }

        if(typeof settings.distance == 'undefined'){
            settings.distance = 10;
        }

        if(typeof settings.times == 'undefined'){
            settings.times = 4;
        }

        if(typeof settings.complete == 'undefined'){
            settings.complete = function(){};
        }

        $(this).css('position','relative');

        for(var iter=0; iter<(settings.times+1); iter++){
            $(this).animate({ top:((iter%2 == 0 ? settings.distance : settings.distance * -1)) }, settings.interval);
        }

        $(this).animate({ top: 0}, settings.interval, settings.complete);  
    };
})(jQuery);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                ///login using ajax//////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(".Auth-in-class").on('submit', function(e){
    e.preventDefault();
    let username = $('input#username').val();
    let password = $('input#password').val();
    
    if(username == ""){
      $('#email_box').shake({
                      interval: 100,
                      distance: 20,
                      times: 5
                  });
      $('#username').focus();
      return false;
    }
    
    if(password == ""){
      $('#password_box').shake({
                      interval: 100,
                      distance: 20,
                      times: 5
                  });
      $('#password').focus();
      return false;
    }

    
    if(username != '' && password != '') {
      $.ajax({
            url: "./includes/post_handler.php", // Url to which the request is send
            type: "POST",             // Type of request to be send, called as method
            data:new FormData(this),// Data sent to server, a set of key/value pairs (i.e. form fields and values)
            contentType: false,       // The content type used when sending data to the server.
            cache: false,             // To unable request pages to be cached
            processData:false,       // To send DOMDocument or non processed data file it is set to false
            beforeSend: function(){
    
            },
            success: function(data)   // A function to be called if request succeeds
            {   
                let result = $.trim(data);
                if (result === 'success') {
                    setTimeout(function(){
                      window.location.reload();
                    },2000);
                    
                }else{
                  $('.login_error_alert-text').html('<strong>' + data + '</strong>');
                  $(".Auth-in-class").shake({
                      interval: 100,
                      distance: 20,
                      times: 5
                  });
                 
                }
            }
      });
   }
});