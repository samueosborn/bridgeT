function get_like_request(){
    let keyn = $('#superduppa');
    let key = keyn.data('id');
  
    $.post('./includes/friend_request', {'key':key}, function(data) {
       if(data == 1){
        
            $(".noti-like-add").addClass("logo-img");
            $(".noti-like-txt").addClass("text-danger");
            Getlikes();
        }else if(data == 0){
           $(".noti-like-add").removeClass("logo-img"); 
           $(".noti-like-txt").removeClass("text-danger");
       }
    });
 };

//  function Getlikes() {
   
//     let keyn = $('#superduppa');
//     let key = keyn.data('id');  
//     $.getJSON('./includes/likes_data', {'token':key}, function(data) {
//             $('#like_rec_frame').html('');
//             $.each(data, function (i, item)  {
                
//              let card =$( ` <div class="list-group-item list-group-item-action flex-column align-items-start "><div class="d-flex w-100 justify-content-between"><div class="media align-items-center"><span class="btn btn-m btn-icon rounded-circle overflow-hidden mr-2"><span class="btn-icon__inner font-weight-medium" style="overflow:hidden"><img src="`+item.profile_pic +`" width="100%" height="100%" alt="Image Description"></span></span><span>`+item.name+`</span></div><small>
//                             `+item.date_created +`                              
//                             </small>
//                         </div>
//                         <p class="mb-1">
//                             <span> `+item.user_intro+` </span>                                </p>
//                         <small class="text-muted">
//                             <div id="likeMessHol" class="media align-items-center">
//                             <button class="btn btn-block btn-sm btn-soft-danger transition-3d-hover" onclick="likeconfirmRequest(this)" data-id=" `+item.user_key+`"> <span class="fas fa-hand-holding-heart mr-2"></span>Like Back</button> <a href="http://localhost/sankofauI/profile?key=`+item.user_key+`" class="btn btn-sm btn-soft-primary transition-3d-hover"> <span class="far fa-user mr-2"></span>view profile</a>                
//                             </div>
//                         </small>
//                         </div>`);

//                         $('#like_rec_frame').append(card);
//             });
      
                    
   
//     });

//}

get_like_request();
setInterval(get_like_request, 30000);