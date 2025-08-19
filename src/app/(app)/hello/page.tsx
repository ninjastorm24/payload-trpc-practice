import { caller } from "@/trpc/server";

const Page = async () => {
  const data = await caller.contacts.getMany();
  return <div>{JSON.stringify(data, null, 2)}</div>;
};

export default Page;
