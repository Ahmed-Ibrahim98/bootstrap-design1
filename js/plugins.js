$(document).ready(function(){
    $('.carousel').carousel({
        interval:6000
    });

    // Show Color Option Div When Click On The Cog
    $(".cog-check").click(function(){
        $(".color-option").fadeToggle();
    });

    // Change Theme Color On Click

    var colorLi = $(".color-option ul li")

    colorLi
    .eq(0).css("backgroundColor","#e41b17").end()
    .eq(1).css("backgroundColor","#e426d5").end()
    .eq(2).css("backgroundColor","#009aff").end()
    .eq(3).css("backgroundColor","#ffd500");

    document.querySelectorAll('.color-option ul').forEach(item => {
        item.addEventListener('click', function(e){

            $("link[href*='theme']").attr("href", e.target.id)
            // console.log(e.target.id);
        });
    });

    // cashing the scroll top element

    var scrollButton = $("#scroll-up");

    $(window).scroll(function(){
        if($(this).scrollTop() >= 700) {
            scrollButton.show();
        } else {
            scrollButton.hide();
        }
    })

    // Click On Button To Scroll Top

    scrollButton.click(function(){
        $("html , body").animate({scrollTop:0}, 600)
    });
});

// Loading Screen 
$(window).load(function(){
    $(".loading-overlay .spinner").fadeOut(2000, function(){
        // Show The Scroll
        $("body").css("overflow","auto")
        $(this).parent().fadeOut(2000, function(){
            $(this).remove();
        })
    });
})