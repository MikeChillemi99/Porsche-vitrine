const cars = [
    {
      id: 1,
      model: '911 S/T',
      img: 'assets/st.png',
      acceleration: "3,7",
      power: "525",
      maxspeed: "300",
      price: "367'400,00",
      bgColor: 'radial-gradient(#FFFFFF, #728FA1) fixed'
    },
    {
      id: 2,
      model: '911 Dakar',
      img: 'assets/dakar.png',
      acceleration: "3,4",
      power: "480",
      maxspeed: "240",
      price: "269'700,00",
      bgColor: 'radial-gradient(#FFFFFF, #E3BC28) fixed'
    },
    {
      id: 3,
      model: '911 GT3 RS',
      img: 'assets/gt3-rs.png',
      acceleration: "3,2",
      power: "525",
      maxspeed: "296",
      price: "301'300,00",
      bgColor: 'radial-gradient(#FFFFFF, #62707D) fixed'
    },
    {
      id: 4,
      model: '911 Targa 4 GTS',
      img: 'assets/targa-4-gts.png',
      acceleration: "3,1",
      power: "541",
      maxspeed: "312",
      price: "244'800,00",  
      bgColor: 'radial-gradient(#FFFFFF, #730F1C) fixed'
    },
    {
      id: 5,
      model: '911 Carrera Cabriolet',
      img: 'assets/carrera-cabrio.png',
      acceleration: "4,3",
      power: "394",
      maxspeed: "291",
      price: "162'700,00",
      bgColor: 'radial-gradient(#FFFFFF, #A09F4E) fixed'
    },
    {
      id: 6,
      model: '911 Carrera',
      img: 'assets/carrera.png',
      acceleration: "4,1",
      power: "394",
      maxspeed: "294",
      price: "144'900,00", 
      bgColor: 'radial-gradient(#FFFFFF, #113178) fixed'

    },
    {
      id: 7,
      model: '911 Turbo 50 Ans',
      img: 'assets/turbo-50.png',
      acceleration: "2,7",
      power: "650",
      maxspeed: "330",
      price: "315'300,00",
      bgColor: 'radial-gradient(#FFFFFF, #7F7E83) fixed' 
    },
    {
      id: 8,
      model: '911 GT3',
      img: 'assets/gt3.png',
      acceleration: "3,4",
      power: "510",
      maxspeed: "318",
      price: "216'700,00",
      bgColor: 'radial-gradient(#FFFFFF, #004397) fixed' 
    },
];

// Variables
const carModel = document.getElementById('car-model');
const carImg = document.getElementById('img');
const carAcceleration = document.getElementById('car-acceleration');
const carPower = document.getElementById('car-power');
const carMaxSpeed = document.getElementById('car-max-speed');
const carPrice = document.getElementById('car-price');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Reload animation
const porscheTitle = document.querySelector('.porsche-title h1');
const animationTitle = document.querySelector('.car-title','.car-title h1');
const animationImg = document.querySelector('.car-img');
const animationInfos = document.querySelector('.car-infos');
const titleContainer = document.querySelector('.title-container');
const chevrons = document.querySelectorAll('.title-container i');
const carInfosLeft = document.querySelector('.car-infos-left');
const carInfosRight = document.querySelector('.car-infos-right');
const buttons = document.querySelectorAll('.buttons button');
const accelerationElement = document.querySelector('.acceleration');
const powerElement = document.querySelector('.power');
const maxSpeedElement = document.querySelector('.max-speed');
const underlineElements = document.querySelectorAll('.underline');
const underlineRedElement = document.querySelector('.underline-red');

let currentItem = 0;

function fnShowCar(car) {
    const item = cars[car];
    carModel.textContent = item.model;
    carImg.src = item.img;
    carAcceleration.textContent = item.acceleration;
    carPower.textContent = item.power;
    carMaxSpeed.textContent = item.maxspeed;
    carPrice.textContent = item.price;
    document.body.style.background = item.bgColor;
}

function fnResetAnimation(element) {
    element.style.animation = 'none';
    element.offsetHeight;
    element.style.animation = '';
}

function fnResetMovingAnimations() {
    chevrons.forEach(chevron => {
      fnResetAnimation(chevron);
    });
    buttons.forEach(button => {
      fnResetAnimation(button);
    });
    const spans = porscheTitle.querySelectorAll('span');
    spans.forEach(span => {
      fnResetAnimation(span);
    }); 
    underlineElements.forEach(underline => {
      fnResetAnimation(underline);
    });
    fnResetAnimation(underlineRedElement); 
}

function fnResetButtonsgAnimations() {
  buttons.forEach(button => {
    fnResetAnimation(button);
  });
}

function fnResetTitlegAnimations() {
  const spans = porscheTitle.querySelectorAll('span');
  spans.forEach(span => {
    fnResetAnimation(span);
  }); 
}

function fnResetUnderlineAnimations() {
  underlineElements.forEach(underline => {
    fnResetAnimation(underline);
  });
  fnResetAnimation(underlineRedElement); 
}

function fnResetCarInfosAnimations() {
  fnResetAnimation(animationTitle);
  fnResetAnimation(animationImg);
  fnResetAnimation(animationInfos);
  fnResetAnimation(carInfosLeft);
  fnResetAnimation(carInfosRight);
  fnResetAnimation(accelerationElement);
  fnResetAnimation(powerElement);
  fnResetAnimation(maxSpeedElement);
}

function fnResetAllAnimations() {
  fnResetMovingAnimations();
  fnResetCarInfosAnimations();
}

window.addEventListener('DOMContentLoaded', function() {
    fnShowCar(currentItem);
});

nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > cars.length - 1)
    {
        currentItem = 0;
    }
    fnShowCar(currentItem);
    fnResetAllAnimations();
})

prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0)
    {
        currentItem = cars.length - 1;
    }
    fnShowCar(currentItem);
    fnResetAllAnimations();
})
