
//Define Global Variables
const backTop = document.querySelector('#back_top');
const allSection = document.querySelectorAll('section');
const navSectionList = document.querySelector('#navbar__list')
const sec1 = document.querySelector('#Public_Scrutinise');
const sec2 = document.querySelector('#London_Olympics');
const sec3 = document.querySelector('#Social_Media');


// build the nav
for (section of allSection) {
    let secID = section.getAttribute('id')
    const secItem = document.createElement('li');
    const secLink = document.createElement('a');
    secLink.textContent = secID.replace(/_/g, " ");
    secLink.setAttribute('href', '#' + secID);
    secItem.appendChild(secLink);
    if (section.getAttribute('class') != null) {
        secItem.classList.add('menu__link', section.getAttribute('class'));
    } else {
        secItem.classList.add('menu__link');

    }
    secItem.setAttribute('data-link', secID);
    navSectionList.appendChild(secItem);
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("nav_container").style.top = "0";
    } else {
        document.getElementById("nav_container").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}

// Scroll to anchor ID using scrollTO event
// back to top button fun
function backToTop() {
    document.documentElement.scrollTop = 0;
}
// add back to top fun
backTop.addEventListener('click', backToTop);


// Set sections as active
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

//changing active section and tab view items
document.addEventListener('scroll', function () {
    const tabs = document.querySelectorAll('li');
    if (isInViewport(sec1)) {
        sec1.classList.add('active')
        tabs[0].classList.add('active')
        sec2.classList.remove('active')
        tabs[1].classList.remove('active')
        sec3.classList.remove('active')
        tabs[2].classList.remove('active')
    }
    else if (isInViewport(sec2)) {
        sec1.classList.remove('active')
        tabs[0].classList.remove('active')
        sec2.classList.add('active')
        tabs[1].classList.add('active')
        sec3.classList.remove('active')
        tabs[2].classList.remove('active')
    } else if (isInViewport(sec3)) {
        sec1.classList.remove('active')
        tabs[0].classList.remove('active')
        sec2.classList.remove('active')
        tabs[1].classList.remove('active')
        sec3.classList.add('active')
        tabs[2].classList.add('active')
    }
});