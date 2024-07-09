const menu = document.getElementById("menu");

Array.from(document.getElementsByClassName("menu-item")).forEach((item, index) => {
    item.onmouseover = () => {
        menu.dataset.activeIndex = index;
    }
});

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('show');
//         }
//     });
// });

// Code if you want the transitions to only happen once
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden, .hidden-portfolio');
hiddenElements.forEach((el) => observer.observe(el));