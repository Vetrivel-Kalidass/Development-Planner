import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MainActionsMenuComponent } from '../main-actions-menu/main-actions-menu.component';

@Component({
  selector: 'app-mini-navbar',
  templateUrl: './mini-navbar.component.html',
  styleUrls: ['./mini-navbar.component.css']
})
export class MiniNavbarComponent implements OnInit {

  constructor(
    private _bottomSheet: MatBottomSheet
  ) {}

  openMainActionMenu(): void {
    this._bottomSheet.open(MainActionsMenuComponent);
  }

  ngOnInit(): void {
  }

}
