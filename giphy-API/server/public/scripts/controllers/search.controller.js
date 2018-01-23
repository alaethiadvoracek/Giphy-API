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