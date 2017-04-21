document.addEventListener('DOMContentLoaded', function(){

//utworzenie mapy

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

    //creating options list based on data-codes
    var countries_names = ["United Arab Emirates", "Afghanistan","Albania", "Armenia","Angola","Argentina", "Austria","Australia", "Azerbaijan", "Bosnia and Herzegovina", "Bangladesh", "Belgium","Burkina Faso","Bulgaria","Burundi","Benin", "Brunei","Bolivia", "Brazil", "Bahamas", "Bhutan", "Botswana", "Belarus", "Belize", "Canada", "Democratic Republic of the Congo", "Central African Republic",	"Congo", "Switzerland", "Côte d'Ivoire", "Chile", "Cameroon", "China", "Colombia", "Costa Rica", "Cuba", "Cyprus", "Czech Republic", "Germany", "Djibouti", "Denmark", "Dominican Republic", "Algeria", "Ecuador", "Estonia", "Egypt", "Western Sahara", "Eritrea", "Spain", "Ethiopia", "Finland", "Fiji", "Falkland Islands", "France","Gabon",
    "United Kingdom", "Georgia", "Ghana", "Greenland", "Gambia", "Guinea", "Equatorial Guinea", "Greece", "Guatemala", "Guinea-Bissau", "Guyana", "Honduras", "Croatia", "Haiti", "Hungary", "Indonesia", "Ireland", "Israel", "India", "Iraq", "Iran", "Iceland", "Italy", "Jamaica", "Jordan", "Japan", "Kenya", "Kyrgyzstan", "Cambodia", "North Korea", "South Korea", "Kuwait", "Kazakhstan", "Laos", "Lebanon","Sri Lanka", "Liberia", "Lesotho", "Lithuania", "Luxembourg", "Latvia", "Libya", "Morocco", "Moldova", "Montenegro", "Madagascar", "Macedonia", "Mali", "Myanmar", "Mongolia", "Mauritania", "Malawi", "Mexico", "Malaysia", "Mozambique", "Namibia", "New Caledonia", "Niger", "Nigeria", "Nicaragua", "Netherlands", "Norway", "Nepal", "New Zealand", "Oman", "Panama", "Peru", "Papua New Guinea", "Philippines", "Pakistan", "Poland", "Puerto Rico", "Palestina", "Portugal", "Paraguay", "Qatar", "Romania", "Serbia", "Russia", "Rwanda", "Saudi Arabia", "Solomon Islands", "Sudan", "Sweden", "Slovenia", "Slovakia", "Sierra Leone", "Senegal", "Somalia", "Suriname", "South Sudan", "Salvador", "Syria", "Swaziland", "Chad", "French Southern Territories", "Togo", "Thailand", "Tajikistan", "Timor-Leste", "Turkmenistan", "Tunisia", "Turkey", "Trinidad and Tobago", "Taiwan", "Tanzania", "Ukraine", "Uganda", "United States", "Uruguay", "Uzbekistan", "Venezuela", "Viet Nam", "Vanuatu", "Ghaza", "Kosovo", "Somaliland", "Yemen", "South Africa", "Zambia", "Zimbabwe"];

        const countries = $('path');

        var codes = [];
        $.each(countries, function(index, element) {
            codes.push($(element).attr("data-code"));
        });


        codes = codes.sort();
        console.log(codes);

        var select_list = $("select");
        console.log(select_list[0]);


        var CreateOptions = ()=> {
            for (let i=0; i<codes.length; i++) {
                var option = $("<option></option>");
                $(option[0]).attr("value", codes[i]);

                    for (let j=i; j<countries_names.length; j++)
                        $(option[0]).text(countries_names[i]);
                        $(select_list[0]).append(option[0]);

            }

        }

        CreateOptions();


//showing/ hiding travel form
$('#add_btn').on('click', (event) => {
    $('#add_travel').toggleClass("hidden");
});

//sending form values to JSON server

    $(function() {
        $('#add_travel').submit(function(event) {
            event.preventDefault(); // Prevent the form from submitting via the browser
            var url='http://localhost:3000/countries/';
            var form = $(this);
            $.ajax({
                type: "POST",
                url:  url,
                data: form.serialize(),
                dataType: 'json'
            }).done(function(data) {
                $('#in_country').val('');
                $('#in_from').val('');
                $('#in_to').val('');
                $('#in_description').val('');
                $('#in_highlights').val('');
                $('#in_photo1').val('');
                $('#in_photo2').val('');
                $('#in_photo3').val('');
                $('#in_budget').val('');

                $('#add_travel').addClass("hidden");


        }).fail(function(data) {
            console.log(error);
            });
        });
    });



//reqesting countries info from json server by clicking on a country



    $.each(countries, (index, el) => {
        $(el).on('click', (event) => {
            const country_code = $(event.target).attr("data-code");
            console.log(country_code);
            $(event.target).attr("fill", "yellow");
        //     $.ajax({
        //         type: "GET",
        //         url: 'http://localhost:3000/countries',
        //         dataType: 'json'
        //     }).done(function(response) {
        //         console.log(response);
        //
        // }).fail(function(response) {
        //     console.log(error);
        //     });
        });


    });

  });
});
