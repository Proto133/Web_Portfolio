console.log("script.js is linked")


$(document).ready(function() {
    keepHeader();
})
var resizeTimer;
//Event to handle resizing
$(window).resize(function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(keepHeader, 10);
});

function keepHeader() {
    let headerHt = ($('.header').height());
    console.log(headerHt)
    $('main').attr("style", "margin-top:" + (headerHt + 10) + 'px !important;');

}
// Get the modal
const myModal = $("#myModal");
const modal = $('.modal');
const contModal = $('#contactModal')


function closeModal() {
    modal.hide();
}

function openModal(data) {
    console.log(data)
    data.target.toggle();
}
// When the user clicks the button, open the modal 
$("#navAbout").on('click', function() {
    $('#myModal').show();
    $('#contactModal').hide()
})

$('#navContact').on('click', function() {
    console.log('contactModal clicked')
    $('#contactModal').show()
    $('#myModal').hide()
})

//When the user clicks on <span> (x), close the modal
$('.close').on('click', function() {
    modal.hide();
    console.log('display is', modal.css('display'))
})




//Bring user-selected project into focus
const active = $('div.activeItem')
let aProj = $('<a  class="actProjAnchor" target="_blank">')
$('.item').on('click', function() {
    if ($(this).hasClass('activeItem')) {
        $(this).removeClass('activeItem')
    } else {
        $('div.activeItem').removeClass('activeItem')
        $('div.item span').hide()
        $(this).addClass('activeItem')
        $(this).removeClass('projStable')
    }
    $(window).scrollTop(0);
})

$('footer').on('click', function() {
    $(window).scrollTop(0);
})

// //VANTA Background 
// VANTA.HALO({
//     el: "body",
//     mouseControls: true,
//     touchControls: true,
//     gyroControls: true,
//     minHeight: 1000.00,
//     minWidth: 200.00,
//     baseColor: 0xd90ccd,
//     backgroundColor: 0x0,
//     amplitudeFactor: 1.70,
//     xOffset: 0,
//     yOffset: 0,
//     size: 2
// })