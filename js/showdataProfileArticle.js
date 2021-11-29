//profile
const getName = document.querySelector('#name');
const getEmail = document.querySelector('#email');
const getPhone = document.querySelector('#phone');
const getDetail = document.querySelector('#detail');
const getprofil = document.querySelector('#image_profile');

//article
const getArticle_name = document.querySelector('#showArticle_name');
const getArticle_detail = document.querySelector('#showArticle_detail');
const getArticle_image = document.querySelector('#imageURL');
const test = document.querySelector('#test');




firebase.auth().onAuthStateChanged(function (user) {
    if (user) {




        const email = localStorage.getItem('email');

        db.collection('users').doc(email).get().then((result) => {
            console.log(result.data());
            getName.innerHTML = result.data().name;
            getEmail.innerHTML = result.data().email;
            getPhone.innerHTML = result.data().phone;
            getDetail.innerHTML = result.data().detail;

            getprofil.setAttribute("src", result.data().image_profile);
            getprofil.setAttribute("width", "100%");
            getprofil.setAttribute("height", "50%");
            getprofil.setAttribute("alt", "The Pulpit Rock");

            console.log(result.id);
        })




        


            db.collection('articles').get().then(article => {
                
                article.docs.forEach(doc => {
                    console.log(doc.data().userId);

                    if (email === doc.data().userId) {

                        var row = `<div class="col-md-4 col-sm-4 card-body">
                        <div class="wrimagecard wrimagecard-topimage">
                        <div class="concard">
                        <img class="card" src="${doc.data().imageURL}" width="100%" height="150px">
                        </div>
                        <div class="wrimagecard">
                        <div class="card-body">
                        <span   >${doc.data().article_name}</span ><br>
                        <span >${doc.data().article_detail}</span>
                        </div>
                        </div>
            
                        </div>
                        </div>`;

                        $("#box").append(row)
                        

                        
                    }

                    // getArticle_name.innerHTML = doc.data().article_name;
                    // getArticle_detail.innerHTML = doc.data().article_detail;

                    // getArticle_image.setAttribute("src", doc.data().imageURL);
                    // getArticle_image.setAttribute("width", "100%");
                    // getArticle_image.setAttribute("height", "150px");
                    // getArticle_image.setAttribute("alt", "The Pulpit Rock");



                   




                });

            
            });

       
















    }
}
)



