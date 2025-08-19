"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit, Plus, Search, Trash2 } from "lucide-react";
import Link from "next/link";

export default function ContactsPage() {
  const contacts = [
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      phone: "+1 555-123",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "+1 555-456",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header with Add button */}
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

      {/* Search Bar */}
      <div className="flex items-center gap-2 ">
        <Input placeholder="Search contacts..." className="bg-white" />
        <Button variant="destructive">
          <Search className="h-4 w-4 mr-1" /> Search
        </Button>
      </div>

      {/* Contacts Table */}
      <Card className="shadow-md border rounded-xl">
        <CardHeader>
          <CardTitle>All Contacts</CardTitle>
          <CardDescription>
            A list of your saved contacts with details and quick actions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contacts.map((c) => (
                <TableRow
                  key={c.id}
                  className="hover:bg-muted/40 transition-colors"
                >
                  {/* Avatar + Name */}
                  <TableCell className="flex items-center gap-3 font-medium">
                    <Avatar>
                      <AvatarImage src="" alt={c.name} />
                      <AvatarFallback>
                        {c.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <Link
                      href={`/contacts/${c.id}`}
                      className="hover:underline"
                    >
                      {c.name}
                    </Link>
                  </TableCell>

                  {/* Email */}
                  <TableCell>{c.email}</TableCell>

                  {/* Phone */}
                  <TableCell>{c.phone}</TableCell>

                  {/* Actions */}
                  <TableCell className="text-right space-x-2">
                    <Button
                      asChild
                      size="icon"
                      variant="outline"
                      className="h-8 w-8"
                    >
                      <Link href={`/contacts/${c.id}/edit`}>
                        <Edit className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      size="icon"
                      variant="destructive"
                      className="h-8 w-8"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
