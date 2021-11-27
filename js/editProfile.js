const getForm = document.querySelector('#form');



const email = localStorage.getItem('email');


firebase.auth().onAuthStateChanged(function (user) {
    if (user) {




        getForm.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log(getForm.name.value);
            console.log(getForm.phone.value);
            console.log(getForm.detail.value);
            console.log(user.email);


            db.collection('users').doc(email).update({

                name: getForm.name.value,
                phone: getForm.phone.value,
                detail: getForm.detail.value

            });

            // if (user) {

            //     console.log(user);
            //     window.location.href = 'profile-blog.html';
            //   }

            alert('อัปเดทการเปลี่ยนแปลงแล้ว')
            return


        });






    }

});

function updateProfile() {

    // // Get comment
    image_profile = document.getElementById('image_profile').value;


    UploadProcess();

    console.log("create product post success");
}


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
async function UploadProcess() {
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


    // const UploadTask = uploadBytesResumable(storageRef, ImgToUpload, metaData);
    const UploadTask = storageRef.child("Profile/" + ImgName).put(metaData);

    UploadTask.on('state-changed', (snapshot) => {

    },
        (error) => {
            alert("Error : ไม่สามารถอัปโหลดรูปภาพได้");
            switch (error.code) {
                case 'storage/unauthorized':
                    console.log("Error : storage/unauthorized");
                    // User doesn't have permission to access the object
                    break;
                case 'storage/canceled':
                    console.log("Error : storage/canceled");
                    // User canceled the upload
                    break;

                // ...

                case 'storage/unknown':
                    console.log("Error : storage/unknown");
                    // Unknown error occurred, inspect error.serverResponse
                    break;
            }
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


        db.collection('users').doc(email).update({
            proName: (name + ext),
            profileURL: downloadURL,
            

        })
    }




}



// ฟังชัน ดักจับคัวอักษรแปลกๆ
function ValidateName() {
    var regex = /[\.#$\[\]]/
    return !(regex.test(nameimage.value));
}







//  if (dataPost == "imgPro") {

//     const UploadTask = storageRef.child("Products/" + ImgName).put(metaData);

//     UploadTask.on('state-changed', (snapshot) => {
//     },
//        (error) => {
//           alert("Error : ไม่สามารถอัปโหลดรูปภาพได้");
//        },
//        () => {
//           UploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
//              SaveURLtoFirestore(downloadURL);
//           });

//        }
//     );
//     //  ฟังชั่นของ firestorage databaes
//     async function SaveURLtoFirestore(downloadURL) {
//        var name = nameimage.value;
//        var ext = extlab.innerHTML;


//        db.collection('users').doc(email).update({

//           image_profile: getForm.image_profile.value,



//       });
//     }
//  }