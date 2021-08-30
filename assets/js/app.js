fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => displayUser(data));
document.getElementById('changeUser').addEventListener('click', () => {
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => displayUser(data))
})

const displayUser = data => {
    //random user images
    const userImg = document.getElementById('user-img');
    const img = data.results[0].picture.large;
    userImg.setAttribute('src', img);

    //random user name 
    const userValue = document.getElementById('user-value');
    const {
        title,
        first,
        last
    } = data.results[0].name;
    userValue.innerText = `${title} ${first} ${last}`;

    document.getElementById('details').addEventListener('mouseover', (e) => {
        if (e.target.id === 'user') {

            // e.target.style.color = "red";
            const {
                title,
                first,
                last
            } = data.results[0].name;
            userValue.innerText = `${title} ${first} ${last}`;
        } else if (e.target.id === 'email') {
            userValue.innerText = `${data.results[0].email}`;
        } else if (e.target.id === 'date') {
            userValue.innerText = `${data.results[0].dob.date}`;
        } else if (e.target.id === 'location') {
            const {
                postcode,
                city,
                state
            } = data.results[0].location;
            userValue.innerText = `${postcode} ${city} ${state}`;
        } else if (e.target.id === 'phone') {
            userValue.innerText = `${data.results[0].phone}`;
        } else if (e.target.id === 'shop') {
            userValue.innerText = `${data.results[0].gender}`;
        }
    })

}

// const displayDetails = (date) => {

// }
// displayDetails()