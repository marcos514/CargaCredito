import { Component } from '@angular/core';

import { ZBar, ZBarOptions } from '@ionic-native/zbar/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  zbarOptions:any;
  scannedResult:any = 0;
 
  constructor(
    private zbar: ZBar
  ) {
 
    this.zbarOptions = {
      flash: 'off',
      drawSight: false
    }
 
  }
 
  scanCode(){
    this.zbar.scan(this.zbarOptions)
   .then(result => {
      let diez = this.scannedResult == 10;
      let cincuenta = this.scannedResult == 50;
      let sesenta = this.scannedResult == 60;
      let cien = this.scannedResult == 100;
      let cientocincuenta = this.scannedResult == 150;
      let cientosesenta = this.scannedResult == 160;
      if(result=='2786f4877b9091dcad7f35751bfcf5d5ea712b2f'){
        if(!cien && !cientocincuenta && !cientosesenta){
          this.scannedResult+=100;
        }
      }
      let ex:string = result;
      if(ex.includes('e4bcffaf9ce5b409f')){
        if(!cincuenta && !sesenta && !cientocincuenta && !cientosesenta){
          this.scannedResult+=50;
        }
        this.scannedResult+=  0;
      }
      if(result=='8c95def646b6127282ed50454b73240300dccabc'){
        if(!diez && !sesenta && ! cientosesenta){
          this.scannedResult+=10;
        }
      }
   })
   .catch(error => {
      alert(error); // Error message
   });
  }

  Borrar(){
    this.scannedResult = 0;
  }
}
