import About from "@/components/about";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import {
  AiOutlineLinkedin,
  AiOutlineMobile,
  AiOutlineMail,
} from "react-icons/ai";

export default function Home() {
  const contactItemStyle = "flex gap-2 items-center justify-start font-light";
  return (
    <main>
      <section className="presentation">
        <div className="bg-gradient-to-r from-sky-500 to-emerald-500 h-[10rem]" />
        <div className="container max-w-[90%] mx-auto">
          <div className="bg-white shadow-md shadow-gray-300 rounded-md mt-[-8rem] p-12">
            <div className="mb-5 flex flex-col">
              <h1 className="text-4xl text-purple-600 mb-2">Abel Valdelvira</h1>
              <h2 className="text-1xl font-normal text-neutral-900">
                Senior Frontend Developer
              </h2>
              <h3 className="text-lg text-neutral-500 font-light">
                15/05/1988 Barcelona, Spain (No visa required)
              </h3>
            </div>
            <div>
              <dl className="flex flex-col gap-2">
                <dt className="font-bold text-lg">Contact</dt>
                <dd className={contactItemStyle}>
                  <AiOutlineMail size={24} /> avaldelvira.frontend@gmail.com
                </dd>
                <dd className={contactItemStyle}>
                  <AiOutlineMobile size={24} /> +4407925220293
                </dd>
                <dd className={contactItemStyle}>
                  <AiOutlineLinkedin size={24} />
                  <a
                    className="text-purple-600"
                    href="https://www.linkedin.com/in/avaldelvira/"
                  >
                    linkedin.com/in/avaldelvira/
                  </a>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Skills />
      <Experience />
    </main>
  );
}
