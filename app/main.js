import { app, BrowserWindow } from 'electron'

let win

app.on('ready', () => {
  win = new BrowserWindow({
    width: 300, 
    height: 600,
    minWidth: 300,
    minHeight: 300,
    show: false
  })
  
  win.loadURL(`file://${__dirname}/index.jade`)
  win.once('ready-to-show', () => {
    win.show()
  })
})