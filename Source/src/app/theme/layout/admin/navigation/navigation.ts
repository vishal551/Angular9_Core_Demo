import { Injectable } from "@angular/core";

export interface NavigationItem {
  id: string;
  title: string;
  type: "item" | "collapse" | "group";
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: "other",
    title: "Admin",
    type: "group",
    icon: "feather icon-align-left",
    children: [
      {
        id: "customer-detail",
        title: "Customer Detail",
        type: "item",
        url: "/customer-detail",
        classes: "nav-item",
        icon: "feather icon-sidebar",
      },
      {
        id: "add-edit-customer-detail",
        title: "Add Edit Customer Detail",
        type: "item",
        url: "/customer-detail/add-edit-customer-detail",
        classes: "nav-item",
        icon: "feather icon-sidebar",
        hidden: true,
      },
      {
        id: "menu-level",
        title: "Menu Levels",
        type: "collapse",
        icon: "feather icon-menu",
        children: [
          {
            id: "menu-level-2.1",
            title: "Menu Level 2.1",
            type: "item",
            url: "javascript:",
            external: true,
          },
          {
            id: "menu-level-2.2",
            title: "Menu Level 2.2",
            type: "collapse",
            children: [
              {
                id: "menu-level-2.2.1",
                title: "Menu Level 2.2.1",
                type: "item",
                url: "javascript:",
                external: true,
              },
              {
                id: "menu-level-2.2.2",
                title: "Menu Level 2.2.2",
                type: "item",
                url: "javascript:",
                external: true,
              },
            ],
          },
        ],
      },
    ],
  },
];

@Injectable()
export class NavigationItem {
  public get() {
    return NavigationItems;
  }
}
