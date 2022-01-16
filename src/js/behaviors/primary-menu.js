document.addEventListener("readystatechange", function (event) {
    if (event.target.readyState === "complete") {
        console.log("readyState: complete");
        init();
    }
});

function init() {
    const btn = document.querySelector("[data-js-nav-btn]");
    const nav = document.querySelector("[data-js-nav]");

    btn.addEventListener("click", function() {
        nav.classList.toggle("-active");
    });
}