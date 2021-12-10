//profile
// const getSearch = document.querySelector('#search');


function searchF(){
    // location.reload();
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {


        // getSearch.setAttribute('value',getSearch);

        getSearch = document.querySelector('#search').value;

        const consumable = "consumables"
       


console.log("log");
        

        db.collection('videos').get().then(vdo => {

            vdo.docs.forEach(doc => {

                var row;
                
                const valueNameVdo = doc.data().vdo_name;
                

                console.log(doc.data().vdo_name);

                if (valueNameVdo.toLowerCase().indexOf(getSearch) > -1) {

                    var row = `<div class="col-md-4 col-sm-4" >
                    <div class="wrimagecard wrimagecard-topimage">
                        <a href="video_content.html" id="viewVDO">
                            <div class="card">
                                <video class="video-fluid" autoplay loop controls muted src="${doc.data().videoURL}"
                                type="video/mp4" >
                                   
                                </video>
                    
                            </div>
                            <div class="wrimagecard">
                                <div class="card-body">
                                    <span class="card-title" >${doc.data().vdo_name}</span><br>
                                    
                                </div>
                            </div>
                        </a>
                    </div>
                    </div>`;
                    $("#box").append(row)
                    

                }
                // if (getSearch != doc.data().article_name) {

                //     row = `<div  >
                //     <h1>หาไม่เจอ</h1>
                //     </div>`;
                //     $("#box").append(row)
                    
        
                // }


            })

        
        })


        db.collection('articles').get().then(article => {

            article.docs.forEach(doc => {

                var row;
                const valueNameAtc = doc.data().article_name;

                if (valueNameAtc.toLowerCase().indexOf(getSearch) > -1) {

                    row = `<div class="col-md-4 col-sm-4" >
                    <div class="wrimagecard wrimagecard-topimage">
                        <a href="video_content.html" id="viewVDO">
                            <div class="card">
                            <img src="${doc.data().imageURL}"
                            class="card-img-top" >
                    
                            </div>
                            <div class="wrimagecard">
                                <div class="card-body">
                                    <span class="card-title" >${doc.data().article_name}</span><br>
                                    
                                </div>
                            </div>
                        </a>
                    </div>
                    </div>`;
                    $("#box").append(row)
                    


                }
                


            })

        
        })



        




















    }
}
)

}

