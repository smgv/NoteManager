var ul = document.querySelector("ul");

//console.log(ul);

// Add-Items
document.querySelector('#add-btn').addEventListener('click', function(e){
    e.preventDefault();
    //console.log("hello");

    var addInput = document.getElementById('add-input');

    if(addInput.value !== ''){
    var li = document.createElement('li'),
        firstPara = document.createElement('p'),
        secondPara = document.createElement('p'),
        firstIcon = document.createElement('i'),
        secondIcon = document.createElement('i'),
        input = document.createElement('input');

    firstIcon.className = "fa fa-pencil-square-o";
    secondIcon.className = "fa fa-times";
    input.className = "edit-note";
    input.setAttribute('type', 'text');

    secondPara.appendChild(firstIcon);
    secondPara.appendChild(secondIcon);

    firstPara.textContent = addInput.value;

    li.appendChild(firstPara);
    li.appendChild(secondPara)
    li.appendChild(input);

    //console.log(li);

    ul.appendChild(li);

    addInput.value = '';

    }

});

// Edit and Delete Items

ul.addEventListener('click', function(e){
    if(e.target.classList[1] === "fa-pencil-square-o"){
        //console.log("edit enabled");
        var parentPara = e.target.parentNode;
        parentPara.style.display = 'none';
        //console.log(parentPara);
        var note = parentPara.previousElementSibling;
        var input = parentPara.nextElementSibling;

        input.style.display='block';
        input.value = note.textContent;
        //console.log(note, input);

        input.addEventListener('keypress', function(e){

            if(e.keyCode === 13){
                if(input.value !== ''){
                    parentPara.style.display = 'block';
                    input.style.display='none';
                    note.textContent = input.value;
                } 
                else{
                    var li = e.target.parentNode;
                    ul.removeChild(li);
                }
            }
            
        });

    }
    else if(e.target.classList[1] === "fa-times"){
        var parentPara = e.target.parentNode;
    
        var li = parentPara.parentElement;
        //console.log(li);
        ul.removeChild(li);
        //console.log("delete enabled");
    }
    
});


// hide notes
var hide = document.getElementById('hide');
hide.addEventListener('click', function(){
    if(hide.checked){
        ul.style.display = 'none';
        var label = hide.previousElementSibling;
        label.textContent = 'Unhide Notes';
        console.log(hide);
    }
    else{
        ul.style.display = 'block';
        var label = hide.previousElementSibling;
        label.textContent = 'Hide Notes';
    }
    
});


// search 

var searchInput = document.querySelector('#search-note input');
//console.log(searchInput);

searchInput.addEventListener('keyup', function(e){
    //console.log('key up');
    var searchChar = e.target.value.toUpperCase();
    var notes = ul.getElementsByTagName('li');
    //console.log(notes);

    Array.from(notes).forEach(function(note){
        var paraText = note.firstElementChild.textContent;
        //console.log(paraText);
        console.log(note);

        if(paraText.toUpperCase().indexOf(searchChar) !== -1){
            note.style.display = 'block';
        }
        else {
            note.style.display = 'none';
        }

    });

});

