var app = angular.module('AppVoluntarios', []);
	app.controller('VoluntariosCtrl', function($scope, $http) {

	$scope.CADASTRO = (NOME, SOBRENOME, RG, CPF, DATANASCIMENTO, HABILIDADES, EMAIL, USUARIO, SENHA) => {
			$http({
					url: 'http://localhost:5000/api/voluntarios',
					method: 'POST',
					data:{	
							'nome': NOME,
							'sobrenome': SOBRENOME,
							'rg': RG,
							'cpf': CPF,
							'data': DATANASCIMENTO,
							'habilidades': HABILIDADES,
							'email': EMAIL,
							'usuario': USUARIO,
							'senha': SENHA
						}			
				})
				.then(function(response) {
					alert('Cadastro Realizado');
					},
				function (response) {
					console.log(response);
				});
			}
			
		});