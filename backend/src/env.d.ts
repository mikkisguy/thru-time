declare namespace NodeJS {
  export interface ProcessEnv {
    EXPRESS_PORT: string;
    SSL_CERT_PATH: string;
    SSL_KEY_PATH: string;
    POSTGRES_HOST: string;
    POSTGRES_USER: string;
    POSTGRES_PASSWORD: string;
    POSTGRES_DB: string;
    POSTGRES_PORT: string;
    SEED_DATA_USER: string;
    SEED_DATA_PASSWORD: string;
    SEED_DATA_EMAIL: string;
  }
}
