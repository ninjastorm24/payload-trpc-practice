import { contactsRouter } from "@/modules/contacts-page/server/procedures";
import { createTRPCRouter } from "../init";
export const appRouter = createTRPCRouter({
  contacts: contactsRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
