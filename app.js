$(function () {
	'use strict';


	$('.form-control').on('input', function () {
		var $field = $(this).closest('.form-group');
		if (this.value) {
			$field.addClass('field--not-empty');
		} else {
			$field.removeClass('field--not-empty');
		}
	});

}); 


const addDishes = (e) => {
	const category = document.getElementById("category").value;
	const itemName = document.getElementById("itemName").value;
	const price = document.getElementById("price").value;
	const deliveryType = document.getElementById("deliveryType").value;
	event.preventDefault(e);
	const uid = localStorage.getItem("uid");

	const obj = {
		category,
		itemName,
		price,
		deliveryType
	}

	firebase.database().ref(`Restaurants/${uid}/categories`).child(obj.category).push(obj);

    alert("Item is Uploaded Successfully!")
	
}

let resName = document.getElementById('food');
resName.innerHTML = `Welcome! ${localStorage.getItem('Restaurantname')}`