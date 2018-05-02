console.log('running');

$( document ).ready(function() {
    console.log( "ready!" );
    getData();
});

function getData() {
    console.log("getting data")
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: '/data',
        complete: function () {
            console.log('Ajax for getting data.js complete');
        },
        success: function (data) {
            console.log(data);
        }
    });
}