let show = document.getElementById('show');
let hiden = document.getElementById('hiden');

let show2 = document.getElementById('show2');
let hiden2 = document.getElementById('hiden2');

let show3 = document.getElementById('show3');
let hiden3 = document.getElementById('hiden3');

let show4 = document.getElementById('show4');
let hiden4 = document.getElementById('hiden4');

let show5 = document.getElementById('show5');
let hiden5 = document.getElementById('hiden5');

let show6 = document.getElementById('show6');
let hiden6 = document.getElementById('hiden6');

let show7 = document.getElementById('show7');
let hiden7 = document.getElementById('hiden7');

let show8 = document.getElementById('show8');
let hiden8 = document.getElementById('hiden8');

let show9 = document.getElementById('show9');
let hiden9 = document.getElementById('hiden9');

let descvid = document.getElementById('descvid');
let descvid2 = document.getElementById('descvid2');
let descvid3 = document.getElementById('descvid3');
let descvid4 = document.getElementById('descvid4');
let descvid5 = document.getElementById('descvid5');
let descvid6 = document.getElementById('descvid6');
let descvid7 = document.getElementById('descvid7');
let descvid8 = document.getElementById('descvid8');
let descvid9 = document.getElementById('descvid9');

show.onclick = function(){
    this.style.display = 'none';
    hiden.style.display = 'block';
    descvid.style.bottom = '317px';
}

hiden.onclick = function(){
    this.style.display = 'none';
    show.style.display = 'block';
    descvid.style.bottom = '540px';
}

show2.onclick = function(){
    this.style.display = 'none';
    hiden2.style.display = 'block';
    descvid2.style.bottom = '317px';
}

hiden2.onclick = function(){
    this.style.display = 'none';
    show2.style.display = 'block';
    descvid2.style.bottom = '540px';
}

show3.onclick = function(){
    this.style.display = 'none';
    hiden3.style.display = 'block';
    descvid3.style.bottom = '317px';
}

hiden3.onclick = function(){
    this.style.display = 'none';
    show3.style.display = 'block';
    descvid3.style.bottom = '540px';
}

show4.onclick = function(){
    this.style.display = 'none';
    hiden4.style.display = 'block';
    descvid4.style.bottom = '317px';
}

hiden4.onclick = function(){
    this.style.display = 'none';
    show4.style.display = 'block';
    descvid4.style.bottom = '540px';
}

show5.onclick = function(){
    this.style.display = 'none';
    hiden5.style.display = 'block';
    descvid5.style.bottom = '317px';
}

hiden5.onclick = function(){
    this.style.display = 'none';
    show5.style.display = 'block';
    descvid5.style.bottom = '540px';
}

show6.onclick = function(){
    this.style.display = 'none';
    hiden6.style.display = 'block';
    descvid6.style.bottom = '317px';
}

hiden6.onclick = function(){
    this.style.display = 'none';
    show6.style.display = 'block';
    descvid6.style.bottom = '540px';
}

show7.onclick = function(){
    this.style.display = 'none';
    hiden7.style.display = 'block';
    descvid7.style.bottom = '317px';
}

hiden7.onclick = function(){
    this.style.display = 'none';
    show7.style.display = 'block';
    descvid7.style.bottom = '540px';
}

show8.onclick = function(){
    this.style.display = 'none';
    hiden8.style.display = 'block';
    descvid8.style.bottom = '317px';
}

hiden8.onclick = function(){
    this.style.display = 'none';
    show8.style.display = 'block';
    descvid8.style.bottom = '540px';
}

show9.onclick = function(){
    this.style.display = 'none';
    hiden9.style.display = 'block';
    descvid9.style.bottom = '317px';
}

hiden9.onclick = function(){
    this.style.display = 'none';
    show9.style.display = 'block';
    descvid9.style.bottom = '540px';
}

let home = document.getElementById('home');
let about = document.getElementById('about');
let services = document.getElementById('services');
let portfolio = document.getElementById('portfolio');
let contact = document.getElementById('contact');
let line = document.getElementById('line');

let homesec = document.getElementById('homesec');
let aboutsec = document.getElementById('aboutsec');
let servicessec = document.getElementById('servicessec');
let portfoliosec = document.getElementById('portfoliosec');
let contactsec = document.getElementById('contactsec');

home.style.color = '#FF8C00';

home.onclick = function(){
    line.style.left = '512px';
    this.style.color = '#FF8C00';
    about.style.color = 'black';
    services.style.color = 'black';
    portfolio.style.color = 'black';
    contact.style.color = 'black';
    homesec.style.display = 'block';
    aboutsec.style.display = 'none';
    servicessec.style.display = 'none';
    portfoliosec.style.display = 'none';
    contactsec.style.display = 'none';
}

about.onclick = function(){
    line.style.left = '718px';
    this.style.color = '#FF8C00';
    home.style.color = 'black';
    services.style.color = 'black';
    portfolio.style.color = 'black';
    contact.style.color = 'black';
    homesec.style.display = 'none';
    aboutsec.style.display = 'block';
    servicessec.style.display = 'none';
    portfoliosec.style.display = 'none';
    contactsec.style.display = 'none';
}

services.onclick = function(){
    line.style.left = '933px';
    this.style.color = '#FF8C00';
    home.style.color = 'black';
    about.style.color = 'black';
    portfolio.style.color = 'black';
    contact.style.color = 'black';
    homesec.style.display = 'none';
    aboutsec.style.display = 'none';
    servicessec.style.display = 'block';
    portfoliosec.style.display = 'none';
    contactsec.style.display = 'none';
}

portfolio.onclick = function(){
    line.style.left = '1164px';
    this.style.color = '#FF8C00';
    home.style.color = 'black';
    about.style.color = 'black';
    contact.style.color = 'black';
    services.style.color = 'black';
    homesec.style.display = 'none';
    aboutsec.style.display = 'none';
    servicessec.style.display = 'none';
    portfoliosec.style.display = 'block';
    contactsec.style.display = 'none';
}

contact.onclick = function(){
    line.style.left = '1392px';
    this.style.color = '#FF8C00';
    home.style.color = 'black';
    about.style.color = 'black';
    services.style.color = 'black';
    portfolio.style.color = 'black';
    homesec.style.display = 'none';
    aboutsec.style.display = 'none';
    servicessec.style.display = 'none';
    portfoliosec.style.display = 'none';
    contactsec.style.display = 'block';
}

let ulnav = document.getElementById('ulnav');
let close = document.getElementById('close');
let menuicon = document.getElementById('menuicon');

menuicon.onclick = function(){
    ulnav.style.left = '10px';
    this.style.display = 'none';
    close.style.display = 'block';
}
close.onclick = function(){
    ulnav.style.left = '-160px';
    this.style.display = 'none';
    menuicon.style.display = 'block';
}

let home2 = document.getElementById('home2');
let about2 = document.getElementById('about2');
let services2 = document.getElementById('services2');
let portfolio2 = document.getElementById('portfolio2');
let contact2 = document.getElementById('contact2');

home2.onclick = function(){
    homesec.style.display = 'block';
    aboutsec.style.display = 'none';
    servicessec.style.display = 'none';
    portfoliosec.style.display = 'none';
    contactsec.style.display = 'none';
    menuicon.style.display = 'block';
    close.style.display = 'none';
    ulnav.style.left = '-160px';
}

about2.onclick = function(){
    homesec.style.display = 'none';
    aboutsec.style.display = 'block';
    servicessec.style.display = 'none';
    contactsec.style.display = 'none';
    portfoliosec.style.display = 'none';
    menuicon.style.display = 'block';
    close.style.display = 'none';
    ulnav.style.left = '-160px';
}

services2.onclick = function(){
    homesec.style.display = 'none';
    aboutsec.style.display = 'none';
    servicessec.style.display = 'block';
    contactsec.style.display = 'none';
    portfoliosec.style.display = 'none';
    menuicon.style.display = 'block';
    close.style.display = 'none';
    ulnav.style.left = '-160px';
}

portfolio2.onclick = function(){
    homesec.style.display = 'none';
    aboutsec.style.display = 'none';
    servicessec.style.display = 'none';
    contactsec.style.display = 'none';
    portfoliosec.style.display = 'block';
    menuicon.style.display = 'block';
    close.style.display = 'none';
    ulnav.style.left = '-160px';
}

contact2.onclick = function(){
    homesec.style.display = 'none';
    aboutsec.style.display = 'none';
    servicessec.style.display = 'none';
    contactsec.style.display = 'block';
    portfoliosec.style.display = 'none';
    menuicon.style.display = 'block';
    close.style.display = 'none';
    ulnav.style.left = '-160px';
}

