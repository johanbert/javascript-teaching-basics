/* UN ARRAY PUEDE TENER PROPIEDADES Y METODOS/FUNCIONES
    PROPIEDAD: SOLO ES SU NOMBRE
    METODOS/FUNCIONES: RECIBE PARAMETROS, POR LO CUAL, FINALIZA CON ()
    EJEMPLOS
    listTop.length
    listTop.push() */
/**
 * Estructura de una function:
  function NOMBREDELAFUNCION(){
  }
  function nombredelafuncion(){
  }
  function estoHaceALGO(){
  }
  function estoHaceALGO2(){
  }

  function nombre_de_la_funcion(){
  }

  function nombreDeLaFuncion(){ // camelCase
  }
 */
const listTop = ["Manzana", "Banano", "Fresa", "Durazno", "Piña", "Melocotón", "Patilla/Sandía", "Papaya", "Mango", "Kiwi", "Ciruela", "Maracuyá/Parchita", "Mora", "Naranja", "Mandarina", "Limón", "Pera", "Aguacate", "Uvas", "Arándanos"];

// JSON = JavaScript Object Notation
const jsonListTop = [{
    name: "Manzana",
    type: "fruta"
}, {
    name: "papa",
    type: "verdura"
}, {
    name: "caraota",
    type: "frijol"
}, {
    name: "espinaca",
    type: "hortaliza"
}];

function getListFruverByAppendChild() {

    for (let i = 0; i < listTop.length; i++) {
        let node = document.createElement("li") // <li></li>
        let textNode = document.createTextNode(listTop[i]) // Manzana
        node.appendChild(textNode) // <li>Manzana</li>

        document.getElementById("my-top-list").appendChild(node)
    }
}

function getListFruverByInnerHTML() {
    let doc = document.getElementById('my-top-list')
    for (let i = 0; i < listTop.length; i++) {
        // document.getElementById('my-top-list').innerHTML += '<li>' + listTop[i] + '</li>'
        let text = `<li>${i} ${listTop[i] }</li>`
        doc.innerHTML += text
    }
}

function getListFruverByJSON() {
    for (let i = 0; i < jsonListTop.length; i++) {
        console.log(` ${jsonListTop[i].name} : ${jsonListTop[i].type} `);
    }
}

function counterExampleLoopWhile() {
    console.log('LOG: INICIO')
    var texto = "El contador se va a ejecutar del 0 al 10" + " <br>"
    var counter = 0;
    while (counter <= 10) {
        document.getElementById("contentWhile").innerHTML += texto;
        console.log(texto);
        counter++;
    }
    console.log('LOG: FIN')
}

function counterExampleLoopDoWhile() {
    let texto,
        counter = 0;
    texto = 'Counter se ejecuta del 0 al 10 <br>'
    do {
        document.getElementById("contentDoWhile").innerHTML += texto;
        console.log(texto);
        console.log('counter', counter);
        counter++;
        console.log('counter', counter);
    } while (counter <= 5)
}


// statement = declaracion
function knowingStatements() {
    // comillas: son tres tipos
    // " "  DOBLES
    // ' '  SIMPLES
    // ` `  INVERTIDAS
    let numero = 10;
    let cadenaDeTexto = '';
    cadenaDeTexto = 'soy una cadena de texto';
    console.log('Test1:', cadenaDeTexto);
    console.log('Test2:', "number = ${numero}");
    console.log('Test3:', 'number = ${numero}');
    console.log('Test3:', `number = ${numero} y ${numero}`);
    console.log('Test4:', "number = " + numero + " y " + numero);

    console.log()
}
knowingStatements()

function validateAge(nombre, edad) {
    if (edad != 18) {
        alert(`${nombre} Eres mayor de edad porque tienes ${edad} años`)
    } else {
        alert(`${nombre} Tu no eres mayor de edad porque tienes ${edad} años`)
    }
}

function validateYounger(nombre, edad) {
    // if (edad != 18) {
    if (edad == 18) {
        alert(`${nombre} No eres juvenil porque tienes ${edad} años`)
    } else {
        alert(`${nombre} Eres juvenil porque tienes ${edad} años`)
    }
}

function openNewWindow(url) {
    window.open(`https://${url}`)
}



function getResult() {
    let valor1 = document.getElementById('valor1').value
    let valor2 = document.getElementById('valor2').value

    document.getElementById("resultado").value = valor1 * valor2
}


// prompt()