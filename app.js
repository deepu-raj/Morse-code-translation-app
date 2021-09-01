var btnClick = document.querySelector("#click-btn");
var textInput = document.querySelector("#textArea");
var outputText = document.querySelector("#output");
var url  = "https://api.funtranslations.com/translate/morse.json"

function translationURL(input){
    return url +  "?text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}

function clickEventHandler(){
    var inputText = textInput.value;
    fetch(translationURL(inputText))
    .then(response => response.json())
    .then(json=>{
        var translatedText = json.contents.translated
        outputText.innerText = translatedText
                })
    .catch(errorHandler)
  };
        
btnClick.addEventListener("click", clickEventHandler);