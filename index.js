// const container = document.getElementById('card')
// const loadFirst = document.getElementsByClassName('btn btn-primary my-2')[0]



const library = function(){
    fetch('https://api.pexels.com/v1/search?query=dogs', {
        headers: {
            Authorization: "iiHh9awASk6EYhH7jLFTpgfXcZTKwpGOYkvds1AsYghuW4kPxG98dd2T"
        },
    })
}
.then((res) => {
    if (res.ok){
        return res.json()
    }else {
        throw new Error("errore")
    }
})

.then((data)=>{
    
    console.log(data)
})
.catch((err) =>{
    console.log(err)
})

loadFirst.addEventListener('click', function(){
    console.log('Bottone premuto')

    data.photos.forEach(card) => {
        const card = document.createElement('div')
        card.classList.add('col md-4')

        card.innerHTML = `
        <div class='card mb-4 shadow-sm
        <div class="col">
<img src="${element.img}" class="card-img-top" alt="image" style="height: 25em" />
<div class="card-body">
<h5 class="card-title"> Lorem Ipsum</h5>
<p class="card-text">
This is a wider card with supporting text below as a natural
lead-in to additional content. This content is a little bit
longer.
</p>
<div class="d-flex justify-content-between align-items-center">
<div class="btn-group">
<button type="button" class="btn btn-sm btn-outline-secondary">
View
</button>
<button type="button" class="btn btn-sm btn-outline-secondary">
Edit
</button>
</div>
<small class="text-muted">9 mins</small> `

container.appendChild(card)
   } })






