export default function Home() {
  return (
    <main>
      <section className="bg-slate-200 flex justify-between">
        <div className="w-96 p-20 m-10">
          <h1 className="text-5xl font-bold ">
            Welcome to the Andrew Huberman Lab
          </h1>
          <p>
            Sign up to receive a copy of Andrew's Daily Blueprint and join
            500,000+ others in receiving regular emails on neuroscience, health
            and science-related tools from Dr. Andrew Huberman.
          </p>
        </div>
        <img
          className="h-auto max-w-lg py-20"
          src="https://assets-global.website-files.com/64416928859cbdd1716d79ce/6441becd08843b0824a15e8c_andrew-huberman-hero.webp"
        ></img>
      </section>
      <div></div>
    </main>
  );
}
