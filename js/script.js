function openNav() {
    $("#myMenuBar").addClass("open-nav");
    $('body').addClass('noScroll')
}
function closeNav() {
    $("#myMenuBar").removeClass("open-nav");
    $('body').removeClass('noScroll')
}

function openFilter() {
    $(".filtration").toggleClass("filter-open");
}



//---------------------bottom-footer------------------
var headerHeight = $('header').height();
var mainHeight = $('main').height();
var winH = mainHeight + headerHeight ;
var footerHeight = $('footer').height() + 35;

if (winH <= $(window).height()) {
    $('footer').addClass('bottom-footer');
    $('body').css("padding-bottom", footerHeight);
    $('body').css("min-height", headerHeight + mainHeight + footerHeight);
    $('footer').css('bottom', ( footerHeight * -1 ));
} else {
    $('footer').removeClass('bottom-footer');
}
//-------------------------
var sliderHeight = $('.home-slider').height();
var homeHeight = headerHeight + sliderHeight + 70;


// //---------------------
var containerWid = $('.container').width() + 50;
var windowWid = $(Window).width();
var rightValue = (windowWid - containerWid) / 4;
$('.arrow').css('right', rightValue);
$('.arrow').addClass('to-bottom');
console.log($(document).height());

$(document).on('click','.to-bottom', function () {
    $('html,body').animate({
        scrollTop: $(document).height(),
    }, 600);
    $(this).addClass('to-top');
    $(this).removeClass('to-bottom');
    $(this).html('<i class="fas fa-arrow-up"></i>')
});
$(document).on('click', '.to-top', function () {
    $(this).removeClass('to-top');
    $('html,body').animate({
        scrollTop: 0,
    }, 600);
    $(this).removeClass('to-top');
    $(this).addClass('to-bottom');
    $(this).html('<i class="fas fa-arrow-down"></i>')
});

//--------------------
var dateInputWidth = $('.date-pick').width();
$('.daterangepicker.openscenter').css('width', dateInputWidth);






/*/!* block inspect element *!/
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

$(document).keydown(function(e){
    if(e.which === 123){
        return false;
    }
});*/


//-----------
$(window).on('load',function() {
    setTimeout(function() {
        $('body').addClass('loaded');
    }, 1000);
});
