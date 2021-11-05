

const getName = document.querySelector('#name');
const getEmail = document.querySelector('#email');
const getForm = document.querySelector('#form');

const getPhone = document.querySelector('#phone');
const getDetail = document.querySelector('#detail');




firebase.auth().onAuthStateChanged(function (user) {
    if (user) {


        db.collection('users').get().then((snapshot) => {
            snapshot.forEach(doc => {
                showdata(doc)
            });

        })

        // getForm.addEventListener('submit', (e) => {
        //     e.preventDefault();
        //     db.collection('users').add({
        //         name: getForm.name.value,
        //         email: getForm.email.value,
        //         phone: getForm.phone.value,
        //         detail: getForm.detail.value
        //     });

        // });


        function showdata(doc) {

            
            const email = localStorage.getItem('email');
            if (email == doc.data().email) {

                console.log(doc.data().name);
                getName.innerHTML = doc.data().name;
                getEmail.innerHTML = doc.data().email;
                getPhone.innerHTML = doc.data().phone;
                getDetail.innerHTML = doc.data().detail;

            } else {
                console.log("faile");
            }

           
            
        }

    } else {

    }
}
)



