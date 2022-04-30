canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car1width=100;
car1height=70;
car1x=15;
car1y=10;
car2width=150;
car2height=100;
car2x=0;
car2y=200;
backgroundimg="2.jpg"
carimg1="car2231-removebg-preview.png";
function add(){  
    backgroundimgtag=new Image();
backgroundimgtag.onload=uploadbackground;
backgroundimgtag.src=backgroundimg;

    car1imgtag=new Image();
    car1imgtag.onload=uploadcar1;
    car1imgtag.src="car.png";
    car2imgtag=new Image();
    car2imgtag.onload=uploadcar2;
    car2imgtag.src="daw.png";
    
    }
    function uploadbackground(){
        ctx.drawImage(backgroundimgtag,0,0,canvas.width,canvas.height);
        
        }
        function uploadcar1(){
            ctx.drawImage(car1imgtag,car1x,car1y,car1width,car1height);
        }
        function uploadcar2(){
            ctx.drawImage(car2imgtag,car2x,car2y,car2width,car2height);

        }
        window.addEventListener("keydown",mykeydown);
function mykeydown(e){
keypressed=e.keyCode;
console.log(keypressed);
if (keypressed=='65'){ 
    left2();
    console.log("a");
}
if (keypressed=='87'){
    up2();
    console.log("w");
}
if (keypressed=='68'){
    right2();
    console.log("d");
}
if (keypressed=='83'){
    down2();
    console.log("s");
}
if (keypressed=='37'){
    left();
    console.log("left");
}
if (keypressed=='38'){
    up();
    console.log("up");
}
if (keypressed=='39'){
    right();
    console.log("right");
}
if (keypressed=='40'){
    down();
    console.log("down");
}
if(car1x > 700)
{
    console.log("Car1 has won");
    document.getElementById('score').innerHTML=("Car 1 Has Won!");
}
else if(car2x > 650)
{
    console.log("Car2 has won");
    document.getElementById('score').innerHTML=("Car 2 Has Won!");
}
}
function up(){
    if (car1y>=0){
        car1y=car1y-10;
        console.log("when up is pressed then x="+car1x+"y="+car1y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }  
}  
    function down(){
        if (car1y<=500){
            car1y=car1y+10;
            console.log("when down is pressed then x="+car1x+"y="+car1y);
            uploadbackground();
            uploadcar1();
            uploadcar2();
        }   
     

}
function left(){
    if (car1x>0){
        car1x=car1x-10;
        console.log("when left is pressed then x="+car1x+"y="+car1y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    } 
}
    function right(){
        if (car1x<700){
            car1x=car1x+10;
            console.log("when right is pressed then x="+car1x+"y="+car1y);
            uploadbackground();
            uploadcar1();
            uploadcar2();
        }    
    } 

    function up2(){
        if (car2y>=0){
            car2y=car2y-10;
            console.log("when up is pressed then x="+car2x+"y="+car2y);
            uploadbackground();
            uploadcar1();
            uploadcar2();
        }  
    }  
        function down2(){
            if (car2y<=500){
                car2y=car2y+10;
                console.log("when down is pressed then x="+car2x+"y="+car2y);
                uploadbackground();
                uploadcar1();
                uploadcar2();
            }   
         
    
    }
    function left2(){
        if (car2x>0){
            car2x=car2x-10;
            console.log("when left is pressed then x="+car2x+"y="+car2y);
            uploadbackground();
            uploadcar1();
            uploadcar2();
        } 
    }
        function right2(){
            if (car2x<700){
                car2x=car2x+10;
                console.log("when right is pressed then x="+car2x+"y="+car2y);
                uploadbackground();
                uploadcar1();
                uploadcar2();
            }    
        } 
