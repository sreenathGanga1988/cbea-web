import { Injectable } from '@angular/core';
import { UserInfo } from '../../models/Common/user-info.model ';

@Injectable({
  providedIn: 'root'
})
export class UserIdentityInfoService {
  private localStorageKey = 'userdata';
  constructor() { }
  getUserData(): UserInfo | null {
    const data = localStorage.getItem(this.localStorageKey);
    return data ? JSON.parse(data).value as UserInfo : null;
  }

  // // Save the user data to local storage
  // setUserData(data: { value: UserInfo }): void {
  //   localStorage.setItem(this.localStorageKey, JSON.stringify(data));
  // }

  // Get a specific value from user data
  getUserValue<K extends keyof UserInfo>(key: K): UserInfo[K] | null {
    const userData = this.getUserData();
    return userData ? userData[key] : null;
  }

  // Clear user data
  clearUserData(): void {
    localStorage.removeItem(this.localStorageKey);
  }
}

