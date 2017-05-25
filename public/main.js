(function() {
    'use strict';

    var repos = {
        init: function() {
            humanDate();
        }
    }

    repos.init();

})();

function humanDate() {
    let elements = [...document.querySelectorAll('.js-date')];
    for (let element of elements) {
        let date = element.getAttribute('datetime');
        element.textContent = new Date(date).toDateString();
    }
}
