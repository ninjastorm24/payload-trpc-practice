import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
      <Input placeholder="Search contacts..." className="flex-1 bg-white" />
      <Button
        variant="destructive"
        className="flex items-center justify-center sm:w-auto"
      >
        <Search className="h-4 w-4 mr-2" /> Search
      </Button>
    </div>
  );
};

export default SearchBar;
