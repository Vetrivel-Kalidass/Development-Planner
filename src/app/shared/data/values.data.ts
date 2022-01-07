import { Toolbar } from "ngx-editor";
import { ThemeData } from "src/app/models";

export enum AppValues {
    darkMode = 'dark-mode',
    tasks = "tasks",
    tags = "tags",
    notes = "notes",
    themes = "themes",
    edit = 'edit',
    create = 'create',
    delete = 'delete',
    defaultTagColor = '#344d3a',
};

export const DP_THEMES: ThemeData = {
  selectedTheme: {
    name: 'Golden',
    keyValue: 'golden-theme',
    primary: '#FFDE59',
    accent: '#323232',
    darkMode: false
  },
  availableThemes: [
    {
      name: 'Golden',
      keyValue: 'golden-theme',
      primary: '#FFDE59',
      accent: '#323232',
      darkMode: false
    },
    {
        name: 'Purple-Amber',
        keyValue: 'purple-amber-theme',
        primary: '#673ab7',
        accent: '#ffc107',
        darkMode: false
    },
    {
        name: 'Amber-Indigo',
        keyValue: 'amber-indigo-theme',
        primary: '#ffc107',
        accent: '#3f51b5',
        darkMode: false
    },
  ]
}

export const TEXT_EDITOR_CONFIG: Toolbar = [
    ["bold", "italic"],
    ["underline", "strike"],
    ["code", "blockquote"],
    ["ordered_list", "bullet_list"],
    [{ heading: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
    ["link", "image"],
    ["text_color", "background_color"],
    ["align_left", "align_center", "align_right", "align_justify"]
  ];