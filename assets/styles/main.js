const scrollEffect = () => {
    const text = document.getElementById('text');
    const info = document.querySelector('.info');
    const card = document.querySelector('.card');

    const arrow = document.querySelector(".arrow");

    const home = document.querySelector('.home');
    const about = document.querySelector('.about');

    window.addEventListener('scroll', () => {
        //Navbar
        if(window.scrollY >= info.scrollHeight-200){
            home.classList.remove('active');
            about.classList.add('active');
        } else{
            about.classList.remove('active');
            home.classList.add('active');
        }

        const countSize = 50 + 0.03*window.scrollY;
        text.style.fontSize = (countSize < 70) ? countSize + "px" : 70 + "px";
        text.style.opacity = 1 - window.scrollY*0.0008;
        text.style.top = 50 - window.scrollY*0.09 + "%";

        const cardMargin = 500 - 0.5*window.scrollY;
        card.style.margin = (cardMargin > 100) ? "0 " + cardMargin + "px" : "0 " + 100 + "px";
        card.style.opacity = window.scrollY*0.001;

        arrow.style.opacity = 1 - window.scrollY*0.0075;
    })
}

scrollEffect();