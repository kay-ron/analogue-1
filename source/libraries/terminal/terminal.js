const fs = require('fs')

lang = null

// Get the terminal syntax JSON
getTerminalSyntax = (callback) => {
    var syntax = new XMLHttpRequest()
    syntax.overrideMimeType('application/json')
    syntax.open('GET', './terminal/language.JSON', true)
    syntax.onreadystatechange = function () {
        if (syntax.readyState == 4 && syntax.status == "200") {
            callback(syntax.responseText)
        }
    }
    syntax.send(null)
}

// Call functions to get syntax (and theme)
switch (lang) {
    case null:
        getTerminalSyntax((response) => {
            lang = JSON.parse(response)
        })
    break
}

highlights = () => {
    var ca = document.getElementById("command")
    for(i=0; i < ca.clientHeight; i++) {
        data = ca[i].innerHTML
        
        switch (data) {
            case data.indexOf("hello") !== -1:
                data.replace(/hello/gi, '<span class="term-hello">hello</span>')
            break
        }
    }
}

window.addEventListener("load", highlights)