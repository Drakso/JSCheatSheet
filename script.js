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

// function for 
$( document ).ready(function() { // When the Document Object Model is ready for javascript code, this function is executed
    let elements = document.getElementsByClassName("snip");
    for(let i = 0; i < elements.length; i++){
        let id = elements[i].dataset.id;
        console.log(id);
        waitAndSnip(elements[i], id);
    }
});

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