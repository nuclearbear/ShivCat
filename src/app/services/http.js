var httpService = new CatModule(function() {
    function getApiUrl() {
        return "http:\\localhost\api";
    }

    function getAccountInfo() {
        return;
    }

    function authorizade() {
        return;
    }

    function getHttpService() {
        var http = new XMLHttpRequest();

        http.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                success(this.responseText)
            }

            this.failure(responseText);
        };
    }
})