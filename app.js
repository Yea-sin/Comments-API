// default function 

const fetchData = async url => {
    const res = await fetch(url);
    const data = await res.json();

    return data
}
// /////////////////////////////


fetchData('https://jsonplaceholder.typicode.com/comments')
.then(data => {
    // console.log(data)
    const detail = document.getElementById('details');
    data.forEach(obj => {
        const div = document.createElement('div');
        div.classList.add('container')
        div.innerHTML = `
        <h2>Name :${obj.name}</h2>
        <h4>Email :${obj.email}</h4>
        <button onclick="displayComment('${obj.id}')" class='btn-lg bg-secondary'>Details</button>
        `
        detail.appendChild(div);
    })
})

const displayComment = items => {
    fetchData(`https://jsonplaceholder.typicode.com/comments?id=${items}`)
    .then(data => displayCommentDetails(data[0]))
}

const displayCommentDetails = property => {
    window.scroll(0, 40)
    const detail = document.getElementById('details-div');
    detail.innerHTML = `
    <div class="card-body text-secondary">
        <p class="card-text">${property.body}</p>
    </div>
    `
}