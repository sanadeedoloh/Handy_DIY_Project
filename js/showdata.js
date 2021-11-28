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

//video
const getVdo_name = document.querySelector('#showVdo_name');
const getVdo_detail = document.querySelector('#showVdo_detail');
const getVdo_url = document.querySelector('#videoURL');

//product
const getProductName = document.querySelector('#productName');
const getProductDetail = document.querySelector('#productDetali');
const getFacebook = document.querySelector('#facebook');
const getProductShopLink = document.querySelector('#productShopLink');
const getProductURL = document.querySelector('#produstURL');


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

            getprofil.setAttribute("src", result.data().image_profile);
            getprofil.setAttribute("width", "100%");
            getprofil.setAttribute("height", "50%");
            getprofil.setAttribute("alt", "The Pulpit Rock");

            console.log(result.id);
        })



        db.collection('videos').get().then(vdo => {

            vdo.docs.forEach(doc => {
                console.log(doc.data());
                getVdo_name.innerHTML = doc.data().vdo_name;
                getVdo_detail.innerHTML = doc.data().vdo_detail;

                getVdo_url.setAttribute("src", doc.data().videoURL);
                getVdo_url.setAttribute("width", "100%");
                getVdo_url.setAttribute("height", "50%");
                getVdo_url.setAttribute("alt", "The Pulpit Rock");

            })


        })



        db.collection('articles').get().then(article => {
            var wrapper = document.getElementById("box");
   
            var myHTML = '';
            article.docs.forEach(doc => {


                getArticle_name.innerHTML = doc.data().article_name;
                getArticle_detail.innerHTML = doc.data().article_detail;

                getArticle_image.setAttribute("src", doc.data().imageURL);
                getArticle_image.setAttribute("width", "100%");
                getArticle_image.setAttribute("height", "150px");
                getArticle_image.setAttribute("alt", "The Pulpit Rock");

               

                
               

            })


        })



       



        db.collection('products').get().then(product => {

            product.docs.forEach(doc => {


                getProductName.innerHTML = doc.data().pd_name;
                getProductDetail.innerHTML = doc.data().pd_detail;
                getFacebook.innerHTML = doc.data().facebook;


                getProductURL.setAttribute("src", doc.data().productURL);
                getProductURL.setAttribute("width", "100%");
                getProductURL.setAttribute("height", "50%");
                getProductURL.setAttribute("alt", "The Pulpit Rock");


                getProductShopLink.setAttribute("href", doc.data().shop_link);
                document.body.appendChild(s);
            })


        })










    }
}
)



const createBlog = (blog) => {
    let data = blog.data();
    blogSection.innerHTML += `
    <div class="blog-card">
        <img src="${data.bannerImage}" class="blog-image" alt="">
        <h1 class="blog-title">${data.title.substring(0, 100) + '...'}</h1>
        <p class="blog-overview">${data.article.substring(0, 200) + '...'}</p>
        <a href="/${blog.id}" class="btn dark">read</a>
    </div>
    `;
}
