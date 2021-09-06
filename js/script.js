$(document).ready(function() {
    $('.header-burger').click(function(event) {
        $('.header-burger,.header-menu,.logo,.main-button,.title-con1').toggleClass('active');
        $('body').toggleClass('lock');
    });
});