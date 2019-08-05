
    addEventListener('load', function() {
    setInterval(() => {
        Animate($('.settings'));
    }, 1000);
    setInterval(() => {
        Animate($('.clickSet'));
    }, 1500);

    setInterval(() => {
        Animate($('.info'));
    }, 2000);
     setInterval(() => {
         Animate($('.day-night'));
     }, 2500);


    function Animate(element) {
        var key = 'animated';
        var hide = 'hidden';
        var elem = element;
        elem.addClass(key);
        $(elem).removeClass(hide);
    }





        setTimeout(() => {
            
        }, 1000);
    })