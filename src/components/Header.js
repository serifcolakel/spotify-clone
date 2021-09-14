export default function Header() {
  return (
    <div className="bg-brand-color">
      <div className="flex  flex-row max-w-screen-xl mx-auto justify-between h-20 items-center">
        <div className="cursor-pointer">
          <a
            href="http://getir-clone-delta.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="w-full h-10 fill-current text-white-600"
              alt="noReferer"
              src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
            />
          </a>
        </div>
        <div className="flex  text-white divide-x-2 gap-x-6">
          <div className="flex gap-x-6">
            <a
              href="http://getir-clone-delta.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="hover:text-primary-green font-bold text-base	">
                Premium
              </span>
            </a>
            <a
              href="http://getir-clone-delta.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="hover:text-primary-green font-bold text-base	">
                Destek
              </span>
            </a>
            <a
              href="http://getir-clone-delta.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="hover:text-primary-green font-bold text-base	">
                İndir
              </span>
            </a>
          </div>

          <div className="flex pl-6 gap-x-6 ">
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
  );
}
