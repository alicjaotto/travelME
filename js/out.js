/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function(){

    //initializing a firebase connection
    var config = {
      apiKey: "AIzaSyCP3HyuQa1BOpdWuN8R6_clEQvhA6ONHLk",
      authDomain: "travelme-8cc88.firebaseapp.com",
      databaseURL: "https://travelme-8cc88.firebaseio.com",
      projectId: "travelme-8cc88",
      storageBucket: "travelme-8cc88.appspot.com",
      messagingSenderId: "1017816111207"
    };
    firebase.initializeApp(config);

    // getting a reference to the database service

    var database = firebase.database();


    //creating user navigation bar (will be more developed when log in function is created)

    var username = "Alicja";

    $('#user_welcome').text(`Welcome, ${username}!`);

    var avatar = "./images/avatar.jpg";

    const userImage = $('#user_image');
    userImage.attr("src", avatar);

    userImage.on("click", (event) => {
        $('#user_menu').toggleClass('hidden');
    });

    // userImage.on("mouseleave", (event) => {
    //     $('#user_menu').toggleClass('hidden');
    // });

    //creating a map

    $(function(){
      $('#world-map').vectorMap({
        map: 'world_mill',
        regionStyle: {
            initial: {
                fill: '#CDCDCD'
            },
            selected: {
                fill: '#F4A582'
            }
        }

      });

      $('path').css("fill", "#cccccc");


    //creating options list based on data-codes
    var countries_names = ["United Arab Emirates", "Afghanistan","Albania", "Armenia","Angola","Argentina", "Austria","Australia", "Azerbaijan", "Bosnia and Herzegovina", "Bangladesh", "Belgium","Burkina Faso","Bulgaria","Burundi","Benin", "Brunei","Bolivia", "Brazil", "Bahamas", "Bhutan", "Botswana", "Belarus", "Belize", "Canada", "Democratic Republic of the Congo", "Central African Republic",	"Congo", "Switzerland", "Côte d'Ivoire", "Chile", "Cameroon", "China", "Colombia", "Costa Rica", "Cuba", "Cyprus", "Czech Republic", "Germany", "Djibouti", "Denmark", "Dominican Republic", "Algeria", "Ecuador", "Estonia", "Egypt", "Western Sahara", "Eritrea", "Spain", "Ethiopia", "Finland", "Fiji", "Falkland Islands", "France","Gabon",
    "United Kingdom", "Georgia", "Ghana", "Greenland", "Gambia", "Guinea", "Equatorial Guinea", "Greece", "Guatemala", "Guinea-Bissau", "Guyana", "Honduras", "Croatia", "Haiti", "Hungary", "Indonesia", "Ireland", "Israel", "India", "Iraq", "Iran", "Iceland", "Italy", "Jamaica", "Jordan", "Japan", "Kenya", "Kyrgyzstan", "Cambodia", "North Korea", "South Korea", "Kuwait", "Kazakhstan", "Laos", "Lebanon","Sri Lanka", "Liberia", "Lesotho", "Lithuania", "Luxembourg", "Latvia", "Libya", "Morocco", "Moldova", "Montenegro", "Madagascar", "Macedonia", "Mali", "Myanmar", "Mongolia", "Mauritania", "Malawi", "Mexico", "Malaysia", "Mozambique", "Namibia", "New Caledonia", "Niger", "Nigeria", "Nicaragua", "Netherlands", "Norway", "Nepal", "New Zealand", "Oman", "Panama", "Peru", "Papua New Guinea", "Philippines", "Pakistan", "Poland", "Puerto Rico", "Palestina", "Portugal", "Paraguay", "Qatar", "Romania", "Serbia", "Russia", "Rwanda", "Saudi Arabia", "Solomon Islands", "Sudan", "Sweden", "Slovenia", "Slovakia", "Sierra Leone", "Senegal", "Somalia", "Suriname", "South Sudan", "Salvador", "Syria", "Swaziland", "Chad", "French Southern Territories", "Togo", "Thailand", "Tajikistan", "Timor-Leste", "Turkmenistan", "Tunisia", "Turkey", "Trinidad and Tobago", "Taiwan", "Tanzania", "Ukraine", "Uganda", "United States", "Uruguay", "Uzbekistan", "Venezuela", "Viet Nam", "Vanuatu", "Ghaza", "Kosovo", "Somaliland", "Yemen", "South Africa", "Zambia", "Zimbabwe"];

        const countries = $('path');

        var codes = [];
        $.each(countries, function(index, element) {
            codes.push($(element).attr("data-code"));
        });

        codes = codes.sort();
        // console.log(codes);

        var codes_list = $("#in_country_code");
        // console.log(codes_list[0]);

        var CreateCodeOptions = ()=> {
            for (let i=0; i<codes.length; i++) {
                let option = $("<option></option>");
                $(option[0]).attr("value", codes[i]);

                    for (let j=i; j<countries_names.length; j++)
                        $(option[0]).text(codes[i] + " " + countries_names[i]);
                        $(codes_list[0]).append(option[0]);

            }

        }

        const CreateCountriesOptions = () => {
            const countries_list = countries_names.sort();
            for (let i=0; i<countries_list.length; i++) {
                let country_option = $("<option></option>");
                $(country_option[0]).attr("value", countries_names[i]);
                $(country_option[0]).text(countries_names[i]);
                $('#in_country').append(country_option[0]);

            }
        }

        CreateCodeOptions();
        CreateCountriesOptions();


    //showing/ hiding travel form
    $('#add_btn').on('click', (event) => {
    $('#add_travel').toggleClass("hidden");
});


    //OPERATIONS ON FIREBASE

    //coloring countries that user has visited
    $(function(){

        var data =[];
        var countriesRef = firebase.database().ref('countries/');

        //reading data from firebase
        countriesRef.on("value", function(snapshot){
            snapshot.forEach(function(childSnapshot) {
                var id = childSnapshot.val().id;
                // console.log(id);
                for (let i=0; i<countries.length; i++) {
                    if (id === $(countries[i]).data("code")) {
                        $(countries[i]).css("fill", "#7C9BA0");
                    }
                }
            });

        });
    });


    //sending data from trip form to firebase

    $(function() {
        //creating new reference
        var data =[];
        const countriesRef = firebase.database().ref('countries/');

        //listening updates in firebase
             countriesRef.on("value", function(snapshot){

            //updating data value
            data = snapshot.val();

            $('#add_travel').submit(function(event) {

                var form = $(this);

                //preventing defualt action on a submit button
                $(form).find("#submit").prop('disabled', true);

                //creating data to send

                let nameToSend = $('#in_country').val();
                let idToSend = $('#in_country_code').val();
                let fromToSend = $('#in_from').val();
                let toToSend = $('#in_to').val();
                let descriptionToSend = $('#in_description').val();
                let h1ToSend = $('#in_highlights1').val();
                let h2ToSend = $('#in_highlights2').val();
                let h3ToSend = $('#in_highlights3').val();
                let h4ToSend = $('#in_highlights4').val();
                let photo1ToSend = $('#in_photo1').val();
                let photo2ToSend = $('#in_photo2').val();
                let photo3ToSend = $('#in_photo3').val();
                let budgetToSend = $('#in_budget').val();
                let currencyToSend = $('#in_currency').val();
                let itineraryToSend = $('#in_itinerary').val();

                var newCountry = {
                    "id": idToSend,
                    "country_name": nameToSend,
                    "from": fromToSend,
                    "to": toToSend,
                    "highlights1": h1ToSend,
                    "highlights2": h2ToSend,
                    "highlights3": h3ToSend,
                    "highlights4": h4ToSend,
                    "budget": budgetToSend,
                    "currency": currencyToSend,
                    "description": descriptionToSend,
                    "photo1": photo1ToSend,
                    "photo2": photo2ToSend,
                    "photo3": photo3ToSend,
                    "itinerary": itineraryToSend

                }

                data.push(newCountry);

                countriesRef.set(data);


                });

            });

        });




//reqesting countries info from json server by clicking on a country

    $.each(countries, (index, el) => {
        $(el).on('click', (event) => {
            var country_code = $(event.target).attr("data-code");

            $(function(){

                var data =[];
                var countriesRef = firebase.database().ref('countries/');

                //reading data from firebase
                countriesRef.on("value", function(snapshot){
                    snapshot.forEach(function(childSnapshot) {
                        var id = childSnapshot.val().id;
                        var result = childSnapshot.val();
                            if (id === country_code) {
                                $('h2').text(result.country_name);
                                $('.trip_dates_from').text(result.from);
                                $('.trip_dates_to').text(result.to);
                                $('.trip_budget').text(result.budget + " " + result.currency);
                                $('#trip_highlight1').text(result.highlights1);
                                $('#trip_highlight2').text(result.highlights2);
                                $('#trip_highlight3').text(result.highlights3);
                                $('#trip_highlight4').text(result.highlights4);
                                $('#trip_description').text(result.description);
                                $('#trip_photo1').attr("src", result.photo1);
                                $('#trip_photo2').attr("src", result.photo2);
                                $('#trip_photo3').attr("src", result.photo3);
                                $('#trip_itinerary').attr("src", result.itinerary);

                                $('#trip').toggleClass('hidden');
                                $('#world-map').toggleClass('hidden');
                                $('#trip_form').toggleClass('hidden');
                                $('header').toggleClass('hidden');

                            }

                    });

                });
            });

    //         $.ajax({
    //             type: "GET",
    //             url: 'http://localhost:3000/countries',
    //             dataType: 'json'
    //         }).done(function(response) {
    //             var result = $.grep(response, function(element, index) {
    //                 return element.id == country_code;
    //             });
    //             result = result[0];
    //
    //             $('h2').text(result.country_name);
    //             $('.trip_dates_from').text(result.from);
    //             $('.trip_dates_to').text(result.to);
    //             $('.trip_budget').text(result.budget + " " + result.currency);
    //             $('#trip_highlight1').text(result.highlights1);
    //             $('#trip_highlight2').text(result.highlights2);
    //             $('#trip_highlight3').text(result.highlights3);
    //             $('#trip_highlight4').text(result.highlights4);
    //             $('#trip_description').text(result.description);
    //             $('#trip_photo1').attr("src", result.photo1);
    //             $('#trip_photo2').attr("src", result.photo2);
    //             $('#trip_photo3').attr("src", result.photo3);
    //             $('#trip_itinerary').attr("src", result.itinerary);
    //
    //             $('#trip').toggleClass('hidden');
    //             $('#world-map').toggleClass('hidden');
    //             $('#trip_form').toggleClass('hidden');
    //             $('header').toggleClass('hidden');
    //
    //     }).fail(function(response) {
    //         console.log(error);
    //         });
        });
    //
    //
    });


    //closing country section
    $("#closeBtn").on("click", (event) => {

        $('#trip').toggleClass('hidden');
        $('#world-map').toggleClass('hidden');
        $('#trip_form').toggleClass('hidden');
        $('header').toggleClass('hidden');
    });

  });
});


/***/ })
/******/ ]);