"use client";
import { CodeSquare } from "lucide-react";

const Footer = () => {
    return (  
        <>
            <div className="fixed bg-[#1f1f1f] text-yellow-600 dark:bg-cyan-300 dark:text-cyan-950 p-4 bottom-0 w-full">
                <div className="flex text-xs text-center justify-center items-center">
                    <div>
                        <p><b>K-12 Cybersecurity Readiness Tool</b>&nbsp;
                            <a href="https://apoorvyadav.vercel.app" target="_blank">
                            Made by Apoorv Yadav
                            </a> in 2024</p>
                    </div>
                    <div> | </div>
                    <div>
                        Powered by <a href="https://nextjs.org" className="underline">Next.js</a> on <a href="https://vercel.com" className="underline">Vercel</a>
                    </div>
                    <div> | </div>
                    <div className="w-6 h-6">
                        <a href="https://github.com/apoorvyadav1111/" target="_blank" className="underline">
                            <CodeSquare size="sm"/>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Footer;