Webcam.set({
    width: 400,
    height: 300,
    image_format: 'jpg',
    png_quality: 100
});

camera = document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="snapshot" src="' + data_uri + '"/>'
    });
}

console.log("version of ml5:", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/DwIDXHKvW/model.json", modelLoaded);

function modelLoaded() {
    console.log("Your model is loaded!")
}