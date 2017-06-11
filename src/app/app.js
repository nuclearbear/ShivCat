(function(){
    // Socket.IO library
    var socket = io();

    var formElement  = document.getElementById("send-form");
    var messageInput = document.getElementById("textField");

    var getMessageText = function () {
        return messageInput.value;
    }

    var flushForm = function () {
        messageInput.value = "";
    }

    var sendMessage = function (user, message, sendConfirmation) {
        socket.emit(user, message, function (data) {
            var messageView = getView(message.id);
            markMessageAsSent(messageView);

            sendConfirmation();
        });
    }

    var markMessageAsSent = function (message) {
        message.className += "read"
    }

    var getTime = function () {
        var date = new Date();
        var localeSpecificTime = date.toLocaleTimeString();
        return localeSpecificTime.replace(/:\d+ /, ' ');
    }

    var createMessage = function(text, time) {
        var html = '<div class="message">' +
          '<span class="time">' + time + '</span>' +
          '<a href="/user"><img class="photo" src=""/></a>' +
          '<div clsas="text">' +
          text +
          '</div>';
        
        return html;
    }

    // Event listeners registers
    formElement.addEventListener("submit", function(ev) {
        ev.preventDefault();


        var chatField = document.getElementById("chat");
        var chatHtml  = chatField.innerHTML;

        var messageText = getMessageText();
        var time = getTime();
        var message = createMessage(messageText, time);

        chatField.innerHTML = chatHtml + message;
        
        sendMessage("test", message);
        flushForm();
    }, false);
})()