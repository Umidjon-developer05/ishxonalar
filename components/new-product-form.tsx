"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import toast from "react-hot-toast";

type Company = {
  name: string;
  website: string;
  industry: string;
};

type FormData = {
  cod: string;
  title: string;
  description: string;
  requirements: string;
  salary: string;
  experienceLevel: string;
  location: string;
  jobType: string;
  position: string;
  company: Company;
};

export function NewProductForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    cod: "",
    title: "",
    description: "",
    requirements: "",
    salary: "",
    experienceLevel: "",
    location: "",
    jobType: "",
    position: "",
    company: {
      name: "",
      website: "",
      industry: "",
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...prev,
          [child]: value,
        },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Convert requirements string to array
    const dataToSubmit = {
      ...formData,
      cod: formData.cod ? Number(formData.cod) : undefined,
      requirements: formData.requirements.split(",").map((req) => req.trim()),
    };
    console.log("Submitting new job:", dataToSubmit);

    try {
      const response = await fetch("/api/job", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSubmit),
      });

      if (response.ok) {
        toast.success("Job submitted successfully");
        router.push("/admin/products");
      } else {
        console.error("Failed to submit job");
      }
    } catch (error) {
      console.error("Error submitting job:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full ">
      <div>
        <Label htmlFor="cod">COD</Label>
        <Input
          id="cod"
          name="cod"
          type="number"
          value={formData.cod}
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="requirements">Requirements (comma-separated)</Label>
        <Textarea
          id="requirements"
          name="requirements"
          value={formData.requirements}
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="salary">Salary</Label>
        <Input
          id="salary"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="experienceLevel">Experience Level</Label>
        <Select onValueChange={handleSelectChange("experienceLevel")}>
          <SelectTrigger>
            <SelectValue placeholder="Select experience level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Entry">Entry</SelectItem>
            <SelectItem value="Intermediate">Intermediate</SelectItem>
            <SelectItem value="Senior">Senior</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="location">Location</Label>
        <Input
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="jobType">Job Type</Label>
        <Select onValueChange={handleSelectChange("jobType")}>
          <SelectTrigger>
            <SelectValue placeholder="Select job type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Full-time">Full-time</SelectItem>
            <SelectItem value="Part-time">Part-time</SelectItem>
            <SelectItem value="Contract">Contract</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="position">Position</Label>
        <Input
          id="position"
          name="position"
          value={formData.position}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-4 border p-4 rounded-md">
        <h3 className="font-bold">Company Information</h3>
        <div>
          <Label htmlFor="company.name">Company Name</Label>
          <Input
            id="company.name"
            name="company.name"
            value={formData.company.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="company.website">Company Website</Label>
          <Input
            id="company.website"
            name="company.website"
            value={formData.company.website}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="company.industry">Company Industry</Label>
          <Input
            id="company.industry"
            name="company.industry"
            value={formData.company.industry}
            onChange={handleChange}
          />
        </div>
      </div>
      <Button type="submit">Add Job</Button>
    </form>
  );
}
