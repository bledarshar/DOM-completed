
let p = document.createElement("p");
document.body.append(p)
p.innerText = "\"Hey, I'm red!\"";
p.style.color = 'red';

let h3 =document.createElement("h3")
document.body.append(h3)
h3.textContent = "\"i'm a blue h3!\"";
h3.style.color ="blue"

let div =document.createElement("div")

document.body.appendChild(div)
div.style.background = "pink"
div.style.border = "thick solid black";

let h1 =document.createElement("h1")
div.appendChild(h1)
h1.innerText = "i'm a div"

let pa =document.createElement("pa")
div.appendChild(pa)
pa.innerText= "ME TOO"







