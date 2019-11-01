// punkt1-2 Changing the text and the Color :h1

let myTitle = document.querySelector('h1');
myTitle.innerHTML = 'Fruits & Vegetables Corp';
myTitle.setAttribute('style', 'color: red;');

// punkt 3 changing the text and the link
let myList = document.querySelectorAll('a');
myList[2].innerHTML = 'Vegetables';
myList[2].href ='#vegetables';
console.log(myList[2]);

// punkt 4 swap sectons
let main = document.querySelector('main');
let section = document.querySelectorAll('section');
main.insertBefore(section[1], main.childNodes[0]);

// punkt 5 create h2 to both about and contact.Putting them in right positions.
let about = document.getElementById('about');
let newElement = document.createElement('h2');
newElement.textContent = 'About';
about.insertBefore(newElement, about.childNodes[0]);

let contact = document.getElementById('contact');
let newElement2 = document.createElement('h2');
newElement2.textContent ='Contact';
contact.insertBefore(newElement2, contact.childNodes[0]);

// punkt 6 added a p tag and removed the doubble text.
let wrap = document.getElementById('about');
let wrapping = document.createElement('p');
wrapping.textContent = wrap.lastChild.textContent;
wrap.lastChild.textContent ='';
wrap.appendChild(wrapping);



// punkt 7
let td = document.querySelectorAll('thead > tr > td');
for (let i = 0; i < td.length; i++) {
  let th = document.createElement('th');
  th.textContent = td[i].textContent;
  console.log(th.textContent);
  let parent = td[i].parentNode;
  parent.replaceChild(th, td[i]);
}

// punkt 8 add the css.file to HTML
let head = document.getElementsByTagName('head')[0];
let link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'main.css';
head.appendChild(link);
// css.file before the js.file
head.insertBefore(link, head.childNodes[4]);
console.log(head);

// punkt 9 Change the title in the HTML head
var myHeadTitle = document.title;
document.title = 'Fruits & Vegetables Corp';
