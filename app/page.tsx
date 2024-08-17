import Content from "@/components/Content";
import BlurFade from "@/components/magicui/blur-fade";
import { MagicCard } from "@/components/magicui/magic-card";
import Menus from "@/components/menus";

import Slider from "@/components/Slider";
import { Button } from "@/components/ui/button";
import Footer from "@/components/ui/Footer";
import PulsatingButton from "@/components/ui/pulsating-button";

export default function Home() {
    return (
        <main>
            <div className="mx-auto  p-4">
                <Slider />
            </div>

            <Content />
        </main>
    );
}
