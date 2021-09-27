export default function Campaigns() {
  return (
    <>
      <div className="bg-secondary-brand-color ">
        <div className="flex flex-col md:h-[550px] md:flex-row md:w-[1130px] mx-auto md:justify-between  items-center">
          <div className="flex flex-col md:gap-y-8  md:items-start pt-10 pb-10">
            <div className="md:text-sm text-[10px] tracking-widest font-semibold pb-6 flex justify-center md:justify-start">
              SPOTIFY PREMIUM
            </div>

            <h1 className="md:text-6xl text-xl font-bold font-sans tracking-wide">
              Premium'u 3 ay ücretsiz <br /> edin
            </h1>
            <h2 className="font-normal	md:text-2xl  text-xs pt-6 ">
              Reklamsız müzik dinleme, çevrimdışı çalma ve diğer avantajların
              <br />
              tadını çıkar. İstediğin zaman iptal et.
            </h2>
            <a
              className="pt-6 pb-6"
              href="https://www.spotify.com/tr/premium/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-brand-color w-full h-12 md:w-[300px] rounded-3xl hover:scale-105 items-center flex justify-center text-white ">
                <span className="font-semibold ">3 AY UCRETSİZ KULLAN</span>
              </button>
            </a>
          </div>
          <img
            className="md:w-100 md:h-[400px] h-80 w-[320px] fill-current pb-10"
            alt="noReferer"
            src="https://i.scdn.co/image/ab678e040000ed3a4aa35f6439e2c41fb054b965"
          />
        </div>
      </div>

      <div className="bg-blue-background md:bg-free-bg bg-mobile-bg bg-right md:bg-no-repeat  p-6 md:p-0">
        <div className="flex md:h-[600px] md:w-[1130px] h-[480px] mx-auto items-center ">
          <div className="flex flex-col md:pb-36 md:gap-y-6 justify-center items-center">
            <span className="text-xs tracking-widest font-normal pb-16 text-primary-green ">
              SPOTİFY FREE
            </span>

            <h1 className="md:text-6xl text-2xl md:text-[60px] md:font-bold md:font-sans tracking-wide text-primary-green">
              Dinlemek her şeydir
            </h1>

            <h2 className="font-normal text-xl	md:text-2xl pt-6 pb-6 text-primary-green">
              Milyonlarca şarkı ve podcast. Kredi kartına gerek yok.
            </h2>
            <a
              href="https://www.spotify.com/tr/premium/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-primary-green h-12 w-[280px] rounded-3xl md:hover:scale-105 items-center flex justify-center ">
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
