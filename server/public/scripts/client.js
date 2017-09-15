$(document).ready(onReady);

function onReady() {
    console.log('working?');
    $('#submitButton').on('click', addPet);
    getPet();
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
        checked: checkbox
    };
    $.ajax({
        type: 'POST',
        url: '/petShop',
        data: newPet,
        success: function () {
            console.log('in client POST route');
        }
    });

}

function getPet() {
    $('#petList').empty();
    $.ajax({
        type: 'GET',
        url: '/petShop',
        success: function (res) {
            petAppend(res);
            console.log('in client GET route', res);
        }

    });
}

function petAppend(petList) {
    // display tables
    $('#petList').empty();
    for (var i = 0; i < petList.length; i++) {
        var name = petList[i].name;
        var breed = petList[i].breed;
        var color = petList[i].color;
        var checked = petList[i].checkedin;
        var id = petList[i].id;

        checkedInChecker(checked);

        $("#petList").append('<tr data-id="' + id +
            '"><td>' + name +
            '</td><td>' + breed +
            '</td><td>' + color +
            '</td><td>' + buttonVar + //<td><button type="button" class="readyForTransferButton btn btn-success">Ready for Transfer</button></td>
            '</td><td><button class="deleteButton btn btn-danger">Delete</button></td></tr>');
    }
}
var buttonVar = '';

function checkedInChecker(checked) {
    if (checked) {
        buttonVar = '<button type="button" class="checkOutButton btn btn-success">Check Out</button>'
    } else {
        buttonVar = '<button type="button" class="checkInButton btn btn-success">Check In</button>'
    }
}