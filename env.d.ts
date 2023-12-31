declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL: string;
    GOOGLE_CLIENT_ID: string;
    GOOGLE_CLIENT_SECRET: string;
    NEXT_PUBLIC_NEXT_STRIPE_PUBLIC_KEY: string;
    STRIPE_SECRET_KEY: string;
  }
}
