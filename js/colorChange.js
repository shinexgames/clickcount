$(function () {
    var setColor = document.querySelector('.color');
    var save = $('.save')
    var clickBtn = document.querySelector('.clickBtn');
    save.click(function () {
        console.log(setColor.value);
        

        switch (setColor.value) {
            case 'Red':
                clickBtn.style.background = 'red';
                break;
            case '1':
                clickBtn.style.background = '#7bcd86';
                break;
            case '2':
                clickBtn.style.background = 'rgb(0, 105, 217)';
                break;
            case '3':
                clickBtn.style.background = '#ffb600';
                break;
            case '4':
                clickBtn.style.background = '#888';
                break;
            case '5':
                clickBtn.style.background = '#000';
                break;
            default:
                alert('Я таких значений не знаю');
        }

    });

});