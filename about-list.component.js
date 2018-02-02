angular.module('testApp').component('derpington', {
    templateUrl: "boringlist.html",
    controller: function testAppController() {
      this.user = 'Daniela Gech';

      this.items = [
                    {
                      name: 'This is a list item'
                    }, {
                      name: 'Another list item'
                    }, {
                      name: 'List item number 3'
                    }, {
                      name: 'Boring list item'
                    }
                  ];
    }
  });
