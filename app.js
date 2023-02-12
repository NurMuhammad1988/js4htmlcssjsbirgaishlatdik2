// let ism = prompt("Ismingizni kiriting");

// let familya = prompt("Familyangizni kiriting");

// if (ism || familya) {
//     alert(ism + familya + "Saytimizga Hush kelibsiz");
// }

// else {
//     alert("Harif bilan yozing");
// }





// let button1 = document.querySelector('button'); 11 tegni chaqirish

let button1 = document.querySelector('.button1'); // 22 classni chaqirish

// let button1 = document.querySelector('#button2'); // 33 id bilan ishlash



button1.onclick = function () {
    // console.log('Salom')
    // document.write('Assalomu aleykum');
    button1.innerHTML = 'Buttonga bosish 1 martta'
    button1.style.background = 'pink';
    button1.style.width = '330px';
    button1.style.height = '100px';
    button1.className = 'button2'
    console.log(button1);
}


// button1.ondblclick = function () {
//     // console.log('Salom')
//     // document.write('Assalomu aleykum');
//     button1.innerHTML = 'Buttonga bosish 2 martta';
//     button1.style.background = 'green';
//     button1.style.height = '100px';
//     button1.style.width = '500px';
//     // button1.className = 'button2';
// }



// button1.onmouseover = function () {
//     // console.log('Salom')
//     // document.write('Assalomu aleykum');
//     button1.innerHTML = 'Buttonga qora hover bo`ldi';
//     button1.style.background = 'blue';
//     button1.style.height = '100px';
//     button1.style.width = '500px';
//     // button1.className = 'button2';
// }


// button1.onmouseout = function () {
//     // console.log('Salom')
//     // document.write('Assalomu aleykum');
//     button1.innerHTML = 'Buttonga hover olindi yozuv qizil boldi';
//     button1.style.background = 'black';
//     button1.style.height = '100px';
//     button1.style.width = '500px';
//     // button1.className = 'button2';
//     button1.style.color ='red';
// }



