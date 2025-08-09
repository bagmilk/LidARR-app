// This file defines the TypeScript types for the data in wireframe.json

export interface UIComponent {
  id: string;
  type: string;
  col?: number;
  span?: number;
  y?: number;
  text?: string;
  label?: string;
  variant?: string;
  icon?: string;
  action?: string;
  items?: any;
  [key: string]: any; // Allow any other properties
}

export interface Screen {
  id: string;
  route: string;
  title: string;
  purpose: string;
  layout?: {
    container: string;
    grid: number;
  };
  components: UIComponent[];
  states: Record<string, any>;
  transitions?: Record<string, any>;
}
