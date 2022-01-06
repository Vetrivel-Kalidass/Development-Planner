import { Toolbar } from "ngx-editor";
import { Theme } from "src/app/models";

export enum AppValues {
    darkMode = 'dark-mode',
    tasks = "tasks",
    tags = "tags",
    notes = "notes",
    edit = 'edit',
    create = 'create',
    delete = 'delete',
    defaultTagColor = '#344d3a',
};

export const vkYTheme: Theme = {
    id: 107,
    name: "VK-Y-Theme",
    primary: "",
    accent: "",
    darkMode: true
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