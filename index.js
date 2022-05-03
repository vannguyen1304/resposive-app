$(document).ready(function(){
    $(".fa-solid.fa-bars").click(function(){
        $(this).toggleClass('fa-times')
        $("#header nav").toggleClass("show")
    })

    $("#header ul li").click(function(){
        $(".fa-solid.fa-bars").removeClass('fa-times')
        $("#header nav").removeClass("show")
    })

    $(".dot1").click(function(){
        $(".vid1").css("display","block")
        $(".vid2").css("display","none")
        $(".vid3").css("display","none")
    })
    $(".dot2").click(function(){
        $(".vid2").css("display","block")
        $(".vid1").css("display","none")
        $(".vid3").css("display","none")
    })
    $(".dot3").click(function(){
        $(".vid3").css("display","block")
        $(".vid2").css("display","none")
        $(".vid1").css("display","none")
    })

    // scroll
})