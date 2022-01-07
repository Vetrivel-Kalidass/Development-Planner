import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from 'src/app/core/theme.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  isDarkMode!: boolean;
  darkModeSubs$: Subscription;

  constructor(
    private _themeService: ThemeService
  ) { 
    this.darkModeSubs$ = this._themeService.currentTheme.subscribe(theme => this.isDarkMode = theme ? theme.selectedTheme.darkMode : false);
  }

  ngOnInit(): void {
  }

  toggleDarkMode() {
    this._themeService.toggleDarkMode();
  }

  ngOnDestroy(): void {
    this.darkModeSubs$.unsubscribe();
  }

}
