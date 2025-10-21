export function CatalogueControls() {
  return (
    <div className="w-full flex flex-col sm:flex-row gap-4 items-center p-4 bg-base-200 rounded-lg">
      <div className="flex-grow w-full">
        <input
          type="text"
          placeholder="Search by player, team, or car..."
          className="input input-bordered w-full"
        />
      </div>
    </div>
  );
}