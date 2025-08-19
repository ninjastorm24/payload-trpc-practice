import type { CollectionConfig } from "payload";

export const contacts: CollectionConfig = {
  slug: "contacts",

  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "email",
      type: "email",
      required: true,
    },
    {
      name: "phone",
      required: true,
      type: "text",
    },
    {
      name: "company",
      type: "text",
      required: false,
    },
    {
      name: "notes",
      type: "text",
      required: false,
    },
  ],
};
