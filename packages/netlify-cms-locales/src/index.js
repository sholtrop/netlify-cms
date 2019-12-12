import moment from 'moment';

export { default as en } from './en';
export { default as de } from './de';
export { default as fr } from './fr';
export { default as es } from './es';
export { default as uk } from './uk';
export { default as nl } from './nl';
export { default as tr } from './tr';
export { default as pl } from './pl';
export { default as ru } from './ru';
export { default as ja } from './ja';

// importing a specific moment locale also sets it globally
// we default back to english as we want to configure moment per use case
moment.locale('en');
