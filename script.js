/*Script for the Build Guild Nagpur website*/

/*Opening new window functionality*/
document.querySelectorAll('a').forEach(link => {
    link.setAttribute('target', '_blank');
});


/*X and Y axis following the mouse cursor*/
    const xAxis = document.getElementById("x-axis");
    const yAxis = document.getElementById("y-axis");    

document.addEventListener("mousemove", (e) => {
    xAxis.style.top = `${e.clientY}px`;
    xAxis.style.left = `${e.clientX}px`;
    yAxis.style.left = `${e.clientX}px`;
    yAxis.style.top = `${e.clientY}px`;

    xAxis.style.transform = "translateY(-50%)";
    yAxis.style.transform = "translateX(-50%)";

    xAxis.style.transition = "top 0.1s ease-in-out, left 0.1s ease-in-out";
    yAxis.style.transition = "top 0.1s ease-in-out, left 0.1s ease-in-out";
});

/*Navbar hide/show on scroll*/
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Scrolling down
        navbar.style.transform = 'translateX(-50%) translateY(-100%)';
    } else {
        // Scrolling up
        navbar.style.transform = 'translateX(-50%) translateY(0)';
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});

function startVisibilityRotationCycle(element, rotateDuration = 30000, pauseDuration = 30000) {
    let timer = null;
    let visible = false;
    let running = false;

    function clearRotationTimer() {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
    }

    function pauseRotation() {
        clearRotationTimer();
        running = false;
        element.style.animationPlayState = 'paused';
    }

    function beginRotationPhase() {
        if (!visible) {
            pauseRotation();
            return;
        }

        running = true;
        element.style.animationPlayState = 'running';
        timer = setTimeout(() => {
            element.style.animationPlayState = 'paused';
            running = false;
            if (visible) {
                timer = setTimeout(beginRotationPhase, pauseDuration);
            }
        }, rotateDuration);
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.target !== element) return;
            if (entry.isIntersecting) {
                visible = true;
                if (!running) {
                    beginRotationPhase();
                }
            } else {
                visible = false;
                pauseRotation();
            }
        });
    }, {
        root: null,
        threshold: 0.1
    });

    observer.observe(element);
}

document.addEventListener('DOMContentLoaded', () => {
    const buildGuildLogo = document.getElementById('build-guild-logo');
    const buildGuildSmallLogo = document.getElementById('build-guild-small-logo');

    if (buildGuildLogo) {
        startVisibilityRotationCycle(buildGuildLogo);
    }
    if (buildGuildSmallLogo) {
        startVisibilityRotationCycle(buildGuildSmallLogo);
    }
});


/*Navbar functionality*/
function homeFunction() {

    aboutDiv = document.getElementById("about");
    aboutDiv.style.backgroundColor = "#344b6a";
    aboutDiv.style.color = "inherit";

    homeDiv = document.getElementById("home");
    homeDiv.style.backgroundColor = "#a8f0ae";
    homeDiv.style.padding = "5px 20px";
    homeDiv.style.borderRadius = "20px";
    homeDiv.style.color = "#000000";
    
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

function aboutFunction() {

    aboutDiv = document.getElementById("about");
    aboutDiv.style.backgroundColor = "#a8f0ae";
    aboutDiv.style.padding = "5px 20px";
    aboutDiv.style.borderRadius = "20px";
    aboutDiv.style.color = "#000000";
    
    window.scrollTo({
        top: 620,
        behavior: "smooth"
    });
}

function scheduleFunction() {
    
    window.scrollTo({
        top: 1230,
        behavior: "smooth"
    });
}

function faqFunction() {
    
    window.scrollTo({
        top: 2040,
        behavior: "smooth"
    });
}