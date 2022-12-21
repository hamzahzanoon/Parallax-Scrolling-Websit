const oldDubai = document.querySelector("#old-dubai");
const frame = document.querySelector("#frame");
const logo = document.querySelector(".logo");
const logoRrabic = document.querySelector(".logo-arabic");

logo.style.display = "none";
logoRrabic.style.display = "none";


window.addEventListener("scroll", function()  {
    let value = window.scrollY;

    if(value > 100 && !(value >3100)) {
        document.querySelector(".scroll").classList.add("fade");
    }else {
        document.querySelector(".scroll").classList.remove("fade");  
    }
    if(value < 1200) {
        logo.style.display = "none";
        logoRrabic.style.display = "none";
        frame.style.width = 1900 - value + 'px';
        frame.style.height = 1200 - value * 0.5 + 'px';
        oldDubai.style.width = screen.width - value + 'px';
        oldDubai.style.height = screen.height - value * 0.5 + 'px';
        this.document.querySelector(".scroll").innerHTML = 'Scroll to New Dubai'
    }else {
        logo.style.display = "block";
        logoRrabic.style.display = "block";
        logo.style.left = 270 + ((value - 1200)*1.5) + 'px';
        logoRrabic.style.right = 0 + ((value - 1200)*1.5) + 'px';
    }
    if(value > 1400) {
        logoRrabic.setAttribute('src', "./images/dbae.jpg")
    }if(value > 2000 && value < 3200) {
        frame.style.width = 601 + (value - 2000) * 0.5 + 'px';
        frame.style.height = 600 + (value - 2000) * 0.5 + 'px';
        oldDubai.style.width = 339 + (value - 2000) + 'px';
        oldDubai.style.height = 265 + (value - 2000) * 0.5 + 'px';
        document.querySelector(".scroll").innerHTML = "Welcome To New Dubai";  
    }
});