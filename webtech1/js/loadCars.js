$(document).ready(function (){
	 $.getJSON("https://webtechcars.herokuapp.com/api/cars", function(data) {
		 var table = $("#carTable");
		 $.each(data,function(index,car) {
			 var row = $('<tr></tr>');
			 var namecell = $('<td>'+car.name+'</td>');
			 var manufacturercell = $('<td>'+car.manufacturer+'</td>');
			 var yearcell = $('<td>'+car.year+'</td>');
			 var colorcell = $('<td>'+car.color+'</td>');
			 var horsepowercell = $('<td>'+car.horsepower+'</td>');
			 var consumptioncell = $('<td>'+car.consumption+'</td>');
			 var availableCell = $('<td>'+car.avaiable+'</td>');
			 if(index > 3)
			 {
				var remove = $('<td><img src="icons/delete.png" style="width: 16px;" onclick="removeCar(\''+car._id+'\');"></td>');
			 }
			 
			 
			 
			 $(row).append(namecell);
			 $(row).append(manufacturercell);
			 $(row).append(yearcell);
			 $(row).append(colorcell);
			 $(row).append(horsepowercell);
			 $(row).append(consumptioncell);
			 $(row).append(availableCell);
			 $(row).append(remove);
			 $(table).append(row);
		 })
	 })

		$(".headerff").text("Cars");
});