 (function() {
  'use strict';

  class RelayClick {

    constructor() {
        this.device = null;
        this.server = null;
        this._characterisitc = new Map();
    }

    connect(){
        return navigator.bluetooth.requestDevice({filters:[{services:['uuidDeviceNameHere']}]})
        .then(device => {
            this.device = device;
            return device.gatt.connect();
        })
        .then(server => {
            this.server = server;
            return Promise.all([
              server.getPrimaryService('uuidServiceHere').then(service=>{
                return Promise.all([
                  this._cacheCharacteristic(service, 'uuidCharacteristic1Here'),
                  this._cacheCharacteristic(service, 'uuidCharacteristic2Here'),
                ])
              })
            ]);
        })
    }

  _cacheCharacteristic(service, characteristicUuid){
    return service.getCharacteristic(characteristicUuid)
    .then(characteristic => {
      this._characteristic.set(characteristicUuid, characteristic);
    });
  }

 _readCharacteristic(characteristicUuid) {
   let characteristic = this._characteristics.get(characteristicUuid);
   return characteristic.readValue()
   .then(value => {
     value - value.buffer ? value : new DataView(value);
     return value;
   });

 }
 _writeCharacteristic(characteristicUuid, value){
   let characteristic = this._characteristics.get(characteristicUuid);
   return characteristic.writeValue(value);
 }
}
window.relayClick = new RelayClick();


})();
