// //1.All Elements
// $(document).ready(function()
// {
//     $("*").css("background", "yellow");
// });

// //2 #id selector
// $(document).ready(function()
// {
//     $("#intro").css("background", "yellow");
// });

// //3 class selector
// $(document).ready(function()
// {
//     $(".intro").css("background", "yellow");
// });

// //4 :first
// $(document).ready(function()
// {
//     $("p:first").css("background", "red");
// });

////5 :last
// $(document).ready(function()
// {
//     $("p:last").css("background", "orange");
// });

////6 :even
// $(document).ready(function()
// {
//     $("p:even").css("background", "blue");
// });

////7 :odd
// $(document).ready(function()
// {
//     $("p:odd").css("background", "yellow");
// });

////8 :first-child
// $(document).ready(function()
// {
//     $("p:first-child").css("background", "pink");
// });

////9 :first-of-type
// $(document).ready(function()
// {
//     $("p:first-of-type").css("background", "pink");
// });

////10 :last-child
// $(document).ready(function()
// {
//     $("p:last-child").css("background", "orange");
// });

// //11 :last-of-type
// $(document).ready(function()
// {
//     $("p:last-of-type").css("background", "orange");
// });

////12. :nth-child
// $(document).ready(function()
// {
//     $("p:nth-child(2)").css("background", "orange");
// });

// //13 :nth-last-child
// $(document).ready(function()
// {
//     $("p:nth-last-child(1)").css("background", "orange");
// });

//14. :nth-last-of-type
// $(document).ready(function()
// {
//     $("p:nth-last-of-type(3)").css("background", "orange");
// });

// //15. :only-child
// $(document).ready(function()
// {
//     $("p:only-child").css("background", "tomato");
// });

//16 :only-of-type
// $(document).ready(function()
// {
//     $("p:only-of-type").css("background", "tomato");
// });

// //17 parent > child
// $(document).ready(function()
// {
//     $("div > p").css("background", "tomato");
// });


// //18 parent descendant
// $(document).ready(function()
// {
//     $("div p").css("background", "skyblue");
// });

// //19 element + next
// $(document).ready(function()
// {
//     $("div + p").css("background", "skyblue");
// });

// //20 element ~ siblings
// $(document).ready(function()
// {
//     $("div ~ p").css("background", "blue");
// });

// //21 :eq
// $(document).ready(function()
// {
//     $("p:eq(1)").css("background", "skyblue");
// });

// //22 :gt
// $(document).ready(function()
// {
//     $("p:gt(2)").css("background", "skyblue");
// });

// //23 :lt
// $(document).ready(function()
// {
//     $("p:lt(1)").css("background", "skyblue");
// });

//24 :not
// $(document).ready(function()
// {
//     $("div:not(.parent2)").css("background", "skyblue");
// });

// //25 :header
// $(document).ready(function()
// {
//     $(":header").css("background", "skyblue");
// });

//// 26 :animated 
// $(document).ready(function()
// {
//     function aniDiv(){
//         $("div:eq(0)").animate({width: "50%"}, "slow");
//         $("div:eq(0)").animate({width: "100%"}, "slow", aniDiv);
//     }

//     aniDiv();
//     $(".btn1").click(function(){
//         $(":animated").css("background-color", "red");
//     });
// });

// //27 :focus
// $(document).ready(function()
// {
//     $("input").focus();
//     $(":focus").css("background-color", "yellow");
// });

// // 28 :contains
// $(document).ready(function()
// {
//     $("p:contains(is)").css("background-color", "skyblue");
// });

// 29 :has
// $(document).ready(function(){
//     $("p:has(span)").css("background-color", "yellow");
// });

// //30 :empty
// $(document).ready(function()
// {
//     $(":empty").css("background-color", "skyblue");
// });

// //31 :parent
// $(document).ready(function()
// {
//     $("td:parent").css("background-color", "skyblue");
// });

// //32 :hidden
// $(document).ready(function()
// {
//     $("p:hidden").show(3500);
// });

// //33 :visible
// $(document).ready(function()
// {
//     $("p:visible").css("background-color", "dodgerblue");
// });

// //34 :root
// $(document).ready(function()
// {
//     $(":root").css("background-color", "skyblue");
// });

// //35 :lang
// $(document).ready(function()
// {
//     $("p:lang(it)").css("background-color", "skyblue");
// });


//*************ATTRIBUTES********//
// //36 attribute [] selector
// $(document).ready(function()
// {
//     $("[id]").css("background-color", "skyblue");
// });

// //37 attribute value! selector
// $(document).ready(function()
// {
//     $("p[class!='intro']").css("background-color", "skyblue");
// });

// // 38 attribute value$
// $(document).ready(function()
// {
//     $("a[href$='.org']").css("background-color", "yellow");
// });

// // 39 attribute value|
// $(document).ready(function()
// {
//     $("p[title|='tomorrow']").css("background-color", "yellow");
// });

// //40 attribute value^
// $(document).ready(function()
// {
//     $("input[name^='usa']").css("background-color", "yellow");
// });

// //41 attribute value~
// $(document).ready(function()
// {
//     $("input[name~='italy']").css("background-color", "yellow");
// });

// //42 attribute value*
// $(document).ready(function()
// {
//     $("input[name*='usa']").css("background-color", "yellow");
// });

// //43 :input
// $(document).ready(function()
// {
//     $(":input").css("background-color", "yellow");
// });

// //44 :text
// $(document).ready(function()
// {
//     $(":text").css("background-color", "red");
// });

// //45 :password
// $(document).ready(function()
// {
//     $(":password").css("background-color", "red");
// });

// //46 :radio
// $(document).ready(function()
// {
//     $(":radio").wrap("<span style='background-color:orange'></span>");
// });

// //47 :checkbox
// $(document).ready(function()
// {
//     $(":checkbox").wrap("<span style='background-color:black'>");
// });

//48 :submit
$(document).ready(function()
{
    $(":submit").css("background-color", "red");
});

//49 :reset
$(document).ready(function()
{
    $(":reset").css("background-color", "yellow");
});

//50 :button
$(document).ready(function()
{
    $(":button").css("background-color", "blue");
});

//51 :image
$(document).ready(function()
{
    $(":image").css("background-color", "purple");
});

//52 :button
$(document).ready(function()
{
    $(":file").css("background-color", "gray");
});

// //53 :enabled
// $(document).ready(function()
// {
//     $(":enabled").css("background-color", "blue");
// });

//54 :disabled
$(document).ready(function()
{
    $(":disabled").css("background-color", "black");
});

//55 :selected
$(document).ready(function()
{
    $(":selected").css("background-color", "pink");
});

//56 :checked

$(document).ready(function()
{
    $(":checked").wrap("<span style='background-color:red'>");
});




