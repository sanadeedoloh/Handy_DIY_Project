


const email = localStorage.getItem('email');

// create vdo
function createVdoPost() {

   // Get vdo
   video = document.getElementById('video').value;
   vdo_name = document.getElementById('vdo_name').value;
   vdo_detail = document.getElementById('vdo_detail').value;
  



   db.collection("videos").doc().set({
      video: document.getElementById('video').value,
      vdo_name: document.getElementById('vdo_name').value,
      vdo_detail: document.getElementById('vdo_detail').value,
      userId: email,
   });
   console.log("create video post success");



}


// create article
function createArticlePost(doc) {

   // // Get article
   file_image = document.getElementById('file_image').value;
   article_name = document.getElementById('article_name').value;
   article_detail = document.getElementById('article_detail').value;
  
  
   

   db.collection("articles").doc().set({
      userId: email,
      article_name: document.getElementById('article_name').value,
      article_detail: document.getElementById('article_detail').value,
      file_image: document.getElementById('file_image').value,
   });

   console.log("create video post success");

   console.log(doc.id);
   


}
// create product
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
      userId: email,
   });

  


}

// create comment
function createCommentPost() {

   // // Get comment
   comment_detail = document.getElementById('comment_detail').value;


   db.collection("comments").doc().set({
      comment_detail: document.getElementById('comment_detail').value,
      userId: email,
   });
   selectShow()
}





async function getBlogByEmail(collection, email) {
   try {
      return await db
         .collection(collection)
         .doc(email)
         .get()
         .then((result) => {
            if (result) {
               console.log(result.data());
               return result.data();
            }
            console.log("No  data");
            return false;
         });
   } catch (error) {
      console.log("Error readDataByUID : ", error);
   }
};