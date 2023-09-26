function darkclass(){
    var element = document.getElementById('full-section');
    element.classList.add('active');
}

function lightclass(){
    var element = document.getElementById('full-section');
    element.classList.remove('active');
}

window.addEventListener('scroll', function (event) {
    // console.log(event);
});


function handlescroll() {
    var scrollheight = window.scrollY;
    // console.log("Live scroll height: " + scrollheight, 'pixels');
}

window.addEventListener('scroll', handlescroll);

// console.log(handlescroll());
// function demoscroll(){
//     const length = we;
//     console.log(length, 'pixel');
// }

function scrollheight() {
    let manually = window.scrollY;
    console.log(manually);
    if (1962 < manually) {
        document.getElementById('demobox').style.borderRadius = "50%";
        document.getElementById('demobox').style.backgroundColor = 'blueviolet'
    }
    else if (1962 > manually) {
        document.getElementById('demobox').style.borderRadius = "1px";
        document.getElementById('demobox').style.backgroundColor = 'blue'
    }

    if (2426 < manually) {
        document.getElementById('demobox').style.borderRadius = "1px";
        document.getElementById('demobox').style.backgroundColor = 'blue'
    }
}
    
    
window.addEventListener('scroll', scrollheight);

