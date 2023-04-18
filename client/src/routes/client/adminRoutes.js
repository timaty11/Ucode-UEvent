const clientPath = 'http://127.0.0.1:5173';

// Admin control panel routes
export default {
  // Main page
  fullMainPagePath: () => [clientPath, 'admin'].join('/'),
  mainPagePath: () => '/admin/',
  // Main page

  // Users
  fullUsersPagePath: () => [clientPath, 'admin', 'users'].join('/'),
  usersPagePath: () => '/admin/users',
  // Users

  // Roles
  fullRolesPagePath: () => [clientPath, 'admin', 'roles'].join('/'),
  rolesPagePath: () => '/admin/roles',
  // Roles

  // Events
  fullEventsPagePath: () => [clientPath, 'admin', 'events'].join('/'),
  eventsPagePath: () => '/admin/events',

  fullEventCreatePagePath: () => [clientPath, 'admin', 'events', 'create'].join('/'),
  eventCreatePagePath: () => ['admin', 'events', 'create'].join('/'),

  fullEventEditPagePath: (eventId) => [clientPath, 'admin', 'events', 'edit', eventId].join('/'),
  eventEditPagePath: (eventId) => ['admin', 'events', 'edit', eventId].join('/'),
  // Events

  // Categories
  fullCategoriesPagePath: () => [clientPath, 'admin', 'categories'].join('/'),
  categoriesPagePath: () => '/admin/categories',
  // Categories

  // Tickets
  fullTicketsPagePath: () => [clientPath, 'admin', 'tickets'].join('/'),
  ticketsPagePath: () => '/admin/tickets',
  // Tickets

  // Coupons
  fullCouponsPagePath: () => [clientPath, 'admin', 'coupons'].join('/'),
  couponsPagePath: () => '/admin/coupons',
  // Coupons

  // Organizations
  fullOrganizationsPagePath: () => [clientPath, 'admin', 'organizations'].join('/'),
  organizationsPagePath: () => '/admin/organizations',
  // Organizations

};
