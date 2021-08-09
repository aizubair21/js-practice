
$(":button").click (function () {

  $(":text").focus().css("backgroundColor", "red");
  $(".result").slideToggle("slow");
});

$(":text").keyup(function () {

  console.log($(this).val() );
  $("p").append($(":text").val());

});