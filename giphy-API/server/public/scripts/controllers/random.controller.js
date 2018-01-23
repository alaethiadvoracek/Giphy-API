giphyApp.controller("randomController", ['$http', function($http){
    const random = this;
    random.giphyRandom = {}

    random.randomButton = function(randomText) {
        const config = {
            params: {
                api_key: 'IrqoZw7Y90x3ZjGj5EJBIEr3AfLd2tPD'
            }
            }
        $http.get('http://api.giphy.com/v1/gifs/random', config).then(function(response){
            random.giphyRandom = response.data.data;
            
            console.log(response);
        })
   
    }//end app.get

}]);//end controller for random 
