var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("speech_box").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    var Content = event.results[0][0].transcript;
    document.getElementById("speech_box"). innerHTML = Content;
    Content = Content.toLowerCase();
    if(Content == "take my selfie" || Content == "take my selfie."){
        speak();
    }
}

camera = document.getElementById("camera");
Webcam.set({
    width: 320,
    height: 280,
    image_format: 'jpg',
    jpg_quality:100
});
Webcam.attach(camera);
var img_id = "";
function speak(){
    console.log("3");
    var synth = window.speechSynthesis;
    speak_data = "Taking selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    console.log("4");

    setTimeout(function(){
        img_id= "pic1";
        take_spanshot();
        speak_data = "Taking selfie in 10 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    console.log("4");
        },5000);
    
    setTimeout(function(){
        img_id="pic2";
        take_spanshot();
        speak_data = "Taking selfie in 15 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        console.log("4");
        },10000);
    setTimeout(function(){
        img_id="pic3";
        take_spanshot();
        },15000);   
}

function take_spanshot(){
    Webcam.snap(function(data_uri){
        console.log(data_uri);
        if (img_id== "pic1"){
            document.getElementById("pic1").innerHTML = "<img id = 'selfie1'src = '"+data_uri+"'>"}
        if (img_id== "pic2"){
            document.getElementById("pic2").innerHTML = "<img id = 'selfie2'src = '"+data_uri+"'>"}
        if (img_id== "pic3"){
        document.getElementById("pic3").innerHTML = "<img id = 'selfie3'src = '"+data_uri+"'>"}
    });
}