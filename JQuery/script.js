
$("input[type=button]").click (function (e) {
console.log(e.currentTarget.type);

  $("input[type=text]").focus().css("backgroundColor", "red");
  $(".result").slideToggle("slow");
});

