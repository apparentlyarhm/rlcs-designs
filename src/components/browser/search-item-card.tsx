import { ArrowUpRight } from "lucide-react";
import { CarDesignSearchItem } from "@/lib/types";

interface CarDesignCardProps {
  design: CarDesignSearchItem;
}

export function CarDesignCard({ design }: CarDesignCardProps) {
  return (
    <div className="card bg-base-100 w-full shadow-md hover:shadow-xl transition-shadow duration-300">
      <figure>
        <img
          src={design.image}
          alt={design.description || `Car design by ${design.player.name}`}
          className=""
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-black">{design.player.name}</h2>
        <p className="text-base-content/70">{design.description}</p>
        <div className="card-actions justify-center mt-2">
          <button className="btn btn-primary rounded-full">
            Details
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}