$(function() {
    var $day = document.querySelector('.day');
    var $night = document.querySelector('.night');
    $($night).click(function  () {
        $(header).addClass('night')
        $(header).removeClass('day');
        $('.header-title').addClass('night-t');
        $('.header-title').removeClass('.day-t');
        $('.settings-title').addClass('night-t');
        $('.settings-title').removeClass('.day-t');
    })
    $($day).click(function () {
        $(header).removeClass('night')
        $(header).addClass('day');
        $('.header-title').removeClass('night-t');
        $('.header-title').addClass('.day-t');
        $('.settings-title').removeClass('night-t');
        $('.settings-title').addClass('.day-t');
    })
});