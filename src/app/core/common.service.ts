import { OverlayContainer } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Theme } from '../models';
import { AppValues, vkYTheme } from '../shared/data';

@Injectable()
export class CommonService {

  private _currentTheme: BehaviorSubject<Theme> = new BehaviorSubject(vkYTheme);

  constructor(
    private _overlay: OverlayContainer
  ) { 
    this.applyTheme(this._currentTheme.value);
  }
  
  get currentTheme(): Observable<Theme> {
    return this._currentTheme;
  }

  applyTheme(theme: Theme) {
    const bodyEle = document.querySelector("body");
    if (theme.darkMode) {
      bodyEle?.classList.add(AppValues.darkMode);
      this._overlay.getContainerElement().classList.add(AppValues.darkMode);
    }
    else {
      bodyEle?.classList.remove(AppValues.darkMode);
      this._overlay.getContainerElement().classList.remove(AppValues.darkMode);
    }
  }

  toggleDarkMode(): void {
    const toggledTheme: Theme = { 
      ...this._currentTheme.value, 
      darkMode: !this._currentTheme.value.darkMode
    };
    this.applyTheme(toggledTheme);
    this._currentTheme.next(toggledTheme);
  }

}
