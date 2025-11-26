export function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-screen w-full">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Networking and Education for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              IT Professionals
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl">
            Connect, learn, and grow with a community dedicated to advancing your IT career
          </p>
        </div>
      </div>
    </section>
  );
}
