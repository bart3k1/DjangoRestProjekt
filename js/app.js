$(function() {

    // $.ajax({
    //     url: "http://date.jsontest.com/",
    //     type: "GET",
    //     dataType: "json"
    // })
    //     .done(function (dane){
    //         // console.log(dane);
    //         $('#test').text(dane.date)
    //     })
    //     .fail(function (xhr,status,error){
    //         console.log(xhr);
    //         console.log(status);
    //         console.log(error);
    //
    //         });
    // $.ajax({
    //     url: "https://swapi.co/api/people/4/",
    //     type: "GET",
    //     dataType: "json"
    // })
    //     .done(function (infoOludziku){
    //             // console.log(infoOludziku);
    //             $('#ludzik').text(infoOludziku.name)
    //         })
    //     .fail(function (){
    //         $('#ludzik').text("Nie udało się!")
    //         });

    $.ajax({
        url: "http://127.0.0.1:8000/book/",
        type: "GET",
        dataType: "json"
    })
        .done(function (ksiazki){
                // console.log(ksiazki);
                for (var i = 0; i < ksiazki.length; i ++){
                    // console.log(ksiazki[i].title);
                    // $('#tytuly').append(ksiazki[i].title);
                    var newElTy = $('<div>'+ ksiazki[i].title + '</div>').attr('class', "title");
                    var newEl = $('<div>').attr('id', ksiazki[i].id);
                    $('#tytuly').append(newElTy);
                    $('#tytuly').append(newEl)

                    }
                var tytulyClick = $('.title');
                tytulyClick.on('click', function(){
                console.log(this.nextElementSibling.id);
                var idKsiazki = this.nextElementSibling.id;


                $.ajax({
                    url: "http://127.0.0.1:8000/book/" + this.nextElementSibling.id + "/" ,
                    type: "GET",
                    dataType: "json"
                        })
                        .done(function (dane){
                        console.log(dane.isbn);
                        console.log(idKsiazki);
                        console.log($('#'+idKsiazki+""));
                        // $('#'+idKsiazki+"").text("ISBN: " + dane.isbn + " | Author: " + dane.author)
                        $('#'+idKsiazki+"").empty()
                        var elAuthor = $('<div> Author: '+ dane.author + '</div>').attr('class', 'author');
                        $('#'+idKsiazki+"").append(elAuthor);

                        var elPubl = $('<div> Publisher: '+ dane.publisher + '</div>').attr('class', 'publisher');
                        $('#'+idKsiazki+"").append(elPubl);

                        var elIsbn = $('<div>ISBN: '+ dane.isbn + '</div>').attr('class', 'isbn');
                        $('#'+idKsiazki+"").append(elIsbn);



                        // $('#test').text(dane.isbn)
                            })
                        .fail(function (xhr,status,error){
                        console.log(xhr);
                        console.log(status);
                        console.log(error);
                            });
                    });


            })
        .fail(function (){
            $('#tytuly').text("Nie udało się!")
        });

    //zanelzc submita zrobic prevent default
    var submit = $('#submit');
    console.log(submit);
    submit.on('click', function(e){
         e.preventDefault()
                    });

    });


// DOKONCZYC!!!!!
