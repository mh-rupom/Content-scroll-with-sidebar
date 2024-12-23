

// console.log("Window width:", windowWidth);
let elements = document.getElementsByClassName("pricing_item");
let monthly_item = document.getElementsByClassName("item_monthly");
monthly_item[0].style.display = "none";
for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", function () {
        for (let j = 0; j < elements.length; j++) {
            elements[j].classList.remove("pr_mark_item");
        }
        this.classList.add("pr_mark_item");
        let targetButtons = this.getElementsByClassName("pr_item_btn");
        for (let m = 0; m < targetButtons.length; m++) {
            targetButtons[m].classList.remove("pr_inactive_item_btn");
            targetButtons[m].classList.add("pr_active_item_btn");
        }
        for (let j = 0; j < elements.length; j++) {
            if (elements[j] !== this) {
                let inactiveButtons = elements[j].getElementsByClassName("pr_item_btn");
                for (let n = 0; n < inactiveButtons.length; n++) {
                    inactiveButtons[n].classList.remove("pr_active_item_btn");
                    inactiveButtons[n].classList.add("pr_inactive_item_btn");
                }
            }
        }
        const targetClasses = ["pr_item_title", "pr_item_price", "pr_details_item"];
        targetClasses.forEach(className => {
            let targetElements = document.getElementsByClassName(className);
            for (let k = 0; k < targetElements.length; k++) {
                if (targetElements[k].closest(".pricing_item") == this) {
                    targetElements[k].classList.add("pr_active_item_color");
                } else {
                    targetElements[k].classList.remove("pr_active_item_color");
                }
            }
        });
    });
}
document.querySelectorAll('input[type="checkbox"]').forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        let elementsAnnually = document.getElementsByClassName("item_annually");
        if (checkbox.checked) {
        for(let r = 0; r < elementsAnnually.length ; r++){
            elementsAnnually[r].style.display = 'none';
        }
        monthly_item[0].style.display = "block";
        }else{
            for(let r = 0; r < elementsAnnually.length ; r++){
                elementsAnnually[r].style.display = 'block';
            }
            monthly_item[0].style.display = "none";
        }
    });

});
  