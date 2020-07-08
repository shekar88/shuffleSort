
var keys = [1,2,3,4,5,6,7,8,9];
var myArray = [10, 13, 25, 23, 41, 51, 16, 71,9];
var a = myArray.sort(function(a, b){return a-b});
let myBgColor = ['primary','success','secondary','warning','info','danger','dark','light','white'];
var newObjArr = [];
Ordinal(myArray);

//Shuffle Button
let shuffleButton = document.querySelector('#shuffle-btn');
shuffleButton.addEventListener('click',function() {
	shuffle(keys);
});

function shuffle(keys) {
    let ctr = keys.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * (ctr));
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = keys[ctr];
        keys[ctr] = keys[index];
        keys[index] = temp;
    }
    Ordinal(keys);
    return keys;
}

// Sort Button
let sortButton = document.querySelector('#sort-btn');
sortButton.addEventListener('click',function() {
	sortArray(keys);
});

// function sortFunction(a, b) {
//     if (a[0] === b[0]) {
//         return 0;
//     }
//     else {
//         return (a[0] < b[0]) ? -1 : 1;
// 	}
// }
// Sorting Functionality
function sortArray(keys) {
	var numArray = keys;
	for (var i = 0; i < numArray.length; i++) {
	    var target = numArray[i];
	    for (var j = i - 1; j >= 0 && (numArray[j] > target); j--) {
	        numArray[j+1] = numArray[j];
	    }
	    numArray[j+1] = target
	}
	Ordinal(newObjArr);
}

function Ordinal(n) {
    var obj = [];
    // Using loop to insert key
    // value in Object
    for(var i = 0; i < keys.length; i++){
        obj[keys[i]] = a[i]+ ','+ myBgColor[i];
	}

    // Printing object
    for (var key of Object.keys(obj)) {
        newObjArr[key] = obj[key].split(',');
	}

    $('#target-area-here').html(`
		<div class="row">
			<div class="cell col-lg-4 col-md-4 col-sm-4 col-12 bg-${newObjArr[1][1]}" id="cell1">${newObjArr[1][0]}</div>
			<div class="cell col-lg-4 col-md-4 col-sm-4 col-12 bg-${newObjArr[2][1]}" id="cell2">${newObjArr[2][0]}</div>
			<div class="cell col-lg-4 col-md-4 col-sm-4 col-12 bg-${newObjArr[3][1]}" id="cell3">${newObjArr[3][0]}</div>
		</div>
		<div class="row">
			<div class="cell col-lg-4 col-md-4 col-sm-4 col-12 bg-${newObjArr[4][1]}" id="cell4">${newObjArr[4][0]}</div>
			<div class="cell col-lg-4 col-md-4 col-sm-4 col-12 bg-${newObjArr[5][1]}" id="cell5">${newObjArr[5][0]}</div>
			<div class="cell col-lg-4 col-md-4 col-sm-4 col-12 bg-${newObjArr[6][1]}" id="cell6">${newObjArr[6][0]}</div>
		</div>
		<div class="row">
			<div class="cell col-lg-4 col-md-4 col-sm-4 col-12 bg-${newObjArr[7][1]}" id="cell7">${newObjArr[7][0]}</div>
			<div class="cell col-lg-4 col-md-4 col-sm-4 col-12 bg-${newObjArr[8][1]}" id="cell8">${newObjArr[8][0]}</div>
			<div class="cell col-lg-4 col-md-4 col-sm-4 col-12 bg-${newObjArr[9][1]}" id="cell9">${newObjArr[9][0]}</div>
		</div>`);
    return newObjArr;
}

