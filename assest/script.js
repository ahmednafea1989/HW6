$("#moment").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
$(document).ready(function () {
    var time = moment().format('l');
    var input;
    var APIKey;
    
    
    $("#search").on("click", function () {
       
         input = $("#input").val();
        
       
      var button = $("<button>");
      button.addClass("button1");
      button.attr("data-button",input);
      button.text(input);
      var divEl = $("<div>");
      
      divEl.append(button);
      $(".button").append(divEl);

       
        $("#name").text(input + " " + time );
        


       APIKey = "166a433c57516f51dfab1f7edaed8413";
     var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + input + "&appid=" + APIKey;
  
    
    $.ajax({
        url:queryURL,
        method:"GET"
    }).then(function(response){
        console.log(response);
    //    console.log(response.main.humidity);
    //    console.log(response.wind.speed);
       var tempF =( (response.main.temp - 273.15) * 1.80 + 32).toFixed();


       var result={
        humidity:response.main.humidity,
        wind:response.wind.speed,
        temp:tempF,
           
       }
       //console.log(result);
       localStorage.setItem("result",JSON.stringify(result));
       var test =localStorage.getItem("result");
       test = JSON.parse(test);
       //console.log( test.humidity);
      
     
       $("#hum").text("humidity:" + " " + test.humidity );
      
       $("#wind").text("wind:" + " " + test.wind );
    
       $("#temp").text("temp:" + " " + test.temp + "f" );



    })
      



    });

   

    $(document).on("click", ".button1", function(){
        var city = $(this).attr("data-button");
        console.log(city);
        $("#name").empty();
        $("#hum").empty();
        $("#wind").empty();
        $("#temp").empty();
        
       
       var queryURL1 = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
    
      
      $.ajax({
          url:queryURL1,
          method:"GET"
      }).then(function(response){
          console.log(response);
      //    console.log(response.main.humidity);
      //    console.log(response.wind.speed);
         var tempF1 =( (response.main.temp - 273.15) * 1.80 + 32).toFixed();

         var result1={
            humidity:response.main.humidity,
            wind:response.wind.speed,
            temp:tempF1,
               
           }
            console.log(result1.temp);

       localStorage.setItem("result1",JSON.stringify(result1));
       var test1 =localStorage.getItem("result1");
       test1 = JSON.parse(test1);
       //console.log( test.humidity);
        
       
        $("#name").text(city + " " + time );
  
      
         $("#hum").text("humidity:" + " " +  test1.humidity );
        
         $("#wind").text("wind:" + " " + test1.wind );
      
         $("#temp").text("temp:" + " " + test1.temp + "f" );

  
      })
        
  
       

        
    })

});



// const latitue = 32
// const long = 2142414


// const url = `www.something.com/try/${latitue},${long}`

// "www.something.com/try/" + latitue + "," + long + ""