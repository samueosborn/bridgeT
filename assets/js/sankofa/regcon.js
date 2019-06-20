
var uploadedImageUrl = '';

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                ///registration-update using ajax//////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(".new_update").on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    formData.append('u_pphoto', uploadedImageUrl);
    // alert("yooooo");
    $.ajax({
          url: "./includes/post_handler.php", // Url to which the request is send
          type: "POST",             // Type of request to be send, called as method
          data: formData,// Data sent to server, a set of key/value pairs (i.e. form fields and values)
          contentType: false,       // The content type used when sending data to the server.
          cache: false,             // To unable request pages to be cached
          processData:false,       // To send DOMDocument or non processed data file it is set to false
           beforeSend: function(){
   
          },
          success: function(data)   // A function to be called if request succeeds
          {   
              let result = $.trim(data);
              if (result == 1) {
                  $('#profileSetupDone').slideDown(1000);
                  $("#submitFormBtn").hide();
                  setTimeout(function(){
                    window.location.replace("home");
                  },3000);                 
              }else{
                $('#profileSetupnoDone').slideDown(1000);
                $("#submitFormBtn").hide();
              }
          }
    });
});


Dropzone.options.myDropzone = {
      autoProcessQueue: true,
      uploadMultiple: false,
      parallelUploads: 100,
      maxFiles: 1,
      renameFile: function (file) {
            return new Date().getTime() + '_' + file.name;
        },
    init: function() {
      this.on("addedfile", function(file) {
        
        // Create the remove button
        var removeButton = Dropzone.createElement("<button class='btn btn-danger btn-xs mt-2' type='button'>remove</button>");
        
        $("#submitFormBtn").html('Uploading...')
        
        // Capture the Dropzone instance as closure.
        var _this = this;

        // Listen to the click event
        removeButton.addEventListener("click", function(e) {
          // Make sure the button click doesn't submit the form:
            e.preventDefault();
            e.stopPropagation();

            let deleted_file_name = file.upload.filename;
            // Remove the file preview.
            _this.removeFile(file); 
            
            //console.log(uploadedImageUrl);
            //alert(deleted_file_name);
            uploadedImageUrl = uploadedImageUrl.filter(function( obj ) {
                  return obj.url !== deleted_file_name;
            });
            
            $("#submitFormBtn").attr("disabled", true);
          // If you want to the delete the file on the server as well,
          // you can do the AJAX request here.
        });

        // Listen to the sendingmultiple event. In this case, it's the sendingmultiple event instead
          // of the sending event because uploadMultiple is set to true.
          // this.on("sendingmultiple", function() {
          //   // Gets triggered when the form is actually being sent.
          //   // Hide the success button or the complete form.
          //   alert(response);
          // });
          this.on("success", function(files, response)
          {
             uploadedImageUrl = response;
             $("#submitFormBtn").html('Done');
             $('#submitFormBtn').removeAttr("disabled");
            //let returnedurl=JSON.parse(response);
          });

          // this.on("errormultiple", function(files, response) {
          //   // Gets triggered when there was an error sending the files.
          //   // Maybe show form again, and notify user of error
          //   alert(response);
          // });

        // Add the button to the file preview element.
        file.previewElement.appendChild(removeButton);
      });
    }
  };

$(document).ready(function(){
  function setGender(){
    $("#continue input.mgoption1").on('change',function(){
      let gendval = $(this).val();
      if(gendval == 'male' ) 
      {        
        $("#pgend1").removeClass('active');
        $("#pgend2").addClass('active');

        $('input:radio[name=p_gender]:nth(1)').attr('checked',true); 
        $('input:radio[name=p_gender]:nth(0)').attr('checked',false);
        
      }else if(gendval == 'female')
      {         
        $("#pgend2").removeClass('active');
        $("#pgend1").addClass('active');

        $('input:radio[name=p_gender]:nth(0)').attr('checked',true); 
        $('input:radio[name=p_gender]:nth(1)').attr('checked',false);
      }  
    }); 
  }

  function gechildres(){
    $('#gechildres').on('change',function(){
      let gendval = $(this).val();
      if(gendval == 'yes' ) 
      {        
        $("#gechildresNexr").data('next-step','#selectStepTwel');        
      }
      if(gendval == 'no' ) 
      {        
        $("#gechildresNexr").data('next-step','#selectStepThirteen');        
      }
    });   
  }

   
setGender();
gechildres();


$("#emojionearea1").emojioneArea({
  	
  pickerPosition: "right",
    tonesStyle: "bullet",
  events: {
         keyup: function (editor, event) {
            //  console.log(editor.html());
            //  console.log(this.getText());
        }
    }
});

   $('.divOutside').click(function () {
              $('.emojionearea-button').click()
          })
          
          

});

