var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputText = document.querySelector("#output-text");

var translateURL = "https://api.funtranslations.com/translate/minion.json"


function contentURL(text){
    return translateURL + "?text=" + text
}

function callbackHandler(){
    var inputText = txtInput.value;

    fetch(contentURL(inputText))
    .then(function responseHandler(response){
        return response.json()
    })
    .then (function json(json){
        outputText.innerText = json.contents.translated;
    })
};

btnTranslate.addEventListener("click", callbackHandler)

