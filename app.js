var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputText = document.querySelector("#output-text");

var translateURL = "https://lessonfourapi.virendrawadher.repl.co/translate/yoda.json"


function contentURL(text){
    return translateURL + "?text=" + text
}

function servererror(error){
    alert("Sorry! server is down trying again later.")
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
    .catch(servererror)
};

btnTranslate.addEventListener("click", callbackHandler)

