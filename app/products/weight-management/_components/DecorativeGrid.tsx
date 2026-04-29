import Image from "next/image";

const tiles = [
  "/weight-management/slider-images/dbdgb.png",
  "/weight-management/slider-images/dytetybnty.png",
  "/weight-management/slider-images/fnfnf.png",
  "/weight-management/slider-images/hndgh.png",
  "/weight-management/slider-images/nfnfn.png",
  "/weight-management/slider-images/rtvgrtbvt.png",
  "/weight-management/slider-images/smt.png",
  "/weight-management/slider-images/tkito.png",

];

export default function DecorativeGrid() {
  const col1 = [...tiles, ...tiles];
  const col2 = [...tiles, ...tiles];

  return (
    <div className="relative overflow-hidden rounded-[40px] bg-gray-50/50 p-4 border border-gray-100 shadow-inner">
      <style>{`
        @keyframes marquee-v-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes marquee-v-down {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .animate-v-up {
          animation: marquee-v-up 30s linear infinite;
        }
        .animate-v-down {
          animation: marquee-v-down 30s linear infinite;
        }
      `}</style>

      <div className="grid grid-cols-2 gap-6 h-[500px] md:h-[650px] lg:h-[700px] overflow-hidden">
        {/* Column 1: Up */}
        <div className="relative h-full overflow-hidden">
          <div className="flex flex-col gap-6 animate-v-up">
            {col1.map((c, i) => (
              <div
                key={`col1-${i}`}
                className="w-[140px] h-[170px] sm:w-[200px] sm:h-[240px] rounded-[32px] overflow-hidden relative shadow-xl border-4 border-white"
                aria-hidden
              >
                <Image
                  src={c}
                  alt="Weight management images"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: Down */}
        <div className="relative h-full overflow-hidden">
          <div className="flex flex-col gap-6 animate-v-down">
            {col2.reverse().map((c, i) => (
              <div
                key={`col2-${i}`}
                className="w-[140px] h-[170px] sm:w-[200px] sm:h-[240px] rounded-[32px] overflow-hidden relative shadow-xl border-4 border-white"
                aria-hidden
              >
                <Image
                  src={c}
                  alt="Weight management images"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Edge Fades */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white via-white/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent z-10 pointer-events-none" />
    </div>
  );
}
