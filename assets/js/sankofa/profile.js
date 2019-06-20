function go_back(){
    parent.history.back();
    return false;
};
    
    //send like request
       function get_current_card_id(){
        let ser = $('#ser');
        let yes = ser.data("ke");

        let usea =  $('#content');
		let user_main = usea.data("ke");

      
              if(yes == "" && user_main == ""){
                  
                              return false;
                          }
                          
                                  $.ajax({
                                                  type: "POST",
                                                      url: 'includes/like.php',
                                                      data: {
                                                                      "matched_partner"         : yes,
                                                                      "user"                    : user_main,
                                                                      "like"                    : "like"
                                                                  },
                                                      success: function(data){
                                                        if (data == 1) {
                                                            $('#likeMessHol').html('<a class="btn btn-block btn-sm btn-soft-danger transition-3d-hover" href="#0" onclick="confirmRequest()"> <span class="fas fa-hand-holding-heart mr-2"></span>Request sent</a>')
                                                        }else{

                                                        }
                                                       
                                                      }
                                              });
  }



  //send like request
  function confirmRequest(){

    let ser = $('#ser');
    let yes = ser.data("ke");

    let usea =  $('#content');
	let user_main = usea.data("ke");
  
          if(yes == "" && user_main == ""){
                          return false;
                      }
                      
                              $.ajax({
                                              type: "POST",
                                                  url: 'includes/likeResponse.php',
                                                  data: {
                                                                  "matched_partner"         : yes,
                                                                  "user"                    : user_main,
                                                                  "like"                    : "like"
                                                              },
                                                  success: function(data){
                                                    if (data == 1) {
      
                                                        $('#likeMessHol').html('<button  class="btn btn-block btn-sm btn-danger"> <span class="fas fa-heart mr-2"></span>Matched</button >  <a class="btn btn-sm btn-soft-primary transition-3d-hover" href="#"> <span class="far fa-envelope mr-2"></span> Message</a>');
                                                    }else{

                                                    }
                                                   
                                                  }
                                          });
}


 // for likes page onl send like request.
//  function likeconfirmRequest(e){
    var likeconfirmRequest= function(e) {
    let ill_insance = $(e);
    let yes = ill_insance.data('id');

    let usea =  $('#content');
	let user_main = usea.data("ke");

          if(yes == "" && user_main == ""){
                          return false;
                      }
                      
                              $.ajax({
                                              type: "POST",
                                                  url: 'includes/likeResponse.php',
                                                  data: {
                                                                  "matched_partner"         : yes,
                                                                  "user"                    : user_main,
                                                                  "like"                    : "like"
                                                              },
                                                  success: function(data){
                                                    if (data == 1) {
                                                        ill_insance.parent('#likeMessHol').html('<button class="btn btn-block btn-sm btn-soft-danger transition-3d-hover" ><span class="fas fa-heart mr-2"></span>Matched</button>  <a href="http://localhost/sankofauI/profile?key='+yes+'"  class="btn btn-sm btn-soft-primary transition-3d-hover" href="#"> <span class="far fa-user mr-2"></span>view profile</a>' )
                                                    }else{

                                                    }
                                                   
                                                  }
                                          });
}
