import Link from "next/link";
import { PlusCircle } from "lucide-react";

import { ProductsTable } from "@/components/products-table";
import { Button } from "@/components/ui/button";

export default function AdminProducts() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Products</h1>
        <Button asChild>
          <Link href="/admin/products/new">
            <PlusCircle className="mr-2 h-4 w-4" /> New Product
          </Link>
        </Button>
      </div>
      <ProductsTable />
    </div>
  );
}
