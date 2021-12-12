import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding } from '@angular/core';
import { TinyColor } from '@ctrl/tinycolor';
import { AppValues } from './shared/data';

interface ColorItem {
  name: string;
  hex: string;
  darkContrast: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @HostBinding() className: string = '';
  title = 'development-planner';

  primaryColor = '#FFDE59';
  accentColor = '#323232';
  primaryColorPalette: ColorItem[] = [];
  accentColorPalette: ColorItem[] = [];

  constructor(
    private _overlay: OverlayContainer
  ) {
    this.savePrimaryColor();
    this.saveAccentColor();
    
    window.addEventListener("scroll", () => {
      const header = document.querySelector("mat-toolbar.top-bar");
      header?.classList.toggle("shrink", (window.scrollY !== 0));
    });
  }

  savePrimaryColor() {
    this.primaryColorPalette = computeColors(this.primaryColor);
    updateTheme(this.primaryColorPalette, 'primary');
  }

  saveAccentColor() {
    this.accentColorPalette = computeColors(this.accentColor);
    updateTheme(this.accentColorPalette, 'accent');
  }

  toggleDarkMode() {
    this.className = this.className.includes(AppValues.darkMode) ? '' : AppValues.darkMode;
    this._overlay.getContainerElement().classList.toggle(AppValues.darkMode);
  }

}

function updateTheme(colors: ColorItem[], theme: string) {
  colors.forEach(color => {
      document.documentElement.style.setProperty(
        `--theme-${theme}-${color.name}`,
        color.hex
      );
      document.documentElement.style.setProperty(
        `--theme-${theme}-contrast-${color.name}`,
        color.darkContrast ? 'rgba(black, 0.87)' : 'white'
      );
    });
}

function computeColors(hex: string): ColorItem[] {
  return [
    getColorObject(new TinyColor(hex).lighten(52), '50'),
    getColorObject(new TinyColor(hex).lighten(37), '100'),
    getColorObject(new TinyColor(hex).lighten(26), '200'),
    getColorObject(new TinyColor(hex).lighten(12), '300'),
    getColorObject(new TinyColor(hex).lighten(6), '400'),
    getColorObject(new TinyColor(hex), '500'),
    getColorObject(new TinyColor(hex).darken(6), '600'),
    getColorObject(new TinyColor(hex).darken(12), '700'),
    getColorObject(new TinyColor(hex).darken(18), '800'),
    getColorObject(new TinyColor(hex).darken(24), '900'),
    getColorObject(new TinyColor(hex).lighten(50).saturate(30), 'A100'),
    getColorObject(new TinyColor(hex).lighten(30).saturate(30), 'A200'),
    getColorObject(new TinyColor(hex).lighten(10).saturate(15), 'A400'),
    getColorObject(new TinyColor(hex).lighten(5).saturate(5), 'A700')
  ];
}

function getColorObject(value: any, name: any): ColorItem {
  const c = new TinyColor(value);
  return {
    name: name,
    hex: c.toHexString(),
    darkContrast: c.isLight()
  };
}