import DisasterMap from "../../components/map/DisasterMap";

function DisasterMapPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">
          🗺 Disaster Map
        </h1>

        <p className="mt-2 text-slate-400">
          View active disaster locations across India.
        </p>
      </div>

      <DisasterMap />
    </div>
  );
}

export default DisasterMapPage;