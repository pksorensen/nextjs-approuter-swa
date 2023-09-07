import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    

    return NextResponse.json({ time: new Date() })
}