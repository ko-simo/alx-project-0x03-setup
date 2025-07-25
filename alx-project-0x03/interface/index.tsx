export interface PageRouteProps {
  pageRoute: string;
}

export interface ButtonProps {
  buttonLabel: string;
  action: () => void;
  buttonBackgroundColor: string;
}

export interface LayoutProps {
  children: React.ReactNode;
}
