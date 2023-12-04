const siteHeader = document.querySelector('header');
const mainItem = document.querySelectorAll('main')[0];

const asideItem = document.querySelector('aside');


//  edit in inline style
siteHeader.style.backgroundColor = "red";
siteHeader.style.color = "#fff";
siteHeader.style.padding = '10px';

mainItem.style.backgroundColor = "#000";
mainItem.style.color = "#fff"
// remove the css of item and apply the cssText only
mainItem.style.cssText = `
margin: 50px 10px;
background-color: blue;
color:white;
padding:10px;
`

mainItem.style.backgroundColor = "tomato";
mainItem.style.setProperty("width", "50%", "important")

const styles = document.styleSheets;

// edit in style sheet
styles[0].cssRules[0].style.borderRadius = "8px";

console.log(asideItem.classList)
console.log(asideItem.classList.length)
asideItem.classList.add('cls4')
asideItem.classList.add('cls5', 'cls6')
console.log(asideItem.classList);
asideItem.classList.remove('cls1');
asideItem.classList.remove('cls2', 'cls5')
console.log(asideItem.classList);

asideItem.classList.toggle('cls8')
console.log(asideItem.classList);
asideItem.classList.toggle('cls8')
console.log(asideItem.classList);

console.log(asideItem.classList.contains('cls5'));
console.log(asideItem.classList.contains('cls4'));

console.log(asideItem.classList.item(0));
console.log(asideItem.classList.item(1));





