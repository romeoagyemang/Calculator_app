(function() {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let blue = document.querySelector('.btn-blue');
    let black = document.querySelector('.btn-black');

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            screen.value += value;
        });
    });

      blue.addEventListener('click', function(e) {
        if (screen.value === '') {
            screen.value = "";
        } else{
            let answer = eval(screen.value);
            screen.value = answer;
        }
      });

      black.addEventListener('click', function(e) {
        screen.value = "";
      });


})();