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