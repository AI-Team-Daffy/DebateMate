declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PINECONE_API_KEY: string;
    }
  }
}

export {};
