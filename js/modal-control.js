/* Modal Control */
document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.getElementById("open-game-btn");
    const modal = document.getElementById("game-modal");
    const closeBtn = document.getElementById("game-close-btn");

    if (!openBtn || !modal || !closeBtn) return;

    openBtn.addEventListener("click", () => {
        modal.classList.add("open");
        modal.setAttribute("aria-hidden", "false");
        openBtn.setAttribute("aria-expanded", "true");
    });

    closeBtn.addEventListener("click", () => {
        modal.classList.remove("open");
        modal.setAttribute("aria-hidden", "true");
        openBtn.setAttribute("aria-expanded", "false");
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeBtn.click();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("open")) {
            closeBtn.click();
        }
    });
});
