
let slider = document.querySelector(".our-workers-list");
let slides = slider.children;
let newSlide;
let backButton = document.querySelector(".back");
let forwardButton = document.querySelector(".forvard");

function getSlideStep(){
    let currentWidth = window.innerWidth;
    let stepWidth;
    console.log(currentWidth);
    switch(true){
        case currentWidth < Number(768):
            stepWidth = 320;
            break
        case currentWidth >=768 && currentWidth < 1366:
            stepWidth = 258;
            break
        default:
            stepWidth = 250;
            break
    }
    return stepWidth
}

function initSlider(){
    backButton.addEventListener("click", function () {  
        if(slider.classList.contains("function-in-progress")){
            return
        }

        slider.classList.add("function-in-progress");

        newSlide = slides[0].cloneNode(true);
        slider.insertBefore(newSlide, slides[slides.length])

        setTimeout(() => {  
            slider.classList.add("slider-container-transition");
            slider.style.transform = `translateX(-${getSlideStep()}px)`;
        }, 50);

        setTimeout(() => {
            slider.classList.remove("slider-container-transition");
            slider.style.transform = "translateX(0)";
            document.querySelector(".our-workers-list__item").remove();
            slider.classList.remove("function-in-progress");
        }, 800);
    })

    forwardButton.addEventListener("click", function () {
        if(slider.classList.contains("function-in-progress")){
            return
        }

        slider.classList.add("function-in-progress");

        newSlide = slides[slides.length-1].cloneNode(true);
        slider.insertBefore(newSlide, slides[0])

        slider.classList.remove("slider-container-transition");
        slider.style.transform = `translateX(-${getSlideStep()}px)`;

        setTimeout(() => { 
            slider.classList.add("slider-container-transition");
            slider.style.transform = "translateX(0)";
        }, 50);
    
        setTimeout(() => { 
            slider.classList.add("slider-container-transition");
            slider.style.transform = "translateX(0)";
            slider.classList.remove("function-in-progress");
            document.querySelectorAll(".our-workers-list__item")[slides.length-1].remove();
        }, 800);
    })
}

export default initSlider;