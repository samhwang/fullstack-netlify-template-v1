import { router, publicProcedure } from '../builder';

export const healthcheck = router({
  info: publicProcedure.query(() =>
    JSON.stringify({
      ok: true,
    })
  ),
});
