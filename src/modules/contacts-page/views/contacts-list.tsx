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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";
import { Edit, Trash2 } from "lucide-react";
import Link from "next/link";

const ContactsList = () => {
  const trpc = useTRPC();
  const { data, isLoading } = useQuery(trpc.contacts.getMany.queryOptions());

  if (isLoading) {
    return (
      <Card className="shadow-md border rounded-xl">
        <CardHeader>
          <CardTitle>All Contacts</CardTitle>
          <CardDescription>Loading contacts...</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  if (!data?.docs?.length) {
    return (
      <Card className="shadow-md border rounded-xl">
        <CardHeader>
          <CardTitle>All Contacts</CardTitle>
          <CardDescription>No contacts found.</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
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
            {data.docs.map((c) => (
              <TableRow
                key={c.id}
                className="hover:bg-muted/40 transition-colors"
              >
                {/* Avatar + Name */}
                <TableCell className="flex items-center gap-3 font-medium">
                  <Avatar>
                    <AvatarImage
                      src={false ? "/hello.png" : ""}
                      alt={c.name ?? ""}
                    />
                    <AvatarFallback>
                      {c?.name
                        ? c.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                        : "?"}
                    </AvatarFallback>
                  </Avatar>
                  <Link href={`/contacts/${c.id}`} className="hover:underline">
                    {c.name ?? "Unnamed"}
                  </Link>
                </TableCell>

                {/* Email */}
                <TableCell>{c.email ?? "-"}</TableCell>

                {/* Phone */}
                <TableCell>{c.phone ?? "-"}</TableCell>

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
                  <Button size="icon" variant="destructive" className="h-8 w-8">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default ContactsList;
