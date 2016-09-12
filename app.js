let bleConnectButton = document.querySelector('#bleConnectButton');
let relayOneButton = document.querySelector('#relayOneButton');
let relayTwoButton = document.querySelector('#relayTwoButton');

if (annyang){
 
 
 /* unlikely to be able to use voice command to conenct to BLE do to web-bluetooth
  * security requirment of active click to gain acess.
  */
  
 /*
  var bleConnect = function(){ 
    console.log('by voice, connect'); 
    relayClick.connect()
      .then(() => console.log('connected'))
      .catch(error => { console.log('connect error!');
    });
  };
 */
  var relay = function(relayID) {
   if (relayID == 1){
    /* relayClick._writeCharacteristic(relayClick.characteristic1UUID, new Uint8Array([1]))
    .then(() => console.log('wrote 1'))
    .catch(error => {console.log('write 1 error');
    }); 
   } else if ( relayID == 2){
     relayClick._writeCharacteristic(relayClick.characteristic2UUID, new Uint8Array([2]))
    .then(() => console.log('wrote 2'))
    .catch(error => {console.log('write 2 error');
    });
   } */
   console.log( 'relayID' + relayID);
  };
  var commands = { 
    'relay 1': relay(1),
    'relay1': relay(1),
    'relay 2': relay(2),
    'relay 2': relay(2)
  };
  
  annyang.addCallback('resultMatch',function(userSaid,commandText,phrases){
    console.log(userSaid);
    console.log(commandText);
    console.log(phrases);
  });
  
  annyang.addCallback('resultNoMatch',function(phrases){
    console.log('no match');
    console.log(phrases);
  });
  annyang.debug();
  annyang.addCommands(commands);
  annyang.setLanguage('en');
  annyang.start();
};



// maintain these functions to allow button & voice control options
bleConnectButton.addEventListener('click', function(){
  console.log('by click, connect');
  relayClick.connect()
      .then(() => console.log('connected'))
      .catch(error => { console.log('connect error!');
    });
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
