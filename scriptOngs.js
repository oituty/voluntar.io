var app = angular.module('AppOngs', []);
	app.controller('OngsCtrl', function($scope, $http) {

		$scope.CADASTRO = (NOME, CNPJ, RESPONSAVEL, RGRESPONSAVEL, ATUACAO, EMAIL, USUARIO, SENHA) => {
			$http({
					url: 'http://localhost:5000/api/ongs',
					method: 'POST',
					data:{	
							'nome': NOME,
							'cnpj': CNPJ,
							'responsavel': RESPONSAVEL,
							'rg': RGRESPONSAVEL,
							'atucao': ATUACAO,
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