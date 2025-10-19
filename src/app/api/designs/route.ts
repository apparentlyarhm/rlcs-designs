import { NextResponse } from 'next/server';
import { mockDesigns } from '@/lib/mock-data';

// GET /api/designs
export async function GET() {
    await new Promise(resolve => setTimeout(resolve, 500));

    return NextResponse.json(mockDesigns);
}