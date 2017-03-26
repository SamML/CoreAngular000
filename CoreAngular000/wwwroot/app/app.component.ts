import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: '/home/index',
})
export class AppComponent  {
    message = 'Hola amigo';
    nombre = 'Samuel Maícas';

    evName(inputname: string) {
        this.nombre = inputname;
    }
    evMessage(inputmessage: string) {
        this.message = inputmessage;
    }
    
}
