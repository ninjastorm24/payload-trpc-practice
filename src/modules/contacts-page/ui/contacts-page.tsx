import ContactsHeader from "../views/contacts-header";
import ContactsList from "../views/contacts-list";
import ContactSearchBar from "../views/search-bar";

export default function ContactsPage() {
  return (
    <div className="space-y-8">
      <ContactsHeader />
      <ContactSearchBar />

      <ContactsList />
    </div>
  );
}
