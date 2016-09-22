/**
 * app.js connects index.html and relayClick.js together 
 * User activty is required for Web BLuetooth the make the connection
 */
let bleSwitch = document.querySelector('#bleSwitch');

/** All activity is conducted in the context of the annyang object.
 * voice recognition occurs on the web/cloud so must have an open
 * wifi connection for this to work.
 */
if (annyang){
 
  var relayOne = function(){
    console.log('relay One');
    relayClick._writeCharacteristic(relayClick.characteristic1UUID, new Uint8Array([1]))
   .then(() => console.log('wrote 1'))
   .catch(error => {console.log('write error');
   });
  };
  
  var relayTwo = function(){
   console.log('relay Two'); 
   relayClick._writeCharacteristic(relayClick.characteristic1UUID, new Uint8Array([2]))
   .then(() => console.log('wrote 2'))
   .catch(error => {console.log('write error');
   });
  };
  /**
   * Key value paris of voice commands, list can be expanded at will.
   */
  var commands = { 
    'relay 1': relayOne,
    'relay1': relayOne,
    'one': relayOne,
    '1': relayOne,
    'lamp': relayOne,
    'desklamp': relayOne,
    'desk lamp': relayOne,
    'relay 2': relayTwo,
    'relay2': relayTwo,
    'two': relayTwo,
    '2': relayTwo
  };
  
  // with annyang.debug below these call backs could be removed I think . . .
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

bleSwitch.addEventListener('click',function(){
  console.log('new switch click, connect');
  relayClick.connect()
      .then(() => console.log('connected'))
      .catch(error => { console.log('connect error!');
    });
});
