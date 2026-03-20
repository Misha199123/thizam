const декабрь = document.getElementById("дек")
const январь = document.getElementById("ян")
const февраль = document.getElementById("фев")

const m1 = document.getElementById("m1")
const m2 = document.getElementById("m2")
const m3 = document.getElementById("m3")

декабрь.addEventListener("mouseover", function () {
    m1.style.zIndex = "2"
    m2.style.zIndex = "0"
    m3.style.zIndex = "0"

    m1.style.transform = "scale(1.2)"
})

январь.addEventListener("mouseover", function () {
    m2.style.zIndex = "2"
    m1.style.zIndex = "0"
    m3.style.zIndex = "0"

    m2.style.transform = "scale(1.2)"
})

февраль.addEventListener("mouseover", function () {
    m3.style.zIndex = "2"
    m2.style.zIndex = "0"
    m1.style.zIndex = "0"

    m3.style.transform = "scale(1.2)"
})

февраль.addEventListener("mouseout", function () {
    m3.style.transform = "scale(1)"
    m2.style.transform = "scale(1)"
    m1.style.transform = "scale(1)"
})

январь.addEventListener("mouseout", function () {
    m3.style.transform = "scale(1)"
    m2.style.transform = "scale(1)"
    m1.style.transform = "scale(1)"
})


декабрь.addEventListener("mouseout", function () {
    m3.style.transform = "scale(1)"
    m2.style.transform = "scale(1)"
    m1.style.transform = "scale(1)"
})



const галерея = document.getElementById("галерея")
window.addEventListener("scroll", function () {
    console.log(scrollY)
    if (scrollY > 1800) {
        document.getElementById("гал2").classList.add("гал2")
        document.getElementById("гал3").classList.add("гал3")
        document.getElementById("гал4").classList.add("гал4")
        document.getElementById("гал5").classList.add("гал5")
        document.getElementById("гал6").classList.add("гал6")
        document.getElementById("гал7").classList.add("гал7")
    }
})


