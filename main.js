const { app, BrowserWindow } = require('electron')

/** If A1 just installed
 * Then it is not configured
 * This is automatically set to false
 */
let configured = false

function createWindow() {
    let win = new BrowserWindow({
        width: 800,
        height: 400,
        webPreferences: {
            nodeIntegration: true
          }
    })

    win.loadFile('index.html')

    win.webContents.openDevTools()

    win.on('closed', () => {
        win = null
    })
}

/** If A1 is freshly installed && app is ready
 * The app should configure the system for the first time
 */
app.on('ready', createWindow)

app.on('window-all-closed', () => {
    switch (process.platform) {
        case 'darwin':
            win = null
        break
        default:
            app.quit()
        break
    }
})

app.on('activate', () => {
    if (win === null) { createWindow() }
})
