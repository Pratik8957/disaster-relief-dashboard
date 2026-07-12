import HeroBanner from "../../components/dashboard/HeroBanner";
import StatCard from "../../components/cards/StatCard";
import EmergencyAlerts from "../../components/dashboard/EmergencyAlerts";
import MapPreview from "../../components/dashboard/MapPreview";
import WeatherCard from "../../components/dashboard/WeatherCard";
import EmergencyContacts from "../../components/dashboard/EmergencyContacts";
import stats from "../../data/stats";

function Home() {
  return (
    <div className="space-y-10">

      {/* Hero Banner */}
      <HeroBanner />

      {/* Statistics */}
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <StatCard
            key={item.id}
            title={item.title}
            value={item.value}
            subtitle={item.subtitle}
            icon={item.icon}
            action={item.action}
          />
        ))}
      </section>

      {/* Map + Weather */}
      <section className="grid grid-cols-1 gap-8 xl:grid-cols-2">
        <MapPreview />
        <WeatherCard />
      </section>

      {/* Emergency Alerts */}
      <EmergencyAlerts />

      {/* Emergency Contacts */}
      <EmergencyContacts />

    </div>
  );
}

export default Home;