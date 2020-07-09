

$("button").click(function(){ console.log(this.id);
  $("img").attr("src", this.id + '.png');
$("h1.alphabet").text((this.id).toUpperCase());
$("h1.example").text((this.name).toUpperCase());
});


// $("h1").css("color","red");
