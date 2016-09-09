let bleConnectButton = document.querySelector('#bleConnectButton');
let relayOneButton = document.querySelector('#relayOneButton');
let relayTwoButton = document.querySelector('#relayTwoButton');

bleConnectButton.addEventListener('click', function(){
  relayClick.connect()
  .then(() => console.log('connected'))
  .catch(error => { console.log('connect error!');
  });
});

relayOneButton.addEventListener('click', function(){
  relayClick._writeCharacteristic('uuidCharacteristicHere', new Uint8Array([1]))
  .then(() => console.log('wrote 1'))
  .catch(error => {console.log('write error');
  });
});

relayTwoButton.addEventListener('click', function(){
  relayClick._writeCharacteristic('uuidCharacteristicHere', new Uint8Array([2]))
  .then(() => console.log('wrote 2'))
  .catch(error => {console.log('write error');
  });
});
