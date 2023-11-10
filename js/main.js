console.info(document.getElementById("myHeading").innerHTML);

document.getElementById('myTestEvent').addEventListener('click', myFunction);
function myFunction(){
    console.info('hi');
}

document.getElementById('myTestEvent').addEventListener('click',
 function(ev)
{
    console.dir(ev);
})

document.querySelector(".red").addEventListener('click', function(ev){
    document.querySelector('body').setAttribute('class', "redBack");
})
document.querySelector(".green").addEventListener('click', function(ev){
    document.querySelector('body').setAttribute('class', "greenBack");
})
document.querySelector(".blue").addEventListener('click', function(ev){
    document.querySelector('body').setAttribute('class', "blueBack");
})
document.querySelector(".reset").addEventListener('click', function(ev){
    document.querySelector('body').removeAttribute('class', "Back");
})

let imageAr = ['images/view1.jpg', 'images/view2.jpg', 'images/view3.jpg',
'images/view4.jpg',  'images/view5.jpg', 'images/view6.jpg'];

console.dir(imageAr);

document.getElementById('myImages').setAttribute('src', imageAr[2]);

let counter = 0;

function chgImage(){
    if (counter < imageAr.length){
        document.getElementById('myImages').setAttribute('src', imageAr[counter]);
        counter++;
    }
    else{
        counter = 0;
    }    
    console.info('Called');
}

setInterval(chgImage, 4000);

