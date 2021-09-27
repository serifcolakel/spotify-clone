import React from "react";
import { RiGlobalLine } from "react-icons/ri";

const topLinks = [
  {
    title: "Şirket",
    links: [
      {
        title: "Hakkında",
        href: "https://www.spotify.com/tr/about-us/contact/",
        dataAttributes: {
          "data-ga-category": "menu",
          "data-ga-action": "about",
        },
      },
      {
        title: "İşler",
        href: "https://www.spotifyjobs.com/",
        dataAttributes: {
          "data-ga-category": "menu",
          "data-ga-action": "jobs",
        },
      },
      {
        title: "For the Record",
        href: "https://newsroom.spotify.com/",
        dataAttributes: {
          "data-ga-category": "menu",
          "data-ga-action": "press",
        },
      },
    ],
  },
  {
    title: "Topluluklar",
    links: [
      {
        title: "Sanatçılar İçin",
        href: "https://artists.spotify.com/",
        dataAttributes: {
          "data-ga-category": "menu",
          "data-ga-action": "artists",
        },
      },
      {
        title: "Geliştiriciler",
        href: "https://developer.spotify.com/",
        dataAttributes: {
          "data-ga-category": "menu",
          "data-ga-action": "developers",
        },
      },
      {
        title: "Reklam",
        href: "https://ads.spotify.com/",
        dataAttributes: {
          "data-ga-category": "menu",
          "data-ga-action": "advertising",
        },
      },
      {
        title: "Yatırımcılar",
        href: "https://investors.spotify.com/",
        dataAttributes: {
          "data-ga-category": "menu",
          "data-ga-action": "investors",
        },
      },
      {
        title: "Satıcılar",
        href: "https://spotifyforvendors.com/",
        dataAttributes: {
          "data-ga-category": "menu",
          "data-ga-action": "vendors",
        },
      },
    ],
  },
  {
    title: "Yararlı bağlantılar",
    links: [
      {
        title: "Destek",
        href: "https://support.spotify.com/",
        dataAttributes: {
          "data-ga-category": "menu",
          "data-ga-action": "help",
        },
      },
      {
        title: "Web Çalar",
        href: "https://open.spotify.com/",
        dataAttributes: {
          "data-ga-category": "menu",
          "data-ga-action": "play",
        },
      },
      {
        title: "Ücretsiz Mobil Uygulama",
        href: "https://www.spotify.com/tr/free/",
        dataAttributes: {
          "data-ga-category": "menu",
          "data-ga-action": "free",
        },
      },
    ],
  },
];
const bottomLinks = [
  { title: "Yasal", href: "https://www.spotify.com/tr/legal/" },
  { title: "Gizlilik Merkezi", href: "https://www.spotify.com/tr/privacy/" },
  {
    title: "Gizlilik Politikası",
    href: "https://www.spotify.com/tr/legal/privacy-policy/",
  },
  {
    title: "Tanımlama Bilgileri",
    href: "https://www.spotify.com/tr/legal/cookies-policy/",
  },
  {
    title: "Reklamlar Hakkında",
    href: "https://www.spotify.com/tr/legal/privacy-policy/#s3",
  },
];
const socialLinks = [
  {
    name: "Instagram",
    srcIcon:
      "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 448' fill='%23222326'%3E%3Cpath d='M0 230.126v-.793c.016 55.974.294 63.853 1.344 87.03 3.733 81.349 48.87 126.56 130.293 130.293C155.55 447.739 163.165 448 224 448H0V230.126zm229.242-189.75c55.006.014 62.368.256 85.291 1.307 60.704 2.762 89.059 31.565 91.822 91.821 1.05 22.905 1.275 30.266 1.287 85.272v10.487c-.014 55.022-.255 62.365-1.287 85.27-2.782 60.2-31.062 89.059-91.822 91.822-23.159 1.06-30.399 1.297-87.005 1.306h-7.054c-56.572-.009-63.848-.245-86.989-1.306-60.853-2.782-89.058-31.715-91.821-91.84-1.05-22.905-1.292-30.249-1.306-85.271v-8.77c.01-56.572.263-63.83 1.306-86.989 2.781-60.237 31.061-89.058 91.821-91.821 22.923-1.032 30.268-1.274 85.273-1.287h10.484zm-5.242 68.6c-63.523 0-115.024 51.501-115.024 115.024S160.477 339.043 224 339.043 339.024 287.54 339.024 224c0-63.523-51.501-115.024-115.024-115.024zm0 40.357c41.235 0 74.667 33.432 74.667 74.667 0 41.253-33.432 74.667-74.667 74.667S149.333 265.253 149.333 224c0-41.235 33.432-74.667 74.667-74.667zM343.579 77.56c-14.859 0-26.899 12.04-26.899 26.88s12.04 26.88 26.899 26.88c14.84 0 26.861-12.04 26.861-26.88s-12.021-26.88-26.861-26.88zM448 224v224H224c60.835 0 68.47-.261 92.363-1.344 81.274-3.733 126.597-48.87 130.274-130.293C447.74 292.469 448 284.835 448 224zm-1.344-92.344c-3.659-81.275-48.85-126.56-130.275-130.293C293.187.294 285.307.016 229.333 0H448v224c0-60.835-.261-68.45-1.344-92.344zM0 0h218.667c-55.973.016-63.834.294-87.011 1.344C50.306 5.077 5.096 50.214 1.363 131.637.299 154.722.019 162.62 0 217.873V0z'/%3E%3C/svg%3E",
    href: "https://instagram.com/spotify",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/spotify",
    srcIcon:
      "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 448' fill='%23222326'%3E%3Cpath d='M448 0v448H0V0h448zM299.75 64c-22.333 0-41.375 7.875-57.125 23.625S219 122.417 219 144.75c0 6 .667 12.167 2 18.5-33-1.667-63.958-9.958-92.875-24.875S74.667 103.583 54.5 78.75c-7.333 12.5-11 26.083-11 40.75 0 13.833 3.25 26.667 9.75 38.5 6.5 11.833 15.25 21.417 26.25 28.75-12.717-.49-24.637-3.77-35.76-9.841L43 176.5v1c0 19.5 6.125 36.625 18.375 51.375s27.708 24.042 46.375 27.875a83.54 83.54 0 01-21.25 2.75c-4.667 0-9.75-.417-15.25-1.25 5.167 16.167 14.667 29.458 28.5 39.875 13.833 10.417 29.5 15.792 47 16.125-29.333 23-62.75 34.5-100.25 34.5-7.167 0-13.667-.333-19.5-1C64.5 371.917 105.833 384 151 384c28.667 0 55.583-4.542 80.75-13.625s46.667-21.25 64.5-36.5 33.208-32.792 46.125-52.625c12.917-19.833 22.542-40.542 28.875-62.125 6.333-21.583 9.5-43.208 9.5-64.875 0-4.667-.083-8.167-.25-10.5 15.833-11.5 29.333-25.417 40.5-41.75-15.5 6.667-31 10.833-46.5 12.5C392 104 403.833 89.167 410 70c-16 9.5-33.083 16-51.25 19.5-16-17-35.667-25.5-59-25.5z'/%3E%3C/svg%3E",
  },
  {
    name: "Facebook",
    srcIcon:
      "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 448' fill='%23222326'%3E%3Cpath d='M448 0v448H0V0h448zM276.877 16h-1.127c-28.833 0-51.917 8.542-69.25 25.625-17.16 16.912-25.826 40.645-25.997 71.197l-.003.928v54.5h-63.75v74h63.75V432H257V242.25h63.5l9.75-74H257V121c0-12 2.5-21 7.5-27 4.923-5.908 14.37-8.907 28.342-8.998L293.5 85h39.25V19c-13.085-1.938-31.336-2.938-54.754-2.997l-1.12-.003z'/%3E%3C/svg%3E",
    href: "https://www.facebook.com/Spotify",
  },
];
export default function Footer() {
  return (
    <div className="bg-brand-color p-4">
      <div className="flex  md:flex-row flex-col md:justify-between md:w-[1130px] mx-auto md:pt-20 md:h-[400px] md:gap-x-6 gap-y-8 text-white ">
        <div className="flex flex-col md:flex-row gap-y-8 pt-4">
          <div>
            <a
              href="http://getir-clone-delta.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="h-7 w-22 md:w-full md:h-10"
                alt="noReferer"
                src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
              />
            </a>
          </div>

          {topLinks.map((x, i) => (
            <div
              className="flex flex-col  justify-start md:flex-col md:pt-4 md:pr-8 md:pl-16 gap-y-4 "
              key={i}
            >
              <span className="font-black text-sm uppercase text-def-text-color">
                {x.title}
              </span>

              <div className="flex flex-col gap-y-2 ">
                {x.links.map((r, j) => (
                  <a href={r.href} key={j} rel="noreferrer" target="_blank">
                    <p className="text-xs md:text-sm	font-normal	hover:text-primary-green">
                      {r.title}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-row gap-x-4 pt-8 ">
          {socialLinks.map((x, i) => (
            <div
              key={i}
              className="flex justify-center items-center w-6 h-6 md:w-[54px] md:h-[54px] rounded-full bg-brand-gray "
            >
              <a href={x.href} target="_blank" rel="noreferrer">
                <img
                  alt="noreferrer"
                  className="w-4 h-4 bg-primary-white hover:bg-primary-green"
                  src={x.srcIcon}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col w-auto md:w-[1130px] mx-auto md:h-[130px]  text-def-text-color">
        <div className="flex flex-row justify-end items-center gap-x-2 ">
          <RiGlobalLine />
          <a href="https://www.spotify.com/tr/select-your-country-region/">
            <span className="text-xs  hover:text-primary-green">Türkiye</span>
          </a>
        </div>
        <div className="flex  md:flex-row  justify-between items-center">
          <div className="flex gap-x-1 md:gap-x-8 md:flex-row flex-col">
            {bottomLinks.map((x, i) => (
              <a href={x.href} key={i}>
                <span className="text-[10px] md:text-xs  hover:text-primary-green">
                  {x.title}
                </span>
              </a>
            ))}
          </div>

          <span className="text-[10px] md:text-xs">© 2021 Spotify AB</span>
        </div>
      </div>
    </div>
  );
}
