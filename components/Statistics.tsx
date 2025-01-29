import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Statistics() {
  const stats = [
    { title: "Total Revenue", value: "$15,231.89" },
    { title: "Total Sales", value: "1,205" },
    { title: "New Customers", value: "32" },
    { title: "Conversion Rate", value: "3.75%" },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
