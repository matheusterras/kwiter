
//ADICIONE SEUS LINKS FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyDWBDUm2Y8O8UjKvU2o856Q11xCosnClmA",
  authDomain: "kwiter-41a28.firebaseapp.com",
  databaseURL: "https://kwiter-41a28-default-rtdb.firebaseio.com",
  projectId: "kwiter-41a28",
  storageBucket: "kwiter-41a28.appspot.com",
  messagingSenderId: "456761504741",
  appId: "1:456761504741:web:c06dff026604b9386ef50c"
};
firebase.initializeApp(firebaseConfig);

//armazena nome de usuario na memoria local
userName = localStorage.getItem("userName");

//da bem vindo ao nome que ta salvo na memoria
document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";


//função q add salas
function addRoom()
{
  //pega nome do html q o usuario escolheu
  roomName = document.getElementById("roomName").value;

  //passa o nome da sala p firebase
  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });

    //add o nome na memoria local
    localStorage.setItem("roomName", roomName);
    
    //mostra outra pag pro usuario
    window.location = "kwitterPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
      roomNames = childKey; //tem o nome de todas as salas salvas no firebase

      //pego os nomes das salas e jogo dentro de uma variavel
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      
      //exibe nome das salas no html
      document.getElementById("output").innerHTML += row;
    });
  });

}

//chamando a função 
getData();

//manda o usuario para a sala ao clicar no nome com #
function redirectToRoomName(name)
{
  localStorage.setItem("roomName", name);
  window.location = "kwitterPage.html";
}

//deslogar da minha conta
function logout() {
    localStorage.removeItem("userName"); //removo o usuario
    localStorage.removeItem("roomName"); //removo a sala
    window.location = "index.html"; //volto p tela inicial
}
