(function(){

    var getMessageText = function() {
        return document.querySelector("input.message-input").innerHTML;
    }

    // Event listeners registers
    window.addEventListener("button.send-message", "click", function(ev) {
        ev.preventDefault();


    });
})()