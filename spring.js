const section1 = document.getElementById("section1")
window.addEventListener("scroll", function () {
    console.log(scrollY)
    if (scrollY > 160) {
        document.getElementById("stix1").classList.add("st1")
        document.getElementById("stix2").classList.add("st2")
        document.getElementById("stix3").classList.add("st3")
        document.getElementById("stix4").classList.add("st4")
        document.getElementById("stix5").classList.add("st5")
    }
})