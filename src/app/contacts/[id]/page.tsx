import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ContactDetailsPage() {
  const contact = {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 555-123",
    company: "ACME Inc.",
    notes: "Met at tech conference",
  };

  return (
    <div className="space-y-6 max-w-lg">
      <h1 className="text-2xl font-bold">{contact.name}</h1>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <p>Company: {contact.company}</p>
      <p>Notes: {contact.notes}</p>

      <div className="flex space-x-2">
        <Button asChild>
          <Link href={`/contacts/${contact.id}/edit`}>Edit</Link>
        </Button>
        <Button variant="destructive">Delete</Button>
      </div>
    </div>
  );
}
