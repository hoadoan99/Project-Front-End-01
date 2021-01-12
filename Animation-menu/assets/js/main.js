// --------------------PUSH---------------------
/*document.addEventListener("DOMContentLoaded", function() {
    var button = document.querySelector('.button'),
        menu = document.querySelector('.menu'),
        layer = document.querySelector('.layer')

    // event click button-push
    button.onclick = function() {
            layer.classList.add('layer--visible');
            menu.classList.add('menu--moveLeft');
        }
        // event click layer-back
    layer.onclick = function() {
        layer.classList.remove('layer--visible');
        menu.classList.remove('menu--moveLeft');
    }
}, false);
*/
// --------------------OPEN-DOOR---------------------

 document.addEventListener("DOMContentLoaded", function() {
    var button_1 = document.querySelector('.button-1'),
        wrapper = document.querySelector('.wrapper'),
        menu = document.querySelector('.menu'),
        layer = document.querySelector('.layer')
        // event click button-openDoor
    button_1.onclick = function() {
            wrapper.classList.add('wrapper-rotate');
            layer.classList.add('layer--visible');
            menu.classList.remove('menu-Left');
        }
        // event click layer-back
    layer.onclick = function() {
        layer.classList.remove('layer--visible');
        wrapper.classList.remove('wrapper-rotate');
        menu.classList.add('menu-Left');
    }
}, false);

