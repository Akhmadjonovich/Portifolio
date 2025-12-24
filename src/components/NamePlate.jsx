export default function NamePlate() {
    return (
      <div className="flex items-center gap-4 px-5 py-2 bg-black/30 backdrop-blur-md rounded-xl border border-green-400/60 shadow-lg w-max">
        
        {/* Minimal Neon "A" Icon */}
       
  
        {/* Name */}
        <div className="flex gap-2 text-green-400 font-semibold tracking-widest">
          <span className="text-sm md:text-base drop-shadow-[0_0_6px_#00FF88]">Axrorbek</span>
          {/* <span className="text-sm md:text-base drop-shadow-[0_0_6px_#00FF88]">Nematov</span> */}
        </div>
      </div>
    );
  }
  