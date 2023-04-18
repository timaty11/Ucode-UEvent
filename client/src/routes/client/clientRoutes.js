const clientPath = 'http://127.0.0.1:5173';

export default {
  fullMainPagePath: () => clientPath,
  mainPagePath: () => '/',
  contact: () => '/contact',
  about: () => '/about',

  // Auth
  fullLoginPagePath: () => [clientPath, 'login'].join('/'),
  loginPagePath: () => '/login',

  fullRegisterPagePath: () => [clientPath, 'register'].join('/'),
  registerPagePath: () => '/register',

  fullPassResetPagePath: () => [clientPath, 'pass-reset'].join('/'),
  passResetPagePath: () => '/pass-reset',

  fullRulesPagePath: () => [clientPath, 'rules-user'].join('/'),
  rulesPagePath: () => '/rules-user',

  fullConfirmEmailPagePath: () => [clientPath, 'comfirm-email'].join('/'),
  confirmEmailPagePath: () => '/comfirm-email',

  fullPartnershipRegisterPagePath: () => [clientPath, 'comfirm-email'].join('/'),
  partnershipRegisterPagePath: () => '/partner-register',
  // Auth

  fullProfilePagePath: (userId) => [clientPath, 'user', userId].join('/'),
  profilePagePath: () => '/user/',

  fullUserTicketsPagePath: () => [clientPath, 'user', 'tickets'].join('/'),
  userTicketsPagePath: () => '/tickets',

  fullEventPagePath: (eventId) => [clientPath, 'event', eventId].join('/'),
  eventPagePath: (eventId) => '/event/' + eventId,

  // хуйня Vilsak для итемов. Я понимаю шо у вас его нет в бд.
  // fullLoginPagePath: () => [clientPath, 'item'].join('/'),
  // loginPagePath: () => '/item',

};
