import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

const ContactsHeader = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold">Contacts</h1>
        <p className="text-muted-foreground">
          Manage and organize your contact list
        </p>
      </div>
      <Button asChild className="gap-2">
        <Link href="/contacts/new">
          <Plus className="h-4 w-4" /> Add Contact
        </Link>
      </Button>
    </div>
  );
};

export default ContactsHeader;
