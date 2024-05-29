import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  showSuccess(message :string, title: string){
      alert(message)
  }

  showError(message :string, title: string){
    alert(message)
}

  showInfo(message :string, title: string){
    alert(message)
}

  showWarning(message :string, title: string){
      alert(message)
  }
}
