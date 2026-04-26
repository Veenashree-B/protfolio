import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16 text-black bg-white"
    >
      <div className="w-full max-w-4xl flex flex-col items-center text-center gap-8">
        <div>
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight text-black mb-1">
            Hi,
          </h1>
          <h2 className="text-5xl sm:text-6xl font-extrabold leading-tight text-blue-600 mb-3">
            I'm Veenashree B
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4">
            Data Science Student
          </h3>
          <p className="text-base sm:text-lg text-black mb-6 leading-relaxed max-w-2xl mx-auto">
            Curious and detail-oriented data science student with a solid engineering foundation. Skilled in data analysis, machine learning, and visualization.
          </p>
        </div>

        <div className="w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden border-[5px] border-blue-500 shadow-2xl">
          <Image
            src="/profile.jpg"
            alt="profile"
            width={400}
            height={400}
            className="object-cover object-top w-full h-full"
          />
        </div>

        <div className="flex flex-col items-center gap-4">
          <span className="flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 border border-blue-300 text-black font-semibold">
            ⭐ Current CGPA: 8.3
          </span>

          <a
            href="mailto:blveenashree@gmail.com"
            className="rounded-full bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-500"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
}