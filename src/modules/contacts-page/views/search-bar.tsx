import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const ContactSearchBar = () => {
  return (
    <div className="flex items-center gap-2 ">
      <Input placeholder="Search contacts..." className="bg-white" />
      <Button variant="destructive">
        <Search className="h-4 w-4 mr-1" /> Search
      </Button>
    </div>
  );
};

export default ContactSearchBar;
