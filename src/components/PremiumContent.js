import React from "react";
import logo from "../images/tik.png";

const premium = [
  {
    text: "İstediğin yerde dinle.",
    title: " Müzik indir.",
    src: "https://i.scdn.co/image/ab671c3d0000f43009302fbaf6259b4c117c704f",
  },
  {
    text: "Kesintisiz müziğin keyfini çıkar",
    title: "Reklamsız müzik dinle.",
    src: "https://i.scdn.co/image/ab671c3d0000f43098292b95d24a697c20df5137",
  },
  {
    text: "Mobil cihazında bile.",
    title: "İstediğin şarkıyı çal.",
    src: "https://i.scdn.co/image/ab671c3d0000f4306998d3ffd58aad6da6afdf67",
  },
  {
    text: "Sonraki düğmesine basman yeterli.",
    title: "Sınırsız şarkı atlama hakkı.",
    src: "https://i.scdn.co/image/ab671c3d0000f430cd6c528745e510c5be63a012",
  },
];

const cardsContent = [
  {
    freeTime: "3 ay ücretsiz",
    oneTime: "Bir defalık ödeme yapılabilir",
    title: "Bireysel",
    offer: "Teklif döneminden sonra ayda 17,99 TL",
    accCount: "1 hesap",
    content: [
      "Reklamsız müzik dinle",
      "Her yerde çal, hatta çevrimdışı dinle",
      "İstediğin zaman çal",
    ],
    link: "3 AY ÜCRETSİZ KULLAN",
    choose: "DİĞER ÖDEME SEÇENEKLERİ",
  },
  {
    freeTime: "1 ay ücretsiz",
    title: "Duo",
    offer: "Teklif döneminden sonra ayda 23,99 TL",
    accCount: "2 hesap",
    content: [
      "Aynı çatı altında yaşayan çiftler için 2 Premium hesabı",
      "Duo Mix: İki kişi için bir çalma listesi, ikinizin tadını çıkaracağı müziklerle düzenli olarak güncellenir",
      "Reklamsız müzik dinle, çevrimdışı çal, istediğin zaman çal",
    ],
    link: "1 AY ÜCRETSİZ KULLAN",
    choose: "DİĞER ÖDEME SEÇENEKLERİ",
  },
  {
    freeTime: "1 ay ücretsiz",
    title: "Aile",
    offer: "Teklif döneminden sonra ayda 29,99 TL",
    accCount: "6 hesaba kadar",
    content: [
      "Aynı çatı altında yaşayan aile üyeleri için 6 ayrı Premium hesabı",
      "Aile Mix'i: Ailen için bir çalma listesi, hepinizin tadını çıkaracağı müziklerle düzenli olarak güncellenir",
      "Sansürsüz müziği engelle",
      "Reklamsız müzik dinle, çevrimdışı çal, istediğin zaman çal",
    ],
    link: "1 AY ÜCRETSİZ KULLAN",
  },
  {
    freeTime: "3 ay ücretsiz",
    title: "Öğrenci",
    offer: "Teklif döneminden sonra ayda 8,99 TL",
    accCount: "1 hesap",
    content: [
      "Yararlanabilecek üniversite öğrencilerine özel indirim",
      "Reklamsız müzik dinle",
      "Her yerde çal, hatta çevrimdışı dinle",
      "İstediğin zaman çal",
    ],
    link: "3 AY ÜCRETSİZ KULLAN",
  },
];
export default function PremiumContent() {
  return (
    <>
      <div className="bg-secondary-brand-color ">
        <div className="flex flex-col md:h-[550px] h-[880px] md:flex-row md:w-[1130px] mx-auto md:justify-between  items-center p-8">
          <div className="flex flex-col md:gap-y-8 gap-y-2 md:items-start  md:w-3/5">
            <h1 className="md:text-4xl text-2xl  font-sans font-extrabold tracking-wide">
              Yakında sona eriyor: Premium <br className="hidden" /> 3 ay
              boyunca 0,00 TL.
            </h1>
            <h2 className="font-medium	md:text-xl text-sm pb-6 pt-2 tracking-widest ">
              Reklamsız ve çevrimdışı müziği 29 Aralık 2021 tarihine kadar
              ücretsiz dinle. İstediğin zaman iptal et.
              <br />
              Teklif yarın sona eriyor.
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
              <a
                href="https://www.spotify.com/tr/premium/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="bg-secondary-brand-color border-2	border-white w-full h-12 md:w-[300px] hover:bg-button-brand-color rounded-3xl hover:scale-105 items-center flex justify-center text-white">
                  <span className="font-semibold text-black ">
                    PLANLARI GÖRÜNTÜLE
                  </span>
                </button>
              </a>
            </div>

            <p className="md:text-xs text-[10px] pt-6 ">
              Aylık üyelik ücreti daha sonra uygulanır. Sadece Premium'u henüz
              denememiş kullanıcılar yararlanabilir. Teklife{" "}
              <br className="hidden" /> Aile ve Duo Planları dahil değildir.
              <a
                className="underline "
                href="https://www.spotify.com/legal/premium-promotional-offer-terms/"
              >
                Hüküm ve koşullar geçerlidir
              </a>
              . Teklif 30 Eylül 2021 tarihinde sona erecektir.
            </p>
          </div>
          <div className="flex justify-end  md:w-2/5 ">
            <img
              className="md:h-[400px] md:w-[400px] h-80 w-80"
              alt="noReferer"
              src="https://i.scdn.co/image/ab678e040000ed3ab60055273a84738a2f1ebee5"
            />
          </div>
        </div>
      </div>

      <div className="md:pt-[72px] pt-8 md:w-[1130px] flex flex-col mx-auto p-2">
        <div className="flex  md:text-4xl text-[28px] text-center justify-center items-center font-extrabold tracking-wide font-sans md:pb-[72px]">
          <h2>Neden Premium'a geçmelisin?</h2>
        </div>
        <div class="grid md:grid-cols-4  md:pb-[72px]">
          {premium.map((x, i) => (
            <div className="flex md:flex-col items-center" key={i}>
              <div className="flex md:flex-col flex-row justify-between items-center md:h-[285px] md:w-[285px] p-2 mb-[72px]">
                <img
                  className="w-[90px] h-[90px] md:w-[142px] md:h-[142px] "
                  alt="noReferer"
                  src={x.src}
                />

                <div className="flex flex-col md:items-center pl-4 md:truncate">
                  <p className="text-[21px] font-bold  tracking-wide">
                    {x.title}
                  </p>
                  <p className="text-[16px]  tracking-wide">{x.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-brand-gray md:pt-[72px] md:pb-[72px] ">
        <div className="md:w-[1130px] mx-auto">
          <div className="flex flex-col ">
            <div className="flex flex-col justify-center items-center  md:pb-[72px] gap-y-2">
              <h2 className=" md:text-4xl text-[32px] text-center font-extrabold tracking-wide font-sans">
                Premium'unu seç
              </h2>
              <h3>
                Telefonunda, hoparlöründe ve diğer cihazlarında sınırsız dinle.
              </h3>
            </div>
          </div>
          <div class="grid md:grid-cols-4 gap-4">
            {cardsContent.map((c, key) => (
              <div
                className="flex flex-col bg-white divide-y-2 rounded-xl shadow-2xl "
                key={key}
              >
                <div className="flex flex-col p-4 gap-y-2 h-[210px]">
                  <div className="rounded-md w-1/2 h-auto flex justify-center items-center  bg-blue-700 text-white font-bold ">
                    <p className="text-[14px] h-6 text-center">{c.freeTime}</p>
                  </div>
                  <div>
                    {c.oneTime && (
                      <p className="text-[16px] p-2 rounded-md h-6 truncate flex items-center bg-white text-blue-500 font-bold border border-blue-500">
                        {c.oneTime}
                      </p>
                    )}
                  </div>
                  <p className="text-[24px] font-bold">{c.title}</p>
                  <p className="text-[16px] font-normal">
                    {c.offer}
                    <br />
                    {c.accCount}
                  </p>
                </div>

                <div div className="flex flex-col p-2">
                  <div className="flex flex-col gap-y-3 h-[305px]">
                    {c.content.map((x, i) => (
                      <div className="flex flex-row gap-x-3 ">
                        <img className="w-6 h-6" src={logo} alt="noreferrer" />
                        <p>{x}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-y-6 h-[105px]">
                    <div className="flex justify-center items-center">
                      <a
                        href="https://www.spotify.com/tr/premium/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="bg-brand-color h-12 md:w-[235px] w-full rounded-3xl hover:scale-105  text-white ">
                          <span className="font-semibold text-xs">
                            {c.link}
                          </span>
                        </button>
                      </a>
                    </div>
                    <div className="h-8">
                      {c.choose && (
                        <a
                          href="https://www.spotify.com/tr/premium/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <p className=" text-center uppercase text-[14px] font-semibold hover:text-primary-green">
                            {c.choose}
                          </p>
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="h-auto p-4 pb-[72px]">
                    <p className="text-[12px] font-normal p-1">
                      Aylık üyelik ücreti daha sonra uygulanır. Sadece Premium'u
                      henüz denememiş kullanıcılar yararlanabilir. Teklife Aile
                      ve Duo Planları dahil değildir.
                      <a
                        className="underline"
                        href="https://www.spotify.com/tr/legal/premium-promotional-offer-terms/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Hüküm ve koşullar geçerlidir
                      </a>
                      . Teklif 30 Eylül 2021 tarihinde sona erecektir.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
