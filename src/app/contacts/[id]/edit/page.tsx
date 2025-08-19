import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function EditContactPage() {
  return (
    <div className="space-y-6 max-w-lg">
      <h1 className="text-2xl font-bold">Edit Contact</h1>

      <form className="space-y-4">
        <div>
          <Label>Name</Label>
          <Input placeholder="Enter name" />
        </div>
        <div>
          <Label>Email</Label>
          <Input type="email" placeholder="Enter email" />
        </div>
        <div>
          <Label>Phone</Label>
          <Input placeholder="Enter phone number" />
        </div>
        <div>
          <Label>Company</Label>
          <Input placeholder="Enter company" />
        </div>
        <div>
          <Label>Notes</Label>
          <Input placeholder="Enter notes" />
        </div>
        <Button type="submit">Save Contact</Button>
      </form>
    </div>
  );
}
