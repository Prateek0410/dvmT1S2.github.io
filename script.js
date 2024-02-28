const btn = document.getElementById("searchBtn")
const a = document.querySelectorAll("input")
const fetchapi = () =>{
    let author='';
    let title='';
    author=a[0].value;
    title=a[1].value;
if(author===''&& title!==''){
const url = `https://book-finder1.p.rapidapi.com/api/search?title=${title}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '890025f583msh8b4e7ac580a127ep103f4ejsnae4e9e3ae499',
		'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
	}

};
fetch(url, options).then(response=>response.json()).then(data=>{
    data.results.map(result=>{
        let card = document.querySelector('.card')
        card.style.display = 'inline-block'
        const newDiv = document.createElement('div');
        const newDiv1 = document.createElement('div');
        const newDiv2 = document.createElement('div');
        const newDiv3 = document.createElement('div');
        const newDiv4 = document.createElement('div');
        const newDiv5 = document.createElement('button');
        newDiv.innerHTML =  `Title of the book is: ${result.title}`;
        newDiv1.innerHTML =  `Author of the book is: ${result.authors}`;
        newDiv2.innerHTML =  `Book-type is: ${result.book_type}`;
        newDiv3.innerHTML =  `Categories: ${result.categories}`;
        newDiv4.innerHTML =  `Summary of the book is: ${result.summary}`;
        newDiv5.innerHTML =  `add to fav <br>`;
        card.appendChild(newDiv);
        card.appendChild(newDiv1);
        card.appendChild(newDiv2);
        card.appendChild(newDiv3);
        card.appendChild(newDiv4);
        card.appendChild(newDiv5);
        newDiv5.addEventListener('click',()=>{localStorage.setItem(result.authors,result.title)})
    })
}).catch(err =>console.log(err))
}
else if(author!==''&&title===''){
    const url = `https://book-finder1.p.rapidapi.com/api/search?author=${author}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '890025f583msh8b4e7ac580a127ep103f4ejsnae4e9e3ae499',
		'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
	}
};
fetch(url, options).then(response=>response.json()).then(data=>{
    data.results.map(result=>{
        let card = document.querySelector('.card')
        card.style.display = 'inline-block'
        const newDiv = document.createElement('div');
        const newDiv1 = document.createElement('div');
        const newDiv2 = document.createElement('div');
        const newDiv3 = document.createElement('div');
        const newDiv4 = document.createElement('div');
        const newDiv5 = document.createElement('button');
        newDiv.innerHTML =  `Title of the book is: ${result.title}`;
        newDiv1.innerHTML =  `Author of the book is: ${result.authors}`;
        newDiv2.innerHTML =  `Book-type is: ${result.book_type}`;
        newDiv3.innerHTML =  `Categories: ${result.categories}`;
        newDiv4.innerHTML =  `Summary of the book is: ${result.summary}`;
        newDiv5.innerHTML =  `add to fav`;
        card.appendChild(newDiv);
        card.appendChild(newDiv1);
        card.appendChild(newDiv2);
        card.appendChild(newDiv3);
        card.appendChild(newDiv4);
        card.appendChild(newDiv5);
        newDiv5.addEventListener('click',()=>{localStorage.setItem(result.authors,result.title)})
    })
}).catch(err =>console.log(err))
}
else if(author!==''&&title!==''){
const url = `https://book-finder1.p.rapidapi.com/api/search?title=${title}&author=${author}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '890025f583msh8b4e7ac580a127ep103f4ejsnae4e9e3ae499',
		'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
	}
};
fetch(url, options).then(response=>response.json()).then(data=>{
    data.results.map(result=>{
        let card = document.querySelector('.card')
        card.style.display = 'inline-block'
        const newDiv = document.createElement('div');
        const newDiv1 = document.createElement('div');
        const newDiv2 = document.createElement('div');
        const newDiv3 = document.createElement('div');
        const newDiv4 = document.createElement('div');
        const newDiv5 = document.createElement('button');
        newDiv.innerHTML =  `Title of the book is: ${result.title}`;
        newDiv1.innerHTML =  `Author of the book is: ${result.authors}`;
        newDiv2.innerHTML =  `Book-type is: ${result.book_type}`;
        newDiv3.innerHTML =  `Categories: ${result.categories}`;
        newDiv4.innerHTML =  `Summary of the book is: ${result.summary}`;
        newDiv5.innerHTML =  `add to fav`
        card.appendChild(newDiv1);
        card.appendChild(newDiv2);
        card.appendChild(newDiv3);
        card.appendChild(newDiv4);
        card.appendChild(newDiv5);
        newDiv5.addEventListener('click',()=>{localStorage.setItem(result.authors,result.title)})
    })
}).catch(err =>console.log(err))
}
}
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