import { NewProductForm } from "@/components/new-product-form";

export default function NewProduct() {
  return (
    <div className="space-y-6 w-full">
      <h1 className="text-3xl font-bold">Add New Product</h1>
      <NewProductForm />
    </div>
  );
}
