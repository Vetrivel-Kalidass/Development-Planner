import { Component } from '@angular/core';
import { TinyColor } from '@ctrl/tinycolor';

// declare const tinycolor: any;

export interface Color {
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
  title = 'pwa-app';

  primaryColor = '#bb0000';
  accentColor = '#0000aa';
  primaryColorPalette: Color[] = [];
  accentColorPalette: Color[] = [];

  constructor() {
    this.savePrimaryColor();
    this.saveAccentColor();
  }

  savePrimaryColor() {
    this.primaryColorPalette = computeColors(this.primaryColor);
    updateTheme(this.primaryColorPalette, 'primary');
  }

  saveAccentColor() {
    this.accentColorPalette = computeColors(this.accentColor);
    updateTheme(this.accentColorPalette, 'accent');
  }
}

function updateTheme(colors: Color[], theme: string) {
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

function computeColors(hex: string): Color[] {
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

function getColorObject(value: any, name: any): Color {
  const c = new TinyColor(value);
  return {
    name: name,
    hex: c.toHexString(),
    darkContrast: c.isLight()
  };
}