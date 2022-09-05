const dropdownStub = document.querySelector(".menu-stub");
const dropdownContent = document.querySelector(".menu-content");

const toggleExpand = (e) => {
    if (dropdownContent.classList.contains("hidden")) {
        dropdownContent.classList.remove("hidden");
        dropdownContent.classList.add("expand");
        // console.log(dropdownContent);
    } else {
        dropdownContent.classList.toggle("expand");
        dropdownContent.classList.toggle("contract");
        // dropdownContent.classList.toggle("hidden");
        console.log(dropdownContent);
    }
};

dropdownStub.addEventListener("click", toggleExpand);
