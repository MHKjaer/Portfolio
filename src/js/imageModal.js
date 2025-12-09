const btnImageBack = document.getElementById("btnImageBack");
const btnImageNext = document.getElementById("btnImageNext");
//const shownImage = document.getElementById("image");
const shownImage = document.querySelector("div#image img");

let i = 0;

//First render, and adds eventListeners
export default function imageModal(imgs) {
    updateImg(imgs)

    btnImageNext.addEventListener("click", () => indexAdd(imgs));
    btnImageBack.addEventListener("click", () => indexSub(imgs))
};

//Updates the image shown
function updateImg(imgs) {
    shownImage.src = imgs[i].path;
    shownImage.setAttribute("alt", imgs[i].desc);
}

//Increases the index
function indexAdd(imgs) {
    if (i === imgs.length-1) {
        i = 0;
        updateImg(imgs);
    } else {
        i++;
        updateImg(imgs);
    }
}

//Decreases the index
function indexSub(imgs) {
    if (i === 0) {
        i = imgs.length-1;
        updateImg(imgs);
    } else {
        i--;
        updateImg(imgs);
    }
}