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
};
