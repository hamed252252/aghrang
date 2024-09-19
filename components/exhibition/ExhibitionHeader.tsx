import React from "react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import Link from "next/link";

function ExhibitionHeader({ src }: { src: string }) {
    return (
        <section className="relative">
            <div
                style={{
                    backgroundImage: `linear-gradient(135deg, rgba(122,220,180,0) 0%, rgba(36,167,3,1) 100%), url(${src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="h-96 relative w-full "
            >
                <div className="absolute top-[45%] right-[40%] text-white font-iransans">
                    {/* Content goes here */}
                    <p className="text-3xl">نمایشگاه</p>
                    <Separator className="mt-2 bg-slate-500 h-0.5" />
                    <p className="text-2xl mt-2">
                        شرکت آق رنگ
                    </p>
                    <Button className="px-4 py-2 mt-4 hover:text-white bg-[#abb8c3] text-black rounded">
                        <Link href={"/"}>
                            برگشت به صحفه ی اصلی
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default ExhibitionHeader;
