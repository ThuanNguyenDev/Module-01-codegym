function Hero(image, top, left, size, speed) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;
    this.getHeroElement = function () {
        return '<img width= "' + this.size + '"' +
            'height ="' + this.size + '"' +
            'src = "' + this.image + '"' +
            'style = " top:' + this.top + 'px; left:' + this.left + 'px; position:absolute;" />';
    }
    this.moveRight = function () {
        this.left += this.speed;
        console.log("Ok Right: " + this.left);
    }
    this.moveBottom = function () {
        this.top += this.speed;
        console.log("Ok Bottom: " + this.top);
    }
    this.moveLeft = function () {
        this.left -= this.speed;
        console.log("Ok Left: " + this.left);
    }
    this.moveTop = function () {
        this.top -= this.speed;
        console.log("Ok Top: " + this.top);
    }



}
var nobita = new Hero('Nobita.png', 20, 30, 200, 200);
function star() {
    let randomNumber = Math.floor(Math.random() * 4);

    switch (randomNumber) {
        case 0:
            if (nobita.top < window.innerHeight - nobita.size) {
                nobita.moveBottom();
            }
            break;
        case 1:
            if (nobita.left < window.innerWidth - nobita.size) {
                nobita.moveRight();
            }
            break;
        case 2:
            if (nobita.top > nobita.size) {
                nobita.moveTop();
            }
            break;
        case 3:
            if (nobita.left > nobita.size) {
                nobita.moveLeft();
            }
    }
    document.getElementById("imageOut").innerHTML = nobita.getHeroElement();
    console.log(randomNumber);
    setTimeout(star, 500)
}
star();
