

//Met deze function kan je een of meerdere functions starten, deze wordt dan ingeladen op de body in HTML//

function StartMyPrograms(){
   //Opdracht_1()
   //Opdracht_2() // -Rekenen if statements
   //Opdracht_3() // -Rekenen switch case
   //colorSquare()
   //wortel()
   //bubbleSort()
   //Opdracht_7()
   
}



//deze function zorgt er voor dat de tekst "hallo wereld kan worden ingeladen"//

function Opdracht_1(){
    document.write("Hallo wereld");
   

} 


//---------------------------------------------------------------------------------------------------------------------------------------------------//


//deze function laat de gebruiker een reken teken kiezen en kan 2 getallen met elkaar berekenen. De code controleert welk rekenteken de gebruiker gekozen heeft en gaat dan met dat
//rekenteken getal a en getal b met elkaar berekenen. Daarnaast wordt er gebruik gemaakt van parsefloat om te zorgen dat de getallen a en b niet worden behandeld als een string maar als een getal.
//hierdoor komen er correcte getallen als uitkomst. 

function Opdracht_2() {
    // Vraagt de gebruiker om een operator te kiezen: +, -, x, /
    let c = prompt("Met wat wil je rekenen? Kies uit +, -, x, / ");

    // Vraagt de gebruiker om getal a in te voeren
    let a = prompt("Voer getal a in: ");

    // Vraagt de gebruiker om getal b in te voeren
    let b = prompt("Voer getal b in: ");

    // Maakt een nieuw <div> element genaamd Output en voegt het toe aan de body van de HTML
    let Output = document.createElement("div");
    Output.id = "Output";
    document.body.appendChild(Output);

    // Controleert welke operator is gekozen en voert de bijbehorende berekening uit
    if (c == "+") {
        // Voegt getal a en getal b toe en slaat het resultaat op in plusAntwoord
        let plusAntwoord = parseFloat(a) + parseFloat(b);
        // Toont het resultaat in het Output <div> element
        document.getElementById("Output").innerHTML = plusAntwoord;
    }

    if (c == "-") {
        // Trekt getal b af van getal a en slaat het resultaat op in minAntwoord
        let minAntwoord = parseFloat(a) - parseFloat(b);
        // Toont het resultaat in het Output <div> element
        document.getElementById("Output").innerHTML = minAntwoord;
    }

    if (c == "x") {
        // Vermenigvuldigt getal a met getal b en slaat het resultaat op in keerAntwoord
        let keerAntwoord = parseFloat(a) * parseFloat(b);
        // Toont het resultaat in het Output <div> element
        document.getElementById("Output").innerHTML = keerAntwoord;
    }

    if (c == "/") {
        // Deelt getal a door getal b en slaat het resultaat op in delenAntwoord
        let delenAntwoord = parseFloat(a) / parseFloat(b);
        // Toont het resultaat in het Output <div> element
        document.getElementById("Output").innerHTML = delenAntwoord;
    }
}



//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


function Opdracht_3() {
    // Vraagt de gebruiker om een operator te kiezen: +, -, x, /
    let c = prompt("Met wat wil je rekenen? Kies uit +, -, x, / ");

    // Vraagt de gebruiker om getal a in te voeren
    let a = prompt("Voer getal a in: ");

    // Vraagt de gebruiker om getal b in te voeren
    let b = prompt("Voer getal b in: ");

    let resultaat;

    // Gebruik van switch-case om de berekening uit te voeren op basis van de gekozen operator
    switch (c) {
        case "+": 
            // Optellen van a en b
            resultaat = parseFloat(a) + parseFloat(b);
            break;
        case "-": 
            // Aftrekken van b van a
            resultaat = parseFloat(a) - parseFloat(b);
            break;
        case "/": 
            // Delen van a door b
            resultaat = parseFloat(a) / parseFloat(b);
            break;
        case "x": 
            // Vermenigvuldigen van a met b
            resultaat = parseFloat(a) * parseFloat(b);
            break;
        default:
            // Als de gebruiker een ongeldige operator invoert, wordt geen berekening uitgevoerd
            // en wordt resultaat niet ingesteld. De output blijft leeg.
            break;
    }

    // Maakt een nieuw <div> element genaamd Output en voegt het toe aan de body van de HTML
    let Output = document.createElement("div");
    Output.id = "Output";
    document.body.appendChild(Output);

    // Toont het resultaat van de berekening in het Output <div> element
    Output.innerHTML = "Antwoord: " + resultaat;
}




function colorSquare() {
    
    alert("In deze opdracht word er een vierhoekige vorm gegenereerd op basis van de lengte en breedte die de user invult. Als de oppervlakte tussen 100 en 250 is wordt de oppervlakte zwart, tussen 250 en 500 oranje, tussen 500 en 750 geel, tussen 750 en 1000 groen, vanaf 1000 blauw.")
    
    //vraagt om input van de gebruiker voor de hoogte en breedte van het vierkant doormiddel van een prompt
let hoogte = prompt("Wat moet de lengte zijn?");
let breedte = prompt("Wat moet de breedte zijn?");

    //varaiable genaamd oppervlakte die een waarde heeft gelijk aan de ingevoerde hoogte en breedte keer elkaar
let oppervlakte = hoogte * breedte;
    
    //maakt div die toegekend is aan een varaiable
let text = document.createElement("div");

    //zorgt dat er tekst zichtbaar wordt. Geeft ook aan wat de oppervlakte is van het vierkant 
text.innerHTML = "De oppervlakte = " + oppervlakte;

    //zorgt dat de tekst op de body wordt geladen
document.body.appendChild(text);

    //maakt de div wat het vierkant gaat worden
let vierkantdiv = document.createElement("div")

    //geeft de hoogte en breedte aan de vierkant div die de gebruiker eerder heeft ingevoerd 
vierkantdiv.style.height = hoogte
vierkantdiv.style.width = breedte

    //zorgt dat de vierkant div op de body wordt geladen 
document.body.appendChild(vierkantdiv)

    //geeft aan dat de case switch om true gaat, dus gaat controleren of de gegeven cases waar zijn en gaat daarop gebaseerd een kleur geven aan de div
switch(true) {
    
    //controleert het oppervlakte van het vierkant 
    case (oppervlakte >= 100 && oppervlakte < 250):  
    
    //geeft een kleur aan het vierkant als deze waardes correct zijn 
        vierkantdiv.style.backgroundColor = "black"
    
        //beeindigt deze case 
        break

    case (oppervlakte >= 250 && oppervlakte < 500):
        vierkantdiv.style.backgroundColor = "orange"
        break

    case (oppervlakte >= 500 && oppervlakte < 750):
        vierkantdiv.style.backgroundColor = "yellow"
        break

    case (oppervlakte >= 750 && oppervlakte < 1000):
        vierkantdiv.style.backgroundColor = "green"
        break

    case (oppervlakte >= 1000):
        vierkantdiv.style.backgroundColor = "blue"
        break
}
}





function wortel() {
    alert("Met deze function wordt van het gegeven getal de wortel zo nauwkeurig mogelijk berekend")
    let x = prompt("Voer een getal in:");
    let guess = x / 2; // Begin met een ruwe schatting van de wortel
    
    for (let i = 0; i < 1000; i++) { // Stel een limiet in aan het aantal iteraties om te voorkomen dat de lus oneindig doorgaat
        let newGuess = (guess + x / guess) / 2; // Verbeter de schatting met de methode van Newton
        
        if (Math.abs(newGuess - guess) < 0.0001) { // Controleer of we dicht genoeg bij de werkelijke wortel zijn
            let uitkomst = newGuess.toFixed(2)
            document.write("De wortel van " + x + " is ongeveer " + uitkomst);
            return; // Stop de functie na het vinden van de benaderde wortel
        }
        
        guess = newGuess; // Update de schatting voor de volgende iteratie
    }
    
    document.write("Kan geen benaderde wortel vinden."); // Als het aantal iteraties de limiet bereikt, geef een foutmelding
}


function bubbleSort() {

function bubbleSort(arr) {
    alert("In deze function worden de namen van een aantal klasgenoten op lexicografische volgorde gesorteerd.")
    var size = arr.length;
    for (var i = 0; i < size; i++) {
        for (var j = 0; j < size - i; j++) {
            var k = j + 1;
            if (arr[k] < arr[j]) {
                // Wissel de elementen op indices: j, k
                var temp = arr[j];
                arr[j] = arr[k];
                arr[k] = temp;
            }
        }
    }
    return arr;
}

var arr = ['Yorick', 'Joella', 'Valentijn', 'Darrion', 'Owen', 'Michiel', 'Thijmen', 'Youri', 'Guy'];
document.write("Inhoud voor het sorteren: <br>");
document.write(JSON.stringify(arr) + "<br><br>");
arr = bubbleSort(arr);
document.write("Inhoud na het sorteren: <br>");
document.write(JSON.stringify(arr) + "<br>");





}

















    
        







