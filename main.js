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
        mySliderImg.setAttribute("src", this.pics[this.num]);
    }   

    setImg() {
        this.slider.setAttribute("src", this.pics[this.num])
    }

    prev() {
        (this.num - 1 < 0) ? this.num = this.length - 1 : this.num -= 1;
        this.setImg()
    }

    next() {
        (this.num + 1 === this.length) ? this.num = 0 : this.num += 1;
        this.setImg()
    }
}

const coffeeSlider = new mySlider(myPics, sliderImg);

prevBtn.addEventListener('click', () => coffeeSlider.prev())

nextBtn.addEventListener('click', () => coffeeSlider.next())
