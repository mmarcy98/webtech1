function removeCar(id)
{
	$.ajax({
		type:"DELETE",
		url:"https://webtechcars.herokuapp.com/api/cars/"+id,
		headers: {
			"Access-Control-Allow-Origin": "*"
		},
		success: function() {
			alert("Autó sikeresen törölve");
			location.reload();
		},
		error: function() {
			alert("HIBA!4!44!");
		}
	});
}