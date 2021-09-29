import { GiHamburgerMenu } from "react-icons/gi";
import ResponsiveMenu from "components/ResponsiveMenu";
import { useState } from "react";
import { SiNixos } from "react-icons/si";

export default function Header() {
  const [show, setShow] = useState(false);

  return (
    <>
      {show ? <ResponsiveMenu openMenu={setShow} /> : null}
      <div className="bg-brand-color">
        <div className="flex  flex-row md:w-[1130px] w-full mx-auto justify-between h-13 pl-4 md:h-20 items-center">
          <div className=" cursor-pointer">
            <a href="/" rel="noreferrer">
              <img
                className="md:w-full w-[89px] md:h-10 md:fill-current text-white-600"
                alt="noReferer"
                src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
              />
            </a>
          </div>
          <div className="md:flex text-white z-1 ">
            <div className="md:hidden w-12 h-12 flex items-center justify-center text-white ">
              <button onClick={() => setShow(!show)}>
                {show ? (
                  <SiNixos className="scale-150 text-red-300" />
                ) : (
                  <GiHamburgerMenu className="scale-150 text-red-300" />
                )}
              </button>
            </div>
            <div className="md:flex text-white gap-x-10 divide-x-2">
              <div className="hidden items-center justify-center md:flex md:pl-6 md:gap-x-10">
                <a href="/premium" rel="noreferrer">
                  <span className="hover:text-primary-green font-bold text-base	">
                    Premium
                  </span>
                </a>
                <a href="/destek" rel="noreferrer">
                  <span className="hover:text-primary-green font-bold text-base	">
                    Destek
                  </span>
                </a>
                <a href="/indir" rel="noreferrer">
                  <span className="hover:text-primary-green font-bold text-base	">
                    İndir
                  </span>
                </a>
              </div>

              <div className="hidden items-center justify-center md:flex md:pl-6 md:gap-x-10">
                <a
                  href="http://getir-clone-delta.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="hover:text-primary-green font-bold text-base	">
                    Kaydol
                  </span>
                </a>
                <a
                  href="http://getir-clone-delta.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="hover:text-primary-green font-bold text-base	">
                    Oturum aç
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
