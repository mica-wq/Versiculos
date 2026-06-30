const versiculos = [
  { texto:"Tú, pues, hijo mío, esfuérzate en la gracia que es en Cristo Jesús.", ref:"2 Timoteo 2:1" },
  { texto:"Todo lo puedo en Cristo que me fortalece.", ref:"Filipenses 4:13" },
  { texto:"Con Cristo estoy juntamente crucificado, y ya no vivo yo, mas vive Cristo en mí.", ref:"Gálatas 2:20" },
  { texto:"Somos más que vencedores por medio de aquel que nos amó.", ref:"Romanos 8:37" },
  { texto:"Al que venciere, le daré que se siente conmigo en mi trono.", ref:"Apocalipsis 3:21" },
  { texto:"Esfuérzate y sé valiente; no temas ni desmayes.", ref:"Josué 1:9" },
  { texto:"En mi corazón he guardado tus dichos, para no pecar contra ti.", ref:"Salmos 119:11" },
  { texto:"Llevando cautivo todo pensamiento a la obediencia a Cristo.", ref:"2 Corintios 10:5" },
  { texto:"Dios no nos ha dado espíritu de cobardía, sino de poder.", ref:"2 Timoteo 1:7" },
  { texto:"No temas, porque yo estoy contigo.", ref:"Isaías 41:10" }
];

function mezclar(array){
  for(let i=array.length-1;i>0;i--){
    let j=Math.floor(Math.random()*(i+1));
    [array[i],array[j]]=[array[j],array[i]];
  }
  return array;
}

let orden = [];
let posicion = 0;

function preparar(){
  orden = mezclar([...Array(versiculos.length).keys()]);
  posicion = 0;
}

function mostrar(){

  if(posicion >= orden.length){
    preparar();
  }

  const textoEl = document.getElementById("texto");
  const refEl = document.getElementById("ref");

  // 1. desaparecer suave
  textoEl.style.opacity = 0;
  refEl.style.opacity = 0;

  // 2. esperar a que desaparezca completamente
  setTimeout(() => {

    const actual = versiculos[orden[posicion]];
    posicion++;

    textoEl.innerText = actual.texto;
    refEl.innerText = actual.ref;

    // 3. pequeño delay antes de aparecer (más natural)
    setTimeout(() => {
      textoEl.style.opacity = 1;
      refEl.style.opacity = 1;
    }, 120);

  }, 900); // tiempo del fade out (más lento = más suave)
}

function nuevoVersiculo(){
  mostrar();
}

preparar();
mostrar();
const musica = document.getElementById("musica");

function iniciarMusica(){
  musica.volume = 0.2; // volumen suave
  musica.play();
}

// se activa con la primera interacción del usuario
document.addEventListener("click", iniciarMusica, { once: true });
document.addEventListener("touchstart", iniciarMusica, { once: true });
