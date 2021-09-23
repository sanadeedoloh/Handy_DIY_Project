// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBBy_jEVq6DkJ7Sa6sBiALGA1qEyLYL_fQ",
    authDomain: "diyworkshop-c67ec.firebaseapp.com",
    databaseURL: "https://diyworkshop-c67ec-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "diyworkshop-c67ec",
    storageBucket: "diyworkshop-c67ec.appspot.com",
    messagingSenderId: "607537332451",
    appId: "1:607537332451:web:0b8d073bfffac7f30f85d6",
    measurementId: "G-T8XWSP705V"
  };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

document.getElementById('file').addEventListener('change', (event) => {
    const file = event.target.files[0];
    const storageRef = firebase.storage().ref('images/' + file.name);

    storageRef.put(file).on('state_changed', (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
        const progressBar = document.getElementById('progress_bar');
        progressBar.value = progress;
    });

    storageRef.getDownloadURL().then(function(url){
        const image = document.getElementById('image');
        console.log(url);
        image.src = url
    });
});