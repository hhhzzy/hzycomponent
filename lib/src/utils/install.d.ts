import { App, Plugin } from 'vue';
import { SFCWithInstall } from './typescript.js';
export declare const withInstall: <T, E extends Record<string, any>>(main: T, extra?: E) => SFCWithInstall<T> & E;
export declare const makeInstaller: (components?: Plugin[]) => {
    install: (app: App) => void;
};
