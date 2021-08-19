var bg1,bg2,bg3;
var appState=1;
var asia,africa,europe,northamerica,southamerica,australia,antarctica;
var startbut;
var singapore,thailand,china,india,japan,pakistan,bangladesh,mongolia,myanmar,russia;
var uttarakhandBut,delhiBut,maharashtraBut,gujaratBut,upBut,westBut,tamilBut,sikkimBut,mpBut,rajBut;

var dehradunBut,haridwarBut,pithoragarhBut,champawatBut,chamoliBut,nainitalBut,almoraBut,uttarkashiBut,pauriBut,chakrataBut;
var kanpurBut,mathuraBut,muzaffarnagarBut,lucknowBut,jhansiBut,varanasiBut,agraBut,meerutBut,firozabadBut,saharanpurBut;
var jaipurBut,jodhpurBut,udaipurBut,jaisalmerBut,ajmerBut,bharatpurBut,chhitorgarhBut,alwarBut,kotaBut,mandoreBut;
var ahmedabadbut,suratBut,rajkotBut,gandhinagarBut,jamnagarBut,anandBut,ankleshwarBut,dwarkaBut,khedaBut,jetpurBut;
var bhopalBut,indoreBut,gwaliorBut,jabalpurBut,chhindwaraBut,satnaBut,betulBut,khajurahoBut,rewaBut,shivpuriBut;
var gangtokBut,namchiBut,rangpoBut,singtamBut,lachungBut,pakyongBut,geyzingBut,rongliBut,ranipoolBut,ravanglaBut;
var kolkataBut,durgapurBut,siliguriBut,darjeelingBut,krishnanagarBut,bankuraBut,bolpurBut,midnaporeBut,murshidabadBut,hooghlyBut;
var chennaiBut,kanchipuramBut,maduraiBut,thanjavurBut,ootyBut,rameswaramBut,thiruvarurBut,kanyakumariBut,dharmapuriBut,krishnagiriBut;
var mumbaiBut,puneBut,nagpurBut,aurangabadBut,jalgaonBut,ahmednagarBut,chandrapurBut,osmanabadBut,shirdiBut,ulhasnagarBut;

var dehradunhr,paurihr,almorahr,pithoragarhhr,champawathr,chamolihr,haridwarhr,uttarkashihr,nainitalhr,chakratahr;
var dehradunhr1,paurihr1,almorahr1,pithoragarhhr1,champawathr1,chamolihr1,haridwarhr1,uttarkashihr1,nainitalhr1,chakratahr1;
var dehradunhr2,paurihr2,almorahr2,pithoragarhhr2,champawathr2,chamolihr2,haridwarhr2,uttarkashihr2,nainitalhr2,chakratahr2;
var dehradunhr3,paurihr3,almorahr3,pithoragarhhr3,champawathr3,chamolihr3,haridwarhr3,uttarkashihr3,nainitalhr3,chakratahr3;
var dehradunhr4,paurihr4,almorahr4,pithoragarhhr4,champawathr4,chamolihr4,haridwarhr4,uttarkashihr4,nainitalhr4,chakratahr4;
var dehradunhr5,paurihr4,almorahr4,pithoragarhhr4,champawathr4,chamolihr4,haridwarhr4,uttarkashihr4,nainitalhr4,chakratahr4;
var dehradunhr6,paurihr4,almorahr4,pithoragarhhr4,champawathr4,chamolihr4,haridwarhr4,uttarkashihr4,nainitalhr4,chakratahr4;
var dehradunhr7,paurihr4,almorahr4,pithoragarhhr4,champawathr4,chamolihr4,haridwarhr4,uttarkashihr4,nainitalhr4,chakratahr4;
var dehradunhr8,paurihr4,almorahr4,pithoragarhhr4,champawathr4,chamolihr4,haridwarhr4,uttarkashihr4,nainitalhr4,chakratahr4;
var dehradunhr9,paurihr4,almorahr4,pithoragarhhr4,champawathr4,chamolihr4,haridwarhr4,uttarkashihr4,nainitalhr4,chakratahr4;


function preload(){

    getdehradunMoon();
    getdehradunSun();
    getdehradunDay();
    getdehradunDate();
    getdehradunTime();
    getdehradunSunrise();
    getdehradunSunset();

    setInterval(async()=>{
        getdehradunMoon()},1000
    )
    setInterval(async()=>{
        getdehradunSun()},1000
    )
    setInterval(async()=>{
        getdehradunTime()},1000
    )
    setInterval(async()=>{
        getdehradunDay()},1000
    )
    setInterval(async()=>{
        getdehradunDate()},1000
    )

    bg1=loadImage("backgrounds/bg2.jpg")
}
function setup(){
    createCanvas(displayWidth-5,displayHeight-150)

    startbut=createButton("LET'S START");
    startbut.size(280,50);
    startbut.style('background','orange');

    asia=createButton('ASIA');
    africa=createButton('AFRICA');
    europe=createButton('EUROPE');
    northamerica=createButton('NORTH AMERICA');
    southamerica=createButton('SOUTH AMERICA');
    australia=createButton('AUSTRALIA');
    antarctica=createButton('ANTARCTICA');
    
    asia.size(250,50);
    africa.size(250,50)
    europe.size(250,50)
    northamerica.size(250,50)
    southamerica.size(250,50)
    australia.size(250,50)
    antarctica.size(250,50)

    asia.style('background','orange');
    africa.style('background','lightgreen');
    europe.style('background','pink');
    northamerica.style('background','lightblue');
    southamerica.style('background','orange');
    australia.style('background','yellow');
    antarctica.style('background','orange');


    india=createButton('INDIA');
    china=createButton('CHINA');
    pakistan=createButton('PAKISTAN');
    mongolia=createButton('MONGOLIA');
    russia=createButton('RUSSIA');
    myanmar=createButton('MYANMAR');
    japan=createButton('JAPAN');
    singapore=createButton('SINGAPORE');
    thailand=createButton('THAILAND');
    bangladesh=createButton('BANGLADESH');
    
    india.size(250,50);
    china.size(250,50)
    pakistan.size(250,50)
    mongolia.size(250,50)
    bangladesh.size(250,50)
    russia.size(250,50)
    myanmar.size(250,50)
    japan.size(250,50)
    singapore.size(250,50)
    thailand.size(250,50)

    india.style('background','orange');
    china.style('background','lightgreen');
    pakistan.style('background','lightgreen');
    mongolia.style('background','lightblue');
    singapore.style('background','orange');
    russia.style('background','yellow');
    myanmar.style('background','yellow');
    japan.style('background','pink');
    thailand.style('background','lightblue');
    bangladesh.style('background','pink');


    uttarakhandBut=createButton('UTTARAKHAND');
    delhiBut=createButton('DELHI');
    sikkimBut=createButton('SIKKIM');
    upBut=createButton('UTTAR PRADESH');
    tamilBut=createButton('TAMIL NADU');
    westBut=createButton('WEST BENGAL');
    rajBut=createButton('RAJASTHAN');
    mpBut=createButton('MADHYA PRADESH');
    maharashtraBut=createButton('MAHARASHTRA');
    gujaratBut=createButton('GUJARAT');

    uttarakhandBut.size(250,50);
    delhiBut.size(250,50)
    sikkimBut.size(250,50)
    upBut.size(250,50)
    tamilBut.size(250,50)
    westBut.size(250,50)
    rajBut.size(250,50)
    mpBut.size(250,50)
    maharashtraBut.size(250,50)
    gujaratBut.size(250,50)

    uttarakhandBut.style('background','pink');
    delhiBut.style('background','lightgreen');
    sikkimBut.style('background','pink');
    upBut.style('background','lightblue');
    tamilBut.style('background','yellow');
    westBut.style('background','orange');
    rajBut.style('background','yellow');
    mpBut.style('background','orange');
    maharashtraBut.style('background','lightblue');
    gujaratBut.style('background','lightgreen');


    dehradunBut=createButton('DEHRADUN');
    haridwarBut=createButton('HARIDWAR');
    pithoragarhBut=createButton('PITHORAGARH');
    champawatBut=createButton('CHAMPAWAT');
    chamoliBut=createButton('CHAMOLI');
    nainitalBut=createButton('NAINITAL');
    almoraBut=createButton('ALMORA');
    uttarkashiBut=createButton('UTTARKASHI');
    pauriBut=createButton('PAURI');
    chakrataBut=createButton('CHAKRATA');
    
    dehradunBut.size(250,50);
    haridwarBut.size(250,50)
    pithoragarhBut.size(250,50)
    champawatBut.size(250,50)
    chamoliBut.size(250,50)
    nainitalBut.size(250,50)
    almoraBut.size(250,50)
    uttarkashiBut.size(250,50)
    pauriBut.size(250,50)
    chakrataBut.size(250,50)

    dehradunBut.style('background','orange');
    haridwarBut.style('background','lightgreen');
    pithoragarhBut.style('background','lightgreen');
    champawatBut.style('background','lightblue');
    chamoliBut.style('background','orange');
    nainitalBut.style('background','yellow');
    almoraBut.style('background','yellow');
    uttarkashiBut.style('background','pink');
    pauriBut.style('background','lightblue');
    chakrataBut.style('background','pink');

}
function draw(){
    background(bg1);

    if(appState===1){
    textSize(50);
    fill("red")
    stroke("black");
    strokeWeight(4);
    text("LET'S SEE THE LIVE MOON AND SUN POSITIONS",displayWidth/2-570,displayHeight/2-230);
    text("OF DIFFERENT PLACES",displayWidth/2-300,displayHeight/2-170)
    startbut.mousePressed(()=>{
        appState=2;
    })
    startbut.position(displayWidth/2-170,displayHeight/2-120);
    }

    if(appState===2){
    textSize(50);
    fill("red")
    stroke("black");
    strokeWeight(4);
    text("CONTINENT : ",displayWidth/2-200,displayHeight/2-340);

    startbut.hide();
    asia.position(displayWidth/2-170,displayHeight/2-300);
    africa.position(displayWidth/2-170,displayHeight/2-250);
    europe.position(displayWidth/2-170,displayHeight/2-200);
    northamerica.position(displayWidth/2-170,displayHeight/2-150);
    southamerica.position(displayWidth/2-170,displayHeight/2-100);
    australia.position(displayWidth/2-170,displayHeight/2-50);
    antarctica.position(displayWidth/2-170,displayHeight/2);
    }
    asia.mousePressed(()=>{
     appState=3;
    })
    if(appState===3){
        background(bg1);
    
        asia.hide();
        africa.hide();
        europe.hide();
        northamerica.hide();
        southamerica.hide();
        australia.hide();
        antarctica.hide();
    
        textSize(50);
        fill("red")
        stroke("black");
        strokeWeight(4);
        text("COUNTRY :",displayWidth/2-180,displayHeight/2-400);
        
        mongolia.position(displayWidth/2-170,displayHeight/2-370);
        thailand.position(displayWidth/2-170,displayHeight/2-320);
        myanmar.position(displayWidth/2-170,displayHeight/2-270);
        china.position(displayWidth/2-170,displayHeight/2-220);
        japan.position(displayWidth/2-170,displayHeight/2-170);
        india.position(displayWidth/2-170,displayHeight/2-120);
        russia.position(displayWidth/2-170,displayHeight/2-70);
        bangladesh.position(displayWidth/2-170,displayHeight/2-20);
        singapore.position(displayWidth/2-170,displayHeight/2+30);
        pakistan.position(displayWidth/2-170,displayHeight/2+80);
    }
    india.mousePressed(()=>{
    appState=4;
    })
    if(appState===4){
        india.hide();
        singapore.hide();
        myanmar.hide();
        china.hide();
        japan.hide();
        mongolia.hide();
        pakistan.hide();
        thailand.hide();
        russia.hide();
        bangladesh.hide();

        textSize(50);
        fill("red")
        stroke("black");
        strokeWeight(4);
        text("STATE :",displayWidth/2-155,displayHeight/2-370);

    mpBut.position(displayWidth/2-350,displayHeight/2-300);
    upBut.position(displayWidth/2-350,displayHeight/2-230);
    uttarakhandBut.position(displayWidth/2-350,displayHeight/2-160);
    rajBut.position(displayWidth/2-350,displayHeight/2-90);
    gujaratBut.position(displayWidth/2-350,displayHeight/2-20);
    sikkimBut.position(displayWidth/2,displayHeight/2-300);
    westBut.position(displayWidth/2,displayHeight/2-230);
    tamilBut.position(displayWidth/2,displayHeight/2-160);
    maharashtraBut.position(displayWidth/2,displayHeight/2-90);
    delhiBut.position(displayWidth/2,displayHeight/2-20);
    }
    uttarakhandBut.mousePressed(()=>{
        appState=5;
    })
    if(appState===5){
        
    uttarakhandBut.hide();
    westBut.hide();
    mpBut.hide();
    delhiBut.hide();
    upBut.hide();
    tamilBut.hide();
    sikkimBut.hide();
    gujaratBut.hide();
    rajBut.hide();
    maharashtraBut.hide();

    dehradunBut.position(displayWidth/2-350,displayHeight/2-300);
    haridwarBut.position(displayWidth/2-350,displayHeight/2-230);
    uttarkashiBut.position(displayWidth/2-350,displayHeight/2-160);
    chakrataBut.position(displayWidth/2-350,displayHeight/2-90);
    chamoliBut.position(displayWidth/2-350,displayHeight/2-20);
    champawatBut.position(displayWidth/2,displayHeight/2-300);
    pithoragarhBut.position(displayWidth/2,displayHeight/2-230);
    almoraBut.position(displayWidth/2,displayHeight/2-160);
    nainitalBut.position(displayWidth/2,displayHeight/2-90);
    pauriBut.position(displayWidth/2,displayHeight/2-20);

    textSize(50);
    fill("red")
    stroke("black");
    strokeWeight(4);
    text("CITY :",displayWidth/2-145,displayHeight/2-360);
    }
    dehradunBut.mousePressed(()=>{
        appState=6;
    })
    pauriBut.mousePressed(()=>{
        appState=7;
    })
    uttarkashiBut.mousePressed(()=>{
        appState=8;
    })
    pithoragarhBut.mousePressed(()=>{
        appState=9;
    })
    champawatBut.mousePressed(()=>{
        appState=10;
    })
    chamoliBut.mousePressed(()=>{
        appState=11;
    })
    haridwarBut.mousePressed(()=>{
        appState=12;
    })
    nainitalBut.mousePressed(()=>{
        appState=13;
    })
    almoraBut.mousePressed(()=>{
        appState=14;
    })
    chakrataBut.mousePressed(()=>{
        appState=15;
    })

    if(appState===6){
        background(bg1);
        dehradunBut.hide();
        pauriBut.hide();
        uttarkashiBut.hide();
        pithoragarhBut.hide();
        champawatBut.hide();
        chamoliBut.hide();
        haridwarBut.hide();
        nainitalBut.hide();
        almoraBut.hide();
        chakrataBut.hide();
        stroke(0);
        strokeWeight(2);
        fill("black");
        textSize(48);
        text("DEHRADUN CURRENT DATA",displayWidth/2-310,displayHeight/2-430);
        
        textSize(48);
        stroke(0);
        strokeWeight(2.5);
        fill("black");
        text("DATE :",displayWidth/2-310,displayHeight/2-300);
        text("CURRENT TIME :",displayWidth/2-310,displayHeight/2-230);
        text("SUNRISE :",displayWidth/2-310,displayHeight/2-160);
        text("SUNSET :",displayWidth/2-310,displayHeight/2-90);
        text("MOON ALTITUDE :",displayWidth/2-310,displayHeight/2-20);
        text("SUN ALTITUDE :",displayWidth/2-310,displayHeight/2+50);
        text("DAY LENGTH :",displayWidth/2-310,displayHeight/2+120);

        textSize(48);
        stroke(0);
        strokeWeight(2);
        fill("red");
        text(dehradunhr5,displayWidth/2-140,displayHeight/2-300);
        text(dehradunhr7,displayWidth/2+90,displayHeight/2-230);
        text(dehradunhr8,displayWidth/2+130,displayHeight/2-160);
        text(dehradunhr9,displayWidth/2+110,displayHeight/2-90);
        text(dehradunhr1 + " °",displayWidth/2+130,displayHeight/2-20);
        text(dehradunhr3 + " °",displayWidth/2+110,displayHeight/2+50);
        text(dehradunhr4,displayWidth/2+50,displayHeight/2+120);
       
    }
    if(appState===7){
        background(bg1);
        dehradunBut.hide();
        pauriBut.hide();
        uttarkashiBut.hide();
        pithoragarhBut.hide();
        champawatBut.hide();
        chamoliBut.hide();
        haridwarBut.hide();
        nainitalBut.hide();
        almoraBut.hide();
        chakrataBut.hide();
        stroke(0);
        strokeWeight(2);
        fill("black");
        textSize(48);
        text("PAURI CURRENT DATA",displayWidth/2-290,displayHeight/2-430)        
    }
    if(appState===8){
        background(bg1);
        dehradunBut.hide();
        pauriBut.hide();
        uttarkashiBut.hide();
        pithoragarhBut.hide();
        champawatBut.hide();
        chamoliBut.hide();
        haridwarBut.hide();
        nainitalBut.hide();
        almoraBut.hide();
        chakrataBut.hide();
        stroke(0);
        strokeWeight(2);
        fill("black");
        textSize(48);
        text("UTTARKASHI CURRENT DATA",displayWidth/2-320,displayHeight/2-430)        
    }
    if(appState===9){
        background(bg1);
        dehradunBut.hide();
        pauriBut.hide();
        uttarkashiBut.hide();
        pithoragarhBut.hide();
        champawatBut.hide();
        chamoliBut.hide();
        haridwarBut.hide();
        nainitalBut.hide();
        almoraBut.hide();
        chakrataBut.hide();
        stroke(0);
        strokeWeight(2);
        fill("black");
        textSize(48);
        text("PITHORAGARH CURRENT DATA",displayWidth/2-330,displayHeight/2-430)        
    }
    if(appState===10){
        background(bg1);
        dehradunBut.hide();
        pauriBut.hide();
        uttarkashiBut.hide();
        pithoragarhBut.hide();
        champawatBut.hide();
        chamoliBut.hide();
        haridwarBut.hide();
        nainitalBut.hide();
        almoraBut.hide();
        chakrataBut.hide();
        stroke(0);
        strokeWeight(2);
        fill("black");
        textSize(48);
        text("CHAMPAWAT CURRENT DATA",displayWidth/2-310,displayHeight/2-430)        
    }
    if(appState===11){
        background(bg1);
        dehradunBut.hide();
        pauriBut.hide();
        uttarkashiBut.hide();
        pithoragarhBut.hide();
        champawatBut.hide();
        chamoliBut.hide();
        haridwarBut.hide();
        nainitalBut.hide();
        almoraBut.hide();
        chakrataBut.hide();
        stroke(0);
        strokeWeight(2);
        fill("black");
        textSize(48);
        text("CHAMOLI CURRENT DATA",displayWidth/2-310,displayHeight/2-430)        
    }
    if(appState===12){
        background(bg1);
        dehradunBut.hide();
        pauriBut.hide();
        uttarkashiBut.hide();
        pithoragarhBut.hide();
        champawatBut.hide();
        chamoliBut.hide();
        haridwarBut.hide();
        nainitalBut.hide();
        almoraBut.hide();
        chakrataBut.hide();
        stroke(0);
        strokeWeight(2);
        fill("black");
        textSize(48);
        text("HARIDWAR CURRENT DATA",displayWidth/2-310,displayHeight/2-430)        
    }
    if(appState===13){
        background(bg1);
        dehradunBut.hide();
        pauriBut.hide();
        uttarkashiBut.hide();
        pithoragarhBut.hide();
        champawatBut.hide();
        chamoliBut.hide();
        haridwarBut.hide();
        nainitalBut.hide();
        almoraBut.hide();
        chakrataBut.hide();
        stroke(0);
        strokeWeight(2);
        fill("black");
        textSize(48);
        text("NAINITAL CURRENT DATA",displayWidth/2-310,displayHeight/2-430)        
    }
    if(appState===14){
        background(bg1);
        dehradunBut.hide();
        pauriBut.hide();
        uttarkashiBut.hide();
        pithoragarhBut.hide();
        champawatBut.hide();
        chamoliBut.hide();
        haridwarBut.hide();
        nainitalBut.hide();
        almoraBut.hide();
        chakrataBut.hide();
        stroke(0);
        strokeWeight(2);
        fill("black");
        textSize(48);
        text("ALMORA CURRENT DATA",displayWidth/2-310,displayHeight/2-430)        
    }
    if(appState===15){
        background(bg1);
        dehradunBut.hide();
        pauriBut.hide();
        uttarkashiBut.hide();
        pithoragarhBut.hide();
        champawatBut.hide();
        chamoliBut.hide();
        haridwarBut.hide();
        nainitalBut.hide();
        almoraBut.hide();
        chakrataBut.hide();
        stroke(0);
        strokeWeight(2);
        fill("black");
        textSize(48);
        text("CHAKRATA CURRENT DATA",displayWidth/2-310,displayHeight/2-430)        
    }
}
async function getdehradunMoon(){
    var responsedehradun=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=dehradun,%20india");
    var responseJSONdehradun=await responsedehradun.json();
    dehradunhr=await responseJSONdehradun.moon_altitude.toString();
    dehradunhr1=dehradunhr.slice(0,5);
}
async function getdehradunSun(){
    var responsedehradun=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=dehradun,%20india");
    var responseJSONdehradun=await responsedehradun.json();
    dehradunhr2=await responseJSONdehradun.sun_altitude.toString();
    dehradunhr3=dehradunhr2.slice(0,5);
}
async function getdehradunDay(){
    var responsedehradun=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=dehradun,%20india");
    var responseJSONdehradun=await responsedehradun.json();
    dehradunhr4=await responseJSONdehradun.day_length;
}
async function getdehradunDate(){
    var responsedehradun=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=dehradun,%20india");
    var responseJSONdehradun=await responsedehradun.json();
    dehradunhr5=await responseJSONdehradun.date;
}
async function getdehradunTime(){
    var responsedehradun=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=dehradun,%20india");
    var responseJSONdehradun=await responsedehradun.json();
    dehradunhr6=await responseJSONdehradun.current_time.toString();
    dehradunhr7=dehradunhr6.slice(0,8);
}
async function getdehradunSunrise(){
    var responsedehradun=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=dehradun,%20india");
    var responseJSONdehradun=await responsedehradun.json();
    dehradunhr8=await responseJSONdehradun.sunrise;
}
async function getdehradunSunset(){
    var responsedehradun=await fetch("https://api.ipgeolocation.io/astronomy?apiKey=d2164609bdf744588a29d236dc5bef86&location=dehradun,%20india");
    var responseJSONdehradun=await responsedehradun.json();
    dehradunhr9=await responseJSONdehradun.sunset;
}