function registerRequest(uniqueUser, success, failure) {
  var ajax = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        success(this.responseText)
    }

    this.failure(responseText;)
  };
  xhttp.open("POST", "demo_post.asp", true);
  xhttp.send();
}

function User(username, password) {
    this.username = username;
    this.password = password;

    this.auth = function() {
        var http = getHttpService();
        //TODO: Fix method's name
        var user = http.authorizade(this.getAccess())
            .success(function(resp) {
                var realUser = new User();
                realUser.startSession();
                realUser.loadInfo();
            })
            .failure(function(resp) {
                throw new Exception("Failure while auth.", 403);
            });
        
        return user;
    }

    this.getAccess = function() {
        return {
            login:this.login, 
            password:this.password
        };
    };

    this.startSession = function() {

    };

    this.loadInfo = function() {
        var http = getHttpService();
        
        http.getAccountInfo(token)
            .success(function(resp) {
                console.log(resp);
            })
            .failure(function(err) {
                console.log(err);
            })
    };
}

