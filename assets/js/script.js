console.log("script.js is linked")
    // Get the modal
const modal = $("#myModal");

// When the user clicks the button, open the modal 
$("#navAbout").on('click', function() {
    $('#myModal').show()
})

// When the user clicks on <span> (x), close the modal
$('.close').on('click', function() {
    $('#myModal').hide();
})

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target != modal) {
        $(this).hide();
    }
}

const active = $('div.activeItem')
let aProj = $('<a  class="actProjAnchor" target="_blank">')
$('.item').on('click', function() {
    if ($(this).hasClass('activeItem')) {
        $(this).removeClass('activeItem')
    } else {
        $('div.activeItem').removeClass('activeItem')
        $('div.actTooltip').removeClass('actTooltip')
        $('div.item span').hide()
        $(this).addClass('activeItem')
        $(this).children().addClass('actTooltip')
    }
})