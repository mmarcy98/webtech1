$(document).ready(function (){
	$.getJSON("https://webtechcars.herokuapp.com/api/cars", function(data) {
		 var select = $("#idselect");
		 $.each(data,function(index,car) {
			 var options = $('<option value="'+car._id+'">'+car._id+'</option>');
			 $(select).append(options);
		 })
	 })
});
}

$(document).ready(function () {
	$(".headerff").text("Szerkeszt");
});