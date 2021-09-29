export default function Campaigns() {
  return (
    <>
      <div className="bg-secondary-brand-color ">
        <div className="flex flex-col md:h-[550px] h-[880px] md:flex-row md:w-[1130px] mx-auto md:justify-between  items-center p-4">
          <div className="flex flex-col md:w-3/5 md:gap-y-8 gap-y-2 md:items-start pt-10 pb-10">
            <div className="text-[10px] uppercase text-center font-semibold md:text-xs	">
              <p>SPOTIFY PREMIUM</p>
            </div>
            <h1 className="md:text-5xl text-2xl font-black font-sans tracking-wide">
              Yakında sona eriyor: Premium 3 ay boyunca ücretsiz
            </h1>
            <h2 className="font-normal	md:text-xl text-sm pb-6 pt-2">
              Reklamsız ve çevrimdışı müziği 29 Aralık 2021 tarihine kadar
              <br className="hidden" /> ücretsiz dinle.
              <br />
              İstediğin zaman iptal et.
            </h2>
            <div className="flex md:flex-row md:gap-x-4 flex-col gap-y-4 ">
              <a
                href="https://www.spotify.com/tr/premium/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="bg-brand-color w-full h-12 md:w-[300px] rounded-3xl hover:scale-105 items-center flex justify-center text-white ">
                  <span className="font-semibold ">3 AY UCRETSİZ KULLAN</span>
                </button>
              </a>
            </div>
          </div>
          <div className="md:w-2/5 md:pl-9">
            <img
              className="md:h-[400px] md:w-[400px] h-80 fill-current"
              alt="noReferer"
              src="https://i.scdn.co/image/ab678e040000ed3ab60055273a84738a2f1ebee5"
            />
          </div>
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
