const firebaseConfig = {
    apiKey: "AIzaSyB5LoFZffpe_hAb9mJR0LYH5e_YcW65LaE",
    authDomain: "multipageapplication.firebaseapp.com",
    databaseURL: "https://multipageapplication-default-rtdb.firebaseio.com",
    projectId: "multipageapplication",
    storageBucket: "multipageapplication.appspot.com",
    messagingSenderId: "544324576644",
    appId: "1:544324576644:web:506b3832e76f39f62ba9d1",
    measurementId: "G-SMW26R3MXK"
  };
  
  // Initialize Firebase


 firebase.initializeApp(firebaseConfig); 

 user_name = localStorage.getItem("name of the user")
 room_name = localStorage.getItem("room_name")

 function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0,
    });

    document.getElementById("msg").value = "";

 };

 
function getData() {
    firebase.database().ref("/" + room_name)
    .on("value",function(snapshot){
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childkey = childSnapshot.key;
            childData = childSnapshot.val();
            if ( childkey !== "purpose") {
                firebase_message_id = childkey;
                message_data = childData;
                // start actual code 


                console.log(firebase_message_id);
                console.log(message_data);
                name1 = message_data["name"];
                message = message_data["message"];
                like = message_data["like"];


                name_tag = "<h4>  " + name1 + "<img class = 'use_click' src='tick.png'> </h4>" ;
                message_tag = "<h4 class='message_h4'>" + message + "</h4>" ;
                like_button = "<button class='btn btn-warning'  id=" + firebase_message_id + " value = " + like + " onclick = 'updatelike(this.id)'>";
                span_with_tag = "<span class = 'glyphicon glyphicon-thums-up'> Like: " + like + "</span></button> <hr>";

                row = name_tag + message_tag + like_button + span_with_tag ;
                document.getElementById("output").innerHTML += row ;
            }
        });
    });
};