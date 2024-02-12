import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import * as React from 'react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';

declare const NavigationMenu: React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<unknown>>;
declare const NavigationMenuList: React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<unknown>>;
declare const NavigationMenuItem: React.ForwardRefExoticComponent<NavigationMenuPrimitive.NavigationMenuItemProps & React.RefAttributes<HTMLLIElement>>;
declare const navigationMenuTriggerStyle: (props?: class_variance_authority_dist_types.ClassProp | undefined) => string;
declare const NavigationMenuTrigger: React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<unknown>>;
declare const NavigationMenuContent: React.ForwardRefExoticComponent<Omit<Omit<NavigationMenuPrimitive.NavigationMenuContentProps & React.RefAttributes<HTMLDivElement>, "ref">, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const NavigationMenuLink: React.ForwardRefExoticComponent<NavigationMenuPrimitive.NavigationMenuLinkProps & React.RefAttributes<HTMLAnchorElement>>;
declare const NavigationMenuViewport: React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<unknown>>;
declare const NavigationMenuIndicator: React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<unknown>>;

export { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport, navigationMenuTriggerStyle };
