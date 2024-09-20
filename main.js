let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');
let btn6 = document.getElementById('btn6');
let btn7 = document.getElementById('btn7');

let cryptoDV = document.getElementById('cryptoDV');
let stocksDV = document.getElementById('stocksDV');
let forexDV = document.getElementById('forexDV');
let futuresDV = document.getElementById('futuresDV');
let TechnicalAnalysisDV = document.getElementById('TechnicalAnalysisDV');
let TemporalAnalysisDV = document.getElementById('TemporalAnalysisDV');
let ClassicAnalysisDV = document.getElementById('ClassicAnalysisDV');

let coursesSec = document.getElementById('coursesSec');

let backBTN = document.querySelector('.backBTN');
let backBTN2 = document.querySelector('.backBTN2');
let backBTN3 = document.querySelector('.backBTN3');
let backBTN4 = document.querySelector('.backBTN4');
let backBTN5 = document.querySelector('.backBTN5');
let backBTN6 = document.querySelector('.backBTN6');
let backBTN7 = document.querySelector('.backBTN7');

btn1.onclick = function(){
    cryptoDV.style.display = 'block';
    stocksDV.style.display = 'none';
    forexDV.style.display = 'none';
    futuresDV.style.display = 'none';
    TechnicalAnalysisDV.style.display = 'none';
    TemporalAnalysisDV.style.display = 'none';
    ClassicAnalysisDV.style.display = 'none';
    coursesSec.style.top = '-60px';
}

btn2.onclick = function(){
    cryptoDV.style.display = 'none';
    stocksDV.style.display = 'block';
    forexDV.style.display = 'none';
    futuresDV.style.display = 'none';
    TechnicalAnalysisDV.style.display = 'none';
    TemporalAnalysisDV.style.display = 'none';
    ClassicAnalysisDV.style.display = 'none';
    coursesSec.style.top = '-60px';
}

btn3.onclick = function(){
    cryptoDV.style.display = 'none';
    stocksDV.style.display = 'none';
    forexDV.style.display = 'block';
    futuresDV.style.display = 'none';
    TechnicalAnalysisDV.style.display = 'none';
    TemporalAnalysisDV.style.display = 'none';
    ClassicAnalysisDV.style.display = 'none';
    coursesSec.style.top = '-60px';
}

btn4.onclick = function(){
    cryptoDV.style.display = 'none';
    stocksDV.style.display = 'none';
    forexDV.style.display = 'none';
    futuresDV.style.display = 'block';
    TechnicalAnalysisDV.style.display = 'none';
    TemporalAnalysisDV.style.display = 'none';
    ClassicAnalysisDV.style.display = 'none';
    coursesSec.style.top = '-60px';
}

btn5.onclick = function(){
    cryptoDV.style.display = 'none';
    stocksDV.style.display = 'none';
    forexDV.style.display = 'none';
    futuresDV.style.display = 'none';
    TechnicalAnalysisDV.style.display = 'block';
    TemporalAnalysisDV.style.display = 'none';
    ClassicAnalysisDV.style.display = 'none';
    coursesSec.style.top = '-60px';
}

btn6.onclick = function(){
    cryptoDV.style.display = 'none';
    stocksDV.style.display = 'none';
    forexDV.style.display = 'none';
    futuresDV.style.display = 'none';
    TechnicalAnalysisDV.style.display = 'none';
    TemporalAnalysisDV.style.display = 'block';
    ClassicAnalysisDV.style.display = 'none';
    coursesSec.style.top = '-60px';
}

btn7.onclick = function(){
    cryptoDV.style.display = 'none';
    stocksDV.style.display = 'none';
    forexDV.style.display = 'none';
    futuresDV.style.display = 'none';
    TechnicalAnalysisDV.style.display = 'none';
    TemporalAnalysisDV.style.display = 'none';
    ClassicAnalysisDV.style.display = 'block';
    coursesSec.style.top = '-60px';
}

backBTN.onclick = function(){
    cryptoDV.style.display = 'none';
    coursesSec.style.top = '100px';
}

backBTN2.onclick = function(){
    stocksDV.style.display = 'none';
    coursesSec.style.top = '100px';
}

backBTN3.onclick = function(){
    forexDV.style.display = 'none';
    coursesSec.style.top = '100px';
}

backBTN4.onclick = function(){
    futuresDV.style.display = 'none';
    coursesSec.style.top = '100px';
}

backBTN5.onclick = function(){
    TechnicalAnalysisDV.style.display = 'none';
    coursesSec.style.top = '100px';
}

backBTN6.onclick = function(){
    TemporalAnalysisDV.style.display = 'none';
    coursesSec.style.top = '100px';
}

backBTN7.onclick = function(){
    ClassicAnalysisDV.style.display = 'none';
    coursesSec.style.top = '100px';
}

let home = document.getElementById('home');
let about = document.getElementById('about');
let courses = document.getElementById('courses');
let news = document.getElementById('news');

let homeSec = document.getElementById('homeSec');
let aboutSec = document.getElementById('aboutSec');
let newsSec = document.getElementById('newsSec');

home.onclick = function(){
    homeSec.style.display = "block";
    aboutSec.style.display = "none";
    coursesSec.style.display = "none";
    newsSec.style.display = "none";
}

about.onclick = function(){
    homeSec.style.display = "none";
    aboutSec.style.display = "block";
    coursesSec.style.display = "none";
    newsSec.style.display = "none";
}

courses.onclick = function(){
    homeSec.style.display = "none";
    aboutSec.style.display = "none";
    coursesSec.style.display = "block";
    newsSec.style.display = "none";
}

news.onclick = function(){
    homeSec.style.display = "none";
    aboutSec.style.display = "none";
    coursesSec.style.display = "none";
    newsSec.style.display = "block";
}

let coueses2 = document.getElementById('coueses2');

coueses2.onclick = function(){
    homeSec.style.display = "none";
    aboutSec.style.display = "none";
    coursesSec.style.display = "block";
    newsSec.style.display = "none";
}

let home2 = document.getElementById('home2');
let about2 = document.getElementById('about2');
let courses2 = document.getElementById('courses2');
let news2 = document.getElementById('news2');

let menuBtn = document.getElementById('menuBtn');
let closeBtn = document.getElementById('closeBtn');
let secUl = document.getElementById('secUl');
secUl.style.display = "none";

menuBtn.onclick = function(){
    this.style.display = "none";
    closeBtn.style.display = "block";
    secUl.style.display = "block";
}

closeBtn.onclick = function(){
    this.style.display = "none";
    menuBtn.style.display = "block";
    secUl.style.display = "none";
}

home2.onclick = function(){
    homeSec.style.display = "block";
    aboutSec.style.display = "none";
    coursesSec.style.display = "none";
    newsSec.style.display = "none";
    this.style.color = "rgb(12, 133, 180)";
    about2.style.color = "white";
    courses2.style.color = "white";
    news2.style.color = "white";
    closeBtn.style.display = "none";
    menuBtn.style.display = "block";
    secUl.style.display = "none";
}

about2.onclick = function(){
    homeSec.style.display = "none";
    aboutSec.style.display = "block";
    coursesSec.style.display = "none";
    newsSec.style.display = "none";
    this.style.color = "rgb(12, 133, 180)";
    home2.style.color = "white";
    courses2.style.color = "white";
    news2.style.color = "white";
    closeBtn.style.display = "none";
    menuBtn.style.display = "block";
    secUl.style.display = "none";
}

courses2.onclick = function(){
    homeSec.style.display = "none";
    aboutSec.style.display = "none";
    coursesSec.style.display = "block";
    newsSec.style.display = "none";
    this.style.color = "rgb(12, 133, 180)";
    home2.style.color = "white";
    about2.style.color = "white";
    news2.style.color = "white";
    closeBtn.style.display = "none";
    menuBtn.style.display = "block";
    secUl.style.display = "none";
}

news2.onclick = function(){
    homeSec.style.display = "none";
    aboutSec.style.display = "none";
    coursesSec.style.display = "none";
    newsSec.style.display = "block";
    this.style.color = "rgb(12, 133, 180)";
    home2.style.color = "white";
    about2.style.color = "white";
    courses2.style.color = "white";
    closeBtn.style.display = "none";
    menuBtn.style.display = "block";
    secUl.style.display = "none";
}

let headerH = document.getElementById('headerH');

window.onscroll = function(){
    if(window.scrollY){
        headerH.style.background = "rgb(12, 12, 12, 0.83)"; 
        headerH.style.transition = "0.3s";
    }else{
        headerH.style.background = ""; 
        headerH.style.transition = "0.3s";
    }
}