import Swup from 'swup';
import loadComponents from 'gia/loadComponents';
import components from './components';

// first animate in
setTimeout(function () {
    document.documentElement.classList.remove('is-animating');
    //Trigger the resize window event when all the content is loaded
    var el = document; // This can be your element on which to trigger the event
    var event = document.createEvent('HTMLEvents');
    event.initEvent('resize', true, false);
    el.dispatchEvent(event);
}, 100)

// enable components
loadComponents(components);

// enable swup
const swup = new Swup({
    linkSelector: 'a[href^="' + window.location.origin + '"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href^="./"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])'
});

// reload components for each container after transition
swup.on('contentReplaced', function () {
    document.querySelectorAll('[data-swup]').forEach(function (container) {
        console.log(loadComponents(components, container));
    });
});



let AccessHover = document.getElementById('access-hover')
let AccessFooter = document.getElementById('access-footer')
let RoundBackground = document.getElementsByClassName('round-background')[0]
let linkContainer = document.getElementsByClassName('link-container')[0]

//When the user click on the footer icon
AccessFooter.addEventListener("click", (e) => HandleClickFooter(e), false);
RoundBackground.addEventListener("click", (e) => HandleClickFooter(e), false);

function HandleClickFooter(e)  {
    {
        console.log("Click", AccessFooter, e);
        console.dir(linkContainer);
        //Makes appear the different links
        let valueBottom = linkContainer.offsetHeight + 'px';
        console.log(valueBottom);
        linkContainer.style.bottom = valueBottom;
        //Drop down the footer button
        //--> Done automatically if the links are higher than the access-hover height
        AccessHover.style["pointer-events"] = 'none';
        AccessFooter.style["pointer-events"] = 'none';
        RoundBackground.style["pointer-events"] = 'none';

        //Reset the bottom value of the container when the mouse leaves the container
        linkContainer.addEventListener('mouseleave', (e) => {
            linkContainer.style.bottom = '0px';
            AccessHover.style["pointer-events"] = 'auto';
            AccessFooter.style["pointer-events"] = 'auto';
            RoundBackground.style["pointer-events"] = 'auto';
        }, false);
    }
}

