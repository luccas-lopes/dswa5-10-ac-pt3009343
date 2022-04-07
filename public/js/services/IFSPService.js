angular.module('ifsp').factory('Curso', function($resource) {
    return($resource('/cursos/:id'));
});

angular.module('ifsp').factory('Contato', function($resource) {
    return($resource('/contatos/:id'));
});