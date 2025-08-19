import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus, Search, Star, Users } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const recentContacts = [
    { id: "1", name: "John Doe", email: "john@example.com" },
    { id: "2", name: "Jane Smith", email: "jane@example.com" },
    { id: "3", name: "Michael Brown", email: "michael@example.com" },
  ];

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Page Heading */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold">Dashboard</h1>
        <div className="flex flex-wrap gap-2">
          <Button asChild>
            <Link href="/contacts/new" className="flex items-center">
              <Plus className="mr-2 h-4 w-4" /> Add Contact
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contacts" className="flex items-center">
              <Users className="mr-2 h-4 w-4" /> View All
            </Link>
          </Button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
        <Input placeholder="Search contacts..." className="flex-1 bg-white" />
        <Button
          variant="destructive"
          className="flex items-center justify-center sm:w-auto"
        >
          <Search className="h-4 w-4 mr-2" /> Search
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="p-4">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Total Contacts</CardTitle>
            <Users className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">128</p>
          </CardContent>
        </Card>

        <Card className="p-4">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Favorites</CardTitle>
            <Star className="h-5 w-5 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">15</p>
          </CardContent>
        </Card>

        <Card className="p-4">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Recently Added</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Last added: John Doe</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Contacts List */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Contacts</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="divide-y divide-gray-200">
            {recentContacts.map((c) => (
              <li
                key={c.id}
                className="py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
              >
                <div>
                  <p className="font-medium">{c.name}</p>
                  <p className="text-sm text-gray-500">{c.email}</p>
                </div>
                <Link
                  href={`/contacts/${c.id}`}
                  className="text-blue-600 hover:underline text-sm"
                >
                  View
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
