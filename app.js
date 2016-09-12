let bleConnectButton = document.querySelector('#bleConnectButton');
let relayOneButton = document.querySelector('#relayOneButton');
let relayTwoButton = document.querySelector('#relayTwoButton');

if (annyang){
  var commands = { 'connect': bleConnect };
  
  annyang.addCommands(commands);
  
  annyang.addCallback('resultMatch',function(userSaid,commandText,phrases){
    console.log(userSaid);
    console.log(commandText);
    console.log(phrases);
  });
  
  annyang.addCallback('resultNoMatch',function(phrases){
    console.log('no match');
    console.log(phrases);
  });
  annyang.start();
};

var bleConnect = function(){
  console.log('by voice, connect');
  /*  relayClick.connect()
    .then(() => console.log('connected'))
    .catch(error => { console.log('connect error!');
    });*/
}
// maintain these functions to allow button & oice control options
bleConnectButton.addEventListener('click', function(){
  console.log('by click, connecy');
  bleConnect()
});

relayOneButton.addEventListener('click', function(){
  relayClick._writeCharacteristic(relayClick.characteristic1UUID, new Uint8Array([1]))
  .then(() => console.log('wrote 1'))
  .catch(error => {console.log('write error');
  });
});

relayTwoButton.addEventListener('click', function(){
  relayClick._writeCharacteristic(relayClick.characteristic1UUID, new Uint8Array([2]))
  .then(() => console.log('wrote 2'))
  .catch(error => {console.log('write error');
  });
});
