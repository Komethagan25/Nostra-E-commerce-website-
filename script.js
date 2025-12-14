
function closeofferbar() {
    document.getElementById("offerbar").style.display = "none";
}
// banner section

document.addEventListener("DOMContentLoaded", function () {

    const slides = document.querySelectorAll(".slide");
    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");

    if (slides.length === 0 || !next || !prev) return;

    let index = 0;

    function showSlide(i) {
        slides.forEach(slide => slide.style.display = "none");
        slides[i].style.display = "block";
    }

    showSlide(index);

    next.addEventListener("click", function () {
        index = (index + 1) % slides.length;
        showSlide(index);
    });

    prev.addEventListener("click", function () {
        index = (index - 1 + slides.length) % slides.length;
        showSlide(index);
    });

});


// collections page js

// search function
const searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("keyup", filterProducts);
}



// chckbox
const filters = document.querySelectorAll(".filter");
filters.forEach(filter => {
    filter.addEventListener("change", filterProducts);
});


// filter function
function filterProducts() {
    const searchText = searchInput.value.toLowerCase();

    // Collect checked values
    const selectedOccasion = getSelectedValues("occasion");
    const selectedColor = getSelectedValues("color");
    const selectedArrival = getSelectedValues("arrival");

    const products = document.querySelectorAll(".product");

    products.forEach(product => {
        const occasion = product.dataset.occasion;
        const color = product.dataset.color;
        const arrival = product.dataset.arrival;
        const title = product.querySelector("h4").innerText.toLowerCase();

        let show = true;

        // search filter
        if (!title.includes(searchText)) {
            show = false;
        }

        // occasion filter
        if (selectedOccasion.length > 0 && !selectedOccasion.includes(occasion)) {
            show = false;
        }

        // color filter
        if (selectedColor.length > 0 && !selectedColor.includes(color)) {
            show = false;
        }

        // arrival filter
        if (selectedArrival.length > 0 && !selectedArrival.includes(arrival)) {
            show = false;
        }

        // SHOW or HIDE product
        product.style.display = show ? "block" : "none";
    });
}


//  function to get checked values
function getSelectedValues(type) {
    const checked = document.querySelectorAll(`input[data-type="${type}"]:checked`);
    return Array.from(checked).map(c => c.value);
}

// mobile sidebar
const openBtn = document.getElementById("openSidebar");
const closeBtn = document.getElementById("closeSidebar");
const sidebar = document.getElementById("mobileSidebar");

openBtn.addEventListener("click", function () {
    sidebar.classList.add("active");
});

closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("active");
});



