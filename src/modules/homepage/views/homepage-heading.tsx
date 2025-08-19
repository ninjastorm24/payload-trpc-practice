import { Button } from "@/components/ui/button";
import { Plus, Users } from "lucide-react";
import Link from "next/link";

const HomepageHeading = () => {
  return (
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
  );
};

export default HomepageHeading;
