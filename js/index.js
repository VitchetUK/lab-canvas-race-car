window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
    launch();
  };

  function startGame() {}
};

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

class Road {
  constructor(image) {
    this.x = 0;
    this.y = 0;
    this.image = new Image();
    this.image.src = image;
  }

  draw() {
    ctx.drawImage(this.image, this.x, this.y, canvas.width, canvas.height);
  }

  // move() {
  //this.y += 4;
  //this.y += 0.5;
  //}
}

class Car {
  constructor(x, y, carImage, height, width) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.carImage = new Image();
    this.carImage.src = carImage;
  }
  draw() {
    ctx.drawImage(this.carImage, this.x, this.y, this.height, this.width);
  }
  moveLeft() {
    this.x -= 10;
  }
  moveRight() {
    this.x += 10;
  }
}

const roadImg = new Road("/images/road.png");
const carImage = new Car(210, 540, "/images/car.png", 75, 150);

function launch(counter) {
  roadImg.draw();
  //roadImg.move();
  carImage.draw();

  frames = requestAnimationFrame(launch);
}

document.addEventListener("keydown", (e) => {
  switch (e.keycode) {
    case 37:
      carImage.moveLeft();
      break;
    case 39:
      carImage.moveRight();
      break;
  }
  updateCanvas();
});

function updateCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  roadImg.draw();
  carImage.draw();
}
