document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var splashScreen = document.getElementById('splash-screen');
        splashScreen.classList.add('fade-out');

        splashScreen.addEventListener('transitionend', function() {
            splashScreen.style.display = 'none';
            document.getElementById('main-content').classList.remove('hidden');
        });
    }, 7000);
});
