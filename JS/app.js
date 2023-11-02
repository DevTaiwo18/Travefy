// =====================
// =====================
// SELECT ELEMENTS
// =====================
// =====================

// Laptop drop down
let firstDropDown = document.getElementById('first-drop-down')
let secondDropDown = document.getElementById('second-drop-down')


// LAPTOP DROPDOWN FUNCTION

function lpMenu(params) {
    // alert()
   
    if (params == 'showFirst') {
        // firstDropDown.classList.add('show-menu')
        firstDropDown.style.height = '200px'
    } else if(params == 'unshowFirst'){
        firstDropDown.style.height = 0
    }

    if (params == 'showSecond') {
        // firstDropDown.classList.add('show-menu')
        secondDropDown.style.height = '200px'
    } else if(params == 'unshowSecond'){
        secondDropDown.style.height = 0
    }
}

// END OF LP DROPDOWN FUNCTION


// mobile drop down
let mobileLinks = document.querySelector('.mobile-links')

function mobileMenu(toShow){
    if(toShow == 'show'){
        mobileLinks.style.height = '299px'
    } else if(toShow == 'unShow'){
        mobileLinks.style.height = 0
    }
}


// =====================
// =====================
// END OF SELECTING ELEMENTS
// =====================
// =====================





