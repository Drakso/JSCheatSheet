/* A promise for getting raw snippet code from GitHubGist */
function getSnippetCode(id){ // The id of the snippet
    return new Promise((resolve, reject) =>{ // Creates and returns new promise
        const request = new XMLHttpRequest(); // Creates a new XMLHttpRequest object

        request.open("GET", `https://gist.githubusercontent.com/Drakso/${id}/raw`); // Initializing the request with my GitHubGist adress
        request.onload = function() { // If the server responds, this onload handler will be called
            try {
                if(this.status === 200){ // Only use result data if result status is 200(OK)
                    resolve(this.response); // Resolve this promise returning the response data
                } else {
                    reject(this.status + ": " + this.statusText); // Reject this promise with a status code and a message
                }
            } catch(ex) { // if the try block fails catch the exception in an ex parameter
                reject(ex.message); // Reject this promise with the exception message from the ex parameter
            }
        };

        request.onerror = function() { // If there is an error in communication with the server, this onerror handler will be called
            reject(this.status + ": " + this.statusText); // Reject the promise with the status code and a message
        };

        request.send(); // Send the request to the server
    });
}

// Function for calling the gists and creating a highlight.js container
$( document ).ready(function() { // When the Document Object Model is ready for javascript code, this function is executed
    let elements = document.getElementsByClassName("snip");
    for(let i = 0; i < elements.length; i++){
        let id = elements[i].dataset.id;
        console.log(id);
        waitAndSnip(elements[i], id);
    }
});

// The site will load before the http requests get response. That is where async functions come in handy, making the library highlight.js wait until we get the responses
async function waitAndSnip(element, id){
    let code = await getSnippetCode(id).then(
        function(val) {
            return val;
        })
    .catch(
       (reason) => {
            console.log('Handle rejected promise ('+reason+') here.');
        });
        element.innerHTML = code;
        $(document).ready(function() {
            $('pre code').each(function(i, block) {
              hljs.highlightBlock(block);
            });
          });
}

// ScopeExample
let scopeExample = [
    {line: 0, text: "A variable 'a' is declared and it is given a value '10'. It is declared and lives in the global scope(Scope A)"},
    {line: 14, text: "A function 'add5' is called with an argument, the number 3"},
    {line: 1, text: "The execution goes to where the function 'add5' is declared and the number 3 is passed in the place of number1. This function is declared and lives in the Global Scope(Scope A). Every declaration inside the function including the argument lives in the newly created 'add5' function scope(Scope B)"},
    {line: 2, text: "A variable 'b' is declared and it is given a value '5'. It is declared and lives in the 'add5' function scope"},
    {line: 3, text: "The sum of the 'number1' passed in the function 'add5' and the variable 'a' is logged in the console. This console.log needs these two variables so it starts to look for them. First it searches for 'number1' in its own scope(Scope B). It finds it and returns 3. Then it tries to find 'a'. It searches it's own scope (Scope B). It finds the variable 'b' and returns 5. 8 is written in the console"},
    {line: 7, text: "A function 'add10' is called with an argument, the number 3"},
    {line: 4, text: "The execution now goes to where the function 'add10' is declared and the number 3 is passed in the place of the 'number2'. The function is declared and lives in the 'add5' function scope(Scope B). Every declaration inside the function including the argument lives in the newly created 'add10' function scope(Scope C)"},
    {line: 5, text: "The sum of 'number2' passed in the function 'add10' and the variable 'a' is logged in the console. This console.log needs these two variables so the system starts to look for them. First it searches for 'number2' in its own scope(Scope C). It finds it and returns 3. Then it tries to find 'b'. It searches in it's own scope(Scope C). It does not find it so it continues to its parent scope(Scope B). It searches the parent scope(Scope B). It doesn't find variable 'a' there so it continues further out the scope chain to the next outer scope(Scope A). It finds the variable 'a' there and returns 10. 13 is logged in the console"},
    {line: 12, text: "A function 'add15' is called with an argument, the number 3"},
    {line: 8, text: "The execution goes to where the function 'add15' is declared and the number 3 is passed in the place of the 'number3'. The function is declared and lives in the 'add5' function scope(Scope B). Every declaration inside the function including the argument lives in the newly created 'add15' function scope(Scope D)"},
    {line: 9, text: "A variable 'c' is declared and it is given a value '15'. It is declared and lives in the 'add15' function scope(Scope D)"},
    {line: 10, text: "The sum of the 'number3' passed in the function 'add15' and the variable 'c' is logged in the console. This console.log needs the two variables so the system starts to search for them. It starts with the 'number3' and searches in its own scope(Scope D). It finds it and returns 3. Next it searches for the variable 'c' in its own scope. It finds the variable 'c' and returns 15. 18 is logged in the console"}
];

let explain = document.getElementsByClassName("explanation")[0];

let scopeCounter = 0;
let previousLine = 0;
document.getElementById("btnNext").addEventListener("click", function(){    
    if((scopeExample.length-1) != scopeCounter){
        scopeCounter++;
        let line = scopeExample[scopeCounter].line;
        let text = scopeExample[scopeCounter].text;
        
        document.getElementById(`line${previousLine}`).innerHTML = "";
        explain.innerHTML = "";

        document.getElementById(`line${line}`).innerHTML = ">";
        explain.innerHTML = text;

        previousLine = line;
    }
});

document.getElementById("btnPrevious").addEventListener("click", function(){    
    if(scopeCounter != 0){   
        scopeCounter--;
        let line = scopeExample[scopeCounter].line;
        let text = scopeExample[scopeCounter].text;
        
        document.getElementById(`line${previousLine}`).innerHTML = "";
        explain.innerHTML = "";

        document.getElementById(`line${line}`).innerHTML = ">";
        explain.innerHTML = text;

        previousLine = line;
    }
});