import { AppRoute } from 'utils/route/AppRoute';

export interface INavItem {
  linkTo: string;
  text: string;
}

export const navItems: INavItem[] = [
  {
    linkTo: AppRoute.Form1(),
    text: 'Form1',
  },
  {
    linkTo: AppRoute.Form2(),
    text: 'Form2',
  },
  {
    linkTo: AppRoute.Form3(),
    text: 'Form3',
  },
 ];
