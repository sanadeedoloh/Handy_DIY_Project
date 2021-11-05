


function createVdoPost() {

   // Get vdo
   video = document.getElementById('video').value;
   vdo_name = document.getElementById('vdo_name').value;
   vdo_detail = document.getElementById('vdo_detail').value;



   db.collection("videos").doc().set({
      video: document.getElementById('video').value,
      vdo_name: document.getElementById('vdo_name').value,
      vdo_detail: document.getElementById('vdo_detail').value,

   });

}


function createArticlePost() {

   // // Get article
   file_image = document.getElementById('file_image').value;
   cont_name = document.getElementById('cont_name').value;
   cont_detail = document.getElementById('cont_detail').value;


   db.collection("articles").doc().set({
      file_image: document.getElementById('file_image').value,
      cont_name: document.getElementById('cont_name').value,
      cont_detail: document.getElementById('cont_detail').value,

   });




}

function createProductPost() {

   // // Get product
   pd_image = document.getElementById('pd_image').value;
   pd_name = document.getElementById('pd_name').value;
   pd_detail = document.getElementById('pd_detail').value;
   facebook = document.getElementById('facebook').value;
   shop_link = document.getElementById('shop_link').value;


   db.collection("products").doc().set({
      pd_image: document.getElementById('pd_image').value,
      pd_name: document.getElementById('pd_name').value,
      pd_detail: document.getElementById('pd_detail').value,
      facebook: document.getElementById('facebook').value,
      shop_link: document.getElementById('shop_link').value,
   });




}


function createCommentPost() {

   // // Get comment
   comment_detail = document.getElementById('comment_detail').value;


   db.collection("comments").doc().set({
      comment_detail: document.getElementById('comment_detail').value,

   });

}









// firebase.auth().onAuthStateChanged(function (user) {
//    if (user) {


//        db.collection('users').get().then((snapshot) => {
//            snapshot.forEach(doc => {
//                showdata(doc)
//            });

//        })




//        function showdata(doc) {


//            const email = localStorage.getItem('email');
//            if (email == doc.data().email) {



//            } else {
//                console.log("faile");
//            }



//        }

//    } else {

//    }
// }
// )