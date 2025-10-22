export function CatalogueControls() {
  return (
    <div className="w-full flex flex-col sm:flex-row gap-4 items-center p-4 bg-base-200 rounded-lg">
      <div className="flex-grow w-full">
        <input
          type="text"
          placeholder="Search designs"
          className="input border-1 py-8 rounded-full px-4 w-full"
        />
      </div>
    </div>
  );
}