import { router, publicProcedure } from '../builder';

export const userRouter = router({
  me: publicProcedure.query((_req) => "hello, it's me"),
});
