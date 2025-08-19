import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import ContactsHeader from "../views/contacts-header";
import ContactsList from "../views/contacts-list";
import ContactSearchBar from "../views/search-bar";

export default function ContactsPage() {
  console.log(" this is rendering on server side");
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.contacts.getMany.queryOptions());
  return (
    <div className="space-y-8">
      <ContactsHeader />
      <ContactSearchBar />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ContactsList />
      </HydrationBoundary>
    </div>
  );
}
