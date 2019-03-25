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

    return        "<img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'> " + 
    "<h2>" + data.name + ", " + data.sys.country + "</h2>" + 
    "<h1>" + data.main.temp + "&deg;C</h1>" +
    "<h5>Weather</h5>" + "<h3>" + data.weather[0].main + "</h3>" +
    "<h5>Pressure</h5>" + "<h3>" + data.main.pressure + " hPa </h3>" +
    "<h5>Humidity</h5>" + "<h3>" + data.main.humidity + "%</h3>" +
    "<h5>Maximum</h5>" + "<h3>" + data.main.temp_max + "&deg;C</h3>" +
    "<h5>Minimum</h5>" + "<h3>" + data.main.temp_min + "&deg;C</h3>"
}