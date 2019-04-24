$(function(){
	var note1;
	var note2;
	var note3;
	var note4;
	var note5;

	$('#calcul').click(function(){
		note1 = Number($('.note1').val());
		note2 = Number($('.note2').val());
		note3 = Number($('.note3').val());
		note4 = Number($('.note4').val());
		note5 = Number($('.note5').val());
		var moyenneCalcul = ((note1+note2+note3+note4+note5)/5).toFixed(2);
		if (moyenneCalcul >=0 && moyenneCalcul < 10){
			$result = "En dessous de la moyenne";
		}
		if (moyenneCalcul >= 10 && moyenneCalcul < 13){
			$result = "Moyen";
		}
		if (moyenneCalcul >= 13 && moyenneCalcul < 16){
			$result = "Bien";
		}
		if (moyenneCalcul >= 16 && moyenneCalcul < 20){
			$result = "Très Bien";
		}
		if (moyenneCalcul == 20){
			$result = "Excellent";
		}
		console.log($result);

			$('#moyenne').html("Votre moyenne est de : " + moyenneCalcul + "/20");
			$('#appreciation').html("Appréciation : " + $result );

	});

});
