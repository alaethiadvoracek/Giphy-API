const giphyApp = angular.module('giphyApp', []);

giphyApp.controller("searchController", ['$http', function($http){
    const search = this;
    search.giphySearch = {}

    
    
    search.searchButton = function(searchText) {
        const config = {
            params: {
                api_key: 'IrqoZw7Y90x3ZjGj5EJBIEr3AfLd2tPD',
                q: searchText
            }
            }
        $http.get('http://api.giphy.com/v1/gifs/search', config).then(function(response){
            search.giphySearch = response.data.data;

            console.log(search.giphySearch);
        })
   
    }//end app.get
}]);//end app controller for search 







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

console.log('IT WORKED!!!');