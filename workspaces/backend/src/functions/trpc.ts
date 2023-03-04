import { createContext } from '../trpc/context';
import { appRouter } from '../trpc/router';
import { netlifyTRPCHandler } from '../trpc/netlify-functions-adapter';

export const handler = netlifyTRPCHandler({
  router: appRouter,
  createContext,
});
