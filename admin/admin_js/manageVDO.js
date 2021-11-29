



const postArticle = document.querySelector('#postArticle');


firebase.auth().onAuthStateChanged(function (user) {
    if (user) {

        const email = localStorage.getItem('email');

      



        db.collection('videos').get().then(vdo => {

            vdo.docs.forEach(doc => {
                // console.log(doc.data());
                // getVdo_name.innerHTML = doc.data().vdo_name;
                // getVdo_detail.innerHTML = doc.data().vdo_detail;

                // getVdo_url.setAttribute("src",doc.data().videoURL);
                // getVdo_url.setAttribute("width", "100%");
                // getVdo_url.setAttribute("height", "50%");
                // getVdo_url.setAttribute("alt", "The Pulpit Rock");



                var row =` 
                <tr>
                  <th scope="row"></th>
                    <td><video class="video-fluid z-depth-1" autoplay loop controls muted src="${doc.data().videoURL}" alt="" width="90px" height"90px"></td></video>
                  <td><span>${doc.data().vdo_name}</span></td>
                  <td><span>${doc.data().vdo_detail}</span></td>
                  <td><button class="btn btn-danger"><i class='bx bxs-coffee-togo' style='color:#ffffff'  ></i></button></td>
                </tr>
               
              `;
            $("#box").append(row)
                
            })


        })




    }
}
)


