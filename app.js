let bleConnectButton = document.querySelector('#bleConnectButton');
let relayOneButton = document.querySelector('#relayOneButton');
let relayTwoButton = document.querySelector('#relayTwoButton');

if (annyang){

var commands = {
  'connect': bleConnect
};

annyang.addCommands(commands);
annyang.start();

var bleConnect = function(){
  console.log('connect');
  /*  relayClick.connect()
    .then(() => console.log('connected'))
    .catch(error => { console.log('connect error!');
    });*/
}
// maintain these functions to allow button & oice control options
bleConnectButton.addEventListener('click', function(){
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
