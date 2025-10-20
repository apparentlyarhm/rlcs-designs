"use client"

import { AlertIcon, ArrowUpRight, CopyIcon, HomeIcon, LikeIcon, NotFoundIcon, RandomIcon } from "@/components/icons";
import { useDesignById } from "@/lib/data";
import { toast } from "sonner";

function handleCopy(data: string) {
  return async (event: React.MouseEvent<HTMLButtonElement>) => {
    await navigator.clipboard.writeText(data);
    toast("Copied!", {
        description:"Just paste the code in Bakkesmod to use the theme!",
    })
  };
}

export default function DesignDetails({ params }: { params: { id: string } }) {
    const { data, isLoading, isError } = useDesignById(params.id);

    if (isLoading) {
        return (
            <div className="flex flex-row gap-6 items-center justify-center min-h-screen">
                <p>Please wait</p>
                <div className="loading loading-spinner loading-xl" />
            </div>
        );
    }

    if (!data) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="flex flex-col gap-8 w-full max-w-md items-center text-center">
                    <NotFoundIcon size={64} className="text-secondary-content" />

                    <p className="text-lg">The requested design couldn't be found.</p>

                    <button className="btn px-10 py-5 rounded-full border-1 btn-soft btn-neutral text-sm flex items-center justify-center gap-2">
                        Return home
                        <HomeIcon size={18} />
                    </button>
                </div>
            </div>
        )
    }

    if (isError) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="flex flex-col gap-8 w-full max-w-md items-center text-center">
                    <AlertIcon size={48} className="text-error-content" />

                    <p className="text-lg">Error fetching design.</p>

                    <button className="btn px-10 py-5 rounded-full border-1 btn-soft btn-neutral text-sm flex items-center justify-center gap-2">
                        Return home
                        <HomeIcon size={18} />
                    </button>
                </div>
            </div>
        );
    }

    const design = data // this is just done to not refactor ALL the code below LMAO

    const hasImages = design.imageUrls && design.imageUrls.length > 0;
    const hasMultipleImages = hasImages && design.imageUrls.length > 1;


    return (
        <div className="flex flex-col md:flex-row gap-8 w-full">

            <div className="w-full md:w-4/5">
                {hasImages ? (
                    <div className="carousel w-full rounded-3xl h-[90vh] aspect-video">
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

                    {design.player.x_link ? (
                        <a
                            href={design.player.x_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-4xl p-2 rounded-xl font-black inline-flex items-center gap-2 hover:bg-success hover:text-success-content transition-colors duration-200"
                        >
                            {design.player.name}
                            <ArrowUpRight className="" />
                        </a>
                    ) : (
                        <span className="text-4xl font-black inline-flex items-center gap-2">
                            {design.player.name}
                            <ArrowUpRight />
                        </span>
                    )}

                    <p className="mt-1 text-lg opacity-70">{design.description}</p>

                    <br />

                    <ul className="space-y-3">
                        {Object.entries(design.items).map(([key, value]) => (
                            <li key={key} className="flex justify-between text-sm">
                                <strong className="capitalize font-medium opacity-60">{key}</strong>
                                <span>{value}</span>
                            </li>
                        ))}
                    </ul>

                </div>

                <button className="btn py-10 rounded-3xl btn-info text-lg font-bold" onClick={handleCopy(data.bakkesmodCode)}>
                    Get the code
                    <CopyIcon size={20} />
                </button>

                <div className="flex flex-row gap-1 justify-center">

                    <div className="tooltip" data-tip="Endorse this design">
                        <button className="btn py-10 px-6 rounded-3xl border-1 btn-neutral btn-soft text-sm">
                            <LikeIcon size={20} />
                        </button>
                    </div>

                    <div className="tooltip" data-tip="Go to Home">
                        <button className="btn py-10 px-12 rounded-full border-1 btn-soft btn-neutral text-sm">
                            <HomeIcon size={24} />
                        </button>
                    </div>

                    <div>
                        <div className="tooltip" data-tip="Fetch a random design">
                            <button className="btn py-10 px-6 rounded-3xl border-1 btn-neutral btn-soft text-sm">
                                <RandomIcon size={32} />
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}