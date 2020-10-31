/* -------------------------------------------------------------------------------- /

	Magentech jQuery
	Created by Magentech
	v1.0 - 20.9.2016
	All rights reserved.

/ -------------------------------------------------------------------------------- */


	// Cart add remove functions
	var cart = {
		'add': function(product_id, quantity,product_name,imagelogo) {
			addProductNotice('Product added to Cart', '<img src="'+imagelogo+'" alt="'+product_name+'">', '<h3><a href="#">'+product_name+'</a> added to <a href="">shopping cart</a>!</h3>', 'success');
			var pid=product_id;
			var quantity=quantity;

			//alert(pid+uid);
			var action='add_cart';

			 $.ajax({

                        url: "http://192.168.0.1/Test/Rupal-Patel/CodeIgniter-3.1.11R/index.php/User/addtocart",
                        method: "POST",
                        data: {
                        	action: action,
                            productid:pid,
                            quantity:quantity

                        }, success: function(data){
                		//	alert(data);
     			 }

                    });
		}

	}

	var wishlist = {
		'add': function(product_id,quantity,product_name,imagelogo) {

			var pid=product_id;
			var action='add_wishlist';

			 $.ajax({

                        url: "http://192.168.0.1/Test/Rupal-Patel/CodeIgniter-3.1.11R/index.php/User/addwishlist",
                        method: "POST",
                        data: {
                        	action: action,
                            productid:pid

                        }, success: function(data){
                			//alert(data);

     			 }

                    });

			 // alert(url);
			 addProductNotice('Product added to Wishlist', '<img src="'+imagelogo+'" alt="'+product_name+'">', '<h3>You must <a href="#">login</a>  to save <a href="#">'+product_name+'"</a> to your <a href="#">wish list</a>!</h3>', 'success');
			//alert(pid);
		}
	}
	var ucart = {
		'update': function(cartid,quantity,amt) {


			var action="update_data";
			var cartid=cartid;
			var quantity=quantity;
			var amt=amt;
		//	alert(amt);
			$.ajax({
				url:"http://192.168.0.1/Test/Rupal-Patel/CodeIgniter-3.1.11R/index.php/User/updatecart",
				method:"POST",
				data:
				{
					action:action,
					cartid:cartid,
					quantity:quantity,
					amt:amt
				},
				success:function(data){
					//alert(data);
					 $('.res').html(data);
					//window.location('<?php echo base_url() ?>index.php/User/shoppingcart');
					////if(data!="success") { alert("try again");}
                     //else { alert("Success");}
				}
			});
		}
	}

	var rcart = {
			'remove':function(cartid){
				var action="remove_cart";
				var cartid=cartid;
				$.ajax({
					url:"http://192.168.0.1/Test/Rupal-Patel/CodeIgniter-3.1.11R/index.php/User/removecart",
					method:"POST",
					data:
					{
						action:action,
						cartid:cartid
					},success:function(data){
						$('.res').html(data);
					}
				});
			}
	}


	/* ---------------------------------------------------
		jGrowl – jQuery alerts and message box
	-------------------------------------------------- */
	function addProductNotice(title, thumb, text, type) {
		$.jGrowl.defaults.closer = false;
		//Stop jGrowl
		//$.jGrowl.defaults.sticky = true;
		var tpl = thumb + '<h3>'+text+'</h3>';
		$.jGrowl(tpl, {
			life: 4000,
			header: title,
			speed: 'slow',
			theme: type
		});
	}


