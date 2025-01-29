"use client";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useEffect, useState } from "react";
import Link from "next/link";

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
}
const WorkBlog = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/job");
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(jobs);

  return (
    <div className="container p-2 mx-auto  py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Bizning Ishxonalar website timizga xush kelibsiz Ish kodni eslab qoling
        kod bilan murojat qilishingiz mumkin
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((post) => (
          <Card key={post._id} className="overflow-hidden">
            <Image
              src={"/image.png"}
              alt={post.title}
              width={300}
              height={200}
              className="w-full object-cover h-48"
            />
            <CardHeader>
              <div className="flex justify-between items-center mb-2">
                <Badge variant="secondary">Ish kodi : {post.cod}</Badge>
                <Badge variant="secondary">{post.company?.name}</Badge>
                <span className="text-sm text-muted-foreground">
                  {post.jobType}
                </span>
              </div>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{post.description}</CardDescription>
            </CardHeader>
            <CardFooter className="flex gap-2">
              <Drawer>
                <DrawerTrigger asChild className="w-full">
                  <Button className="w-full" variant="outline">
                    Batafsil o&apos;qish
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                      <DrawerTitle>Ish kodi :{post?.cod}</DrawerTitle>
                      <DrawerTitle>{post?.title}</DrawerTitle>
                      <DrawerDescription>{post?.description}</DrawerDescription>
                    </DrawerHeader>
                    <div className="p-4 pb-0">
                      <div className="flex items-center  space-x-2">
                        <div className="flex-1 ">
                          <div className="text-[0.70rem] uppercase ">
                            company : {post?.company?.name}
                          </div>
                          <div className="text-[0.70rem] uppercase ">
                            company industry : {post?.company?.industry}
                          </div>
                          <div className="text-[0.70rem] uppercase ">
                            Oylik \ maosh : {post?.salary}
                          </div>
                          <div className="text-[0.70rem] uppercase ">
                            Ish Soati : {post?.jobType}
                          </div>
                          <div className="text-[0.70rem] uppercase ">
                            location : {post?.location}
                          </div>
                          <div className="text-[0.70rem] uppercase ">
                            Talablar :
                          </div>
                          <ul className="list-disc text-[15px] pl-4">
                            {post?.requirements.map((req) => (
                              <li key={req}>{req}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="mt-3 h-[120px]"></div>
                    </div>
                    <DrawerFooter>
                      <Link
                        href={`https://t.me/O_ishchi_bot`}
                        className="w-full"
                        target="_blank"
                      >
                        <Button variant="outline" className="w-full">
                          <img
                            src="/telegram.png"
                            alt="Telegram"
                            className="w-10 h-6 "
                          />{" "}
                          Telegram
                        </Button>
                      </Link>
                      <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </div>
                </DrawerContent>
              </Drawer>
              <Link
                href={`https://t.me/O_ishchi_bot`}
                className="w-full"
                target="_blank"
              >
                <Button variant="outline" className="w-full">
                  <img
                    src="/telegram.png"
                    alt="Telegram"
                    className="w-10 h-6 "
                  />{" "}
                  Telegram
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WorkBlog;
