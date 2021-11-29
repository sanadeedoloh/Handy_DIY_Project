


firebase.auth().onAuthStateChanged(function (user) {
    if (user) {

        const email = localStorage.getItem('email');

      



        db.collection('articles').get().then(article => {

            article.docs.forEach(doc => {
           
                var row =` 
                <tr id="data-id">
                  <th scope="row">1</th>
                    <td><img src="${doc.data().imageURL}" width="80px" height"80px" ></td>
                  <td><span>${doc.data().article_name}</span></td>
                  <td><span>${doc.data().article_detail}</span></td>
                  <td><p type="submit" class="btn btn-danger" >submit<i class='bx bxs-coffee-togo' style='color:#ffffff'  ></i></p></td>
                </tr>
               
              `;
            $("#box").append(row)
                
            })


        })
        
        $( "p" ).click(function() {
            $( this ). db.collection('articles').doc().delete({

                // name: getdata.name.value,
                // phone: getdata.phone.value,
                // detail: getdata.detail.value

            });
          });
       

        function myFunctionq(){
           console.log("uuuuu");
           
            db.collection('articles').doc().delete({

                // name: getdata.name.value,
                // phone: getdata.phone.value,
                // detail: getdata.detail.value

            });

           

            // alert('ลบข้อมูลเรียบร้อย')
            return


        }




    }
}
)


