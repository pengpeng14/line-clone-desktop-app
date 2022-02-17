const { app, BrowserWindow, Menu, ipcMain } = require("electron");
const isDev = require("electron-is-dev");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    x: 100,
    y: 140,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
    },
  });

  // mainWindow.loadFile("/src/index.html");
  mainWindow.loadURL(
    // isDev ? "http://localhost:3000/dashboard" : `http://localhost:3000/dashboard")}`
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html/")}`
  );

  mainWindow.webContents.openDevTools();

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

ipcMain.on("notificationOn", (e, args) => {
  mainWindow.moveTop();
  mainWindow.focus();
  console.log(args);
  e.sender.send("notificationOn-response", "response from electron.js");
});

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (mainWindow === null) createWindow();
});
