import { createContext } from "react";

interface INavigationContext {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavigationContext = createContext<INavigationContext | null>(null);
