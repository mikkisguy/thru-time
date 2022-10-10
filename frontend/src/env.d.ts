/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PREVIEW_SITE: boolean;
  readonly VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
