export const AppRoute = {
  Home: (): string => '/',
  NotFound: (): string => '/not-found',
  Form1: (): string => '/form1',
  Form2: (): string => '/form2',
  Form3: (): string => '/form3',
} as const;