$(document).ready(function() {
    $('#hamb-button').click(function() {
        $('#departments .container .baloes ul').slideToggle(500);
    })

    $('#carousel-images').slick({
        autoplay: true,
    });
})