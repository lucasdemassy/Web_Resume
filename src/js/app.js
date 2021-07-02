import Swup from 'swup';
import loadComponents from 'gia/loadComponents';
import components from './components';

// first animate in
setTimeout(function () {
    document.documentElement.classList.remove('is-animating');
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
        loadComponents(components, container);
    });
});

console.dir(document)

let AccessFooter = document.getElementById('access-footer')
console.dir("Hello Access Footer")
console.dir(AccessFooter)

let RoundBackground = document.getElementsByClassName('round-background')[0]
console.dir("Hello round-background")
console.dir(RoundBackground)

let linkContainer = document.getElementsByClassName('link-container')[0]
console.dir("Hello link-Container")
console.dir(linkContainer)

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
        //--> Done automatically

        //Reset the bottom value of the container when the mouse leaves the container
        linkContainer.addEventListener('mouseleave', (e) => {
            linkContainer.style.bottom = '0px';
        }, false);
    }
}

