setInterval(function(){
    check_new_likes(email);
    }, 5000);


    function check_new_likes(username){
        $.post('./includes/check.php', {'email':username}, function(data) {
            if (data == 0) {
            email_status = "available";
            }
            else if(data == 1){
            email_status = "not";
            }
        });
    }