import { Statistics } from "@/components/Statistics";
import { ProductCards } from "@/components/product-cards";

export default function AdminHome() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <Statistics />
      <ProductCards />
    </div>
  );
}
