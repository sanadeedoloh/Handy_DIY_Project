
const getVideo_name = document.querySelector('#vdo_name');
const getVideo_detail = document.querySelector('#vdo_detail');


const email = localStorage.getItem('email');

var dataPost;

// create vdo
function createVdoPost() {

   dataPost = "video";
   // Get vdo

   vdo_name = document.getElementById('vdo_name').value;
   vdo_detail = document.getElementById('vdo_detail').value;


   UploadProcess(dataPost);
   console.log("create video post success");



}


// create article
function createArticlePost() {

   dataPost = "image";
   // // Get article

   article_name = document.getElementById('article_name').value;
   article_detail = document.getElementById('article_detail').value;


   UploadProcess(dataPost);
   console.log("create article post success");




}




// create product
function createProductPost() {

   dataPost = "product";
   // // Get product

   pd_name = document.getElementById('pd_name').value;
   pd_detail = document.getElementById('pd_detail').value;
   facebook = document.getElementById('facebook').value;
   shop_link = document.getElementById('shop_link').value;


   UploadProcess(dataPost);

   console.log("create product post success");


}

// create comment
function createCommentPost() {
   dataPost = 4;
   // // Get comment
   comment_detail = document.getElementById('comment_detail').value;


   db.collection("comments").doc().set({
      comment_detail: document.getElementById('comment_detail').value,
      userId: email,
   });
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








var files = [];
var reader = new FileReader();

//ตัวแปรรูปภาพ
var nameimage = document.getElementById('nameimage')
var extlab = document.getElementById('extlab')
var myimage = document.getElementById('myimage')
var proglab = document.getElementById('upprogress')
var Selbtn = document.getElementById('selbtn')
var Upbtn = document.getElementById('upbtn')
var Downbtn = document.getElementById('down')

const storage = firebase.storage();

// const storageRef = sRef(storage, "Images/" + ImgName);
const storageRef = storage.ref();

var input = document.createElement('input')
input.type = 'file';

input.onchange = e => {
   files = e.target.files;

   var extention = GetFileExt(files[0]);
   var name = GetFileName(files[0]);

   nameimage.value = name;
   extlab.innerHTML = extention;

   reader.readAsDataURL(files[0]);

}
reader.onload = function () {
   myimage.src = reader.result;
}
// ฟังชั่นเลือกรูป และเปลี่ยนนามสกุุลไฟล์

Selbtn.onclick = function () {
   event.preventDefault();
   input.click();
}
function GetFileExt(file) {
   var temp = file.name.split('.');
   var ext = temp.slice((temp.length - 1), (temp.length));
   return '.' + ext[0]
}
function GetFileName(file) {
   var temp = file.name.split('.');
   var fname = temp.slice(0, -1).join('.');
   return fname;
}



// ฟังก์ชั่นโหลดรูปภาพ วิดีโอ สินค้า
async function UploadProcess(imgVdo) {
   var ImgToUpload = files[0];

   var ImgName = nameimage.value + extlab.innerHTML;

   if (!ValidateName()) {
      alert('ชื่อไฟล์ไม่สามารถใช้ " . "," # "," $ "," [", or "] " ');
      return;
   }
   const metaData = {
      contentType: ImgToUpload.type
   }

   // เก็บข้อมูลรูปภาพ
   if (dataPost == "image") {

      // const UploadTask = uploadBytesResumable(storageRef, ImgToUpload, metaData);
      const UploadTask = storageRef.child("Images/" + ImgName).put(metaData);

      UploadTask.on('state-changed', (snapshot) => {
        
      },
         (error) => {
            alert("Error : ไม่สามารถอัปโหลดรูปภาพได้");
         },
         () => {
            UploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
               SaveURLtoFirestore(downloadURL);
            });

         }
      );
      //  ฟังชั่นของ firestorage databaes
      async function SaveURLtoFirestore(downloadURL) {
         var name = nameimage.value;
         var ext = extlab.innerHTML;


         db.collection("articles").doc().set({

            imageName: (name + ext),
            imageURL: downloadURL,
            userId: email,
            article_name: document.getElementById('article_name').value,
            article_detail: document.getElementById('article_detail').value,


         })
      }
   }

   // เก็บข้อมูลวิดีโอ
   if (dataPost == "video") {

      const UploadTask = storageRef.child("Videos/" + ImgName).put(metaData);

      UploadTask.on('state-changed', (snapshot) => {
      },
         (error) => {
            alert("Error : ไม่สามารถอัปโหลดรูปภาพได้");
         },
         () => {
            UploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
               SaveURLtoFirestore(downloadURL);
            });

         }
      );
      //  ฟังชั่นของ firestorage databaes
      async function SaveURLtoFirestore(downloadURL) {
         var name = nameimage.value;
         var ext = extlab.innerHTML;


         db.collection("videos").doc().set({

            videoName: (name + ext),
            videoURL: downloadURL,
            vdo_name: document.getElementById('vdo_name').value,
            vdo_detail: document.getElementById('vdo_detail').value,
            userId: email,


         })
      }
   }

   // เก็บข้อมูลสินค้า
   if (dataPost == "product") {

      const UploadTask = storageRef.child("Products/" + ImgName).put(metaData);

      UploadTask.on('state-changed', (snapshot) => {
      },
         (error) => {
            alert("Error : ไม่สามารถอัปโหลดรูปภาพได้");
         },
         () => {
            UploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
               SaveURLtoFirestore(downloadURL);
            });

         }
      );
      //  ฟังชั่นของ firestorage databaes
      async function SaveURLtoFirestore(downloadURL) {
         var name = nameimage.value;
         var ext = extlab.innerHTML;


         db.collection("products").doc().set({

            productName: (name + ext),
            productURL: downloadURL,
            pd_name: document.getElementById('pd_name').value,
            pd_detail: document.getElementById('pd_detail').value,
            facebook: document.getElementById('facebook').value,
            shop_link: document.getElementById('shop_link').value,
            userId: email,


         })
      }
   }
}







// ฟังชัน ดักจับคัวอักษรแปลกๆ
function ValidateName() {
   var regex = /[\.#$\[\]]/
   return !(regex.test(nameimage.value));
}

//  ฟังชั่นกดปุ่ม
// Upbtn.onclick = UploadProcess;

//          Downbtn.onclick = GetUrlfromRealtimeDB;








