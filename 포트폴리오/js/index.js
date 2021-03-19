$('.nav .depth1 > li').on('click', function(){
    $(this)
    .addClass('on')
    .siblings().removeClass('on')
})


var ww;
var wh;
function init(){
    ww = $(window).width()
    wh = $(window).height()
    
}

init()

$(window).on('resize', function(){
    init()
})


var article2Near = $('.article2').offset().top - (wh/2+100)
var article3Near = $('.article3').offset().top - (wh/2+100)

$(window).on('scroll', function(){
var sct = $(this).scrollTop()
    // article2 
    if ( sct >= article2Near && !$('.article2').hasClass('on') ) {
        $('.article2').addClass('on')
    } else if ( sct===0 ) {
        $('.article2').removeClass('on')
    }
    // article3
    if( sct >= article3Near && !$('.myscore').hasClass('on')) {
        $('.myscore').addClass('on')
    } else if (sct===0){
        $('.myscore').removeClass('on')
    }

})

