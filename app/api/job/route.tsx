import { mongooseConnect } from "@/app/lib/mongoose";
import { NextResponse } from "next/server";
import JobsAll from "@/app/models/JobAll";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("Received body:", body);

    await mongooseConnect();

    const newJob = await JobsAll.create(body);

    return NextResponse.json(
      {
        message: "Job created successfully",
        job: newJob,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating job:", error);
    return NextResponse.json(
      {
        error: "Failed to create job",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await mongooseConnect();
    const jobs = await JobsAll.find();
    console.log(jobs);

    return NextResponse.json(jobs, { status: 200 });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch jobs",
      },
      { status: 500 }
    );
  }
}
