//profile
const getName = document.querySelector('#name');
const getEmail = document.querySelector('#email');
const getPhone = document.querySelector('#phone');
const getDetail = document.querySelector('#detail');



//video
const getVdo_name = document.querySelector('#showVdo_name');
const getVdo_detail = document.querySelector('#showVdo_detail');
const getVdo_url = document.querySelector('#videoURL');



const postArticle = document.querySelector('#postArticle');


firebase.auth().onAuthStateChanged(function (user) {
    if (user) {

        const email = localStorage.getItem('email');

        db.collection('users').doc(email).get().then((result) => {
            console.log(result.data());
            getName.innerHTML = result.data().name;
            getEmail.innerHTML = result.data().email;
            getPhone.innerHTML = result.data().phone;
            getDetail.innerHTML = result.data().detail;
            console.log(result.id);
        })



        db.collection('videos').get().then(vdo => {

            vdo.docs.forEach(doc => {
                console.log(doc.data());
                getVdo_name.innerHTML = doc.data().vdo_name;
                getVdo_detail.innerHTML = doc.data().vdo_detail;

                getVdo_url.setAttribute("src",doc.data().videoURL);
                getVdo_url.setAttribute("width", "100%");
                getVdo_url.setAttribute("height", "50%");
                getVdo_url.setAttribute("alt", "The Pulpit Rock");
                
            })


        })




    }
}
)


