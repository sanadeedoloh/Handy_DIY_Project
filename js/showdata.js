

const getName = document.querySelector('#name');
const getEmail = document.querySelector('#email');
const getForm = document.querySelector('#form');

const getPhone = document.querySelector('#phone');
const getDetail = document.querySelector('#detail');




firebase.auth().onAuthStateChanged(function (user) {
    if (user) {


        db.collection('users').get().then((snapshot) => {
            snapshot.forEach(doc => {
                showdata(doc)
            });

        })

     


        function showdata(doc) {

            
            const email = localStorage.getItem('email');
            if (email == doc.data().email) {

                console.log(doc.data().name);
                getName.innerHTML = doc.data().name;
                getEmail.innerHTML = doc.data().email;
                getPhone.innerHTML = doc.data().phone;
                getDetail.innerHTML = doc.data().detail;

            } else {
                console.log("faile");
            }

           
            
        }

    } else {

    }
}
)



firebase.auth().onAuthStateChanged(function (user) {
   if (user) {


      db.collection('videos').get().then((snapshot) => {
         snapshot.forEach(doc => {
            showdata(doc)
         });

      })




      function showdata(doc) {


         const email = localStorage.getItem('email');
         if (email == doc.data().email) {

            console.log(doc.data().vdo_name);
            console.log(doc.data().vdo_detail);
            getVideo_name.innerHTML = doc.data().vdo_name;
            getVideo_detail.innerHTML = doc.data().vdo_detail;

        

         } else {
            console.log("faile");
         }



      }

   } else {

   }
}
)