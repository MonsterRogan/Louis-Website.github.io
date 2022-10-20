// 自我介紹切換內容
function tome(){
    let mediv = document.querySelector("#me");
    let intrestdiv = document.querySelector("#intrest");
    let futurediv = document.querySelector("#future");

    mediv.style.display = "block";
    intrestdiv.style.display = "none";
    futurediv.style.display = "none";
}
function tointrest(){
    let mediv = document.querySelector("#me");
    let intrestdiv = document.querySelector("#intrest");
    let futurediv = document.querySelector("#future");

    mediv.style.display = "none";
    intrestdiv.style.display = "block";
    futurediv.style.display = "none";
}
function tofuture(){
    let mediv = document.querySelector("#me");
    let intrestdiv = document.querySelector("#intrest");
    let futurediv = document.querySelector("#future");

    mediv.style.display = "none";
    intrestdiv.style.display = "none";
    futurediv.style.display = "block";
}

// $("#skill-move").each(function(){
//     $(this).click(function(){
//         $(".skill-per").css({
//             "display":"none"
//         });
//     });
// });



function skill(){
    let skillper = document.querySelector(".skill-per");

    skillper.style.display= "none";
}




// skill.addEventListener("click",function(){
//     skillper.style.animation = "fill-line 2.5s 1";
// })

