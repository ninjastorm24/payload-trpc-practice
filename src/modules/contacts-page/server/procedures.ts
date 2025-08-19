import { baseProcedure, createTRPCRouter } from "@/trpc/init";

export const contactsRouter = createTRPCRouter({
  getMany: baseProcedure.query(async ({ ctx }) => {
    const data = await ctx.db.find({ collection: "contacts" });
    return data;
  }),
});
