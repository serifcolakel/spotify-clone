import { BsDash } from "react-icons/bs";

export default function ResponsiveMenu(props) {
  console.log(props);
  return (
    <div className="fixed inset-0 overflow-y-auto bg-black">
      <div className=" h-[94vh] gap-y-2 text-white">
        <div className="flex h-full flex-col justify-between">
          <div>
            <div className="flex flex-col gap-y-2 pb-2">
              <a
                href="http://getir-clone-delta.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="hover:text-primary-green font-bold text-xl	">
                  Premium
                </span>
              </a>
              <a
                href="http://getir-clone-delta.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="hover:text-primary-green font-bold text-xl	">
                  Destek
                </span>
              </a>
              <a
                href="http://getir-clone-delta.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="hover:text-primary-green font-bold text-xl	">
                  İndir
                </span>
              </a>
            </div>
            <BsDash className="scale-150" />
            <div className=" flex flex-col items-start justify-center gap-y-2 pt-2">
              <a
                href="http://getir-clone-delta.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="hover:text-primary-green text-xl	">Kaydol</span>
              </a>
              <a
                href="http://getir-clone-delta.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="hover:text-primary-green  text-xl	">
                  Oturum aç
                </span>
              </a>
            </div>
          </div>

          <div className=" cursor-pointer">
            <a
              href="http://getir-clone-delta.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="w-[89px] h-10 text-white-600"
                alt="noReferer"
                src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
