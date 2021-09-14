export default function Campaigns() {
  return (
    <>
      <div className="bg-secondary-brand-color">
        <div className="flex h-[550px] flex-row w-[1130px] mx-auto justify-between  items-center">
          <div className="flex flex-col gap-y-8">
            <span className="text-sm tracking-widest font-semibold pb-6">
              SPOTIFY PREMIUM
            </span>

            <h1 className="text-6xl font-bold font-sans tracking-wide">
              Premium'u 3 ay ücretsiz <br /> edin
            </h1>
            <h2 className="font-normal	text-2xl pt-6">
              Reklamsız müzik dinleme, çevrimdışı çalma ve diğer avantajların
              <br />
              tadını çıkar. İstediğin zaman iptal et.
            </h2>
            <a
              href="https://www.spotify.com/tr/premium/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-brand-color h-12 w-[300px] rounded-3xl hover:scale-105 items-center flex justify-center text-white">
                <span className="font-semibold">3 AY UCRETSİZ KULLAN</span>
              </button>
            </a>
          </div>
          <img
            className="w-100 h-[400px] fill-current "
            alt="noReferer"
            src="https://i.scdn.co/image/ab678e040000ed3a4aa35f6439e2c41fb054b965"
          />
        </div>
      </div>

      <div className="bg-blue-background bg-free-bg bg-right bg-no-repeat">
        <div className="flex h-[600px] w-[1130px] mx-auto items-center ">
          <div className="flex flex-col pb-36 gap-y-6">
            <span className="text-sm tracking-widest font-normal  text-primary-green">
              SPOTİFY FREE
            </span>

            <h1 className="text-[60px] font-bold font-sans tracking-wide text-primary-green">
              Dinlemek her şeydir
            </h1>
            <h2 className="font-normal	text-2xl pt-6 pb-6 text-primary-green">
              Milyonlarca şarkı ve podcast. Kredi kartına gerek <br />
              yok.
            </h2>
            <a
              href="https://www.spotify.com/tr/premium/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-primary-green h-12 w-[280px] rounded-3xl hover:scale-105 items-center flex justify-center ">
                <span className="font-semibold tracking-widest text-blue-background">
                  SPOTIFY FREE'Yİ EDİN
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
