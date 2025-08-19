import { baseProcedure, createTRPCRouter } from "@/trpc/init";

export const contactsRouter = createTRPCRouter({
  getMany: baseProcedure.query(async () => {
    return [
      { id: "1", name: "John Doe" },
      { id: "2", name: "Jane Doe" },
    ];
  }),
});
