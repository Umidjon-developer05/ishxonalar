import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 19.99,
    image: "/image.png",
  },
  {
    id: 2,
    name: "Product 2",
    price: 29.99,
    image: "/image.png",
  },
  {
    id: 3,
    name: "Product 3",
    price: 39.99,
    image: "/image.png",
  },
  {
    id: 4,
    name: "Product 4",
    price: 49.99,
    image: "/image.png",
  },
];

export function ProductCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <Card key={product.id}>
          <CardHeader>
            <CardTitle>{product.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={100}
              height={100}
              className="mb-2 rounded-md"
            />
            <p className="text-lg font-bold">${product.price}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
