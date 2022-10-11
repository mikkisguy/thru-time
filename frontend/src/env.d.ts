/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PREVIEW_SITE: boolean;
  readonly VITE_API_URL: string;
  readonly VITE_UPDATED_ON: Date;
  readonly VITE_LATEST_COMMIT_SHA?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
