$(document).ready(function() {

	//open searcher

	$('.open_search').on('click', function(event) {
		event.preventDefault();
		console.log('test');
		$('#search_form').toggle();
	});

	$(document).mouseup(function (e) {
        var container = $("#search_form");

	      if (container.has(e.target).length === 0){
	          container.hide();
	      }
    });

	//scroll parametres

	/*$(window).scroll(function() {    
	    var scroll = $(window).scrollTop();

	     //>=, not <=
	    if (scroll >= 1) {
	        $("header").addClass("header-fixed");
	    } else {
	        $("header").removeClass("header-fixed");
	    }
	});*/

	//hamburger menu

	$('.open_menu').on('click', function(event) {
		event.preventDefault();
		$(this).siblings('ul').slideToggle();
	});


	//select

	$(".js-example-basic-single").select2();

	//accordeon

	$('#collapseOne').on('hidden.bs.collapse', function () {
	  $('#collapseOne').parent().find('.icon-1').css('display','block');
	  $('#collapseOne').parent().find('.icon-2').css('display','none');
	})

	$('#collapseOne').on('shown.bs.collapse', function () {
	  $('#collapseOne').parent().find('.icon-2').css('display','block');
	  $('#collapseOne').parent().find('.icon-1').css('display','none');
	})
	$('#collapseTwo').on('hidden.bs.collapse', function () {
	  $('#collapseTwo').parent().find('.icon-1').css('display','block');
	  $('#collapseTwo').parent().find('.icon-2').css('display','none');
	})

	$('#collapseTwo').on('shown.bs.collapse', function () {
	  $('#collapseTwo').parent().find('.icon-2').css('display','block');
	  $('#collapseTwo').parent().find('.icon-1').css('display','none');
	})
	$('#collapseThree').on('hidden.bs.collapse', function () {
	  $('#collapseThree').parent().find('.icon-1').css('display','block');
	  $('#collapseThree').parent().find('.icon-2').css('display','none');
	})

	$('#collapseThree').on('shown.bs.collapse', function () {
	  $('#collapseThree').parent().find('.icon-2').css('display','block');
	  $('#collapseThree').parent().find('.icon-1').css('display','none');
	})
	$('#collapseFour').on('hidden.bs.collapse', function () {
	  $('#collapseFour').parent().find('.icon-1').css('display','block');
	  $('#collapseFour').parent().find('.icon-2').css('display','none');
	})

	$('#collapseFour').on('shown.bs.collapse', function () {
	  $('#collapseFour').parent().find('.icon-2').css('display','block');
	  $('#collapseFour').parent().find('.icon-1').css('display','none');
	})
	$('#collapseFive').on('hidden.bs.collapse', function () {
	  $('#collapseFive').parent().find('.icon-1').css('display','block');
	  $('#collapseFive').parent().find('.icon-2').css('display','none');
	})

	$('#collapseFive').on('shown.bs.collapse', function () {
	  $('#collapseFive').parent().find('.icon-2').css('display','block');
	  $('#collapseFive').parent().find('.icon-1').css('display','none');
	})

	/*    AUTOCOMPLITE                              ///////////////////////////////////////////////////////////*/

    var placeSearch, autocomplete;
    var componentForm = {
        street_number: 'short_name',
        route: 'long_name',
        locality: 'long_name',
        administrative_area_level_1: 'short_name',
        country: 'long_name',
        postal_code: 'short_name'
    };

    function initAutocomplete() {
        // Create the autocomplete object, restricting the search to geographical
        // location types.
        autocomplete = new google.maps.places.Autocomplete(
          (document.getElementById('autocomplete')),
        {types: ['geocode']});

        autocomplete.addListener('place_changed', fillInAddress);
    };

    function initAutocomplete2() {
        // Create the autocomplete object, restricting the search to geographical
        // location types.
        autocomplete = new google.maps.places.Autocomplete(
          (document.getElementById('autocomplete')),
        {types: ['geocode']});

        autocomplete.addListener('place_changed', fillInAddress);
    };

    // [START region_fillform]
      function fillInAddress() {
      // Get the place details from the autocomplete object.
      var place = autocomplete.getPlace();

      for (var component in componentForm) {
        document.getElementById(component).value = '';
        document.getElementById(component).disabled = false;
    }

    // Get each component of the address from the place details
    // and fill the corresponding field on the form.
      for (var i = 0; i < place.address_components.length; i++) {
      var addressType = place.address_components[i].types[0];
        if (componentForm[addressType]) {
          var val = place.address_components[i][componentForm[addressType]];
          document.getElementById(addressType).value = val;
        }
      }
    };
    // [END region_fillform]

    if ($('#autocomplete').length>0) {
      initAutocomplete();
    };

    if ($('#autocomplete-2').length>0) {
      initAutocomplete2();
    };



        var placeSearch, autocomplete;
          var componentForm = {
              street_number: 'short_name',
              route: 'long_name',
              locality: 'long_name',
              administrative_area_level_1: 'short_name',
              country: 'long_name',
              postal_code: 'short_name'
          };


    // [START region_fillform]
      function fillInAddress() {
      // Get the place details from the autocomplete object.
      var place = autocomplete.getPlace();

      for (var component in componentForm) {
        document.getElementById(component).value = '';
        document.getElementById(component).disabled = false;
    }

    // Get each component of the address from the place details
    // and fill the corresponding field on the form.
      for (var i = 0; i < place.address_components.length; i++) {
      var addressType = place.address_components[i].types[0];
        if (componentForm[addressType]) {
          var val = place.address_components[i][componentForm[addressType]];
          document.getElementById(addressType).value = val;
        }
      }
    };
    // [END region_fillform]
		


/*          MAP               //////////////////////////////////////////////////////////////////*/



    var map;
        function initMap() {
         map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8,
          scrollwheel: false
        });
      };

    if ($('#map').length > 0) {
      initMap();
    }



jQuery.fn.exists = function(){ return this.length > 0; }

	//quill
    if ($('#editor-container').length>0) {
      var quill = new Quill('#editor-container', {
      modules: {
        toolbar: [
          ['image','video']
        ]
      },
      placeholder: 'Compose an epic...',
      theme: 'snow'  // or 'bubble'
    });
    }

	// animate
  $(".post-comments").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

});


$( function() {
	$( "#datepicker" ).datepicker();
} );