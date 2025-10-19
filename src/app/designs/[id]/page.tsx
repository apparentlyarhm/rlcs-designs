import { CarDesign } from "@/lib/types";
import { notFound } from "next/navigation";

async function getDesignById(id: string): Promise<CarDesign | null> {

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/designs/${id}`, {
        cache: 'no-store',
    });

    if (!res.ok) {
        return null;
    }

    return res.json();
}

export default async function DesignDetails({ params }: { params: { id: string } }) {
    const design = await getDesignById(params.id);

    if (!design) {
        notFound();
    }

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-2">{design.description}</h1>
            <p className="text-lg text-gray-600 mb-4">by {design.playerUName}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Car Items</h2>
                    <ul>
                        {Object.entries(design.items).map(([key, value]) => (
                            <li key={key} className="flex justify-between py-2 border-b">
                                <strong className="capitalize">{key}:</strong>
                                <span>{value}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Images</h2>
                    <div className="space-y-4">
                        {design.imageUrls.map((url, index) => (
                            <img
                                key={index}
                                src={url}
                                alt={`${design.playerUName} screenshot ${index + 1}`}
                                className="w-full rounded-lg shadow-md"
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-semibold border-b pb-2 mb-4">BakkesMod Code</h2>
                <code className="bg-gray-100 p-4 rounded-md block break-all">
                    {design.bakkesmodCode}
                </code>
            </div>
        </div>
    );
}