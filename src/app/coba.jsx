import React from 'react'

function coba() {
  return (
    <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
      <div className="animate__animated animate__fadeInUp animate__delay-2s">
        <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
          <img
            src={DataImage.HeroImage}
            alt=""
            className="w-10 rounded-md"
            loading="lazy"
          />
          <q>Kode yang indah, lahir dari ketekunan.</q>
        </div>
        <h1 className="text-5xl/tight font-bold mb-6">Hi, Fajar adhitya</h1>
        <p className="text-base/loose mb-6 opacity-50">
          Saya mempunyai ketertarikan dalam bidang Programing dan Designer,
          terutama pada pembuatan Website ketertarikan pada bidang ini sudah
          berlangsung dari 4 tahun untuk semua bidang
        </p>
        <div className="flex items-center gap-4 ">
          <a
            href="#"
            className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600"
          >
            download CV <i className="ri-download-line ri-lg"></i>
          </a>
          <a href="#" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">
            Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
          </a>
        </div>
      </div>
      <img
        src={DataImage.HeroImage}
        alt=""
        className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-3s"
        loading="lazy"
      />
    </div>
  );
}

export default coba