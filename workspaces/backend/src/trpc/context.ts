import { inferAsyncReturnType } from '@trpc/server';
import { CreateNetlifyContextOptions } from 'trpc-netlify-functions';

export function createContext({ event: _event, context: _context }: CreateNetlifyContextOptions) {
  // empty context
  return {};
}

export type Context = inferAsyncReturnType<typeof createContext>;
