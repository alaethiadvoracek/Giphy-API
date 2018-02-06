giphyApp.controller("searchController", ['$http', function($http){
    const search = this;
    search.giphySearch = {}

    
    
    search.searchButton = function(searchText) {
        const config = {
            params: {
                q: searchText
            }
            }
        
        $http.get('/giphy', config).then(function(response){
            search.giphySearch = response.data.data;

        })
   
    }//end app.get
}]);//end app controller for search 