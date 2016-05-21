(function() {

    function fn() {

        var rp = {};

        function init(selector) {
            if (!selector || typeof selector != 'string') return;

            this.panel = document.querySelector(selector)
                .querySelector('.rating-block__rating-stars-panel');

            this.panel.addEventListener('click', clickHandler.bind(this));
        }

        function clickHandler(e) {
            if (e.target.matches('.rating-stars-panel__star')) {
                updateRating.call(this, e.target.getAttribute('data-star-position'));
            }
        }

        function updateRating(value) {
            this.panel.className = this.panel.className.replace(/rating-stars-panel--[\d]-of-5/, `rating-stars-panel--${value}-of-5`);
        }

        rp.init = init;

        return rp;
    }

    window.RatingPanel = fn();

}.call(this));