import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import EditForm from "../views/edit-form";

export default function EditContactPage() {
  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <Card className="w-full max-w-2xl shadow-lg border rounded-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Edit Contact</CardTitle>
          <CardDescription>
            Update the details below and save changes.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* form */}
          <EditForm />
        </CardContent>
      </Card>
    </div>
  );
}
