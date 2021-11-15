
const getForm = document.querySelector('#form');






firebase.auth().onAuthStateChanged(function (user) {
    if (user) {




        getForm.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log(getForm.name.value);
            console.log(getForm.phone.value);
            console.log(getForm.detail.value);
            console.log(user.email);


            db.collection('users').doc(user.email).update({

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



