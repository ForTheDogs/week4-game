	$(document).ready(function(){

	var random = Math.floor(Math.random()* 101 + 19)
		console.log(random)
		$('#number').html(random);

	var generatedNumbers=[];
	var total= 0;
	var Wins= 0;
	var Losses= 0;
	


	$('#numberWins').html(Wins);
	$('#numberLosses').html(Losses);

	function fourRandomNumbers(){
		for (var i= 0; i< 4; i++){
			var num= Math.floor(Math.random()* 11 +1);
			generatedNumbers.push(num);
		}
		 console.log(generatedNumbers);
	}	

	fourRandomNumbers();
		function reset(){
			random = Math.floor(Math.random() * 101 + 19);
			console.log(random);
		 $('#number').html(random);
		 generatedNumbers= [];
		 fourRandomNumbers();
		 total= 0;

		 $('#combined').html(total);

		}

		function Yeah(){
			alert("You Won!");
				Wins++

			$('#numberWins').html(Wins);
			   reset();	
		}	 

		function Loser(){
			alert("You Lose!");
				Losses++

			$('numberLosses').html(Losses);
				reset();	
		}

		$('#crystal1').on('click',function(){
			total= total + generatedNumbers [0];
			console.log("newTotal=" + total);
			$('#combined').html(total);
				if(total===random){
					Yeah();
			}

				else if(total > random) {
					Loser();
				}

		})

		$('#crystal2').on('click',function(){
			total= total + generatedNumbers [1];
			console.log("newTotal=" + total);
			$('#combined').html(total);
				if(total===random){
					Yeah();
			}

				else if(total > random) {
					Loser();
				}
		})

		$('#crystal3').on('click',function(){
			total= total + generatedNumbers [2];
			console.log("newTotal=" + total);
			$('#combined').html(total);
				if(total===random){
					Yeah();
			}

				else if(total > random) {
					Loser();
				}
		})

		$('#crystal4').on('click',function(){
			total= total + generatedNumbers [3];
			console.log("newTotal=" + total);
			$('#combined').html(total);
				if(total===random){
					Yeah();
			}

				else if(total > random) {
					Loser();
				}
		})			
	
})