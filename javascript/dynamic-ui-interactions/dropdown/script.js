

function createDropDown(stub, content) {
    const dropdownStub = document.querySelector(stub);
    const dropdownContent = document.querySelector(content);

    const toggleExpand = (e) => {
        if (dropdownContent.classList.contains("hidden")) {
            dropdownContent.classList.remove("hidden");
            dropdownContent.classList.add("expand");
            // console.log(dropdownContent);
        } else if (dropdownContent.classList.contains("contract")) {
            dropdownContent.classList.toggle("contract");
    
        }
        
        else {
            dropdownContent.classList.toggle("expand");
            dropdownContent.classList.toggle("contract");
            // dropdownContent.classList.toggle("hidden");
            console.log(dropdownContent);
        }
    };

    dropdownStub.addEventListener("click", toggleExpand);
}



createDropDown(".menu-stub", ".menu-content");
createDropDown(".st", ".con");

