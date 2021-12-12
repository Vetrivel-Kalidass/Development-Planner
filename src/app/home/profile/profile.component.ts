import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, Subscription } from 'rxjs';
import { CommonService } from 'src/app/core/common.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  isDarkMode!: boolean;
  darkModeSubs$: Subscription;

  constructor(
    private _commonService: CommonService
  ) { 
    this.darkModeSubs$ = this._commonService.currentTheme.subscribe(theme => this.isDarkMode = theme.darkMode);
  }

  ngOnInit(): void {
  }

  toggleDarkMode() {
    this._commonService.toggleDarkMode();
  }

  ngOnDestroy(): void {
    this.darkModeSubs$.unsubscribe();
  }

}
