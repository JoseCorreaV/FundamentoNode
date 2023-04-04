// pasar de una web app escritorio

const { app, BrowserWindow } = require('electron');

let mainWindow;

// 
app.on('ready', FunciCreaVentana);


// función de crear ventana
function FunciCreaVentana(){
    mainWindow = new BrowserWindow ({
        width: 800,
        height: 600,
    });
    // en la ventana creada cargara el archivo index.html
    mainWindow.loadFile('index.html');
}