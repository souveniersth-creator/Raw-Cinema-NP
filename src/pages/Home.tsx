

export default function Component() {
  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-[#fcf9f8] flex justify-between items-center px-6 md:px-12 h-20">
        <div className="text-2xl font-['Noto_Serif'] font-bold tracking-tighter text-[#1c1b1b]">RAWCINEMA.NP</div>

        <div className="hidden md:flex items-center gap-10">
          <a className="font-['Noto_Serif'] uppercase tracking-[0.1em] text-[12px] font-medium text-[#775a19] border-b border-[#775a19] pb-1 hover:tracking-[0.2em] transition-all duration-300" href="#">Home</a>
          <a className="font-['Noto_Serif'] uppercase tracking-[0.1em] text-[12px] font-medium text-[#1c1b1b] hover:tracking-[0.2em] transition-all duration-300" href="#">Blog</a>
          <a className="font-['Noto_Serif'] uppercase tracking-[0.1em] text-[12px] font-medium text-[#1c1b1b] hover:tracking-[0.2em] transition-all duration-300" href="#">Gallery</a>
          <a className="font-['Noto_Serif'] uppercase tracking-[0.1em] text-[12px] font-medium text-[#1c1b1b] hover:tracking-[0.2em] transition-all duration-300" href="#">Shop</a>
          <a className="font-['Noto_Serif'] uppercase tracking-[0.1em] text-[12px] font-medium text-[#1c1b1b] hover:tracking-[0.2em] transition-all duration-300" href="#">Booking</a>
          <a className="font-['Noto_Serif'] uppercase tracking-[0.1em] text-[12px] font-medium text-[#1c1b1b] hover:tracking-[0.2em] transition-all duration-300" href="#">Contacts</a>
        </div>
        <div className="flex items-center gap-6">
          <button className="material-symbols-outlined text-on-surface" data-icon="shopping_bag">shopping_bag</button>
          <button className="md:hidden material-symbols-outlined text-on-surface" data-icon="menu">menu</button>
        </div>
      </nav>
      <main className="pt-20">

        <section className="relative h-[921px] flex flex-col justify-center items-center px-6 md:px-12 overflow-hidden bg-surface">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
            <span className="text-[20vw] font-headline font-bold text-on-surface leading-none">RAWCINE</span>
          </div>

          <div className="relative w-full max-w-6xl h-[614px] md:h-[716px] flex items-center justify-center overflow-hidden">
            <iframe
              className="absolute w-[300vw] h-[300%] md:w-[150vw] md:h-[150%] pointer-events-none"
              src="https://www.youtube.com/embed/hkjtFKvHRT0?autoplay=1&mute=1&controls=0&loop=1&playlist=hkjtFKvHRT0&rel=0&modestbranding=1&playsinline=1&vq=hd1080"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-black/20">
              {/* <h1 className="text-white font-headline text-4xl md:text-7xl lg:text-8xl tracking-tight max-w-4xl mix-blend-difference">
                Love will tear us apart again.
              </h1> */}
            </div>
          </div>
          <div className="absolute bottom-12 right-12 hidden md:block">
            <p className="font-label text-[10px] tracking-[0.2em] uppercase text-primary">SCROLL TO DISCOVER</p>
            <div className="w-[1px] h-12 bg-primary mx-auto mt-4"></div>
          </div>
        </section>

        <section className="pt-12 pb-32 px-6 md:px-12 bg-surface">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-5">
              <span className="font-label text-[10px] tracking-[0.2em] uppercase text-primary mb-8 block">THE VISION</span>
              <h2 className="text-5xl md:text-7xl font-headline leading-tight mb-8">Capturing the <br /> <span className="italic">unspoken</span> rhythm.</h2>
              <p className="font-body text-secondary leading-relaxed max-w-md">
                In the heart of every frame lies a story waiting to be told. Our approach to photography is rooted in the digital curator philosophy—where every element is intentionally selected to evoke raw, human emotion.
              </p>
              <div className="mt-12">
                <button className="bg-primary text-on-primary px-12 py-5 font-label text-[12px] tracking-[0.1em] uppercase hover:bg-on-primary-container transition-colors">
                  VIEW PORTFOLIO
                </button>
              </div>
            </div>
            <div className="md:col-span-7 flex justify-end">
              <div className="w-full md:w-4/5 aspect-[4/5] bg-surface-container-low p-4">
                <img className="w-full h-full object-cover" data-alt="artistic fashion photograph of flowing fabrics in a minimalist industrial space, sharp shadows, high contrast black and white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxVPKeZKDy2XMdlqRcwZmVPswwfBphcuSs2SizBn7qlZV73IP6ZmrtF3c9sg-geo6n7l9Ok1Rl7AO0qc6tEhYHd_m-NCy4KkNJzE2HEVkdKvx3oY4bLjSYIfqr4qLSKZX9lN2i1Y6USzuPIF1jx9CM7F5u7tQa-MFLSSTcjcizdSsGZy8pS58w3EM2JDSzc__w86Jk2OaZnGrr2_c2IaCC_MeNXGYcz9R155fB3EPx5OQzABjRRPvjoXcHmJFfHISxPeRLsqpgKpI" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 px-6 md:px-12 bg-surface">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-headline mb-4">Latest <span className="text-primary">Works</span></h2>
            <div className="w-12 h-[2px] bg-outline-variant mx-auto mb-12"></div>

            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 font-label text-[10px] tracking-[0.2em] uppercase text-secondary">
              <a className="text-primary border-b border-primary pb-1" href="#">ALL</a>
              <a className="hover:text-on-surface transition-colors" href="#">FASHION</a>
              <a className="hover:text-on-surface transition-colors" href="#">LIFESTYLE</a>
              <a className="hover:text-on-surface transition-colors" href="#">NATURE</a>
              <a className="hover:text-on-surface transition-colors" href="#">PORTRAITS</a>
              <a className="hover:text-on-surface transition-colors" href="#">STUDIO</a>
              <a className="hover:text-on-surface transition-colors" href="#">VIDEO</a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">

            <div className="grid gap-6">
              <div className="relative overflow-hidden group cursor-pointer">
                <img alt="Latest work 1" className="w-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTuOXsxvsS45MootezTBcJpZLJKgm-aWcNsckIxM0pBegr2NtPwHdDG9OcDA1ZfVT5GBh7QwBop-uhtq_3DtRQX8THhN1F44ET7e5OMt9bxLh8orMqWhumzqapCUxPpgtYyBYLLX4IjBTjJXfhao9-OjD36a3Xvm4mU4PbxUrH43649R3zjx7yIE7LGwji0skQe0YzaWH3iaAmPFYyCPU08FgwpVh2egDSI-hATu7nPOhkZCZU_zadUfshHl-vEskkM0q5TDWebhQ" />
                <div className="absolute top-4 right-4 text-white opacity-80 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-[20px]" data-icon="play_circle">play_circle</span>
                </div>
              </div>
              <div className="relative overflow-hidden group cursor-pointer">
                <img alt="Latest work 2" className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALrH3_IDQXf4GuUMHADy5Hz6iEza9wdwcsN_mmovd9IWlpWqdLSBWTp1Msctp9yKooqItKGGA7DSdjH9C_5E-CC9m4Ym2KOfJader7zdxr6u3_McEBrC9LQEIdOk7IViNFeK_fDmOSxNLcJAbQKCg-hjCswGmMUqJoqVzn4ciMjgcaoNFgp-kelOvjw79s5WGQfidpOUGjEL1a8OT8-rm5Ey--c10DfetdI-53jATJhnCW9r3ZN_n9Sooni1QokGKrcEc7mfNvq4s" />
              </div>
            </div>

            <div className="grid gap-6">
              <div className="relative overflow-hidden group cursor-pointer">
                <img alt="Latest work 3" className="w-full aspect-[2/3] object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxz6VWTcDUCFXKW1KXFt7aY068oap3Mk7iAdF73SVIG-ICng7Tw-R2M5h2A9COswHm3H4vSnxTrZUsAq-STCw1y5oYEpMTC7pvPg7TMJcS-f4PaP9hi-g-fIIvYB_5O8ZePQBfVelp4V-6D7h9pGqMFdgEpuqaA4JzPjh_2Nt5_MMPZFsdlOAgucQDxfU5nbl42mwlJp8saQUExQ_XmW-IyC160Kf-CVrtgomj-pUrh7fZq7WkqFSlfu4uNxGzdeswo7vc8GinsYs" />
                <div className="absolute top-4 right-4 text-white opacity-80 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-[20px]" data-icon="play_circle">play_circle</span>
                </div>
              </div>
              <div className="relative overflow-hidden group cursor-pointer">
                <img alt="Latest work 4" className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhTv2KscmUSapjIvIDjPDVOhSrSGQA-cApJTcw98q1-zZ6Eu8GnoGp46M7ByYGAFjeGLqNyIBQJO99zmNi3lPFV8_O7Y-nFsCDyJFD8AUFMr8qTFZ68tcJq3ZegPcJQmm1Fu8rCigMxym3dP0z67pWkN8WBRSttlQtfPG2cd7SVXv9_9DGRYqV9nNGd7RckbLWaA2Gh_2Zw9zlGuxjPi6Ib_HdLZmEYS8zmk_8i3rJXfNpJPHLWlqEZzuO3HA1srUAXdsrUrkCvu4" />
              </div>
            </div>

            <div className="grid gap-6">
              <div className="relative overflow-hidden group cursor-pointer">
                <img alt="Latest work 5" className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUX9nEnLBXMiS9sBEq8_AeghM9cSbQBCQZuPeSmfTDu9-iA-y4v-tqwsURZRc0ub7_sG32HfceDFxlDtW__SFdy-eDOJSEAk-DSSoN7GXSr9zdVjEFYcKuKBVyH2JmlzFs5jhMI_IszDWzaF6ARuzhhNIJYlSDRBDwreCS_C91q3ioQMmTNedImt0Vl6YTIJK-Xkf-BeeX0IPasg4i4lOvj6BSs3LD302S26BNBAafac9hYHxprsQQjJDb3J_dsnnwAKyEgMcYS78" />
              </div>
              <div className="relative overflow-hidden group cursor-pointer">
                <img alt="Latest work 6" className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAyVBOCr53Da5B0rJkChX0txzRenqTVa6XJAe0n5ajnrdAdUSpVFEcJOMYC6Yh05Caf-Ej6dqU_DXFtUR8h_KAX2Hx941Fulhd-P9jmWyzzTVBUxhv7cui2JSStlH9DhI9FlftypmZlGSMAAoOBYenSQd_QGZZGuMMJ774fY58DlBv0d_CR1YF0rTRp0ZSYoygVLRk-cxRDdI3zQQZk4aJcvrUDvT4o6fLoRvbBtv4vMJIWuOB-6wOhaO5zjt_mGsPQfdjd-fm6wk" />
                <div className="absolute top-4 right-4 text-white opacity-80 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-[20px]" data-icon="play_circle">play_circle</span>
                </div>
              </div>
              <div className="relative overflow-hidden group cursor-pointer">
                <img alt="Latest work 7" className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzTb5s8e_88v2iIc0-Kmb-QmDaWtM4i_Y8RcsPruHYfn4x--o9nntr_A_7Gu1UjDUjd0yEL2y9BPGsd91yJzuvsaAVeJr7Pumc1GHtJVLvbwIDujSJ4vjxIhLm9JdwO0DaeHhs8goT8_VT_8AMso72FXf8SlpMDkwLaikcqOJbiiPeMX5An-x53MGukhrsQ9z42LYZnlR4MLCU1wvNG2T4g3OD5eyqmVGef0CyhMG6DxB4wpnMq6UAGoONY5EfmwmsvcDJMRdy3iQ" />
              </div>
            </div>

            <div className="grid gap-6">
              <div className="relative overflow-hidden group cursor-pointer">
                <img alt="Latest work 8" className="w-full aspect-[2/3] object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTthQENCK3LGArM-s7BY3xYi5gY9EPUQjz-dzNHIFs7bTf7c9M9EkjtVNUylk68yB3WZ4ES_3QWg0QltmRedYuhMzIalEQX5XkFsB-FmdatiVQO6qHanrUPvVZKg8ROGAKphc6W3dJCumNspw-A7_MCfBq5wiCjzwUJXjK2sup6w3I32y2i-i7ISrWyPnmRjKYCd3HDe9FOvPGFMRtjP5wczaoYOf0G2IuJ04yS7q6Kw4c08S81U7TWIAKz5jOY1pl_iiGKDhl7w4" />
              </div>
              <div className="relative overflow-hidden group cursor-pointer">
                <img alt="Latest work 9" className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxVPKeZKDy2XMdlqRcwZmVPswwfBphcuSs2SizBn7qlZV73IP6ZmrtF3c9sg-geo6n7l9Ok1Rl7AO0qc6tEhYHd_m-NCy4KkNJzE2HEVkdKvx3oY4bLjSYIfqr4qLSKZX9lN2i1Y6USzuPIF1jx9CM7F5u7tQa-MFLSSTcjcizdSsGZy8pS58w3EM2JDSzc__w86Jk2OaZnGrr2_c2IaCC_MeNXGYcz9R155fB3EPx5OQzABjRRPvjoXcHmJFfHISxPeRLsqpgKpI" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-32 px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-4">
            <h3 className="text-4xl font-headline tracking-tighter">Curated Works</h3>
            <p className="font-label text-[10px] tracking-[0.2em] uppercase text-on-surface">SERIES 01 // 2026</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[300px]">
            <div className="md:col-span-2 md:row-span-2 group overflow-hidden relative">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="editorial street fashion photography, tall model in neutral tones, urban architectural background, golden hour lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTuOXsxvsS45MootezTBcJpZLJKgm-aWcNsckIxM0pBegr2NtPwHdDG9OcDA1ZfVT5GBh7QwBop-uhtq_3DtRQX8THhN1F44ET7e5OMt9bxLh8orMqWhumzqapCUxPpgtYyBYLLX4IjBTjJXfhao9-OjD36a3Xvm4mU4PbxUrH43649R3zjx7yIE7LGwji0skQe0YzaWH3iaAmPFYyCPU08FgwpVh2egDSI-hATu7nPOhkZCZU_zadUfshHl-vEskkM0q5TDWebhQ" />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="font-label text-[12px] text-white tracking-[0.3em] uppercase">VIEW SERIES</span>
              </div>
            </div>
            <div className="md:col-span-1 md:row-span-1 group overflow-hidden">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="close-up artistic portrait of a man, dramatic chiaroscuro lighting, deep shadows, fine art photography style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALrH3_IDQXf4GuUMHADy5Hz6iEza9wdwcsN_mmovd9IWlpWqdLSBWTp1Msctp9yKooqItKGGA7DSdjH9C_5E-CC9m4Ym2KOfJader7zdxr6u3_McEBrC9LQEIdOk7IViNFeK_fDmOSxNLcJAbQKCg-hjCswGmMUqJoqVzn4ciMjgcaoNFgp-kelOvjw79s5WGQfidpOUGjEL1a8OT8-rm5Ey--c10DfetdI-53jATJhnCW9r3ZN_n9Sooni1QokGKrcEc7mfNvq4s" />
            </div>
            <div className="md:col-span-1 md:row-span-2 group overflow-hidden">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="fashion model in motion, blurred background, cinematic grain, editorial aesthetic, high fashion styling" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxz6VWTcDUCFXKW1KXFt7aY068oap3Mk7iAdF73SVIG-ICng7Tw-R2M5h2A9COswHm3H4vSnxTrZUsAq-STCw1y5oYEpMTC7pvPg7TMJcS-f4PaP9hi-g-fIIvYB_5O8ZePQBfVelp4V-6D7h9pGqMFdgEpuqaA4JzPjh_2Nt5_MMPZFsdlOAgucQDxfU5nbl42mwlJp8saQUExQ_XmW-IyC160Kf-CVrtgomj-pUrh7fZq7WkqFSlfu4uNxGzdeswo7vc8GinsYs" />
            </div>
            <div className="md:col-span-1 md:row-span-1 group overflow-hidden">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="minimalist fashion detail shot, hand holding a flower, soft natural light, oatmeal and charcoal color palette" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhTv2KscmUSapjIvIDjPDVOhSrSGQA-cApJTcw98q1-zZ6Eu8GnoGp46M7ByYGAFjeGLqNyIBQJO99zmNi3lPFV8_O7Y-nFsCDyJFD8AUFMr8qTFZ68tcJq3ZegPcJQmm1Fu8rCigMxym3dP0z67pWkN8WBRSttlQtfPG2cd7SVXv9_9DGRYqV9nNGd7RckbLWaA2Gh_2Zw9zlGuxjPi6Ib_HdLZmEYS8zmk_8i3rJXfNpJPHLWlqEZzuO3HA1srUAXdsrUrkCvu4" />
            </div>
          </div>
        </section>

        <section className="bg-surface py-20 px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-outline-variant/30">

            <div className="relative h-[600px] overflow-hidden group flex flex-col items-center justify-between py-16 text-center border-r border-outline-variant/30 last:border-r-0">
              <img alt="Lifestyle Session" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 brightness-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTuOXsxvsS45MootezTBcJpZLJKgm-aWcNsckIxM0pBegr2NtPwHdDG9OcDA1ZfVT5GBh7QwBop-uhtq_3DtRQX8THhN1F44ET7e5OMt9bxLh8orMqWhumzqapCUxPpgtYyBYLLX4IjBTjJXfhao9-OjD36a3Xvm4mU4PbxUrH43649R3zjx7yIE7LGwji0skQe0YzaWH3iaAmPFYyCPU08FgwpVh2egDSI-hATu7nPOhkZCZU_zadUfshHl-vEskkM0q5TDWebhQ" />
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-[1px] h-8 bg-primary mb-6"></div>
                <h3 className="font-label text-[10px] tracking-[0.2em] uppercase text-on-surface mb-2">LIFESTYLE SESSION</h3>
                <div className="text-[120px] font-headline font-bold leading-none text-on-surface tracking-tighter">$69</div>
                <button className="mt-8 bg-primary-container text-on-primary-container px-10 py-4 font-label text-[10px] tracking-widest uppercase hover:bg-primary hover:text-on-primary transition-all duration-300">PURCHASE</button>
              </div>
              <div className="relative z-10">
                <a className="font-label text-[10px] tracking-widest uppercase text-on-surface flex items-center gap-2 hover:text-primary transition-colors" href="#">OPTIONS <span className="material-symbols-outlined text-[14px]" data-icon="add">add</span></a>
              </div>
            </div>

            <div className="relative h-[600px] overflow-hidden group flex flex-col items-center justify-between py-16 text-center border-r border-outline-variant/30 last:border-r-0">
              <img alt="Studio Session" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 brightness-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAyVBOCr53Da5B0rJkChX0txzRenqTVa6XJAe0n5ajnrdAdUSpVFEcJOMYC6Yh05Caf-Ej6dqU_DXFtUR8h_KAX2Hx941Fulhd-P9jmWyzzTVBUxhv7cui2JSStlH9DhI9FlftypmZlGSMAAoOBYenSQd_QGZZGuMMJ774fY58DlBv0d_CR1YF0rTRp0ZSYoygVLRk-cxRDdI3zQQZk4aJcvrUDvT4o6fLoRvbBtv4vMJIWuOB-6wOhaO5zjt_mGsPQfdjd-fm6wk" />
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-[1px] h-8 bg-primary mb-6"></div>
                <h3 className="font-label text-[10px] tracking-[0.2em] uppercase text-on-surface mb-2">STUDIO SESSION</h3>
                <div className="text-[120px] font-headline font-bold leading-none text-on-surface tracking-tighter">$99</div>
                <button className="mt-8 bg-primary-container text-on-primary-container px-10 py-4 font-label text-[10px] tracking-widest uppercase hover:bg-primary hover:text-on-primary transition-all duration-300">PURCHASE</button>
              </div>
              <div className="relative z-10">
                <a className="font-label text-[10px] tracking-widest uppercase text-on-surface flex items-center gap-2 hover:text-primary transition-colors" href="#">OPTIONS <span className="material-symbols-outlined text-[14px]" data-icon="add">add</span></a>
              </div>
            </div>

            <div className="relative h-[600px] overflow-hidden group flex flex-col items-center justify-between py-16 text-center border-r border-outline-variant/30 last:border-r-0">
              <img alt="Portrait Session" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 brightness-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzTb5s8e_88v2iIc0-Kmb-QmDaWtM4i_Y8RcsPruHYfn4x--o9nntr_A_7Gu1UjDUjd0yEL2y9BPGsd91yJzuvsaAVeJr7Pumc1GHtJVLvbwIDujSJ4vjxIhLm9JdwO0DaeHhs8goT8_VT_8AMso72FXf8SlpMDkwLaikcqOJbiiPeMX5An-x53MGukhrsQ9z42LYZnlR4MLCU1wvNG2T4g3OD5eyqmVGef0CyhMG6DxB4wpnMq6UAGoONY5EfmwmsvcDJMRdy3iQ" />
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-[1px] h-8 bg-primary mb-6"></div>
                <h3 className="font-label text-[10px] tracking-[0.2em] uppercase text-on-surface mb-2">PORTRAIT SESSION</h3>
                <div className="text-[120px] font-headline font-bold leading-none text-on-surface tracking-tighter">$49</div>
                <button className="mt-8 bg-primary-container text-on-primary-container px-10 py-4 font-label text-[10px] tracking-widest uppercase hover:bg-primary hover:text-on-primary transition-all duration-300">PURCHASE</button>
              </div>
              <div className="relative z-10">
                <a className="font-label text-[10px] tracking-widest uppercase text-on-surface flex items-center gap-2 hover:text-primary transition-colors" href="#">OPTIONS <span className="material-symbols-outlined text-[14px]" data-icon="add">add</span></a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-40 px-6 md:px-12 bg-surface">
          <div className="max-w-4xl mx-auto text-center">
            <span className="font-label text-[10px] tracking-[0.2em] uppercase text-primary mb-12 block">THE ATELIER</span>
            <blockquote className="text-3xl md:text-5xl font-headline italic leading-relaxed mb-16">
              "Photography is the architecture of a moment, curated through the lens of human experience."
            </blockquote>
            <div className="flex justify-center gap-16">
              <div className="text-center">
                <p className="text-4xl font-headline">12+</p>
                <p className="font-label text-[9px] tracking-widest uppercase mt-2 opacity-60">Exhibitions</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-headline">200k</p>
                <p className="font-label text-[9px] tracking-widest uppercase mt-2 opacity-60">Captures</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-headline">01</p>
                <p className="font-label text-[9px] tracking-widest uppercase mt-2 opacity-60">Philosophy</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 px-6 md:px-12 bg-surface-container-low">
          <div className="mb-16">
            <h3 className="text-4xl font-headline tracking-tighter mb-4">The Journal</h3>
            <div className="w-20 h-[1px] bg-primary"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            <div className="flex flex-col group">
              <div className="aspect-[16/10] overflow-hidden mb-6">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="dark atmospheric interior with a single shaft of light, smoke or dust particles visible, cinematic and moody" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUX9nEnLBXMiS9sBEq8_AeghM9cSbQBCQZuPeSmfTDu9-iA-y4v-tqwsURZRc0ub7_sG32HfceDFxlDtW__SFdy-eDOJSEAk-DSSoN7GXSr9zdVjEFYcKuKBVyH2JmlzFs5jhMI_IszDWzaF6ARuzhhNIJYlSDRBDwreCS_C91q3ioQMmTNedImt0Vl6YTIJK-Xkf-BeeX0IPasg4i4lOvj6BSs3LD302S26BNBAafac9hYHxprsQQjJDb3J_dsnnwAKyEgMcYS78" />
              </div>
              <span className="font-label text-[9px] tracking-[0.2em] uppercase text-primary mb-3">April 12, 2026</span>
              <h4 className="text-xl font-headline mb-4 group-hover:text-primary transition-colors">Shadowplay: The Art of Subtraction</h4>
              <a className="font-label text-[10px] tracking-[0.1em] uppercase flex items-center gap-2 group-hover:gap-4 transition-all duration-300" href="#">
                Read More <span className="material-symbols-outlined text-[14px]" data-icon="arrow_forward">arrow_forward</span>
              </a>
            </div>

            <div className="flex flex-col group">
              <div className="aspect-[16/10] overflow-hidden mb-6">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="vintage camera on a wooden desk with film canisters and old photographs, nostalgic and warm lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAyVBOCr53Da5B0rJkChX0txzRenqTVa6XJAe0n5ajnrdAdUSpVFEcJOMYC6Yh05Caf-Ej6dqU_DXFtUR8h_KAX2Hx941Fulhd-P9jmWyzzTVBUxhv7cui2JSStlH9DhI9FlftypmZlGSMAAoOBYenSQd_QGZZGuMMJ774fY58DlBv0d_CR1YF0rTRp0ZSYoygVLRk-cxRDdI3zQQZk4aJcvrUDvT4o6fLoRvbBtv4vMJIWuOB-6wOhaO5zjt_mGsPQfdjd-fm6wk" />
              </div>
              <span className="font-label text-[9px] tracking-[0.2em] uppercase text-primary mb-3">March 28, 2026</span>
              <h4 className="text-xl font-headline mb-4 group-hover:text-primary transition-colors">The Grain of Reality: Film Revival</h4>
              <a className="font-label text-[10px] tracking-[0.1em] uppercase flex items-center gap-2 group-hover:gap-4 transition-all duration-300" href="#">
                Read More <span className="material-symbols-outlined text-[14px]" data-icon="arrow_forward">arrow_forward</span>
              </a>
            </div>

            <div className="flex flex-col group">
              <div className="aspect-[16/10] overflow-hidden mb-6">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="stage lighting and silhouettes of a production crew, professional atmosphere, behind the scenes editorial" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzTb5s8e_88v2iIc0-Kmb-QmDaWtM4i_Y8RcsPruHYfn4x--o9nntr_A_7Gu1UjDUjd0yEL2y9BPGsd91yJzuvsaAVeJr7Pumc1GHtJVLvbwIDujSJ4vjxIhLm9JdwO0DaeHhs8goT8_VT_8AMso72FXf8SlpMDkwLaikcqOJbiiPeMX5An-x53MGukhrsQ9z42LYZnlR4MLCU1wvNG2T4g3OD5eyqmVGef0CyhMG6DxB4wpnMq6UAGoONY5EfmwmsvcDJMRdy3iQ" />
              </div>
              <span className="font-label text-[9px] tracking-[0.2em] uppercase text-primary mb-3">March 05, 2026</span>
              <h4 className="text-xl font-headline mb-4 group-hover:text-primary transition-colors">BTS: The September Issue Editorial</h4>
              <a className="font-label text-[10px] tracking-[0.1em] uppercase flex items-center gap-2 group-hover:gap-4 transition-all duration-300" href="#">
                Read More <span className="material-symbols-outlined text-[14px]" data-icon="arrow_forward">arrow_forward</span>
              </a>
            </div>
          </div>
        </section>

        <section className="py-32 px-6 md:px-12 bg-surface-dim">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
            <div className="max-w-md">
              <h3 className="text-3xl font-headline mb-4">Join the Curator Circle.</h3>
              <p className="font-body text-secondary text-sm">Monthly insights into our creative process, upcoming exhibitions, and exclusive shop drops.</p>
            </div>
            <form className="flex w-full max-w-md border-b border-outline-variant">
              <input className="bg-transparent border-none focus:ring-0 w-full font-body text-sm py-4" placeholder="Your Email Address" type="email" />
              <button className="font-label text-[10px] tracking-widest uppercase text-primary px-4" type="submit">SUBSCRIBE</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-[#dcd9d9] w-full py-12 px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8">
          <div className="text-lg font-['Noto_Serif'] font-bold text-[#1c1b1b]">RAWCINEMA.NP</div>
          <div className="flex flex-wrap justify-center gap-8">
            <a className="font-['Manrope'] text-[10px] tracking-widest uppercase text-[#1c1b1b] hover:text-[#775a19] transition-colors" href="#">Privacy Policy</a>
            <a className="font-['Manrope'] text-[10px] tracking-widest uppercase text-[#1c1b1b] hover:text-[#775a19] transition-colors" href="#">Terms of Service</a>
            <a className="font-['Manrope'] text-[10px] tracking-widest uppercase text-[#1c1b1b] hover:text-[#775a19] transition-colors" href="#">FAQ</a>
          </div>
          <div className="flex gap-6">
            <a className="text-on-surface hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined" data-icon="share">share</span></a>
            <a className="text-on-surface hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined" data-icon="mail">mail</span></a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-outline-variant/20 text-center">
          <p className="font-['Manrope'] text-[10px] tracking-widest uppercase text-[#1c1b1b] opacity-60">© 2026 RAWCINEMA.NP ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </>
  );
}
