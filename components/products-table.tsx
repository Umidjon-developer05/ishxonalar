"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface Job {
  _id: string;
  title: string;
  cod: string;
  description: string;
  requirements: string[];
  salary: number;
  experienceLevel: number;
  location: string;
  jobType: string;
  position: string;
  company: {
    name: string;
    website: string;
    industry: string;
  };
  name: string;
  website: string;
  industry: string;
}

export function ProductsTable() {
  const [job, setJob] = useState<Job[]>([]);

  useEffect(() => {
    fetch("/api/job")
      .then((response) => response.json())
      .then((data) => setJob(data));
  }, []);
  console.log(job);
  function HandleDelete(_id: string | undefined) {
    fetch(`/api/job/${_id}`, {
      method: "DELETE",
    })
      .then(() => {
        setJob(job.filter((product) => product._id !== _id));
      })
      .then(() => {
        toast.success("Job Deleted Successfully");
      });
  }
  return (
    <Table className="border rounded-md p-2">
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>title</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>description</TableHead>
          <TableHead>company</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {job?.map((product, index) => (
          <TableRow key={product?._id}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{product.title}</TableCell>
            <TableCell>${product.salary}</TableCell>
            <TableCell className="line-clamp-2">
              {product.description}
            </TableCell>
            <TableCell>{product.company.name}</TableCell>
            <TableCell className="flex gap-2 ">
              <Button
                className="bg-red-800"
                onClick={() => HandleDelete(product?._id)}
              >
                🗑 Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
