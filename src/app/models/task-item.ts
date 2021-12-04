export interface TaskItem {
    id?: number;
    title: string;
    description?: string;
    completed: boolean;
    date: string;
    taskTypes?: 'checkList' | 'para';
    checkList?: string[];
    tagId?: number;
    createdAt?: string;
}
// OLD
// export interface TaskItem {
//   id?: number;
//   title: string;
//   description?: string;
//   date: string;
//   completed: boolean;
// }

export interface NoteItem {
    id?: number;
    title?: string;
    description: string;
    tagId: number;
    checkList?: string[];
    createdAt: string;
}

export interface TagItem {
    id?: number;
    title: string;
    description?: string;
    color: string;
}

export interface AccountData {
    id?: number;
    name: string;
    about?: string;
    profilePhoto?: string;
    themeId?: number;
}

export interface ThemeItem {
    id: number;
    name: string;
    primary: string;
    secondary: string;
    darkMode: boolean;
}