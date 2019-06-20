
    var view_profile = function(e) {
        let ill_insance = $(e);
        let yes = ill_insance.data('identifier');
        window.location.href = 'profile?key='+ yes 
    };    

	function show_slide_modal(){
		let carduser = $('.stackedcards-active');
		let carduser_info = carduser.data("info");
		let temp =$.trim($('#li_emp').html());
		let ina = "";
		let obf  = jQuery.parseJSON(carduser_info.interest);
		$.each(obf, function (i, item)  {
			ina = ina + ' <span class="badge badge-pill badge-m badge-light text-primary">'+item+'</span>';
		});

		var x = temp.replace(/{{name}}/ig, carduser_info.name).replace(/{{age}}/ig, carduser_info.userAge).replace(/{{interest}}/ig, ina).replace(/{{occupation}}/ig, carduser_info.occupation).replace(/{{image}}/ig, carduser_info.profile_pic).replace(/{{bio}}/ig, carduser_info.user_intro);
		$('#profile_emp').html(x);
		$(".SlideWrapper").animate({
      width: "toggle"
    });
		$('.SlideWrapper').toggleClass("SlideWrapper--close  SlideWrapper--open"); 
		$('.SlideModal').toggleClass("SlideModal--close  SlideModal--open"); 
	};
	 
		 
// JavaScript Document
document.addEventListener("DOMContentLoaded", function(event) {

	function setmatchtimer(){
		var count = 900;
			$(".bot-main-timer").text(count);

			var myTimer = setInterval(function(){
					if(count > 0){
							count = count - 1;
							$(".bot-main-timer").text(count+" secs");
					}
					else {
						clearInterval(myTimer);
							GetMatch(function () {
								stackedCards();
							});
					}
			},1000);
	}

	function GetMatch() {
        let usea =  $('#content');
		let user_main = usea.data("ke");
		$.getJSON('./includes/picked_match', {token:user_main}, function(data) {

				$.each(data, function (i, item)  {
                       let card =$(`<div class="match-users" data-image="`+item.profile_pic +`" data-identifier="`+item.user_key +`" onclick="view_profile(this)" >     
                                <div class="matchinfo">
                                    <span>`+item.name +`, <b>`+item.userAge +`</span>
                                    <span></span>
                                </div>
                                </div>`);

					card.data( "info", { name: item.name, occupation: item.occupation, profile_pic: item.profile_pic, user_intro: item.user_intro, user_key: item.user_key, userAge: item.userAge, interest: item.user_interests } );
					card.css("background-image", "url(" + card.data('image') + ")");
					card.prependTo(".match-main");	

				});
	
				setmatchtimer();

		});

	}



	GetMatch();


	

	

});


// <a id="userid" href="profile?key='+item.user_key +'" data-identifier="'+item.user_key +'" ><div class="card"><div class="card-content"><div class="card-image"><img src="'+item.profile_pic +'" width="100%" height="90%"/></div> </div><div class="card-footer"><input  class="clard-userid"  value="' +item.user_key +'" hidden/><div class="popular-destinations-text"><span class="clard-name-age"> '+ item.name +', '+ item.userAge +'</span><span>' +item.country +'</span></div><div class="popular-destinations-images"> <div class="circle"><img src="https://image.ibb.co/bu6KtS/art_culture_3.jpg" width="100%" height="100%"/></div></div></div></div></a>'