var firebaseConfig = {
  apiKey: "AIzaSyDI0fqKfsqsKUCpcnCEXsF9CadhIEJ7c9w",
  authDomain: "kwitter-86e49.firebaseapp.com",
  databaseURL: "https://kwitter-86e49-default-rtdb.firebaseio.com",
  projectId: "kwitter-86e49",
  storageBucket: "kwitter-86e49.appspot.com",
  messagingSenderId: "233501518300",
  appId: "1:233501518300:web:00084a4e77c8b7182f0719"
};

firebase.initializeApp(config);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " +user_name+ "!";

function addRoom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";

}

function getData() 
{
  firebase.database().ref("/").on('value', function(snapshot) 
  {document.getElementById("output").innerHTML = "";
  snapshot.forEach(function(childSnapshot) 
  {childKey  = childSnapshot.key;
   Room_names = childKey;
  console.log("Room name -" + Room_names);
  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
   document.getElementById("output").innerHTML += row;
  });});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}