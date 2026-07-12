function HeroIllustration() {
  return (
    <div className="relative hidden lg:flex h-full items-center justify-center">

      <div className="absolute h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>

      <div className="relative flex h-80 w-80 items-center justify-center rounded-full border border-cyan-400/30 bg-white/5 backdrop-blur-md">

        <div className="text-center">

          <div className="text-7xl">🚑</div>

          <h3 className="mt-4 text-2xl font-bold text-white">
            Emergency Response
          </h3>

          <p className="mt-2 text-slate-300">
            Real-time Disaster Monitoring
          </p>

        </div>

      </div>

    </div>
  );
}

export default HeroIllustration;