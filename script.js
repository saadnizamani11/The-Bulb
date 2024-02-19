document.addEventListener('DOMContentLoaded', function() {
    var bulb = document.getElementById('bulb');
    var btn = document.getElementById('btn');

    btn.addEventListener('click', function() {
        bulb.classList.toggle('on');
    });
});
