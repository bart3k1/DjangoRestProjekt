$(function() {

    $.ajax({
        url: "http://date.jsontest.com/",
        type: "GET",
        dataType: "json"
    })
        .done(function (dane){
            console.log(dane);
            $('#test').text(dane.date)
        })
        .fail(function (xhr,status,error){
            console.log(xhr);
            console.log(status);
            console.log(error);

            });
    $.ajax({
        url: "https://swapi.co/api/people/4/",
        type: "GET",
        dataType: "json"
    })
        .done(function (infoOludziku){
                console.log(infoOludziku);
                $('#ludzik').text(infoOludziku.name)
            })
        .fail(function (){
            $('#ludzik').text("Nie udało się!")
            });
});