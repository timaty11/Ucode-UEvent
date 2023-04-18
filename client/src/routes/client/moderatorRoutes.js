const clientPath = 'http://127.0.0.1:5173';

// Moderator control panel routes
export default {  
  fullMainPagePath: () => [clientPath, 'moder'].join('/'),
  mainPagePath: () => '/moder/',

};
