console.log("UEFA Champions League Website läuft!");

// Array mit den GIFs, die durchgewechselt werden sollen
const gifs = ['pictures/benz.gif', 'pictures/deBrueyne.gif', 'pictures/Vini.gif', "pictures/Marcelo.gif", "pictures/Mbappe.gif"]; // Füge hier beliebig mehr GIFs hinzu
let currentGifIndex = 0; // Start mit dem ersten GIF

// Funktion, um das GIF alle 3 Sekunden zu ändern
function changeGif() {
    const gifContainer = document.getElementById('gif-container');
    
    // Wechsle zum nächsten GIF im Array
    currentGifIndex = (currentGifIndex + 1) % gifs.length;
    
    // Setze das Hintergrundbild auf das nächste GIF im Array
    gifContainer.style.backgroundImage = `url(${gifs[currentGifIndex]})`;
}

// Starte die Funktion alle 3 Sekunden (3000 Millisekunden)
setInterval(changeGif, 3000);