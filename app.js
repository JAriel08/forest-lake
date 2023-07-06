const visMisVal = document.querySelector(".vis-mis-val");
const texts = document.querySelectorAll(".text span");
const btns = document.querySelectorAll(".btn")

visMisVal.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    console.log(id);
    if (id) {
        btns.forEach((btn) => {
            btn.classList.remove("active")
        })
        e.target.classList.add("active");

        texts.forEach((text) => {
            text.classList.remove("active");
            const item = document.getElementById(id);
            item.classList.add('active')
            console.log(item)
            
        })
    }
})


