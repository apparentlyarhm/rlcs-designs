import { CarDesign } from "@/lib/types";

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
        return (
            <p>This page does not exist.. yet.</p>
        )
    }

    const hasImages = design.imageUrls && design.imageUrls.length > 0;
    const hasMultipleImages = hasImages && design.imageUrls.length > 1;


    return (

        <div className="flex flex-col md:flex-row gap-8 w-full">

            <div className="w-full md:w-4/5">
                {hasImages ? (
                    <div className="carousel w-full rounded-box">
                        {design.imageUrls.map((url, index) => {

                            const prevSlide = index === 0 ? design.imageUrls.length : index;
                            const nextSlide = index === design.imageUrls.length - 1 ? 1 : index + 2;

                            return (
                                <div key={index} id={`slide${index + 1}`} className="carousel-item relative w-full">
                                    <img
                                        src={url}
                                        alt={`${design.player.name} screenshot ${index + 1}`}
                                        className="w-full"
                                    />

                                    {hasMultipleImages && (
                                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                            <a href={`#slide${prevSlide}`} className="btn btn-circle">❮</a>
                                            <a href={`#slide${nextSlide}`} className="btn btn-circle">❯</a>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="w-full aspect-video bg-base-300 rounded-box flex items-center justify-center">
                        <p className="text-base-content/60">No images available</p>
                    </div>
                )}
            </div>

            <div className="w-full md:w-1/5 flex flex-col gap-6">
                <div className="bg-base-200 p-6 rounded-box border-1 border-gray-200 hover:border-gray-400">
                    <h1 className="text-4xl font-black">{design.player.name}</h1>

                    <p className="mt-1 text-lg opacity-70">{design.description}</p>

                    <br />

                    <ul className="space-y-4">
                        {Object.entries(design.items).map(([key, value]) => (
                            <li key={key} className="flex justify-between text-sm">
                                <strong className="capitalize font-medium opacity-60">{key}</strong>
                                <span>{value}</span>
                            </li>
                        ))}
                    </ul>

                </div>

                <button className="btn py-10 rounded-3xl border-1 border-info btn-info text-lg">
                    Copy code
                </button>
            </div>
        </div>
    );
}