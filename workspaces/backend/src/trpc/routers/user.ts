import { t } from '../builder';

export const userRouter = t.router({
  me: t.procedure.query((req) => {
    console.log({ req });
    return "hello, it's me";
  }),
});
