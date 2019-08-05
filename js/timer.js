var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var save = document.querySelector('.save');
var time = document.querySelector('.timeset');
var start = document.querySelector('.start');
var totalSeconds = 0;
var seconds = document.querySelector('.seconds');
var minutes = document.querySelector('.minutes');
var score = document.querySelector('.score').innerHTML;
var click = document.querySelector('.clickBtn');
function setTime() {
    if (totalSeconds != 0) {
        --totalSeconds;
        secondsLabel.innerHTML = pad(totalSeconds % 60);
        minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
    }
}

function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
}

$(start).click(function () {
    if (start.innerHTML = 'START') {
        if (totalSeconds != 0 && start.innerHTML != 'AGAIN') {
            var dots = document.querySelector('.doubledots');
            setInterval(setTime, 1000);
            dots.innerHTML = ':';
            start.innerHTML = 'AGAIN';
            start.classList.add('fadeOutUp');
            $(click).click(function() {
                if(totalSeconds != 0 && start.innerHTML != 'AGAIN') {
                    score = Number(score + 1);
                    var band = document.querySelector('.score');
                    band.innerHTML = score;
                    console.log(score);
                }
                if (totalSeconds == 0 && start.innerHTML == 'STOP') {
                    var res = score;
  var band = document.querySelector('.score');
band.innerHTML = res;
  console.log(res);
   start.classList.remove('fadeOutUp');
  start.classList.add('fadeInUp');
   start.innerHTML = 'AGAIN';
       if (start.innerHTML = 'AGAIN') {
         
           $(start).click(function () {
               location.reload();
           })
       }
                }
            })
        }

    





    }
    if (start.innerHTML = 'STOP') {
        $(start).click(function () {
            start.innerHTML = 'AGAIN';
          


            if (start.innerHTML = 'AGAIN') {
                totalSeconds = 0;
                seconds.innerHTML = 0;
                dots.innerHTML = '';
               minutes.innerHTML = '0';

            }
        })
    } 

    
    else {
        save.classList.add('error');
        save.title = 'Save Settings';
    }
})



$(save).click(function () {
    if(start.innerHTML != 'AGAIN'){

    totalSeconds = Number(time.value);

    seconds.innerHTML = Number(time.value);
    if (time.value != 0) {
        Animate($('.start'));
    } else {
        time.classList.add('error');
    }
    }

})






function Animate(element) {
    var key = 'animated';
    var hide = 'hidden';
    var elem = element;
    elem.addClass(key);
    $(elem).removeClass(hide);
}