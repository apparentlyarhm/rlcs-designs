"use client"

import { CatalogueControls } from "@/components/browser/catalogue";
import { CarDesignCard } from "@/components/browser/search-item-card";
import { useDesignFeed } from "@/lib/data";
import { CarDesignSearchItem } from "@/lib/types";

export default function Home() {
  const { data, isLoading, isError } = useDesignFeed();

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex flex-row gap-6 items-center justify-center">
          <p>Please wait</p>
          <div className="loading loading-spinner loading-xl" />
        </div>
      );
    }

    if (isError) {
      return <div className="text-center py-10 text-error">Failed to load designs. Please try again later.</div>;
    }

    if (!data || data.length === 0) {
      return <div className="text-center py-10">No designs found.</div>;
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.map((design: CarDesignSearchItem) => (
          <CarDesignCard key={design.id} design={design} />
        ))}
      </div>
    );
  }
  return (
    <main className="container mx-auto min-h-screen p-4 sm:p-8">
      <div className="flex flex-col items-center gap-8">
        <h1 className="font-black text-4xl sm:text-5xl text-center">
          Browse Pro RLCS Player Car Designs
        </h1>

        <CatalogueControls />

        <div className="w-full">
          {renderContent()}
        </div>
      </div>
    </main>
  );
}