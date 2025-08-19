import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AddContactForm from "../views/add-contact-form";

export default function NewContactPage() {
  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <Card className="w-full max-w-2xl shadow-lg border rounded-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Add New Contact</CardTitle>
          <CardDescription>
            Fill in the details below to add a new contact to your list.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* form */}
          <AddContactForm />
        </CardContent>
      </Card>
    </div>
  );
}
