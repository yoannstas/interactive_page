let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
img2.style.visibility = "hidden";
img2.style.display = "none";

img1.style.height = "300px";
img2.style.height = "300px";

img1.addEventListener("click", function () {
    img1.style.display = "none";
    img1.style.visibility = "invisible";
    img2.style.display = "inline";
    img2.style.visibility = "visible";
});
img2.addEventListener("click", function () {
    img2.style.display = "none";
    img2.style.visibility = "invisible";
    img1.style.display = "inline";
    img1.style.visibility = "visible";
});

//summary
let summaryBtn = document.getElementById("summaryBtn");
let summary = document.getElementById('summary');

//info
let infoBtn = document.getElementById("infoBtn");
let info = document.getElementById('info');

//contact
let reserveBtn = document.getElementById("reserveBtn");
let reserve = document.getElementById('contact');
info.style.display = "none";
reserve.style.display = "none";

summaryBtn.addEventListener("click", function () {
    summary.style.display = "block";
    info.style.display = "none";
    reserve.style.display = "none";
});
infoBtn.addEventListener("click", function () {
    summary.style.display = "none";
    info.style.display = "block";
    reserve.style.display = "none";
});
reserveBtn.addEventListener("click", function () {
    summary.style.display = "none";
    info.style.display = "none";
    reserve.style.display = "block";
});
