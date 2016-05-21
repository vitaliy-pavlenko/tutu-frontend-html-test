(function() {

    var btns = document.getElementsByClassName('btn');
    [].forEach.call(btns, btn => {
       btn.addEventListener('click', e => {
           e.preventDefault();
           // handle event
       });
    });

}.call(this));
