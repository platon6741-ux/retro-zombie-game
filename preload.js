const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('appApi', {
  getVersion: () => process.versions.electron
});
