function changeImg() {
  var file_path = "/assets/blogs/digtportal/";    
  $(".color-box").on("click", function() {
    var new_image_file_name = file_path + $(this).attr("id") + '.jpg';
    $(".sweig-baggrund").attr("src", new_image_file_name);
  });
  $(".back-to-org-image").on("click", function() {
    var new_image_file_name = file_path + "baggrund-sweigs.jpg"; 
    $(".sweig-baggrund").attr("src", new_image_file_name);
  });
}


window.addEventListener('load', function() {
  changeImg();
});
