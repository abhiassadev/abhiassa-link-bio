import LinkCard from "../components/LinkCard";

function Home() {
  return (
    <>
      <main className="sm:h-screen sm:flex sm:justify-center sm:items-center sm:p-20">
        <div className="relative sm:border sm:border-slate-200 sm:w-full sm:rounded-xl">
          <div className="bg-[url('/tornado-hurricane-from-space-picjumbo-com.jpg')] bg-cover h-32 sm:rounded-xl"></div>
          <div className="absolute top-20 left-20 right-20 z-2 flex flex-col justify-center items-center text-center">
            <div className="bg-gray-50 h-28 w-28 rounded-full ring">
              <img
                src="/foto-abhiassa-by-AI.jpg"
                alt="Rehan Abhiassa photo"
                className="rounded-full"
              />
            </div>
            <h1 className="text-xl font-bold text-slate-950 mt-5">
              Rehan Abhiassa
            </h1>
            <p className="text-sm font-normal text-slate-950 opacity-80">
              Welcome to my link bio website!
            </p>
            <div className="flex gap-5 mt-5">
              <a href="https://github.com/abhiassadev" target="_blank">
                <i className="bi bi-github text-xl text-slate-950"></i>
              </a>
              <a href="https://www.instagram.com/_rhnassa" target="_blank">
                <i className="bi bi-instagram  text-xl text-slate-950"></i>
              </a>
              <a href="https://www.tiktok.com/@abhiassasync" target="_blank">
                <i className="bi bi-tiktok text-xl text-slate-950"></i>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-5 px-5 mt-56 mb-10">
            <a href="https://github.com/abhiassadev" target="_blank">
              <LinkCard icon="github" title="My Projects" />
            </a>
            <a href="mailto:personalabhiassa@gmail.com">
              <LinkCard icon="envelope-fill" title="Email" />
            </a>
            <a href="https://abhiassastudio.site" target="_blank">
              <LinkCard icon="code-slash" title="My Studio" />
            </a>
          </div>
        </div>
      </main>
      <footer className="flex flex-col justify-center items-center mt-20 mb-5">
        <p className="text-sm text-slate-950">&copy;2025 Abhiassa</p>
        <p className="text-sm text-slate-950">
          Space image by{" "}
          <a href="" className="text-blue-700">
            Picjumbo
          </a>
        </p>
      </footer>
    </>
  );
}

export default Home;
