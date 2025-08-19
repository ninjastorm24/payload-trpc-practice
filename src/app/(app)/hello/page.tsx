import config from "@payload-config";
import { getPayload } from "payload";

const Page = async () => {
  const payload = await getPayload({
    config,
  });

  const data = await payload.find({
    collection: "users",
  });

  return <div>{JSON.stringify(data, null, 2)}</div>;
};

export default Page;
