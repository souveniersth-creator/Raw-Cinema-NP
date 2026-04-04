

export default function Component() {
  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-[#fcf9f8] flex justify-between items-center px-12 h-20 w-full">
        <div className="text-2xl font-['Noto_Serif'] font-bold tracking-tighter text-[#1c1b1b]">CURATOR</div>
        <div className="hidden md:flex gap-12 items-center">
          <a className="font-['Noto_Serif'] uppercase tracking-[0.1em] text-[12px] font-medium text-[#1c1b1b] hover:tracking-[0.2em] transition-all duration-300" href="#">Home</a>
          <a className="font-['Noto_Serif'] uppercase tracking-[0.1em] text-[12px] font-medium text-[#1c1b1b] hover:tracking-[0.2em] transition-all duration-300" href="#">Blog</a>
          <a className="font-['Noto_Serif'] uppercase tracking-[0.1em] text-[12px] font-medium text-[#1c1b1b] hover:tracking-[0.2em] transition-all duration-300" href="#">Gallery</a>
          <a className="font-['Noto_Serif'] uppercase tracking-[0.1em] text-[12px] font-medium text-[#1c1b1b] hover:tracking-[0.2em] transition-all duration-300" href="#">Shop</a>
          <a className="font-['Noto_Serif'] uppercase tracking-[0.1em] text-[12px] font-medium text-[#1c1b1b] hover:tracking-[0.2em] transition-all duration-300" href="#">Booking</a>
          <a className="font-['Noto_Serif'] uppercase tracking-[0.1em] text-[12px] font-medium text-[#775a19] border-b border-[#775a19] pb-1 hover:tracking-[0.2em] transition-all duration-300" href="#">Contacts</a>
        </div>
        <div className="flex items-center gap-6">
          <span className="material-symbols-outlined text-on-surface cursor-pointer" data-icon="shopping_bag">shopping_bag</span>
          <span className="material-symbols-outlined text-on-surface cursor-pointer" data-icon="menu">menu</span>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-12 max-w-7xl mx-auto">

        <div className="mb-20">
          <span className="font-['Manrope'] text-[10px] tracking-[0.3em] uppercase text-primary font-bold">The Creative Visionary</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-full aspect-square max-w-[500px]">
              <div className="absolute inset-0 rounded-full border border-primary/20 scale-105"></div>
              <div className="absolute inset-0 rounded-full border border-primary/10 scale-110 translate-x-4 translate-y-4"></div>
              <img alt="Alex RAWCINEMA.NP Portrait" className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700" data-alt="Sophisticated portrait of a male photographer Alex RAWCINEMA.NP, side profile, soft studio lighting with deep shadows, editorial aesthetic, high contrast." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6MyO0XMmJH34ksFalb_16UWkDxY_HfBfzTvNrvYrhA6RH-t9tpEL76jBNgpelnUh0WwH31EvRymoHlipkg6S2fbQtqz_B7UN2bzcZ5bbFvG7WVW6aot-E8pKiS3RPfOMWmY78BecbvJrS3SKY8qpHjhWPQbLQ3q6KAA7dEomTvoN6UPnXG1BkElcFxhm5RAglin692WRrf2Vish7aRVHpXBHDpv-tOcJDjYaCqpgm9VXKcq-0VpFDNvTasRYbgPjV4wD-C4zWf3g" />
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center h-full pt-8">
            <h1 className="text-6xl md:text-8xl mb-8 leading-tight">Alex <br /><span className="text-primary italic">RAWCINEMA.NP</span></h1>
            <div className="max-w-xl">
              <p className="text-label text-secondary mb-8 leading-relaxed tracking-wide font-light text-lg">
                Capturing the silent narrative between the subject and the lens. Based in the artistic heart of Milan, Alex RAWCINEMA.NP specializes in editorial photography that transcends the ephemeral. With over a decade of experience, his work is characterized by a minimalist approach and a profound focus on texture, light, and human emotion.
              </p>
              <p className="text-label text-on-surface mb-12 leading-relaxed">
                His philosophy is rooted in the "Digital Curator" ethos—every frame is selected with intentionality, ensuring that only the most visceral moments make it to the final print.
              </p>

              <a className="inline-flex items-center gap-4 group" href="#">
                <span className="font-['Manrope'] text-[12px] font-extrabold tracking-widest uppercase transition-all duration-300 group-hover:tracking-[0.25em]">Explore Portfolio</span>
                <div className="w-12 h-[1px] bg-primary group-hover:w-16 transition-all duration-300"></div>
                <span className="material-symbols-outlined text-primary text-sm" data-icon="arrow_forward">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-0 bg-surface-container-low">
          <div className="p-16 flex flex-col justify-center items-center text-center border-r border-outline-variant/10">
            <span className="text-5xl font-['Noto_Serif'] text-primary mb-4">420<span className="text-2xl">+</span></span>
            <span className="font-['Manrope'] text-[10px] tracking-[0.2em] uppercase font-bold text-on-surface-variant">Finished Photosessions</span>
          </div>
          <div className="p-16 flex flex-col justify-center items-center text-center border-r border-outline-variant/10 bg-surface-container">
            <span className="text-5xl font-['Noto_Serif'] text-primary mb-4">120<span className="text-2xl">+</span></span>
            <span className="font-['Manrope'] text-[10px] tracking-[0.2em] uppercase font-bold text-on-surface-variant">Studio Sessions</span>
          </div>
          <div className="p-16 flex flex-col justify-center items-center text-center">
            <span className="text-5xl font-['Noto_Serif'] text-primary mb-4">350<span className="text-2xl">+</span></span>
            <span className="font-['Manrope'] text-[10px] tracking-[0.2em] uppercase font-bold text-on-surface-variant">Happy Clients</span>
          </div>
        </div>

        <div className="mt-40 flex flex-col md:flex-row items-center gap-24">
          <div className="w-full md:w-1/2 aspect-[4/5] bg-surface-container-highest relative overflow-hidden">
            <img alt="Camera Detail" className="w-full h-full object-cover grayscale opacity-80" data-alt="Vintage Leica camera lens on a wooden studio table, soft afternoon sunlight from a window, shallow depth of field." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0haKfrbAVtGon2ZZG1NZqHz2AMUlj-l77KL5K9HlOkTpRB8ZnhFZO5GePLIAqm8WVD8EwGs1L43ibOW9f1Lanzngct4tASNOP8C0-KSoAdUa3Gv-mpSaD-yNHMDLXb15oTewJOrJQQhARBRngb_9e9nfQ_XyXFxsylCJluZOqG9PbkwtS5qIWsGGsr-jKRNUBqYOXviUUauuTRpJEDxoBC4VKN21alAb52BI9QBxrPgM7GY0pTJl4Hqu9DLInJSlRKAu7RD0W-fo" />
            <div className="absolute bottom-10 right-10 bg-surface p-8">
              <span className="font-['Noto_Serif'] italic text-lg leading-relaxed">"The camera is an instrument that teaches people how to see without a camera."</span>
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-12">
            <h2 className="text-4xl leading-tight">Specialized in high-end editorial and portrait commissions globally.</h2>
            <div className="grid grid-cols-1 gap-8">
              <div className="flex items-start gap-6">
                <span className="text-primary-container font-['Noto_Serif'] text-3xl">01.</span>
                <div>
                  <h3 className="text-xl mb-2">Artistic Direction</h3>
                  <p className="text-sm text-secondary leading-relaxed">Providing creative guidance from concept to final post-production to ensure a cohesive visual narrative.</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <span className="text-primary-container font-['Noto_Serif'] text-3xl">02.</span>
                <div>
                  <h3 className="text-xl mb-2">Bespoke Lighting</h3>
                  <p className="text-sm text-secondary leading-relaxed">Mastering both natural and cinematic studio lighting to create dramatic, editorial-grade imagery.</p>
                </div>
              </div>
            </div>
            <button className="bg-primary text-on-primary px-12 py-5 font-['Manrope'] text-xs font-bold tracking-[0.2em] uppercase hover:bg-primary-container transition-colors">
              Work With Me
            </button>
          </div>
        </div>
      </main>

      <footer className="bg-[#dcd9d9] w-full py-20 px-12 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12 w-full">
          <div className="flex flex-col gap-6">
            <div className="text-lg font-['Noto_Serif'] font-bold text-[#1c1b1b]">CURATOR</div>
            <p className="font-['Manrope'] text-[10px] tracking-widest uppercase text-on-surface max-w-xs">Elevating the visual narrative through curated photography and editorial excellence.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-12 md:gap-24">
            <div className="flex flex-col gap-4">
              <span className="font-['Manrope'] text-[10px] tracking-widest uppercase font-bold text-primary">Contact</span>
              <a className="font-['Manrope'] text-[10px] tracking-widest uppercase text-[#1c1b1b] hover:text-[#775a19] transition-colors" href="mailto:studio@alexRAWCINEMA.NP.com">studio@alexRAWCINEMA.NP.com</a>
              <a className="font-['Manrope'] text-[10px] tracking-widest uppercase text-[#1c1b1b] hover:text-[#775a19] transition-colors" href="#">+39 02 456 7890</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-['Manrope'] text-[10px] tracking-widest uppercase font-bold text-primary">Information</span>
              <a className="font-['Manrope'] text-[10px] tracking-widest uppercase text-[#1c1b1b] hover:text-[#775a19] transition-colors" href="#">Privacy Policy</a>
              <a className="font-['Manrope'] text-[10px] tracking-widest uppercase text-[#1c1b1b] hover:text-[#775a19] transition-colors" href="#">Terms of Service</a>
              <a className="font-['Manrope'] text-[10px] tracking-widest uppercase text-[#1c1b1b] hover:text-[#775a19] transition-colors" href="#">FAQ</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="font-['Manrope'] text-[10px] tracking-widest uppercase text-secondary">© 2026 RAWCINEMA.NP ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <span className="material-symbols-outlined text-secondary hover:text-primary cursor-pointer text-lg" data-icon="camera">camera</span>
            <span className="material-symbols-outlined text-secondary hover:text-primary cursor-pointer text-lg" data-icon="videocam">videocam</span>
            <span className="material-symbols-outlined text-secondary hover:text-primary cursor-pointer text-lg" data-icon="alternate_email">alternate_email</span>
          </div>
        </div>
      </footer>
    </>
  );
}
