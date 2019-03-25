


    $('#submit').click(function(){
        
        var city = $("#city").val();

        if(city != ''){
            
            $.ajax({

                url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" +
                "&APPID=7e05834447ab3058a831f887cc6596c3",
                type: "GET",
                dataType: "json",
                success: function(data){

                    var widget = show(data);
                    $("#show").html(widget);
                    $("#city").val(' ');
                }
            
            });
        }
        else {
            $("#error").html('Field cannot be empty');
        }
    });



function show(data){

    return "<h2>Current Weather in " + data.name + ", " + data.sys.country + "</h2>" + 
    "<img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'> " + 
    "<h3>Weather: " + data.weather[0].main + "</h3>" +
    "<h3>Description: " + data.weather[0].description + "</h3>" +
    "<h3>Temperature: " + data.main.temp + "&deg;C</h3>" +
    "<h3>Pressure: " + data.main.pressure + " hPa</h3>" +
    "<h3>Humidity: " + data.main.humidity + "%</h3>" +
    "<h3>Maximum temperature: " + data.main.temp_max + "&deg;C</h3>" +
    "<h3>Minimum temperature: " + data.main.temp_min + "&deg;C</h3>"
}