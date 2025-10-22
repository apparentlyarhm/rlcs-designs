import { ArrowUpRight, CopyIcon } from "lucide-react";
import { CarDesignSearchItem } from "@/lib/types";
import { toast } from "sonner";

interface CarDesignCardProps {
  design: CarDesignSearchItem;
}

// same function as in src/app/designs/[id]/page.tsx
function handleCopy(data: string) {
  return async (event: React.MouseEvent<HTMLButtonElement>) => {
    await navigator.clipboard.writeText(data);
    toast.success("Copied to clipboard!")
  };
}

export function CarDesignCard({ design }: CarDesignCardProps) {
  return (
    <div className="card bg-base-100 w-full shadow-none border-1 border-gray-200 transition-shadow duration-300">
      <div className="card-body">
        <h2 className="text-xl font-black">{design.player.name}  <span className="text-base-content/70 font-normal text-sm">• {design.description}</span></h2>
        
        <figure>
          <img
            src={design.image}
            alt={design.description || `Car design by ${design.player.name}`}
            className="rounded-full mt-3 mb-3"
          />
        </figure>

        <div className="card-actions justify-center gap-1" >

          <button className="btn btn-neutral hover:btn-info rounded-l-full rounded-r-2xl" onClick={handleCopy(design.bakkesmod)}>
            <CopyIcon size={14} />
          </button>

          <button className="btn btn-neutral hover:btn-info rounded-r-full rounded-l-2xl" onClick={() => { window.location.href = '/designs/' + design.id }}>
            <ArrowUpRight className="h-4 w-4" />
          </button>

        </div>
      </div>
    </div>
  );
}