
import { Inter } from "next/font/google";

import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Intro_Button({url}:{url: string}) {

    return (
        <Link
          href={"/"+ url}
          className="
          group flex items-center rounded-full border border-white-300 h-10 px-7 m-3
          hover:border-primary hover:bg-primary transition-colors duration-300 "
          rel="noopener noreferrer"
        >
          <h2 className="text-1xl text-white capitalize">
            {url + " "}
            <span className={`${inter.className} inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none`}>
              -&gt;
            </span>
          </h2>
        </Link>
    )

}