

export default function Component() {
  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-[#fcf9f8] dark:bg-[#1c1b1b]">
        <nav className="flex justify-between items-center px-12 h-20 w-full">
          <div className="text-2xl font-['Noto_Serif'] font-bold tracking-tighter text-[#1c1b1b] dark:text-[#fcf9f8]">CURATOR</div>
          <div className="hidden md:flex items-center space-x-8">
            <a className="font-['Noto_Serif'] uppercase tracking-[0.1em] text-[12px] font-medium text-[#1c1b1b] dark:text-[#fcf9f8] hover:tracking-[0.2em] transition-all duration-300" href="#">Home</a>
            <a className="font-['Noto_Serif'] uppercase tracking-[0.1em] text-[12px] font-medium text-[#775a19] border-b border-[#775a19] pb-1 hover:tracking-[0.2em] transition-all duration-300" href="#">Blog</a>
            <a className="font-['Noto_Serif'] uppercase tracking-[0.1em] text-[12px] font-medium text-[#1c1b1b] dark:text-[#fcf9f8] hover:tracking-[0.2em] transition-all duration-300" href="#">Gallery</a>
            <a className="font-['Noto_Serif'] uppercase tracking-[0.1em] text-[12px] font-medium text-[#1c1b1b] dark:text-[#fcf9f8] hover:tracking-[0.2em] transition-all duration-300" href="#">Shop</a>
            <a className="font-['Noto_Serif'] uppercase tracking-[0.1em] text-[12px] font-medium text-[#1c1b1b] dark:text-[#fcf9f8] hover:tracking-[0.2em] transition-all duration-300" href="#">Booking</a>
            <a className="font-['Noto_Serif'] uppercase tracking-[0.1em] text-[12px] font-medium text-[#1c1b1b] dark:text-[#fcf9f8] hover:tracking-[0.2em] transition-all duration-300" href="#">Contacts</a>
          </div>
          <div className="flex items-center space-x-6">
            <button className="material-symbols-outlined text-[#775a19] dark:text-[#c5a059]">shopping_bag</button>
            <button className="md:hidden material-symbols-outlined">menu</button>
          </div>
        </nav>
      </header>
      <main className="pt-28 pb-20">

        <section className="px-12 mb-16">
          <div className="max-w-4xl">
            <p className="font-label text-[10px] tracking-[0.3em] uppercase text-primary mb-4">The Editorial Space</p>
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">Collections &amp; Stories</h1>
            <div className="flex items-start gap-12">
              <div className="w-px h-24 bg-outline-variant opacity-30 mt-2"></div>
              <p className="text-secondary max-w-lg leading-relaxed">A curated narrative of visual excellence, spanning across couture editorials, architectural studies, and intimate human portraits. Discover the essence of the Digital Curator.</p>
            </div>
          </div>
        </section>

        <section className="mb-24 overflow-hidden">
          <div className="px-12 mb-8 flex justify-between items-end">
            <h2 className="font-headline text-2xl font-bold">Featured Collections</h2>
            <div className="flex space-x-4">
              <button className="w-12 h-12 border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined">west</span>
              </button>
              <button className="w-12 h-12 border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined">east</span>
              </button>
            </div>
          </div>
          <div className="flex overflow-x-auto hide-scrollbar gap-8 px-12 pb-8">

            <div className="min-w-[80vw] md:min-w-[45vw] group relative aspect-[4/5] bg-surface-container">
              <img alt="Collection One" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="striking high-fashion editorial portrait of a woman with avant-garde makeup in a minimalist architectural setting with harsh artistic shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoLR2rGzdoJF-mzc4z-yKrLFmtCALj16lQ-Z59Wc9CGEAVvfbnz2-nB3VweoTuOMruQwgNgEvONonFmHktRpiYsgMqgmuSWs1GSSJl4xlf2yMFutSCbOiP2982iEsslcsGzwifZkAGZterBwoFbh7fZ5whXOJqvvnHCQ088C9hOy84hI1AocPYmwVV5113wNNcopUipq7UTzB4_fxKFeAwkJ9x6yhoeC3aSKfc3Q691a9QCtL2HFGjCCSAAMoUHsP12mLSdgYS9Sw" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500"></div>

              <div className="absolute top-8 left-8 right-8 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <button className="bg-primary text-on-primary px-8 py-3 font-label text-[10px] tracking-widest uppercase hover:bg-on-primary-container transition-colors">PURCHASE</button>
                <button className="bg-surface text-on-surface px-8 py-3 font-label text-[10px] tracking-widest uppercase hover:bg-surface-container-high transition-colors">OPTIONS</button>
              </div>
              <div className="absolute bottom-8 left-8">
                <p className="font-label text-[10px] tracking-widest text-white/70 uppercase mb-2">Series 01</p>
                <h3 className="font-headline text-3xl text-white font-bold uppercase tracking-tight">The Ethereal Gaze</h3>
              </div>
            </div>

            <div className="min-w-[80vw] md:min-w-[45vw] group relative aspect-[4/5] bg-surface-container">
              <img alt="Collection Two" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="dramatic wide angle shot of modern Brutalist architecture with raw concrete textures and sharp geometric lines against a clear blue sky" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7OdEBVQvUZIkPkDZe0Nz_GdHAkKNUZHCUv2kLMdrRXVI0fnTuU7XOtGxBJGB4LszMJlP84oPOv33YSUU2wAiOpO0n2xl_hA6P93JV979kqhhQFjpZLwMnRuDZA9ZcnOcoQef1Z7uYORZ8UJtBUw7kE1lUq7YEsuDf4H-tlqm2uRsjuXXzsSaiCjCNedrNzjqyD3HCheaF0tk_RnOE0ZR_BJqa_KJkda4HuHLgk751nFiEJY79MS-rzY0lnfAkaGt7rurIfS_8IYY" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500"></div>

              <div className="absolute top-8 left-8 right-8 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <button className="bg-primary text-on-primary px-8 py-3 font-label text-[10px] tracking-widest uppercase">PURCHASE</button>
                <button className="bg-surface text-on-surface px-8 py-3 font-label text-[10px] tracking-widest uppercase">OPTIONS</button>
              </div>
              <div className="absolute bottom-8 left-8">
                <p className="font-label text-[10px] tracking-widest text-white/70 uppercase mb-2">Series 02</p>
                <h3 className="font-headline text-3xl text-white font-bold uppercase tracking-tight">Urban Monoliths</h3>
              </div>
            </div>

            <div className="min-w-[80vw] md:min-w-[45vw] group relative aspect-[4/5] bg-surface-container">
              <img alt="Collection Three" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="editorial street style photography featuring vibrant colors and dynamic movement in a contemporary urban environment with warm daylight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARH5ExzSZpXoQRuHKOhjV_A589ig48aF_CoI7r0GAhkZ46m3coWfjD81kKGeBN1xOsugUOSecRhqXGzL-eMTgkj6pK5vguSPdwzUx6qvRBKbiX3jA4h41_kIE_tVTxoguiUXpAiw8shTL-rLpivzTFX5-N1XAmzp68jOFqIT4qcdvpl4f6NyEov3yydXD1XwCBETvqMsFUSPAwON2u6kkLNdLT5O21hX0ZAw7oAq3_91l-4EdFidwrx38hUQ5Kq0mQS0ADCL6rPyg" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500"></div>

              <div className="absolute top-8 left-8 right-8 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <button className="bg-primary text-on-primary px-8 py-3 font-label text-[10px] tracking-widest uppercase">PURCHASE</button>
                <button className="bg-surface text-on-surface px-8 py-3 font-label text-[10px] tracking-widest uppercase">OPTIONS</button>
              </div>
              <div className="absolute bottom-8 left-8">
                <p className="font-label text-[10px] tracking-widest text-white/70 uppercase mb-2">Series 03</p>
                <h3 className="font-headline text-3xl text-white font-bold uppercase tracking-tight">Vivid Motion</h3>
              </div>
            </div>
          </div>
        </section>

        <section className="px-12 mb-24">
          <h2 className="font-headline text-3xl font-bold mb-12">Latest Journal Entries</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

            <article className="md:col-span-8 bg-surface-container-low group cursor-pointer">
              <div className="aspect-video overflow-hidden">
                <img alt="Journal Post" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" data-alt="minimalist artist studio with large windows pouring in soft morning light highlighting paint brushes and blank canvases on wooden floor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPGgImNEsIQaV_1yyOwqg9qFgMTZaTfOFLlBKSlL7ouo-eMXtc2m9MZt85TlzWWJ2GOFOGv-Pcz6EFo_ezfXu5p6EjHwlxhDXI73yC1ZzcWnjU3EMAByWp4lxhEm1-l8a_fzkNon40PSzjoUIVVgnvfDeFyE_g7sMswHSYoMgCbSKB9j2NXvvTjzqGBbnavdxLaiwBOt4Tos9xSyptCSj0ps_U7Nmb--AQiY-gM8jOrIAp_gzj7SLdGrDSoCs9_6R4n7Qtqeq_wI4" />
              </div>
              <div className="p-8">
                <p className="font-label text-[10px] tracking-widest text-primary uppercase mb-4">Behind the Lens</p>
                <h3 className="font-headline text-3xl mb-4">The Art of Stillness in Modern Photography</h3>
                <p className="text-secondary max-w-2xl mb-6">Exploring the relationship between silent environments and the impact of the final image capture. How we find peace in the chaos of creation.</p>
                <a className="inline-flex items-center text-primary font-label text-[11px] tracking-widest font-bold uppercase group" href="#">Read Story <span className="material-symbols-outlined ml-2 text-[16px] group-hover:translate-x-1 transition-transform">east</span></a>
              </div>
            </article>

            <div className="md:col-span-4 flex flex-col gap-8">
              <article className="bg-surface-container-low group cursor-pointer p-6">
                <p className="font-label text-[10px] tracking-widest text-primary uppercase mb-2">Technical</p>
                <h4 className="font-headline text-xl mb-4 group-hover:text-primary transition-colors">Curating for the Digital Age</h4>
                <p className="text-sm text-secondary mb-4 line-clamp-2">A guide on how to select and sequence images for online gallery presentations to maximize viewer engagement.</p>
                <span className="text-[10px] font-bold text-outline uppercase tracking-widest">May 12, 2026</span>
              </article>
              <article className="bg-surface-container-low group cursor-pointer p-6">
                <p className="font-label text-[10px] tracking-widest text-primary uppercase mb-2">Philosophy</p>
                <h4 className="font-headline text-xl mb-4 group-hover:text-primary transition-colors">Finding Color in Monochrome</h4>
                <p className="text-sm text-secondary mb-4 line-clamp-2">An essay on the tonal range and emotional depth found within the constraints of black and white photography.</p>
                <span className="text-[10px] font-bold text-outline uppercase tracking-widest">April 28, 2026</span>
              </article>
              <div className="flex-grow flex items-center justify-center border border-outline-variant border-dashed p-12">
                <div className="text-center">
                  <p className="font-headline italic text-lg mb-4">Join our Newsletter</p>
                  <div className="relative">
                    <input className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary font-label text-[10px] tracking-widest py-2" placeholder="YOUR@EMAIL.COM" type="email" />
                    <button className="absolute right-0 bottom-2 text-primary font-bold text-[10px] tracking-widest">SIGN UP</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-dim pt-20 pb-24 px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="font-headline text-3xl font-bold mb-4 uppercase tracking-tighter">The Social Pulse</h2>
              <p className="text-secondary font-label text-[11px] tracking-widest">FOLLOW US ACROSS THE DIGITAL LANDSCAPE</p>
            </div>
            <div className="flex gap-4">
              <a className="w-10 h-10 flex items-center justify-center border border-on-surface/20 rounded-full hover:bg-on-surface hover:text-surface transition-all" href="#">
                <span className="font-bold text-[12px] uppercase">IG</span>
              </a>
              <a className="w-10 h-10 flex items-center justify-center border border-on-surface/20 rounded-full hover:bg-on-surface hover:text-surface transition-all" href="#">
                <span className="font-bold text-[12px] uppercase">FB</span>
              </a>
              <a className="w-10 h-10 flex items-center justify-center border border-on-surface/20 rounded-full hover:bg-on-surface hover:text-surface transition-all" href="#">
                <span className="font-bold text-[12px] uppercase">TK</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="aspect-square bg-surface-container relative group overflow-hidden">
              <img alt="Social Feed 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="tight close-up of a model's face with dramatic lighting, soft grain texture, and high editorial aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcKxi4Rwf6hN6zWBgVwtFnGX9ITdvz8LG5SrQ0jtXvyrqaNLK33EDphmh-8EIoW1y8Dt6jMy_i9mHO6G45jeXEJMcra9WGde4hgFLmTMGhhuQQHEznHTSB3YLt4fOPBUoQ1Oz9dZ6OCGDRDI_He9zbAidToS8GzEIbakE4CMuFcTV0A6KDBxgka4FACqhQqbIBxl7K0xqmqsEwTwdXekwfgEQfb_NriXHJuuhwq0HHYpiqf7akWNyiZsXGAl-rc6FUVuAC3eth2iU" />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <span className="material-symbols-outlined text-white text-3xl">favorite</span>
              </div>
            </div>
            <div className="aspect-square bg-surface-container relative group overflow-hidden">
              <img alt="Social Feed 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="moody portrait of a man in shadows wearing a dark coat with a cinematic lighting setup and premium textures" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGSSsOBvUj31LakDev_ADIQAqa31IVK34zSLOgH2NWD1VvK7kxHZrve1kSSngfcWJQ82pBgtgA9EQGBGoR4c2PuDJFxwtSp8VO60HyjIOogmUnPjOJKwBwceTjKEyOoguTZu9V_lYHs6cSsbyXQPAwBAMYsxMYvhilWefEsR2sWJoB9SQnhWjbkq_7Zsz41s1i45hP4WU-oHeuYaI9yFOrN69904zi_0BgqdGSyOIsLBvdwQoJrIuIl02uUFJVvcOKypC1KOMkgLk" />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <span className="material-symbols-outlined text-white text-3xl">chat_bubble</span>
              </div>
            </div>
            <div className="aspect-square bg-surface-container relative group overflow-hidden lg:col-span-1">
              <img alt="Social Feed 3" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="black and white architecture photography of an ornate spiral staircase with repeating patterns and strong geometric perspective" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlD6KcFZj_RlFMtpsArNPsESqYPaAqOQFT4Rdsb9Fv5Ftw3EcLjmvWZbKTVusdE0jpWsSndwZyEMciVpMP2j0rB_aj5KtUR_BYyMDsvQL62bVPrdOL5F-VDCXsk29qMVFrSjoI_Ncw-yosuILRC5FcHzLkgGVyrQ89RIiOXL7E58sTA7QIuuJxwtfqw61xQOfe59ZgWiU7EnMZvmQJFhZyb2QYQjl-xjJTLAWmnsr3y38KZ73dn1WcW7icLn5rE7gVKhIR1hh7pnE" />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <span className="material-symbols-outlined text-white text-3xl">share</span>
              </div>
            </div>
            <div className="aspect-square bg-surface-container relative group overflow-hidden">
              <img alt="Social Feed 4" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="misty mountain landscape at dawn with layers of blue and grey silhouettes under a soft pastel sky" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQ0uyyKCx7EaKeEaPKiGRizBM9YiLxgARF2uA3b84Pwm4ULiDPJ0-NbiSM_AuFG1dPnTfizkqD7IAys3tkCpw2z8waO_N0FCr9nHHMKU8xFl0wCSwJ0dEWsN_fDBVi3z22hbAyqYQP4vw0hsic_LBxE56fDOtNti0lzTENCYi2wCLtZJrPX9KQkDwFiCRv04PV4iLZGmKurcmUq0uW7vuoAz8_GebWCbZvFIaKYSrJb-x_br-BmY5H0cJUIZvbwWvIRtaH5O-kXEo" />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <span className="material-symbols-outlined text-white text-3xl">favorite</span>
              </div>
            </div>
            <div className="aspect-square bg-surface-container relative group overflow-hidden">
              <img alt="Social Feed 5" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="lifestyle photography of modern work desk with high-end tech accessories, a leather notebook, and a designer coffee mug" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3mC5FZnMKpDI4zfSO2fD4Pr8tXjJgdKVrxU0DkzRBzaP_5upQKluavkuXYn8fQqyDiXyyW9n7n_Ks9Ap1KUhhoUnaagl60tN6gVRiU33Psad0so9Jo-6ZMMH0zwPIRoEGQLQ3Utvf5VxIJltfztQmw1nL1Li8M-ULlrQUYaQyPpK7stJaHhPYqToPaxoSUWBMMk8cdRnJCFBIk-FX79ZOxGBlTFW9Yq93aaoKOdQa7HYgaU1uW1kZK1QGcC1NW77IOIYA895oiYE" />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <span className="material-symbols-outlined text-white text-3xl">bookmark</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#dcd9d9] dark:bg-[#121212] w-full py-12 px-12">
        <div className="flex flex-col md:flex-row justify-between items-center w-full mb-12">
          <div className="text-lg font-['Noto_Serif'] font-bold text-[#1c1b1b] mb-8 md:mb-0">CURATOR</div>
          <div className="flex flex-wrap justify-center gap-8">
            <a className="font-['Manrope'] text-[10px] tracking-widest uppercase text-[#1c1b1b] dark:text-[#fcf9f8] hover:text-[#775a19] transition-colors" href="#">Privacy Policy</a>
            <a className="font-['Manrope'] text-[10px] tracking-widest uppercase text-[#1c1b1b] dark:text-[#fcf9f8] hover:text-[#775a19] transition-colors" href="#">Terms of Service</a>
            <a className="font-['Manrope'] text-[10px] tracking-widest uppercase text-[#1c1b1b] dark:text-[#fcf9f8] hover:text-[#775a19] transition-colors" href="#">FAQ</a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center w-full pt-8 border-t border-outline-variant/20">
          <p className="font-['Manrope'] text-[10px] tracking-widest uppercase text-[#775a19] mb-4 md:mb-0">© 2026 THE DIGITAL CURATOR. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-[#775a19]">language</span>
            <span className="font-['Manrope'] text-[10px] tracking-widest uppercase text-[#1c1b1b] dark:text-[#fcf9f8]">ENGLISH (US)</span>
          </div>
        </div>
      </footer>
    </>
  );
}
