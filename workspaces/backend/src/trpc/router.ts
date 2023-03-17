import { router } from './builder';
import { healthcheck } from './routers/healthcheck';
import { userRouter } from './routers/user';

export const appRouter = router({
  healthcheck,
  users: userRouter,
});

export type AppRouter = typeof appRouter;
