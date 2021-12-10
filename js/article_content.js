
//article
const getArticle_name = document.querySelector('#showArticle_name');
const getArticle_detail = document.querySelector('#showArticle_detail');
const getArticle_image = document.querySelector('#imageURL');
const formArticle_name = document.querySelector('#formArticle_name');
const formArticle_detail = document.querySelector('#formArticle_detail');
const  getForm = document.querySelector('#form');




firebase.auth().onAuthStateChanged(function (user) {
    if (user) {


       

        const email = localStorage.getItem('email');

        db.collection('articles').doc('EcpP98ekJRkX5ChKd5X2').get().then((result) => {
            console.log(email);
            getArticle_name.innerHTML = result.data().article_name;
            getArticle_detail.innerHTML = result.data().article_detail;


            getArticle_image.setAttribute("src", result.data().imageURL);
            getArticle_image.setAttribute("width", "100%");
            getArticle_image.setAttribute("height", "50%");
            getArticle_image.setAttribute("alt", "The Pulpit Rock");


            console.log(result.id);
        })



        db.collection('articles').doc('EcpP98ekJRkX5ChKd5X2').get().then((result) => {


            formArticle_name.setAttribute('value', result.data().article_name);
            formArticle_detail.setAttribute('value', result.data().article_detail);


            console.log(result.id);
        })

        
       


        getForm.addEventListener('submit', (e) => {
            e.preventDefault();
            


            db.collection('articles').doc('EcpP98ekJRkX5ChKd5X2').update({

                
            article_name: getForm.formArticle_name.value,
            article_detail: getForm.formArticle_detail.value,

            });



            alert('อัปเดทการเปลี่ยนแปลงแล้ว')
            // window.location.href = 'article_content.html';
            
            return

            

        });

        











    }
}
)



