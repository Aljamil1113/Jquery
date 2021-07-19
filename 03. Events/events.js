//console.log("hello events.js")

// //01 blur
// $(document).ready(function(){
//   $("input").blur(function() {
//     alert("This input field has lost it s focus.");
//   });
// });

// //02 change
// $(document).ready(function(){
//   $("input").change(function() {
//     alert("This input field has changes.");
//   });
// });

// //03 click
// $(document).ready(function(){
//   $("p").click(function() {
//     alert("This paragraph clicked.");
//   });
// });

// //04 dbclick
// $(document).ready(function(){
//   $("p").dblclick(function() {
//     alert("This paragraph dlouble clicked.");
//   });
// });

// // 05 focus
// $(document).ready(function(){
//   $("input").focus(function() {
//     $("span").css("display", "inline").fadeOut(2000);
//   });
// });

// //06 focusin
// $(document).ready(function(){
//   $("div").focusin(function() {
//     $(this).css("background-color", "dodgerblue");
//   });
//   $("div").focusout(function(){
//     $(this).css("background-color", "green");
//   });
// });


// // 07 focusout
// $$(document).ready(function(){
//   $("div").focusin(function() {
//     $(this).css("background-color", "dodgerblue");
//   });
//   $("div").focusout(function(){
//     $(this).css("background-color", "green");
//   });
// });

// //08 hover
// $(document).ready(function() {
//     $("p").hover(function() {
//         $(this).css("background-color", "dodgerblue");
//     }, function() {
//         $(this).css("background-color", "green");
//     });
// });

// //09 keydown event
// $(document).ready(function() {
//     $("input").keydown(function() {
//         $("input").css("background-color", "dodgerblue");
//     });
//     $("input").keyup(function() {
//         $("input").css("background-color", "green");
//     });
// });

// //10 keypress event
// i = 0;
// $(document).ready(function() {
//     $("input").keypress(function() {
//         $("span").text(i += 1);
//     });
// });

// //11 keyup event
// $(document).ready(function() {
//     $("input").keydown(function() {
//         $("input").css("background-color", "dodgerblue");
//     });
//     $("input").keyup(function() {
//         $("input").css("background-color", "green");
//     });
// });

// //12 mousedown event
// $(document).ready(function() {
//     $("div").mouseup(function() {
//         $(this).after("<p style='color:green;'>Mouse button release </p>");
//     });
//     $("div").mousedown(function() {
//         $(this).after("<p style='color:purple;'>Mouse button pressed down. </p>");
//     });
// });

// //13 mouseenter event
// $(document).ready(function() {
//     $("p").mouseup(function() {
//         $("p").css("background-color", "dodgerblue");
//     });
//     $("p").mouseleave(function() {
//         $("p").css("background-color", "green");
//     });
// });

// //14 mouseleave event
// $(document).ready(function() {
//     $("p").mouseup(function() {
//         $("p").css("background-color", "dodgerblue");
//     });
//     $("p").mouseleave(function() {
//         $("p").css("background-color", "green");
//     });
// });

// //15 mousemove event
// $(document).ready(function(){
//     $(document).mousemove(function(event){
//         $("span").text(event.pageX + ", " + event.pageY);
//     });
// });

// //16 mouseout & mouseover event
// $(document).ready(function() {
//     $("p").mouseover(function() {
//         $("p").css("background-color", "dodgerblue");
//     });
//     $("p").mouseout(function() {
//         $("p").css("background-color", "green");
//     });
// });

// //17 mouseup event
// $(document).ready(function() {
//     $("div").mouseup(function() {
//         $(this).after("<p style='color:green;'>Mouse button release </p>");
//     });
//     $("div").mousedown(function() {
//         $(this).after("<p style='color:purple;'>Mouse button pressed down. </p>");
//     });
// });

// //18 off event
// $(document).ready(function() {
//     $("p").on("click", function() {
//         $(this).css("background-color", "pink");
//     });
//     $("button").click(function() {
//         $("p").off("click");
//     });
// });

//19 on event
$(document).ready(function() {
        $("p").on("click", function() {
            $(this).css("background-color", "pink");
        });
    });

