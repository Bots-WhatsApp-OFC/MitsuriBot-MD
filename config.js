import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone'

global.botnumber = ""
global.confirmCode = ""

/*Numeros de los creadores*/
global.owner = [
 ['5493873687620', '🍧 𝑺𝒖𝒑𝒑𝒐𝒓𝒕𝑩𝒐𝒕𝒔 🍧', true],
['51957626299'],
['51977272240'],
['5491130362550'],
['19145948340'],
['5493873452653'],
['51947454367'],
['5491130288378']
 ]


global.suittag = ['51977272240'];
global.prems = ['51957626299'];



global.packname = '𝙈𝙞𝙩𝙨𝙪𝙧𝙞𝘽𝙤𝙩-𝙈𝘿';
global.author = '𝐿𝑖𝑧•𝑂𝐹𝐶 🍡';
global.wm = '🌸 𝙈𝙞𝙩𝙨𝙪𝙧𝙞𝘽𝙤𝙩-𝙈𝘿 🌸';
global.titulowm = '𝑴𝑰𝑻𝑺𝑼𝑹𝑰/𝑩𝑶𝑻';
global.titulowm2 = `🌸 𝐿𝑖𝑧•𝑂𝐹𝐶 🌸`
global.igfg = '🍧 𝐿𝑖𝑧•𝑂𝐹𝐶 🍧';
global.wait = '🍧 𝘾𝙖𝙧𝙜𝙖𝙣𝙙𝙤...';
global.vs = '1.5.0';

global.imagenvid = fs.readFileSync('./media/menuvid/menucompleto.mp4');
global.imagen1 = fs.readFileSync('./Menu2.jpg');
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg');
global.imagen3 = fs.readFileSync('./src/Pre Bot Publi.png');
global.imagen4 = fs.readFileSync('./Menu.png');
global.imagen5 = fs.readFileSync('./src/+18.jpg');
global.imagen6 = fs.readFileSync('./Menu3.png');

//Grupos
global.gp1 = 'https://wa.me/19145948340' //Guardian Bot

global.gp2 = 'https://wa.me/5491130362550' //Guardian Creator

global.gp3 = 'https://wa.me/5493873687620' //Support Bots

global.gp4 = 'https://wa.me/51977272240' //Creadora oficial

global.gp5 = 'https://wa.me/51957626299' //Segunda cuenta de la creadora

global.channel = 'https://wa.me/5493873452653' //Amy oficial

global.yt = 'https://github.com/Bots-WhatsApp-OFC/MitsuriBot-MD'

global.mods = [];


//* *******Tiempo***************
global.d = new Date(new Date + 3600000);
global.locale = 'es';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('es', {month: 'long'});
global.año = d.toLocaleDateString('es', {year: 'numeric'});
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
//* ****************************
global.wm2 = `${dia} ${fecha}\nMitsuri-Bot`;
global.gt = '🌸 Mitsuri Bot MD 🌸';
global.mysticbot = 'MitsuriBot-MD';
global.md = 'https://github.com/Bots-WhatsApp-OFC/MitsuriBot-MD';
global.mysticbot = 'https://github.com/Bots-WhatsApp-OFC/MitsuriBot-MD';
global.waitt = '🍧 𝘾𝙖𝙧𝙜𝙖𝙣𝙙𝙤...';
global.waittt = '🍧 𝘾𝙖𝙧𝙜𝙖𝙣𝙙𝙤...';
global.waitttt = '🍧 𝘾𝙖𝙧𝙜𝙖𝙣𝙙𝙤...';
global.nomorown = '51977272240';
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'];
global.cmenut = '❖––––––『';
global.cmenub = '┊✦ ';
global.cmenuf = '╰━═┅═━––––––๑\n';
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ';
global.dmenut = '*❖─┅──┅〈*';
global.dmenub = '*┊»*';
global.dmenub2 = '*┊*';
global.dmenuf = '*╰┅────────┅✦*';
global.htjava = '⫹⫺';
global.htki = '*⭑•̩̩͙⊱•••• ☪*';
global.htka = '*☪ ••••̩̩͙⊰•⭑*';
global.comienzo = '• • ◕◕════';
global.fin = '════◕◕ • •';
global.botdate = `*[ 📅 ] Fecha:*  ${moment.tz('America/Mexico_City').format('DD/MM/YY')}`;
global.bottime = `*[ ⏳ ] Hora:* ${moment.tz('America/Mexico_City').format('HH:mm:ss')}`;
global.fgif = {key: {participant: '0@s.whatsapp.net'}, message: {'videoMessage': {'title': wm, 'h': `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu.png')}}};
global.multiplier = 99;
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=',
];
//* ************************

const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});
