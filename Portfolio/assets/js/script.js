// $("#theme").hover( function () {
//     $("#theme-wrapper").css({
//         backgroundColor:"black"
//     });
// } , function () {
//     $("#theme-wrapper").css({
//         backgroundColor: "white"
//     });
// });

// pre loader
window.addEventListener('load', () => {
    document.getElementById("pre-load-bg-outer").style.display = "none";
    document.getElementById("pre-load-logo").style.display = "none";
    $("#pre-load > div:nth-child(2)").css({'backdrop-filter': 'blur(0px)'});

    setTimeout(preloaderHide, 1500);

    setTimeout(setLoadingAnimations , 0);
    setTimeout(setLoadingAnimationsSocialBtns1 , 100);
    setTimeout(setLoadingAnimationsSocialBtns2 , 200);
    setTimeout(setLoadingAnimationsSocialBtns3 , 300);
    setTimeout(setLoadingAnimationsSocialBtns4 , 400);

});

let preloaderHide = function () {
    document.getElementById("pre-load").style.display = "none";
}

function setLoadingAnimations() {
    $(".hero-img").addClass("animate__animated animate__fadeInUp");
    $(".hero-img-bg").addClass("animate__animated animate__fadeInRight");
    $(".hero-headers > h4:first-child").addClass("animate__animated animate__fadeInDown");
    $(".hero-headers > h1:nth-child(2)").addClass("animate__animated animate__fadeInDown");
    $(".hero-headers > h1:nth-child(3)").addClass("animate__animated animate__fadeInDown");
    $(".hero-headers > button:nth-child(4)").addClass("animate__animated animate__fadeInDown");

}

function setLoadingAnimationsSocialBtns1() {
    $("#social-github").addClass("animate__animated animate__fadeInUpBig");

}

function setLoadingAnimationsSocialBtns2() {
    $("#social-linkedin").addClass("animate__animated animate__fadeInUpBig");

}

function setLoadingAnimationsSocialBtns3() {
    $("#social-whatsapp").addClass("animate__animated animate__fadeInUpBig");

}

function setLoadingAnimationsSocialBtns4() {
    $("#social-telegram").addClass("animate__animated animate__fadeInUpBig");

}


$(".social-icons > a > i").hover(
    function () {
        let topVal = $(window).width() < 1600 ? "-50px" : "-65px";

        $(this).parent("a").children("span").css(
            {
                opacity: "1",
                top: topVal
            }
        );
    }, function () {
        $(this).parent("a").children("span").css(
            {
                opacity: "0",
                top: "0px"
            }
        );
    }
);

$("#theme-wrapper").on('click', function () {
    $(':root').css('--white') === "#FFFFFF" ? themeChangeToDark($(this)) : themeChangeToLight($(this));

});

function themeChangeToLight(parent) {
    parent.children("i").removeClass('fa-sun');

    parent.children("i").addClass('fa-moon');

    $(':root').css('--white', '#FFFFFF');
    $(':root').css('--black', '#000000');
    $(':root').css('--grey', '#F0F0F6');
    $(':root').css('--grey_2', '#f8f9fb');
    $(':root').css('--blue_shadow', '#e1e8ff');

}

function themeChangeToDark(parent) {
    parent.children("i").removeClass('fa-moon');

    parent.children("i").addClass('fa-sun');


    $(':root').css('--white', '#000000');
    $(':root').css('--black', '#FFFFFF');
    $(':root').css('--grey', '#00132d');
    $(':root').css('--grey_2', '#00193b');
    $(':root').css('--blue_shadow', '#000000');

}

$(window).resize(function () {
    var viewportWidth = $(window).width();

    if (viewportWidth < 1000) {
        $("#hero-headers > h1:nth-child(2)").find("br").remove();
    } else {
        $("#hero-headers > h1:nth-child(2)").html('<span class="first-word">I\'m</span> Hashan <br>Wijemanna');
    }
});

// Call the function once on page load
$(window).resize();

$("#menu-icon > i:first-child").on("click", () => {
    navbarTransitionDown();

    // $("#navbar").removeClass("nav-top-up");
    $("#navbar").addClass("nav-top-down");
    $("#navbar > a , #theme-wrapper").addClass("opacity-up");
    $("header").addClass("header-size-up");

    $("#menu-icon > i:first-child").addClass("hide");
    $("#menu-icon > i:nth-child(2)").addClass("show");

    setTimeout(navbarTransitionNormal , 1000);

});

$("#menu-icon > i:nth-child(2)").on("click", () => {
    navbarTransitionUp();
    $("#navbar > a , #theme-wrapper").removeClass("opacity-up");
    $("header").removeClass("header-size-up");

    $("#menu-icon > i:first-child").removeClass("hide");
    $("#menu-icon > i:nth-child(2)").removeClass("show");

    setTimeout(function () {
        $("#navbar").removeClass("nav-top-down");

    }, 1000);

    setTimeout(navbarTransitionNormal , 1000);

});

function navbarTransitionDown() {
    $("#home").css({transitionDelay: "0s"});
    $("#about-me").css({transitionDelay: "0.1s"});
    $("#services").css({transitionDelay: "0.2s"});
    $("#projects").css({transitionDelay: "0.3s"});
    $("#achievements").css({transitionDelay: "0.4s"});
    $("#contact").css({transitionDelay: "0.5s"});
    $("#theme-wrapper").css({transitionDelay: "0.6s"});
    // $("#navbar").addClass("nav-top-up");
}

function navbarTransitionUp() {
    $("#home").css({transitionDelay: "0.6s"});
    $("#about-me").css({transitionDelay: "0.5s"});
    $("#services").css({transitionDelay: "0.4s"});
    $("#projects").css({transitionDelay: "0.3s"});
    $("#achievements").css({transitionDelay: "0.2s"});
    $("#contact").css({transitionDelay: "0.1s"});
    $("#theme-wrapper").css({transitionDelay: "0s"});

}

function navbarTransitionNormal() {
    $("#home").css({transitionDelay: "0s"});
    $("#about-me").css({transitionDelay: "0s"});
    $("#services").css({transitionDelay: "0s"});
    $("#projects").css({transitionDelay: "0s"});
    $("#achievements").css({transitionDelay: "0s"});
    $("#contact").css({transitionDelay: "0s"});
    $("#theme-wrapper").css({transitionDelay: "0s"});

}




