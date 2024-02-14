const prevBtn = document.getElementById("PREV");
const nextBtn = document.getElementById("NEXT");
const container = document.querySelector(".carousel");
const children = document.querySelectorAll(".cart");

let currentIndex = 0;

//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % children.length;
    updateClassesOnPrev();
});

function updateClassesOnPrev() {
    children.forEach((child, index) => {
        const newIndex = (index - currentIndex + children.length) % children.length + 1;
        child.classList.remove(`carr1`, `carr2`, `carr3`, `carr4`, `carr5`,`car1`, `car2`, `car3`, `car4`, `car5`);
        child.classList.add(`carr${newIndex}`);
    });
}

//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + children.length) % children.length;
    updateClassesOnNext();
});

function updateClassesOnNext() {
    children.forEach((child, index) => {
        const newIndex = (index - currentIndex + children.length) % children.length + 1;
        child.classList.remove(`carr1`, `carr2`, `carr3`, `carr4`, `carr5`,`car1`, `car2`, `car3`, `car4`, `car5`);
        child.classList.add(`car${newIndex}`);
    });
}
