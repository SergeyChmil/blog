// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --types=prod` then `environment.prod.ts` will be used instead.
// The list of which types maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  dataURL: 'http://localhost:8000/api/',
  menuKey: 'regions/',
  notesKey: 'posts/',
  cityKey:'cities/',
  iconsImageKey: 'assets/images/icons/',
  commentsKey: 'comments',
  appImagesURL: '../../../assets/images/notes_illustrations/',
  userImagesURL: '',
  pngKey: '.png'
};
