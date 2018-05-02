function getData(id) {
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: '/item-data.CatalogEntryView'+ id,
        complete: function () {
            console.log('Ajax for getting data complete');
        },
        success: function (data) {
            console.log(data.object);
        }
    });

}

$(document).ready(function () {
    $('.carousel').carousel();

    //getData(0);


});