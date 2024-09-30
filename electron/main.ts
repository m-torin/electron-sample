// main.ts

import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import { exec } from 'child_process';

const isDev = process.env.NODE_ENV === 'development';
let serveProcess: import('child_process').ChildProcess | null = null;

async function createWindow() {
  const preloadPath = path.join(__dirname, 'preload.js');

  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: preloadPath,
    },
  });

  if (isDev) {
    await win.loadURL('http://localhost:3000');
    win.webContents.openDevTools({ mode: 'detach' });
  } else {
    // Start 'serve' as a child process
    const servePath = path.join(__dirname, '..', '..', 'out');
    const servePort = 3000; // Choose an available port

    const serveCommand = `npx serve "${servePath}" -p ${servePort}`;
    serveProcess = exec(serveCommand, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error starting serve: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`serve stderr: ${stderr}`);
      }
      if (stdout) {
        console.log(`serve stdout: ${stdout}`);
      }
    });

    // Wait for 'serve' to start
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Load the app from 'serve'
    win.loadURL(`http://localhost:${servePort}`).catch((err) => {
      console.error('Failed to load URL:', err);
    });
  }
}

app.whenReady().then(createWindow).catch(console.error);

app.on('window-all-closed', () => {
  if (serveProcess) {
    serveProcess.kill();
    serveProcess = null;
  }
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow().catch(console.error);
  }
});

// Ensure 'serve' is terminated when the app quits
app.on('before-quit', () => {
  if (serveProcess) {
    serveProcess.kill();
    serveProcess = null;
  }
});
