const rcText = document.getElementById('src-text')
const inText = document.getElementById('input-text')
const start = document.getElementById('start')
const chkBtn = document.getElementById('check-btn')
const resDiv = document.getElementById('res')

chkBtn.onclick = function () {

    // console.log(rcText.value.indexOf(inText.value));
    //    if(ind != -1){
    //     resDiv.textContent = `"${inText.value}" is found in index ${ind}`
    // //      }else{
    //     resDiv.textContent = `"${inText.value}" is not found `

    // }

    if (rcText.value.includes(inText.value, parseInt(start.value))) {
        let ind = rcText.value.indexOf(inText.value, parseInt(start.value));
        resDiv.textContent = `"${inText.value}" is found `
        console.log(ind);
    } else {
        resDiv.textContent = `"${inText.value}" is not found `

    }
}