export const API_URL = import.meta.env.VITE_API_URL;

export const IS_PREVIEW_SITE = import.meta.env.VITE_PREVIEW_SITE || false;
export const UPDATED_ON = import.meta.env.VITE_UPDATED_ON;
export const LATEST_COMMIT_SHA = import.meta.env.VITE_LATEST_COMMIT_SHA;
export const IS_DEVELOPMENT = import.meta.env.DEV;

export enum TRANSLATIONS {
  FI = "fi-FI",
  EN = "en",
}
