

let userlist = document.querySelector('#userlist');

function renderUser(doc) {
    let li = document.createElement('li');
    let name = document.createElement('span');
    let city = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    city.textContent = doc.data().city;

    li.appendChild(name);
    li.appendChild(city);

    userlist.appendChild(li);

}

db.collection('users').get().then(user => {

    user.docs.forEach(doc => {
        console.log(doc.data())
        renderUser(doc);
    });
});