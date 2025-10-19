import { NextResponse } from 'next/server';
import { mockDesigns } from '@/lib/mock-data';

// GET /api/designs/{id}
export async function GET(
    request: Request, { params }: { params: { id: string } }
) {
    const designId = params.id;

    const design = mockDesigns.find((d) => d.id === designId);
    if (!design) {
        return NextResponse.json({ error: 'Design not found' }, { status: 404 });
    }

    return NextResponse.json(design);
}