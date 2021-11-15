const getName = document.querySelector('#name');
const getEmail = document.querySelector('#email');
const getForm = document.querySelector('#form');

const getPhone = document.querySelector('#phone');
const getDetail = document.querySelector('#detail');

const getVideo_name = document.querySelector('#getvdo_name');
const getVideo_detail = document.querySelector('#getvdo_detail');

const getArticle_name = document.querySelector('#getarticle_name');
const getArticle_detail = document.querySelector('#getarticle_detail');



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

       

        db.collection('videos').doc(email).get().then((result) => {

            getVideo_name.innerHTML = result.data().vdo_name;
            getVideo_detail.innerHTML = result.data().vdo_detail;
            
        })


        db.collection('articles').get().then((snapshot) => {
           
            snapshot.forEach(doc => {
                showData(doc);
            });
            
           
        })



        function showData(doc){

            getArticle_name.innerHTML = doc.data().article_name;
            getArticle_detail.innerHTML = doc.data().article_detail;
            console.log(doc.id);
    
        }



       


    }
}
)

