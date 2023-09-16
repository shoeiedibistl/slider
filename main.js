const myPics = ["img/0.jpg", "img/1.jpg", "img/2.jpg"]
const sliderImg = document.querySelector(".my-slider img")
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

class mySlider {
    constructor(picsArr, mySliderImg) {
        this.pics = picsArr;
        this.length = picsArr.length;
        this.num = 0;
        this.slider = mySliderImg;
        sliderImg.setAttribute("src", this.pics[this.num]);
    }   

    prev() {
        (this.num - 1 < 0) ? this.num = this.length - 1 : this.num -= 1;
        this.slider.setAttribute("src", this.pics[this.num])
    }

    next() {
        (this.num + 1 === this.length) ? this.num = 0 : this.num += 1;
        this.slider.setAttribute("src", this.pics[this.num])
    }
}

const slider1 = new mySlider(myPics, sliderImg);

prevBtn.addEventListener('click', () => slider1.prev())

nextBtn.addEventListener('click', () => slider1.next())