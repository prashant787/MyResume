const sections = document.querySelectorAll('.right-box');
const options = { threshold: 0.5 };

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        var nav = document.querySelector('.nav-home');
        switch (entry.target.className) {
            case 'right-box 1':
                nav = document.querySelector('.nav-home');
                classAddRemove(entry, nav);
                break;
            case 'right-box 2':
                nav = document.querySelector('.nav-experience');
                classAddRemove(entry, nav);
                break;
            case 'right-box 3':
                nav = document.querySelector('.nav-abilities');
                classAddRemove(entry, nav);
                break;
            case 'right-box 4':
                nav = document.querySelector('.nav-projects');
                classAddRemove(entry, nav);
                break;
            case 'right-box 5':
                nav = document.querySelector('.nav-contact');
                classAddRemove(entry, nav);
                break;
            default:
                classAddRemove(entry, nav);
                break;
        }
    });
}, options);

var classAddRemove = (entry, nav) => {
    if (entry.isIntersecting) {
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
};

sections.forEach(section => {
    observer.observe(section);
});

const navbar = document.querySelector('.nav').addEventListener('click', event => {
    console.log(event.target.closest('.nav-item').classList[2]);
    var item = 'a.' + event.target.closest('.nav-item').classList[2];
    document.querySelector(item).click();
});

console.log(document.querySelector('a.link-home'));