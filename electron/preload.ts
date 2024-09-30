// electron/preload.ts

import { contextBridge, ipcRenderer } from 'electron';

// Expose APIs to the renderer securely
contextBridge.exposeInMainWorld('electronAPI', {
  openFile: () => ipcRenderer.invoke('dialog:openFile'),
  saveFile: (data: string) => ipcRenderer.invoke('file:saveFile', data),
  checkForUpdates: () => ipcRenderer.send('app:checkForUpdates'), // No need to return a value
});

window.addEventListener('DOMContentLoaded', () => {
  console.log('Preload script running');
});
