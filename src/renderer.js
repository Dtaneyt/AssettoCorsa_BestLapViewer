const selectIni = document.getElementById('selectIni');
const menuIni = document.getElementById('menuIni');
const path = document.getElementById('path');

const { ipcRenderer } = require('electron');

selectIni.addEventListener('click', () => {
    selectIni.classList.add('hidden');
    menuIni.classList.remove('hidden');
    });

const pathBtn = document.getElementById('pathBtn');

let iniPathData;
pathBtn.addEventListener('click', async () => {
    iniPathData = path.value;
    ipcRenderer.send('send-iniPath', iniPathData);
});
