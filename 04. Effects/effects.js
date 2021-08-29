//console.log("hello effects.js")

// //01. animate() effects
// $(document).ready(function() {
//   $("#btn1").click(function() {
//     $("#box").animate({height: "300px"});
//   });
//   $("#btn2").click(function() {
//     $("#box").animate({height: "100px"});
//   });
// });

// //02. animate() effects
// $(document).ready(function() {
//   $("#start").click(function() {
//     $("div").animate({height:"300"}, 1500);
//     $("div").animate({width:"300"}, 1500);
//     $("div").animate({height:"100"}, 1500);
//     $("div").animate({width:"100"}, 1500);
//   });
//   $("#stop").click(function() {
//     $("div").clearQueue();
//   });
// });

//  //03. delay() effect
// $(document).ready(function() {
//   $("button").click(function() {
//     $("#div1").delay("slow").fadeIn();
//     $("#div2").delay("fast").fadeIn();
//     $("#div3").delay(800).fadeIn();
//     $("#div4").delay(2000).fadeIn();
//     $("#div5").delay(4000).fadeIn();  
//   });
// });

// // 04. dequeue() Effect
// $(document).ready(function() {
//   $("#start").click(function() {
//     var div = $("div");
//     div.animate({height: 300}, "slow");
//     div.animate({width: 300}, "slow");
//     div.queue(function() {
//       div.css("background-color", "red");
//       div.dequeue();
//     });
//     div.animate({height: 100}, "slow");
//     div.animate({width: 100}, "slow");
//   });
// });

// //05 fadeIn() and fadeOut()
// $(document).ready(function() {
//   $(".btn1").click(function() {
//     $("p").fadeOut();
//   });
//   $(".btn2").click(function() {
//     $("p").fadeIn();
//   });
// });

// //06 fadeTo() Effect
// $(document).ready(function() {
//   $("button").click(function() {
//     $("p").fadeTo(2000, 0.4);
//   });
// });

// //07 fadeToggle
// $(document).ready(function() {
//   $("button").click(function() {
//     $("#div1").fadeToggle();
//     $("#div2").fadeToggle("slow");
//     $("#div3").fadeToggle(3000);
//   });
// });

// //08 finish and hide
// $(document).ready(function() {
//   $("#start").click(function() {
//     $("div").animate({height: 300}, 3000);
//     $("div").animate({width: 300}, 3000);
//   });
//   $("#complete").click(function() {
//     $("div").finish();
//   });
//   $("#start").click(function() {
//     $("div").show();
//   });
// });

//09 slidedown and slide Up
$(document).ready(function() {
  $(".btn1").click(function() {
    $("p").slideUp();
  });
  $(".btn2").click(function() {
    $("p").slideDown();
  });

});

//10 slideToggle & Stop
$(document).ready(function() {
  $(".btn3").click(function() {
    $("p").slideToggle();
  });
  $("#Stop").click(function() {
    $("p").stop();
  });
});

