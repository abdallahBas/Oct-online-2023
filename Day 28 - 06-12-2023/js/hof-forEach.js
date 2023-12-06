const parent = document.querySelector('ul');
const childs = document.querySelectorAll('ul li')
const divs = document.querySelectorAll('.item');
const verInputs = document.querySelectorAll('.per input')
const resDiv = document.getElementById('res')

childs.forEach(function (ele, ind) {
    ele.addEventListener('click', function () {

        // remove active class from all list items
        childs.forEach(function (e) {
            e.classList.remove('active')
        })

        // hide all divs
        divs.forEach(ele => {
            ele.classList.remove('d-active')
        })
        // add active class to clicked list iem
        ele.classList.add('active');
        // add d-active class for corresponding div
        divs[ind].classList.add('d-active')
    })
    console.log(ele);
})

let code ="";
verInputs.forEach((ele, ind, arr) => {
    ele.addEventListener('keyup', _ => {
        if (ele.value.length == 1) {
            code+=ele.value;
            if (ind == arr.length -1){
                if (code == '1234'){
                    resDiv.textContent = 'ok account activated';
                    resDiv.classList.add('valid')
                    resDiv.classList.remove('invalid')
                    
                }else{
                    resDiv.textContent = 'sorry, wrong code';
                    resDiv.classList.add('invalid')
                    resDiv.classList.remove('valid')
                }
                console.log(code)
                code = ""
            }else{
                arr[ind + 1].focus()
            }
        }
    })
})