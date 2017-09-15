$(document).onReady(onReady);

function onReady() {
    $('#submitButton').on('click', addPet);
}

function addPet() {
    var petName = $('#petName').val();
    var petBreed = $('#breed').val();
    var petColor = $('#color').val();
    var checkbox = $('#checkbox').val();
    var newPet = {
        name: petName, 
        breed: petBreed, 
        color: petColor, 
        checked: checkbox};
    $.ajax({
        type: 'POST',
        url: '/petShop',
        data: newPet,
        success: function(){
            console.log('in client POST route');
        }
    });

}

function getPet() {
    $('#petList').empty();
    $.ajax({
        type: 'GET',
        url: '/petShop',
        success: function(req, res) {
            petAppend();
            console.log('in client GET route');
            
        }

    })
}