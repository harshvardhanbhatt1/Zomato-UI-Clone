document.addEventListener("DOMContentLoaded", function () {
    // Animate main section elements
    const mainImage = document.querySelector("main img");
    const mainText = document.querySelector("main p");
    const searchBox = document.querySelector("input[type='text']");
    const findFoodBtn = document.querySelector("button");

    // Smooth fade-in animation
    function fadeIn(element, delay) {
        setTimeout(() => {
            element.style.opacity = 1;
            element.style.transform = "translateY(0)";
        }, delay);
    }

    [mainImage, mainText, searchBox, findFoodBtn].forEach((el, index) => {
        el.style.opacity = 0;
        el.style.transform = "translateY(20px)";
        fadeIn(el, index * 300);
    });

    // Button click effect
    findFoodBtn.addEventListener("click", () => {
        findFoodBtn.style.transform = "scale(0.95)";
        setTimeout(() => {
            findFoodBtn.style.transform = "scale(1)";
        }, 100);
    });
});
