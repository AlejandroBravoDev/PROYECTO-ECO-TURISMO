window.addEventListener("scroll", function(){
    let header = document.querySelector("header");
    header.classList.toggle("baja", this.window.scrollY>50);
} )


let burguer = document.querySelector(".burger");
let navLinks = document.querySelector(".nav-links");

burguer.addEventListener("click", () => {
    navLinks.classList.toggle("active");

});

//slider de destinos
document.addEventListener('DOMContentLoaded'/*espera a que todo el html esté cargado al 100%, cuando se carga el html se ejecuta la función */, function(){
    //se seleccionan todos los elementos que vamos a manipular del html
    const slider1 = document.querySelector(".slider1");//se selecciona el div con clase .slider
    const slider = document.querySelector(".slider");//se selecciona el div con clase .slider
    const slides = document.querySelectorAll(".slide");//se seleccionan TODOS los divs o elementos que hay con la clase slide
    const leftBtn = document.querySelector(".left"); //se selecciona el botón que se va a ubicar del lado izquierdo del slider
    const rightBtn = document.querySelector(".right");//se selecciona el botón que va a estar del lado derecho del slider

    //esta variable va a mantener un registro de que slider se está mostrando
    let currentIndex = 0;
    const totalSlides = slides.length; //en esta variable se almacena el numero total de sliders que hay, por eso se seleccionaron los elementos con la clase slide. lo que hace este slides.length es que cuenta la cantidad de elementos con la clase slide hay
    
    //esta función va a actualizar la vista del slide, o sea, va a pasar al siguente slide
    function uptadeSlider(){
        //esta linea sirve para darle una animación al slider y que no se vea tan brusco el cambio de slides
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;//no entendí porque se usan los ´´
        slider1.style.transform = `translateX(-${currentIndex * 100}%)`;//no entendí porque se usan los ´´
    };

    //este evento click sirve para devolvernos en los sliders
    leftBtn.addEventListener('click', function(){
        //esta condicional verifica en que pagina estamos a la hora de dar click
        if (currentIndex > 0){ //verifica si estamos en la primera
            currentIndex = currentIndex -1;//si estamos en la primera y le da click al botón, se va hasta la ultima
        }else{
            currentIndex = totalSlides -1;//si no estamos en el primer slide, simplemente se devuelve un slide hacia atras
        }
        uptadeSlider();//se actualiza la vista del slider y se cambia la posicion del slide
    });

    //este evento es para avanzar en los sliders
    rightBtn.addEventListener('click', function(){
        //esta condicional verifica en que slide estamos
        if (currentIndex < totalSlides -1){//si no estamos en el ultimo slide
            currentIndex = currentIndex + 1;//avanza un slide adelante
        }else{//si estamos en el ultimo slide
            currentIndex = 0 //se devuelve hasta el primero
        }
        uptadeSlider(); //se actualiza la vista del slider
    });
});

//cambio de pagina en el select
function irAPaginaActividades() {
    const seleccion = document.getElementById("menu").value;
    if (seleccion) {
      window.location.href = seleccion;
    }
}

function irAPagina() {
    const seleccion = document.getElementById("menu2").value;
    if (seleccion) {
      window.location.href = seleccion;
    }
}
//cambio de pagina en el select
function irAPaginaHoteles() {
    const seleccion = document.getElementById("filtro-h").value;
    if (seleccion) {
      window.location.href = seleccion;
    }
}
//función para que la flecha de los filtros gire
function flechaMunicipiosIn(){
    let flecha = document.getElementById('flechis');
    flecha.style.transform = "rotate(90deg)";
    flecha.style.transition = ".5s";
}

function flechaMunicipiosOut(){
    let flecha = document.getElementById('flechis');
    flecha.style.transform = "rotate(0deg)";
}

function flechaMunicipiosIn2(){
    let flecha = document.getElementById('flechis2');
    flecha.style.transform = "rotate(90deg)";
    flecha.style.transition = ".5s";
}

function flechaMunicipiosOut2(){
    let flecha = document.getElementById('flechis2');
    flecha.style.transform = "rotate(0deg)";
}

function cambiaEstrella(){
    let star = document.getElementsByClassName('star');
    star.style.color = "yellow";
}

const openModal = document.querySelector('.notificaciones');
const modal = document.querySelector('.bandeja-entrada');

openModal.addEventListener("click", () => {
    modal.classList.toggle('bandeja');
});