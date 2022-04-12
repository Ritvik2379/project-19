quick_draw_data_set=["aircraft carrier","airplane","alarm clock","ambulance","angel","animal migration","ant","anvil","apple","arm","asparagus","axe","backpack","banana","bandage","barn","baseball","baseball bat","basket","basketball","bat","bathtub","beach","bear","beard","bed","bee","belt","bench","bicycle","binoculars","bird","birthday cake","blackberry","blueberry","book","boomerang","bottlecap","bowtie","bracelet","brain","bread","bridge","broccoli","broom","bucket","bulldozer","bus","bush","butterfly","cactus","cake","calculator","calendar","camel","camera","camouflage","campfire","candle","cannon","canoe","car","carrot","castle","cat","ceiling fan","cello","cell phone","chair","chandelier","church","circle","clarinet","clock","cloud","coffee cup","compass","computer","cookie","cooler","couch","cow","crab","crayon","crocodile","crown","cruise ship","cup","diamond","dishwasher","diving board","dog","dolphin","donut","door","dragon","dresser","drill","drums","duck","dumbbell","ear", "elbow","elephant","envelope","eraser","eye","eyeglasses","face","fan","feather","fence","finger","fire hydrant","fireplace","firetruck","fish","flamingo","flashlight","flip flops","floor lamp","flower","flying saucer","foot","fork","frog","frying pan","garden","garden hose","giraffe","goatee","golf club","grapes","grass","guitar","hamburger","hammer","hand","harp","hat","headphones","hedgehog","helicopter","helmet","hexagon","hockey puck","hockey stick","horse","hospital","hot air balloon","hot dog","hot tub","hourglass","house","house plant","hurricane","ice cream","jacket","jail","kangaroo","key","keyboard","knee","knife","ladder","lantern","laptop","leaf","leg","light bulb","lighter","lighthouse","lightning","line","lion","lipstick","lobster","lollipop","mailbox","map","marker","matches","megaphone","mermaid","microphone","microwave","monkey","moon","mosquito","motorbike","mountain","mouse","moustache","mouth","mug","mushroom","nail","necklace","nose","ocean","octagon","octopus","onion","oven","owl","paintbrush","paint can","palm tree","panda","pants","paper clip","parachute","parrot","passport","peanut","pear","peas","pencil","penguin","piano","pickup truck","picture frame","pig","pillow","pineapple","pizza","pliers","police car","pond","pool","popsicle","postcard","potato","power outlet","purse","rabbit","raccoon","radio","rain","rainbow","rake","remote control","rhinoceros","rifle","river","roller coaster","rollerskates","sailboat","sandwich","saw","saxophone","school bus","scissors","scorpion","screwdriver","sea turtle","see saw","shark","sheep","shoe","shorts","shovel","sink","skateboard","skull","skyscraper","sleeping bag","smiley face","snail","snake","snorkel","snowflake","snowman","soccer ball","sock","speedboat","spider","spoon","spreadsheet","square","squiggle","squirrel","stairs","star","steak","stereo","stethoscope","stitches","stop sign","stove","strawberry","streetlight","string bean","submarine","suitcase","sun","swan","sweater","swingset","sword","syringe","table","teapot","teddy-bear","telephone","television","tennis racquet","tent","The Eiffel Tower","The Great Wall of China","The Mona Lisa","tiger","toaster","toe","toilet","tooth","toothbrush","toothpaste","tornado","tractor","traffic light","train","tree","triangle","trombone","truck","trumpet","tshirt","umbrella","underwear","van","vase","violin","washing machine","watermelon","waterslide","whale","wheel","windmill","wine bottle","wine glass","wristwatch","yoga","zebra","zigzag"];
var sketch="";
random_number=Math.floor((Math.random()*array_1.length)+1); 
console.log(quick_draw_data_set.random_number);
sketch=quick_draw_data_set.random_number;
document.getElementById("sketch-2")= "Sketch to be drawn: " + sketch;
timer_counter=0;
score=0;
answer_holder="";
timer_check="";
sketch_drawn="";
function updateCanvas(){
    No=Math.random*100;
    sketch=quick_draw_data_set[No].label;
    console.log(sketch);   
    document.getElementById("sketch-1").innerHTML=sketch;
}
function setup() {
    canvas = createCanvas(280,280);
    canvas.center();
    canvas.mouseReleased(classifycanvas);
}
function draw() {
    checksketch();
    if (sketch = sketch_drawn){
    answer_holder="set";
    score + 1;
    document.getElementById("score").innerHTML=score;
    strokeWeight(13);
    stroke(0);
    if (mouseIsPressed)
    {line(pmouseX,pmouseY,mouseX,mouseY);}
}
function checksketch(){
    timer_counter+1;
    document.getElementById("time").innerHTML=timer_counter;
    console.log(timer_counter);
    if(timer_counter > 400){
        timer_counter=0;
        timer_check="completed";
        if(timer_check == "completed" ){
           timer_check="";
           answer_holder="";
           updateCanvas();
        }
        else if(answer_holder == "set" ){
            timer_check="";
            answer_holder="";
            updateCanvas();
        }
    }
}
}
function preload(){
    classifier = ml5.imageClassifier('DoodleNet')
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
    sketch_drawn=object[0].label;
    document.getElementById("sketch-1").innerHTML=sketch_drawn;
    document.getElementById("confidence").innerHTML='Confidence:' + Math.round(results[0].confidence * 100) + '%';
    
}