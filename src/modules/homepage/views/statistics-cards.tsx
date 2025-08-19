import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Users } from "lucide-react";

const StatisticsCards = () => {
  return (
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
  );
};

export default StatisticsCards;
