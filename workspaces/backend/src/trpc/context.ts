import { inferAsyncReturnType } from '@trpc/server';
import { CreateFastifyContextOptions } from '@trpc/server/adapters/fastify';
// import { HandlerEvent, HandlerContext } from '@netlify/functions';

// export function createContext(event: HandlerEvent, context: HandlerContext) {
//   console.log({ event, context });
//   return { event, context };
// }
//
// export type Context = inferAsyncReturnType<typeof createContext>;

export function createContext({ req }: CreateFastifyContextOptions) {
  const user = { name: req.headers.username ?? 'anonymous' };
  return { req, user };
}

export type Context = inferAsyncReturnType<typeof createContext>;
