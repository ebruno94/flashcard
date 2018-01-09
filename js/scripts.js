$(document).ready(function() {

  // $("h2").click(function() {
  //   $("h2").toggle();
  //   $("p").toggle();
  // });
  //
  // $("p").click(function() {
  //   $("h2").toggle();
  //   $("p").toggle();
  // });

  $(".col-md-4:nth-child(1)").click(function(){
    $(".col-md-4:nth-child(1) h2").toggle();
    $(".col-md-4:nth-child(1) p").toggle();
  });

  $(".col-md-4:nth-child(2)").click(function(){
    $(".col-md-4:nth-child(2) h2").toggle();
    $(".col-md-4:nth-child(2) p").toggle();
  });

  $(".col-md-4:nth-child(3)").click(function(){
    $(".col-md-4:nth-child(3) h2").toggle();
    $(".col-md-4:nth-child(3) p").toggle();
  });


  });
