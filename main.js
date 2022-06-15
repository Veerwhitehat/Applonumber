function createCanvas(){

    screen_width, screen_height-159;
    
}
function canvas_position(){
    
    image(0,150);

} 

var swidth=window.innerWidth;
var sheight= window.innerHeight;

var apple= img;

var speak_data= 0;

var to_number= Number(content);

function preload(){

   function loadimage(){

        img = loadimage("apple.webp");

    }

}

function Number() {

    var text = '42px';
    var integer = parseInt(text, 10);
    if(Number.isInteger(to_number));
    if(to_number== true){
        document.getElementById("status").innerHTML= "Started drawing apple";
    }
    else{

        document.getElementById("status").innerHTML= "The speech has not recognized a number ";

    }


    
}
for (var i= 1; i<= to_number; i++) {
 
    x= Math.floor(Math.random*700);
    y= Math.floor(Math.random*400);
    image(apple,x,y,50,50);
    
}
