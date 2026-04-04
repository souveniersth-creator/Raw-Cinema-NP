

export default function Component() {
  return (
    <>
      <header className="bg-[#fcf9f8] dark:bg-[#1c1b1b] fixed top-0 w-full z-50">
        <nav className="flex justify-between items-center px-6 md:px-12 h-20 w-full">
          <div className="text-2xl font-['Noto_Serif'] font-bold tracking-tighter text-[#1c1b1b] dark:text-[#fcf9f8]">CURATOR</div>
          <div className="hidden md:flex items-center gap-10">
            <a className="font-['Noto_Serif'] uppercase tracking-[0.1em] text-[12px] font-medium text-[#775a19] border-b border-[#775a19] pb-1 hover:tracking-[0.2em] transition-all duration-300" href="#">Home</a>
            <a className="font-['Noto_Serif'] uppercase tracking-[0.1em] text-[12px] font-medium text-[#1c1b1b] dark:text-[#fcf9f8] hover:tracking-[0.2em] transition-all duration-300" href="#">Blog</a>
            <a className="font-['Noto_Serif'] uppercase tracking-[0.1em] text-[12px] font-medium text-[#775a19] border-b border-[#775a19] pb-1 hover:tracking-[0.2em] transition-all duration-300" href="#">Gallery</a>
            <a className="font-['Noto_Serif'] uppercase tracking-[0.1em] text-[12px] font-medium text-[#1c1b1b] dark:text-[#fcf9f8] hover:tracking-[0.2em] transition-all duration-300" href="#">Shop</a>
            <a className="font-['Noto_Serif'] uppercase tracking-[0.1em] text-[12px] font-medium text-[#1c1b1b] dark:text-[#fcf9f8] hover:tracking-[0.2em] transition-all duration-300" href="#">Booking</a>
            <a className="font-['Noto_Serif'] uppercase tracking-[0.1em] text-[12px] font-medium text-[#1c1b1b] dark:text-[#fcf9f8] hover:tracking-[0.2em] transition-all duration-300" href="#">Contacts</a>
          </div>
          <div className="flex items-center gap-6">
            <button className="material-symbols-outlined text-on-surface" data-icon="search">search</button>
            <button className="material-symbols-outlined text-on-surface" data-icon="shopping_bag">shopping_bag</button>
            <button className="md:hidden material-symbols-outlined text-on-surface" data-icon="menu">menu</button>
          </div>
        </nav>
      </header>
      <main className="pt-32 pb-24 px-6 md:px-12">

        <section className="max-w-7xl mx-auto mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-2xl">
            <span className="font-label text-[10px] tracking-[0.2em] uppercase text-primary mb-4 block">Archive 2026</span>
            <h1 className="font-headline text-5xl md:text-7xl font-bold leading-tight text-on-surface">Visual Narrative &amp; <span className="italic font-normal">Light Studies</span></h1>
          </div>
          <div className="hidden md:block text-right">
            <p className="font-label text-xs tracking-widest uppercase text-secondary">Curating moments through</p>
            <p className="font-label text-xs tracking-widest uppercase text-secondary">an editorial lens.</p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto mb-16 border-b border-outline-variant border-opacity-20 pb-4 overflow-x-auto">
          <div className="flex gap-12 whitespace-nowrap">
            <button className="font-label text-[11px] tracking-[0.15em] uppercase text-primary font-bold border-b border-primary pb-4 transition-all">All Projects</button>
            <button className="font-label text-[11px] tracking-[0.15em] uppercase text-on-surface hover:text-primary transition-all pb-4">Fashion</button>
            <button className="font-label text-[11px] tracking-[0.15em] uppercase text-on-surface hover:text-primary transition-all pb-4">Lifestyle</button>
            <button className="font-label text-[11px] tracking-[0.15em] uppercase text-on-surface hover:text-primary transition-all pb-4">Nature</button>
            <button className="font-label text-[11px] tracking-[0.15em] uppercase text-on-surface hover:text-primary transition-all pb-4">Portraits</button>
            <button className="font-label text-[11px] tracking-[0.15em] uppercase text-on-surface hover:text-primary transition-all pb-4">Studio</button>
            <button className="font-label text-[11px] tracking-[0.15em] uppercase text-on-surface hover:text-primary transition-all pb-4">Video</button>
          </div>
        </section>

        <section className="max-w-7xl mx-auto">
          <div className="masonry-grid">

            <div className="masonry-item group cursor-pointer">
              <div className="overflow-hidden bg-surface-container-low aspect-[3/4]">
                <img alt="Editorial portrait" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Editorial close-up portrait of a woman with dramatic shadows and soft warm lighting in a high-fashion studio setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHXbP2YrGl_QLUVkcHVel5vASut2ovhH2VosGzAmda33VGXDwCBXBNrU5K7JXus2xAyQRzLSQVmJwF3745qUlmoWHhRMUpATW-Wdyg2AFk7lhRwW4auvJJTbZ7ataM1rCNmVRfcDbjTB21rRZpvG54iFp8psxLdRVp0N1R8pd3Q5Obf7_xdRTJUJmINj0RH5TRy08Zeerhb2c1-q87XgG9CT0kTRUdfxoXbF6_hecMXDR9J7esoI---_HuzG2X-3_m_ax9eZNCLf8" />
              </div>
              <div className="mt-4 flex justify-between items-start">
                <div>
                  <h3 className="font-headline text-lg text-on-surface">The Silhouette Series</h3>
                  <p className="font-label text-[10px] tracking-widest uppercase text-secondary mt-1">Fashion / 2026</p>
                </div>
                <span className="material-symbols-outlined text-primary text-sm" data-icon="north_east">north_east</span>
              </div>
            </div>

            <div className="masonry-item group cursor-pointer">
              <div className="overflow-hidden bg-surface-container-low aspect-square">
                <img alt="Architectural study" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Minimalist architectural photography showing clean lines of a brutalist concrete building against a sharp blue sky" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAehsVaGqqFaPhprLZT7F34xv94Nz5ASjbm2MD8mmjB9k4xYOyu9y35-xfDDoKbdjxh21K4M84D6a7tA9iV17mk0x_K9Pc6qYNwCIzasaP5172hcjgi3TuFN1tsEBrSAX-JZU03AzcLrIhfcD4rWbIh2BVNCBzxHGqqLkVK_ZiXZ0T0FuEIAHfKN3s5a7t9Npvm_GcWhsL7Cc8UvKJiJa7Ijn1d2uimpiu2mgK9ixMM6hOFgYih3Iw0VyPqsNYUzG9iWtsXgHKTmjc" />
              </div>
              <div className="mt-4 flex justify-between items-start">
                <div>
                  <h3 className="font-headline text-lg text-on-surface">Monolith Structure</h3>
                  <p className="font-label text-[10px] tracking-widest uppercase text-secondary mt-1">Studio / 2023</p>
                </div>
                <span className="material-symbols-outlined text-primary text-sm" data-icon="north_east">north_east</span>
              </div>
            </div>

            <div className="masonry-item group cursor-pointer">
              <div className="overflow-hidden bg-surface-container-low aspect-[16/9]">
                <img alt="Forest landscape" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Dreamy forest landscape with morning mist filtering through tall trees and lush green ferns in soft focus" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcbB5wLecU0MsGAfV17cRBaCoPmMR-bnxyoXHBeAjIzEFUje8FyAc_-ukmWc1cbOk3vu-GVLqgQa1V7zh8kXEofhHEYcy3MDg-P4YKCuKfPgMWe0wjWmaAMAQCUh0UPO__7iskbwpT8aShbXpvV5M8XGPUR32Qf6_2i2rte0k64qyn1EQx8-V4dbgsXM40PKIb1pwWAm2sMTnfjVqaXxT6oPP_ml5FZ78MMptLNLkk9mVWqSBMv8X0j0WdvanIBEIh9CNnqPsH0Vo" />
              </div>
              <div className="mt-4 flex justify-between items-start">
                <div>
                  <h3 className="font-headline text-lg text-on-surface">Ancient Growth</h3>
                  <p className="font-label text-[10px] tracking-widest uppercase text-secondary mt-1">Nature / 2026</p>
                </div>
                <span className="material-symbols-outlined text-primary text-sm" data-icon="north_east">north_east</span>
              </div>
            </div>

            <div className="masonry-item group cursor-pointer py-12">
              <div className="overflow-hidden bg-surface-container-low aspect-square rounded-full mx-auto w-4/5">
                <img alt="Minimal object" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Minimalist product shot of a sleek white ceramic vase on a light wood surface with soft morning light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdCsc777fgaJe6SGU9CUvpPYQ6MZx4SIZ_6V0fjDLARLzOKb5sxqmLL3eFoR69sjL0q1-etDTevAbZJT0e2HXwhLTOd3A2nQa6XzJh26QKdR1ujNusgRPqui6gLyHXBplYZP4-vqzK7rN1NgldFuaQqXeaovBHXOJwgjLS6ZiFEk5d0U_qg6ARGT_ZgHf3lGMnSwBUdU6dG2nxzYmda4EwQNVi46Qnqf-q5wcsRE2UrfbxlKGGxf5Hl3M8YNrTXseeV8hzHpP8z54" />
              </div>
              <div className="mt-8 text-center">
                <h3 className="font-headline text-lg text-on-surface">Focal Points</h3>
                <p className="font-label text-[10px] tracking-widest uppercase text-secondary mt-1">Lifestyle / 2026</p>
              </div>
            </div>

            <div className="masonry-item group cursor-pointer">
              <div className="overflow-hidden bg-surface-container-low aspect-[3/5]">
                <img alt="Street portrait" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Cinematic street photography portrait of a person in a bustling city at dusk with neon lights reflecting in puddles" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoaCIjCqnY7NaeVMCS_wYoTkCbE9Do8tdi-3tu8x_eI1o2pyuDX4-NZ6-sq7utQ2lHdOx7coq-BVfiw5SF8P7XxcgEGA2sYMUID__VvesS8EpjObWL-Tp4U3nN3iiRAZWqFY8SyGvUkm_YzoupxCPchGFe7xV13gT4bUjrRShIlssn8t3UruapylxCp9diMgkdX4ftqDNkPyASPV62DtIvDG4Sv_NhxKcVjUg3Z0Bqod56uaGftA6WlabaUKG2RsI0mk0qvWG-6rY" />
              </div>
              <div className="mt-4 flex justify-between items-start">
                <div>
                  <h3 className="font-headline text-lg text-on-surface">After Hours</h3>
                  <p className="font-label text-[10px] tracking-widest uppercase text-secondary mt-1">Lifestyle / 2023</p>
                </div>
                <span className="material-symbols-outlined text-primary text-sm" data-icon="north_east">north_east</span>
              </div>
            </div>

            <div className="masonry-item group cursor-pointer">
              <div className="overflow-hidden bg-surface-container-low aspect-[4/3]">
                <img alt="Mountain peak" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Aerial view of snow-capped mountain peaks at sunrise with golden light hitting the ridges and deep blue shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqK4F1cGSjW-HFO0sMx89-WIcwWPuFHdruOCpZpXs5kYnklpR7bnvasQmF0dCIfV5vn3xdqlkrCeWe1_u0JKWsZ67fLQxvdpQ4lc2zU2upq4hpJIwJUg9mw-B_WSGXRj6fLVZEJ2UIpn3Nqieiz8qxIssL80kCSIgGuZl-USHhAmmBKGq69dtQZWuqUvMuSlZatU55ljYuKtJmYWIcN031T7hSKrjaMYs6czwQfqzrIset8u2S8hQVX4M5VFablbvUX6Kb52MV3S4" />
              </div>
              <div className="mt-4 flex justify-between items-start">
                <div>
                  <h3 className="font-headline text-lg text-on-surface">The High Ground</h3>
                  <p className="font-label text-[10px] tracking-widest uppercase text-secondary mt-1">Nature / 2026</p>
                </div>
                <span className="material-symbols-outlined text-primary text-sm" data-icon="north_east">north_east</span>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto mt-32 py-24 bg-surface-container-low text-center border-t border-outline-variant border-opacity-10">
          <h2 className="font-headline text-3xl md:text-5xl mb-8">Ready to start a <span className="italic">project?</span></h2>
          <button className="bg-primary text-on-primary font-label text-[12px] tracking-[0.2em] uppercase px-12 py-5 hover:bg-on-primary-container transition-colors">Book a session</button>
        </section>
      </main>

      <footer className="bg-[#dcd9d9] dark:bg-[#121212] w-full py-12 px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8">
          <div className="text-lg font-['Noto_Serif'] font-bold text-[#1c1b1b]">CURATOR</div>
          <div className="flex gap-12">
            <a className="font-['Manrope'] text-[10px] tracking-widest uppercase text-[#1c1b1b] dark:text-[#fcf9f8] hover:text-[#775a19] transition-colors" href="#">Privacy Policy</a>
            <a className="font-['Manrope'] text-[10px] tracking-widest uppercase text-[#1c1b1b] dark:text-[#fcf9f8] hover:text-[#775a19] transition-colors" href="#">Terms of Service</a>
            <a className="font-['Manrope'] text-[10px] tracking-widest uppercase text-[#1c1b1b] dark:text-[#fcf9f8] hover:text-[#775a19] transition-colors" href="#">FAQ</a>
          </div>
          <div className="font-['Manrope'] text-[10px] tracking-widest uppercase text-[#775a19]">
            © 2026 RAWCINEMA.NP. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>

      <div className="fixed bottom-8 right-8 z-40">
        <button className="bg-primary text-on-primary w-14 h-14 flex items-center justify-center shadow-xl hover:scale-105 transition-transform active:scale-95">
          <span className="material-symbols-outlined" data-icon="mail">mail</span>
        </button>
      </div>
    </>
  );
}
