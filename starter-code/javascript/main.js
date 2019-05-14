

var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');

var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');

var milCentena = document.getElementById('milCentena');



var callbackOnAvanza1Segundo = (lapso) => {

    console.log(lapso);

    let ms=lapso.getTextoMS();
    let s=lapso.getTextoS();
    let m=lapso.getTextoMin();


    /* resuilta que la fuente no es mono espace y debemos dvidid
    * cada digito en un span
    * */

    milCentena.innerText=ms.substr(0,1);


    secDec.innerText = s.substr(0,1);
    secUni.innerText = s.substr(1);
    minDec.innerText = m.substr(0,1);
    minUni.innerText = m.substr(1);



};


var cronometro = new Chronometer(callbackOnAvanza1Segundo);



var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');

btnLeft.onclick=(event)=>{
  cronometro.start_or_stop();
};


btnRight.onclick=(event)=>{
    cronometro.reset();
};