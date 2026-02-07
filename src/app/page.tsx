import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] w-full">
        <Image
          src="/images/header.png"
          alt="Gamma Header"
          fill
          style={{ objectFit: "cover" }}
          priority
          className="z-0"
        />
        <div className="absolute inset-0 bg-black/40 z-10 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">Gamma</h1>
            <p className="text-xl md:text-2xl drop-shadow-md">北大ゲーム制作サークル</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 space-y-20">
        {/* About Section */}
        <section id="about" className="scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">概要</h2>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <p className="text-lg leading-relaxed text-gray-700 text-center">
              北海道大学の学生･卒業生を中心としたゲーム制作サークルです。<br />
              毎週水曜日･土曜日に活動しています。
            </p>
          </div>
        </section>

        {/* Works Section */}
        <section id="product" className="scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Works</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="mb-6 text-gray-600">Gammaの制作作品はunityroomで公開しています。</p>
            <a
              href="https://unityroom.com/users/gamma_game_com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              作品を見る (unityroom)
            </a>
          </div>
        </section>

        {/* Twitter Section */}
        <section id="contact" className="scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Twitter</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="mb-6 text-gray-600">最新情報はTwitterで発信しています。</p>
            <a
              href="https://twitter.com/gamma_game_com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-black hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-full transition shadow-md hover:shadow-lg"
            >
              <span>Twitter @gamma_game_com</span>
            </a>
            <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
              <p className="text-sm text-gray-500">
                ※ 入部希望やお問い合わせはTwitterのDM、または活動場所へ直接お越しください。
              </p>
            </div>
          </div>
        </section>

        {/* Join Placeholder to match nav */}
        <section id="join" className="scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">入部するには</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-700 mb-4">
              Gammaでは新規部員を募集しています。
            </p>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 inline-block text-left">
              <h3 className="font-bold text-lg mb-2 text-center text-gray-800">活動日時</h3>
              <p className="text-gray-600 text-center">毎週 水曜日･土曜日</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
