giphyApp.controller('MaterialController', function($mdToast){
    console.log('MaterialController loaded.')
    const vm = this;

    vm.openToast = function($event) {
        $mdToast.showSimple('Searched for a gif!');
        $mdToast.show($mdToast.simple().textContent('Hello!'));
        // Could also do 
      };

    });