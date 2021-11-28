//profile
const getName = document.querySelector('#name');
const getEmail = document.querySelector('#email');
const getPhone = document.querySelector('#phone');
const getDetail = document.querySelector('#detail');

//article
const getArticle_name = document.querySelector('#showArticle_name');
const getArticle_detail = document.querySelector('#showArticle_detail');
const getArticle_image = document.querySelector('#imageURL');
const test = document.querySelector('#test');




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



       



        db.collection('articles').get().then(article => {

            article.docs.forEach(doc => {
               

                getArticle_name.innerHTML = doc.data().article_name;
                getArticle_detail.innerHTML = doc.data().article_detail;
                
                getArticle_image.setAttribute("src",doc.data().imageURL);
                getArticle_image.setAttribute("width", "100%");
                getArticle_image.setAttribute("height", "100%");
                getArticle_image.setAttribute("alt", "The Pulpit Rock");
                
            })


        })



        










    }
}
)


