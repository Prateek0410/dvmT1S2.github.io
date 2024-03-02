const btn = document.getElementById("searchBtn")
const a = document.querySelectorAll("input")
let x = Math.floor((Math.random() * 24) + 1);
let y = Math.floor((Math.random() * 24) + 1);
let z = Math.floor((Math.random() * 24) + 1);
let w = Math.floor((Math.random() * 24) + 1);
const fetchapi = () =>{
    let author='';
    let title='';
    author=a[0].value;
    title=a[1].value;
//conditions
if(author===''&& title!==''){
const url = `https://book-finder1.p.rapidapi.com/api/search?title=${title}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '890025f583msh8b4e7ac580a127ep103f4ejsnae4e9e3ae499',
		'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
	}

};
//apifetch
fetch(url, options).then(response=>response.json()).then(data=>{
    data.results.map(result=>{
        let card = document.querySelector('.card')
        card.style.display = 'inline-block'
        const newDiv = document.createElement('div');
        const newDiv1 = document.createElement('div');
        const newDiv2 = document.createElement('div');
        const newDiv3 = document.createElement('div');
        const newDiv4 = document.createElement('div');
        const newDiv8 = document.createElement('br')
        const newDiv5 = document.createElement('button');
        const newDiv6 = document.createElement('br')
        const newDiv7 = document.createElement('br')
        newDiv.innerHTML =  `<b>Title of the book is:</b> ${result.title}`;
        newDiv1.innerHTML =  `<b>Author of the book is:</b> ${result.authors}`;
        newDiv2.innerHTML =  `<b>Book-type is:</b> ${result.book_type}`;
        newDiv3.innerHTML =  `<b>Categories:</b> ${result.categories}`;
        newDiv4.innerHTML =  `<b>Summary of the book is:</b> ${result.summary}`;
        newDiv5.innerHTML =  `add to fav`
        newDiv5.classList.add('favbtn');
        card.appendChild(newDiv);
        card.appendChild(newDiv1);
        card.appendChild(newDiv2);
        card.appendChild(newDiv3);
        card.appendChild(newDiv4);
        card.appendChild(newDiv8);
        card.appendChild(newDiv5);
        card.appendChild(newDiv6);
        card.appendChild(newDiv7);
        newDiv5.addEventListener('click',()=>{localStorage.setItem(result.authors,result.title)})
    })
}).catch(err =>console.log(err))
}
//conditions
else if(author!==''&&title===''){
    const url = `https://book-finder1.p.rapidapi.com/api/search?author=${author}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '890025f583msh8b4e7ac580a127ep103f4ejsnae4e9e3ae499',
		'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
	}
};
//apifetch
fetch(url, options).then(response=>response.json()).then(data=>{
    data.results.map(result=>{
        let card = document.querySelector('.card')
        card.style.display = 'inline-block'
        const newDiv = document.createElement('div');
        const newDiv1 = document.createElement('div');
        const newDiv2 = document.createElement('div');
        const newDiv3 = document.createElement('div');
        const newDiv4 = document.createElement('div');
        const newDiv8 = document.createElement('br')
        const newDiv5 = document.createElement('button');
        const newDiv6 = document.createElement('br')
        const newDiv7 = document.createElement('br')
        newDiv.innerHTML =  `<b>Title of the book is:</b> ${result.title}`;
        newDiv1.innerHTML =  `<b>Author of the book is:</b> ${result.authors}`;
        newDiv2.innerHTML =  `<b>Book-type is:</b> ${result.book_type}`;
        newDiv3.innerHTML =  `<b>Categories:</b> ${result.categories}`;
        newDiv4.innerHTML =  `<b>Summary of the book is:</b> ${result.summary}`;
        newDiv5.innerHTML =  `add to fav`
        card.appendChild(newDiv);
        card.appendChild(newDiv1);
        card.appendChild(newDiv2);
        card.appendChild(newDiv3);
        card.appendChild(newDiv4);
        card.appendChild(newDiv8);
        card.appendChild(newDiv5);
        card.appendChild(newDiv6);
        card.appendChild(newDiv7);
        newDiv5.addEventListener('click',()=>{localStorage.setItem(result.authors,result.title)})
    })
}).catch(err =>console.log(err))
}
//conditions
else if(author!==''&&title!==''){
const url = `https://book-finder1.p.rapidapi.com/api/search?title=${title}&author=${author}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '890025f583msh8b4e7ac580a127ep103f4ejsnae4e9e3ae499',
		'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
	}
};
//apifetch
fetch(url, options).then(response=>response.json()).then(data=>{
    data.results.map(result=>{
        let card = document.querySelector('.card')
        card.style.display = 'inline-block'
        const newDiv = document.createElement('div');
        const newDiv1 = document.createElement('div');
        const newDiv2 = document.createElement('div');
        const newDiv3 = document.createElement('div');
        const newDiv4 = document.createElement('div');
        const newDiv8 = document.createElement('br')
        const newDiv5 = document.createElement('button');
        const newDiv6 = document.createElement('br')
        const newDiv7 = document.createElement('br')
        newDiv.innerHTML =  `<b>Title of the book is:</b> ${result.title}`;
        newDiv1.innerHTML =  `<b>Author of the book is:</b> ${result.authors}`;
        newDiv2.innerHTML =  `<b>Book-type is:</b> ${result.book_type}`;
        newDiv3.innerHTML =  `<b>Categories:</b> ${result.categories}`;
        newDiv4.innerHTML =  `<b>Summary of the book is:</b> ${result.summary}`;
        newDiv5.innerHTML =  `add to fav`
        card.appendChild(newDiv);
        card.appendChild(newDiv1);
        card.appendChild(newDiv2);
        card.appendChild(newDiv3);
        card.appendChild(newDiv4);
        card.appendChild(newDiv8);
        card.appendChild(newDiv5);
        card.appendChild(newDiv6);
        card.appendChild(newDiv7);
        newDiv5.addEventListener('click',()=>{localStorage.setItem(result.authors,result.title)})
    })
}).catch(err =>console.log(err))
}
}
//custom cursor
btn.addEventListener('click',fetchapi);
const cursorDot = document.getElementById("cursor-dot");
const cursorOut = document.getElementById("cursor-outline");
window.addEventListener('mousemove', function(e){
    const posX = e.clientX;
    const posY = e.clientY;
    cursorDot.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
    cursorOut.animate({
        transform : `translate3d(${posX}px, ${posY}px, 0)`
    },{duration:500, fill:"forwards"});
});
//add to favourites
const fav = document.querySelector("#favourites");
const container = document.querySelector('.container');
const body = document.querySelector('body');
fav.addEventListener('click',()=>{
    container.style.display='none';
    const home = document.createElement('button');
    home.innerHTML =  `Back to Home`;
    const favcontainer = document.querySelector('.favourites-container');
    favcontainer.style.display = 'flex';
    const homecontainer = document.querySelector('.home-container')
    homecontainer.style.display = 'flex';
    homecontainer.appendChild(home);
    for(let i=0;i<localStorage.length;i++){
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        const favcontainer = document.querySelector('.favourites-container');
        favcontainer.innerHTML +=`<li><b>Book Name is:</b> ${value} and is <b>Written by:</b> ${key}</li>` 
    }
    home.addEventListener('click',()=>{
        container.style.display='block';
        home.style.display = 'none';
        favcontainer.style.display = 'none'
        const div = document.querySelector('.favourites-container');
        while(div.firstChild){
            div.removeChild(div.firstChild);
        }    
    })
})

//just the cards

const playcards =()=>{const url = 'https://book-finder1.p.rapidapi.com/api/search?book_type=Fiction&lexile_min=600&lexile_max=800&results_per_page=25&page=1';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '890025f583msh8b4e7ac580a127ep103f4ejsnae4e9e3ae499',
		'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
	}
};
//apifetch
fetch(url, options).then(response=>response.json()).then(data=>{
    let flipcard1 = document.querySelector('.flip-card-front1');
    let flipcardback1 = document.querySelector('.flip-card-back1')
    flipcard1.innerHTML +=`<p><b>The author is:</b> ${data.results[x].authors}<br><br><b>The title is:</b> ${data.results[x].title}<br><br><b>The book-type is:</b> ${data.results[x].book_type}<br><br><b>The categories are:</b> ${data.results[x].categories}</p>`
    flipcardback1.innerHTML +=`<p><b>Summary: </b>${data.results[x].summary}</p>`
    let flipcard2 = document.querySelector('.flip-card-front2');
    let flipcardback2 = document.querySelector('.flip-card-back2')
    flipcard2.innerHTML +=`<p><b>The author is:</b> ${data.results[y].authors}<br><br><b>The title is:</b> ${data.results[y].title}<br><br><b>The book-type is:</b> ${data.results[y].book_type}<br><br><b>The categories are:</b> ${data.results[y].categories}</p>`
    flipcardback2.innerHTML +=`<p><b>Summary: </b>${data.results[y].summary}</p>`
    let flipcard3 = document.querySelector('.flip-card-front3');
    let flipcardback3 = document.querySelector('.flip-card-back3')
    flipcard3.innerHTML +=`<p><b>The author is:</b> ${data.results[z].authors}<br><br><b>The title is:</b> ${data.results[z].title}<br><br><b>The book-type is:</b> ${data.results[z].book_type}<br><br><b>The categories are:</b> ${data.results[z].categories}</p>`
    flipcardback3.innerHTML +=`<p><b>Summary: </b>${data.results[z].summary}</p>`
    let flipcard4 = document.querySelector('.flip-card-front4');
    let flipcardback4 = document.querySelector('.flip-card-back4')
    flipcard4.innerHTML +=`<p><b>The author is:</b> ${data.results[w].authors}<br><br><b>The title is:</b> ${data.results[w].title}<br><br><b>The book-type is:</b> ${data.results[w].book_type}<br><br><b>The categories are:</b> ${data.results[w].categories}</p>`
    flipcardback4.innerHTML +=`<p><b>Summary: </b>${data.results[w].summary}</p>`}).catch(err =>console.log(err))}

window.addEventListener("load", (event) => {
  playcards();
});

//typewriter
let p = 0;
let txt = 'Welcome to bookkeeping.com!!!!                  You can search any book of your choice.                    Suggested books based on your favourites!                   dvmTask1_byPrateek             ';
let speed = 40;
function typeWriter() {
  if (p < txt.length) {
    document.getElementById("move").innerHTML += txt.charAt(p);
    p++;
    setTimeout(typeWriter, speed);
  }
}
window.addEventListener('load',typeWriter());