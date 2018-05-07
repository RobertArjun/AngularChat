// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAAJLf2dzc9DqQuda7WPerZ_vOP6BYBJ1k',
    authDomain: 'angular-chat-fca80.firebaseapp.com',
    databaseURL: 'https://angular-chat-fca80.firebaseio.com',
    projectId: 'angular-chat-fca80',
    storageBucket: 'angular-chat-fca80.appspot.com',
    messagingSenderId: '65609771970'
  }
};
