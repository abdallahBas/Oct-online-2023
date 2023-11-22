const choice = document.getElementById('services')
const checkBtn = document.getElementById('check')
const resDiv = document.getElementById('res')

checkBtn.onclick = function () {
    switch (choice.value) {
        case 'y':
        case 'Y':
            // js code
            break;
        case '1':
            resDiv.textContent = 'Home Internt Selected'
            console.log('Home Internt Selected');
            break;
        case '2':
            resDiv.textContent = 'Mobile Internt Selected'
            console.log('Mobile Internt Selected');
            break;
        case '3':
            resDiv.textContent = 'Customer Services Selected'
            console.log('Customer Services Selected');
            break;
            console.log('ok, you are allowed');  // unreachable code
        default:
            resDiv.textContent = 'Other Service Selected'
            //js code
            break;
    }

    console.log('your service selected');
}

let state = 50;
switch (state) {
    case true: // if (state === true)
        console.log('ok , account activated');
        break;
    case false: // else if (state === false)
        console.log('sorry, account deactivated');
        break;
    default:   // else
        console.log('invalid input');
        break;
}