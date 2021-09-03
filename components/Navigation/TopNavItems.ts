
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
    id: 'bundle',
    content: 'Bundles',
    accessibilityLabel: 'bundle',
    route: '/bundle',
  },
  {
    id: 'goals',
    content: 'Goals',
    accessibilityLabel: 'goals',
    route: '/goals',
  },
  {
    id: 'upsells',
    content: 'Upsells',
    accessibilityLabel: 'upsells',
    route: '/upsells',
  },
  {
    id: 'billing',
    content: 'Billing',
    accessibilityLabel: 'billing',
    route: '/billing',
  },
]

// paths that will not force propogation. 
export const excludeFromPropogation = ['/bundle']

export default TopNavItems
