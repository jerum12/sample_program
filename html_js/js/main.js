function clickLights(type) {
  console.log('Nag Click ako button');
  if (type === 'lightson') document.getElementById('bulb').src = 'pic_bulbon.gif';
  else document.getElementById('bulb').src = 'pic_bulboff.gif';
}

const scrollableElement = window;

function loadPage() {
  //   scrollableElement.addEventListener('scroll', function (event) {
  //     const pos = scrollableElement.scrollY;

  //     //console.log(pos);
  //     if (pos === 400) {
  //       alert('Hello World!');
  //     }
  //   });

  //data from backend 
  var students_array = [
    'Melvin',
    'Edgar',
    'Joey',
    'Jasmin',
    'Katrina',
    'Lemuel',
    'Prince',
    'Ryan',
    'Zephaniah',
  ];

  document.getElementById('changeDemo').addEventListener('click', function (event) {
    var demo = document.getElementById('demo');
    for (let i in students_array) {
      var div = document.createElement('div');
      div.textContent = `Students: ${students_array[i]}`;
      demo.appendChild(div);
    }
  });

  //alert('Welcome to my Website');
}
