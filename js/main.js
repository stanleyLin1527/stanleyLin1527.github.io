document.addEventListener("DOMContentLoaded", () => {
    const mainTabs = document.querySelectorAll(".nav-tab");
    const pages = document.querySelectorAll(".page-section");

    const interestTabs = document.querySelectorAll(".interest-tab");
    const interestSections = document.querySelectorAll(".interest-section");

    const jumpButtons = document.querySelectorAll("[data-jump]");

    function showPage(targetId) {
        mainTabs.forEach((tab) => {
            tab.classList.toggle("active", tab.dataset.target === targetId);
        });

        pages.forEach((page) => {
            page.classList.toggle("active", page.id === targetId);
        });

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    function showInterest(targetId) {
        interestTabs.forEach((tab) => {
            tab.classList.toggle("active", tab.dataset.interest === targetId);
        });

        interestSections.forEach((section) => {
            section.classList.toggle("active", section.id === targetId);
        });
    }

    mainTabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            showPage(tab.dataset.target);
        });
    });

    interestTabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            showInterest(tab.dataset.interest);
        });
    });

    jumpButtons.forEach((button) => {
        button.addEventListener("click", () => {
            showPage(button.dataset.jump);
        });
    });

    document.querySelectorAll('a[aria-disabled="true"]').forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
        });
    });
});
