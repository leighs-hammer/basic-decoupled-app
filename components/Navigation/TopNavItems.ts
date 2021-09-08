
export interface TopNavItem {
  id: string;
  content: string;
  accessibilityLabel: string;
  route: string;
}


export const TopNavItems: TopNavItem[] = [
  {
    id: 'dashboard',
    content: 'Dashboard',
    accessibilityLabel: 'Dashboard',
    route: '/',
  },
  {
    id: 'server',
    content: 'Server Side',
    accessibilityLabel: 'server',
    route: '/server',
  },
  {
    id: 'static',
    content: 'Static',
    accessibilityLabel: 'Static',
    route: '/static',
  },
  {
    id: 'polling',
    content: 'Polling',
    accessibilityLabel: 'Polling',
    route: '/polling',
  },
  {
    id: 'products',
    content: 'products',
    accessibilityLabel: 'products',
    route: '/products',
  },
]

// paths that will not force propogation. 
export const excludeFromPropogation = ['/bundle']

export default TopNavItems
