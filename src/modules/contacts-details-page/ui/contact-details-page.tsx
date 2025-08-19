import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Mail, Phone, StickyNote } from "lucide-react";
import Link from "next/link";
import DetailItem from "../views/detail-item";

export default function ContactDetailsPage() {
  const contact = {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 555-123",
    company: "ACME Inc.",
    notes: "Met at tech conference",
    avatar: "", // leave empty to show initials fallback
  };

  return (
    <div className="flex justify-center">
      <Card className="w-full max-w-2xl shadow-lg border rounded-2xl">
        {/* Header with Avatar */}
        <CardHeader className="flex flex-col items-center space-y-3 pb-6">
          <Avatar className="h-20 w-20">
            <AvatarImage src={contact.avatar} alt={contact.name} />
            <AvatarFallback className="text-lg font-semibold">
              {contact.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <CardTitle className="text-2xl font-bold">{contact.name}</CardTitle>
          <div className="flex space-x-2">
            <Button asChild>
              <Link href={`/contacts/${contact.id}/edit`}>Edit</Link>
            </Button>
            <Button variant="destructive">Delete</Button>
          </div>
        </CardHeader>

        {/* Details Section */}
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DetailItem
              icon={<Mail className="h-4 w-4 text-muted-foreground" />}
              label="Email"
              value={contact.email}
            />
            <DetailItem
              icon={<Phone className="h-4 w-4 text-muted-foreground" />}
              label="Phone"
              value={contact.phone}
            />
            <DetailItem
              icon={<Building2 className="h-4 w-4 text-muted-foreground" />}
              label="Company"
              value={contact.company}
            />
          </div>

          <DetailItem
            icon={<StickyNote className="h-4 w-4 text-muted-foreground" />}
            label="Notes"
            value={contact.notes}
          />
        </CardContent>
      </Card>
    </div>
  );
}
