"use client";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const startQuiz = () => {
    router.push("/quiz");
  }
  return (
    <div className="flex flex-row items-center justify-center min-h-screen py-2">
      <div className="basis-3/4 px-10 text-justify justify-between items-end border-r-2 border-r-black dark:border-r-cyan-300 text-black dark:text-cyan-300">
      <h2 className="text-4xl font-bold">
        Aiding K-12 students learn about cybersecurity
      </h2>
      <br/>
      <p className="font-bold">
        The K-12 Cybersecurity Readiness Tool is an online tool that helps K-12 students learn about cybersecurity.
        The tool is designed to be interactive and engaging, making it easy for students to learn about cybersecurity concepts.
        With the K-12 Cybersecurity Readiness Tool, students can learn about topics such as password security, phishing, malware, online scam and social engineering scenarios.
        This tool is created as part of the CS558: Introduction to Cybersecurity course at the State University of New York at Binghamton.
        The source code of this project will be available on <a href="">Github</a> after course ends and is available under the MIT License.
      </p>
      <br />
      <p className="text-[10px] bottom-0">
        This tool does not collect data in any way and is not intended to be used in a production environment. It is a proof of concept and should be used for educational purposes only.
      </p>
      </div>
      <div className="flex flex-col basis-1/2 items-center tex">
        <Button
          className="bg-black dark:bg-transparent border-2 border-black text-yellow-500 dark:border-cyan-300 dark:text-cyan-300 hover:bg-white hover:text-black
          dark:hover:bg-cyan-300 dark:hover:text-cyan-900"
          variant="outline"
          size={"lg"}
          onClick={() => {startQuiz()}}
        >
          Take me there
          <ArrowRightIcon size={24} />
        </Button>
      </div>
    </div>
  );
}
