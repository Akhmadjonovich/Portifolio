import HudPanel from "../components/HudPanel";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-xl mx-auto px-6">
        <h2 className="text-2xl mb-10 tracking-widest text-green-400">
          CONTACT
        </h2>

        <HudPanel title="TRANSMISSION">
          <form className="space-y-4">
            <input
              placeholder="Your name"
              className="w-full bg-black/60 border border-green-400/30 p-3 text-green-400 outline-none"
            />
            <input
              placeholder="Email"
              className="w-full bg-black/60 border border-green-400/30 p-3 text-green-400 outline-none"
            />
            <textarea
              placeholder="Message"
              className="w-full bg-black/60 border border-green-400/30 p-3 text-green-400 outline-none"
            />

            <button className="w-full border border-green-400 py-3 hover:bg-green-400 hover:text-black transition">
              SEND SIGNAL
            </button>
          </form>
        </HudPanel>
      </div>
    </section>
  );
}
