import "i18next";

declare module "i18next" {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

export type TranslationResource = {
  changeLanguage: string;
  temporary: {
    title: string;
    main: string;
    socials: string;
  };
  preview: {
    title: string;
    updated: string;
  };
  nav: {
    home: string;
    blog: string;
    about: string;
  };
  footer: {
    copyright: string;
    login: string;
    source: string;
  };
  login: {
    title: string;
    username: string;
    password: string;
    button: string;
  };
};
