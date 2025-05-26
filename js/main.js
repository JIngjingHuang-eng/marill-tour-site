
// Scroll to top button functionality
document.addEventListener("DOMContentLoaded", function () {
    const scrollBtn = document.createElement("button");
    scrollBtn.id = "scrollToTop";
    scrollBtn.textContent = "↑";
    scrollBtn.style.position = "fixed";
    scrollBtn.style.bottom = "20px";
    scrollBtn.style.right = "20px";
    scrollBtn.style.padding = "10px 15px";
    scrollBtn.style.fontSize = "18px";
    scrollBtn.style.display = "none";
    scrollBtn.style.zIndex = "999";
    document.body.appendChild(scrollBtn);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    });

    scrollBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
