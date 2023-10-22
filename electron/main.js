// 控制应用生命周期和创建原生浏览器窗口的模组
const { app, BrowserWindow } = require('electron')
const path = require('path')
const httpServer = require('http-server');

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = true; // 关闭控制台的警告

function createWindow () {
  const server = httpServer.createServer({
    root: '../dist',
    cors: true,
    proxy: 'http://localhost:7078'
  });
  server.listen(3004, () => {
    console.log('Server running on port 3004');
  });

  // 创建浏览器窗口
  const mainWindow = new BrowserWindow({
    width: 1600,
    height: 900,
    webPreferences: {
      webSecurity: false,
      // 书写渲染进程中的配置
      nodeIntegration: true, //开启true这一步很重要,目的是为了vue文件中可以引入node和electron相关的API
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // 加载网页
  // mainWindow.loadFile(path.resolve(__dirname, './dist/index.html'))
  mainWindow.loadURL('http://localhost:3004')

  // 打开开发工具
  if(NODE_ENV === 'development'){
    mainWindow.webContents.openDevTools()
  }
}
 
// 这段程序将会在 Electron 结束初始化和创建浏览器窗口的时候调用
// 部分 API 在 ready 事件触发后才能使用。
app.whenReady().then(() => {
  createWindow()
 
  app.on('activate', () => {
    // 通常在 macOS 上，当点击 dock 中的应用程序图标时，如果没有其他
    // 打开的窗口，那么程序会重新创建一个窗口。
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
 
// 除了 macOS 外，当所有窗口都被关闭的时候退出程序。 因此，通常对程序和它们在
// 任务栏上的图标来说，应当保持活跃状态，直到用户使用 Cmd + Q 退出。
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
