const btn = document.getElementById("searchBtn")
const a = document.querySelectorAll("input")
let x = Math.floor((Math.random() * 13) + 1);
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
        newDiv5.addEventListener('click',()=>{localStorage.setItem(result.authors,result.title)
        alert('Added to favourites');})
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
        newDiv5.addEventListener('click',()=>{localStorage.setItem(result.authors,result.title)
        alert('Added to favourites');})
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
        const newDiv0 = document.createElement('div');
        const newDiv1 = document.createElement('div');
        const newDiv2 = document.createElement('div');
        const newDiv3 = document.createElement('div');
        const newDiv4 = document.createElement('div');
        const newDiv8 = document.createElement('br')
        const newDiv5 = document.createElement('button');
        const newDiv6 = document.createElement('br')
        const newDiv7 = document.createElement('br')
        newDiv0.innerHTML =  `<b>Title of the book is:</b> ${result.title}`;
        newDiv1.innerHTML =  `<b>Author of the book is:</b> ${result.authors}`;
        newDiv2.innerHTML =  `<b>Book-type is:</b> ${result.book_type}`;
        newDiv3.innerHTML =  `<b>Categories:</b> ${result.categories}`;
        newDiv4.innerHTML =  `<b>Summary of the book is:</b> ${result.summary}`;
        newDiv5.innerHTML =  `add to fav`
        newDiv5.classList.add('favbtn');
        card.appendChild(newDiv0);
        card.appendChild(newDiv1);
        card.appendChild(newDiv2);
        card.appendChild(newDiv3);
        card.appendChild(newDiv4);
        card.appendChild(newDiv8);
        card.appendChild(newDiv5);
        card.appendChild(newDiv6);
        card.appendChild(newDiv7);
        newDiv5.addEventListener('click',()=>{localStorage.setItem(result.authors,result.title)
        alert('Added to favourites');})
    })
}).catch(err =>console.log(err))
}
}
btn.addEventListener('click',fetchapi);
//custom cursor
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
    home.innerHTML =  `Home`;
    home.classList.add('homebtn')
    const favcontainer = document.querySelector('.favourites-container');
    favcontainer.style.display = 'flex';
    const homecontainer = document.querySelector('.home-container')
    homecontainer.style.display = 'flex';
    homecontainer.appendChild(home);
    const codebtn  = document.querySelector('.cssbuttons-io');
    codebtn.style.display = 'block';
    const footer = document.querySelector('footer');
    footer.style.display = 'none'
    for(let i=0;i<localStorage.length;i++){
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        const favcontainer = document.querySelector('.favourites-container');
        favcontainer.innerHTML +=`<p><b>Book Name is:</b> ${value}</p><p><b>Written by:</b> ${key}</p><br>`
    }
    home.addEventListener('click',()=>{
        container.style.display='block';
        home.style.display = 'none';
        favcontainer.style.display = 'none'
        const div = document.querySelector('.favourites-container');
        while(div.firstChild){
        div.removeChild(div.firstChild);
        }
        const footer = document.querySelector('footer');
        footer.style.display = 'flex'
    })
})

//just the cards

const playcards =()=>{const url = 'https://book-finder1.p.rapidapi.com/api/search?book_type=fiction';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '890025f583msh8b4e7ac580a127ep103f4ejsnae4e9e3ae499',
		'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
	}
};
//apifetch
fetch(url, options).then(response=>response.json()).then(data=>{
    let test = document.querySelectorAll('.test');
    let testb = document.querySelectorAll('.testb');
    for(let i=0;i<12;i++){
        test[i].innerHTML +=`<p><b>The author is:</b> ${data.results[x+i].authors}<br><br><b>The title is:</b> ${data.results[x+i].title}<br><br><b>The book-type is:</b> ${data.results[x+i].book_type}<br><br><b>The categories are:</b> ${data.results[x+i].categories}</p>`
        testb[i].innerHTML +=`<p><b>Summary: </b>${data.results[x+i].summary}</p>`
        if(data.results[x+i].summary.length>1000){
            testb[i].style.fontSize ='0.7rem';
        }
    }
}).catch(err =>console.log(err))}

window.addEventListener("load", (event) => {
  playcards();
});

//typewriter
let p = 0;
let txt = 'Welcome to bookkeeping.com!!!!';
let speed = 40;
function typeWriter() {
  if (p < txt.length) {
    document.getElementById("move").innerHTML += txt.charAt(p);
    p++;
    setTimeout(typeWriter, speed);
  }
}
window.addEventListener('load',typeWriter());

//scroll into view
scroll=()=>{
    const card = document.querySelector('.card');
    card.scrollIntoView();
}
const searchBtn = document.querySelector('#searchBtn');
searchBtn.addEventListener('click',()=>{
    setTimeout(scroll,2000);
});
