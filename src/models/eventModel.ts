export interface TEvent {
  title: string;
  date: string;    // YYYY-MM-DD
  time: string;    // HH:MM
  notes?: string;
  archived: boolean;
  category: "Work" | "Personal" | "Other";
}
