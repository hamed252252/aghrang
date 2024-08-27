import { DropdownMenuIcon } from "@radix-ui/react-icons";
import { useGSAP } from "@gsap/react";
import {
    NavigationMenuLink,
    NavigationMenuSub,
} from "@radix-ui/react-navigation-menu";
const slider = {};
import {
    FaInfoCircle,
    FaCertificate,
    FaAward,
} from "react-icons/fa";
import React from "react";

export const icons = {
    infoCircle: React.createElement(FaInfoCircle),
    certificate: React.createElement(FaCertificate),
    award: React.createElement(FaAward),
};
// Define the type
export type Multimedia = {
    name: string;
    link: string;
};

// types.ts

export interface SubUtility {
    name: string;
    href: string;
}

export interface Utility {
    name: string;
    href: string;
    subUtilities: SubUtility[];
}

export interface SubProduct {
    name: string;
    href: string;
}

export interface Product {
    name: string;
    href: string;
    subProducts: SubProduct[];
}
// Create a variable with three items
export let multiMedia: Multimedia[] = [
    {
        name: "حضور های نمایشگاهی", // Exhibition Attendance
        link: "exhibition-attendance",
    },
    {
        name: "گالری تصاویر", // Image Gallery
        link: "image-gallery",
    },
    {
        name: "گالری ویدویی", // Video Gallery
        link: "video-gallery",
    },
];
interface MenuItem {
    text: string;
    icon: JSX.Element;
    link: string;
}

export const aboutUsMenuItems: MenuItem[] = [
    {
        text: "آشنایی با آوا شیمی",
        icon: icons.infoCircle,
        link: "aboutus/introduction",
    },
    {
        text: "گواهینامه‌ها و مجوزها",
        icon: icons.certificate,
        link: "aboutus/certificates",
    },
    {
        text: "تقدیرنامه‌ها",
        icon: icons.award,
        link: "aboutus/acknowledgements",
    },
];

export const utilities = [
    {
        name: "رنگ و پوشش",
        href: "/colors-coatings",
        subUtilities: [
            {
                name: "رنگ پلاستیک داخل ساختمان (پایه آب)",
                href: "/colors-coatings/plastic-paint",
            },
            {
                name: "رنگ داخل ساختمان (اکریلیک)",
                href: "/colors-coatings/acrylic-paint",
            },
            {
                name: "پوشش نما (لاک)",
                href: "/colors-coatings/veneer-coating",
            },
            {
                name: "رنگهای هنری و دکوراتیو",
                href: "/colors-coatings/artistic-decorative-paints",
            },
            {
                name: "پوشش مینرال",
                href: "/colors-coatings/mineral-coating",
            },
            {
                name: "پوشش گرانولیت",
                href: "/colors-coatings/granolit-coating",
            },
            {
                name: "پوشش سلولزی",
                href: "/colors-coatings/cellulosic-coating",
            },
            {
                name: "رنگ نما",
                href: "/colors-coatings/outer-wall-paint",
            },
            {
                name: "آستری",
                href: "/colors-coatings/primer",
            },
            {
                name: "مولتی کالر",
                href: "/colors-coatings/multi-color",
            },
            {
                name: "رنگ استخری",
                href: "/colors-coatings/pool-paint",
            },
        ],
    },
    {
        name: "شیمی ساختمان",
        href: "/building-chemicals",
        subUtilities: [
            {
                name: "عایق رطوبتی (عایق سفید بام)",
                href: "/building-chemicals/waterproofing",
            },
            {
                name: "پوشش های آب بند",
                href: "/building-chemicals/sealing-coatings",
            },
            {
                name: "خمیر درزگیر",
                href: "/building-chemicals/joint-sealant",
            },
            {
                name: "ملات های ساختمانی",
                href: "/building-chemicals/construction-mortars",
            },
            {
                name: "پوشش های گرانولیت",
                href: "/building-chemicals/granolit-coatings",
            },
            {
                name: "چسب بتن",
                href: "/building-chemicals/concrete-adhesive",
            },
            {
                name: "چسب کاشی",
                href: "/building-chemicals/tile-adhesive",
            },
            {
                name: "چسب PVC و پنل های گچی",
                href: "/building-chemicals/pvc-adhesive",
            },
            {
                name: "کفپوش",
                href: "/building-chemicals/floor-coverings",
            },
            {
                name: "پد سلولزی",
                href: "/building-chemicals/cellulose-pads",
            },
            {
                name: "استحکام بتن",
                href: "/building-chemicals/concrete-strengthening",
            },
            {
                name: "کنیتکس",
                href: "/building-chemicals/konitex",
            },
        ],
    },
    {
        name: "صنعت چاپ و بسته بندی",
        href: "/printing-packaging",
        subUtilities: [
            {
                name: "مرکب چاپ",
                href: "/printing-packaging/printing-inks",
            },
            {
                name: "چاپ پیگمنت",
                href: "/printing-packaging/pigment-printing",
            },
            {
                name: "چسب فشار حساس",
                href: "/printing-packaging/pressure-sensitive-adhesives",
            },
            {
                name: "چسب سلفون",
                href: "/printing-packaging/selvage-adhesive",
            },
            {
                name: "چسب صحافی",
                href: "/printing-packaging/binding-adhesive",
            },
            {
                name: "تکمیل منسوجات بی بافت",
                href: "/printing-packaging/nonwoven-textile-finishing",
            },
            {
                name: "چسب بوم نقاشی",
                href: "/printing-packaging/canvas-adhesive",
            },
            {
                name: "چسب بسته بندی",
                href: "/printing-packaging/packaging-adhesives",
            },
            {
                name: "چسب شفاف (PVA15%)",
                href: "/printing-packaging/transparent-adhesive",
            },
            {
                name: "چاپ استیکر",
                href: "/printing-packaging/sticker-printing",
            },
            {
                name: "چسب باند گچی",
                href: "/printing-packaging/gummed-tape",
            },
            {
                name: "چسب کارتن",
                href: "/printing-packaging/carton-adhesive",
            },
        ],
    },
    {
        name: "صنایع چوب",
        href: "/wood-industry",
        subUtilities: [
            {
                name: "پوشش چوب",
                href: "/wood-industry/wood-coating",
            },
            {
                name: "چسب چوب",
                href: "/wood-industry/wood-adhesive",
            },
        ],
    },
    {
        name: "صنعت نساجی",
        href: "/textile-industry",
        subUtilities: [
            {
                name: "تکمیل لوردراپه",
                href: "/textile-industry/lordrape-finishing",
            },
            {
                name: "آهار فرش ماشینی",
                href: "/textile-industry/machine-carpet-stiffener",
            },
            {
                name: "آهار انواع پرده",
                href: "/textile-industry/curtain-stiffener",
            },
            {
                name: "آهار موکت",
                href: "/textile-industry/moquette-stiffener",
            },
        ],
    },
    {
        name: "ادتیوها",
        href: "/additives",
        subUtilities: [
            {
                name: "ضد کف سیلیکونی",
                href: "/additives/silicone-anti-foam",
            },
        ],
    },
];

export const products = [
    {
        name: "هموپلیمرها وینیل استاتی پایه آب",
        href: "/products/vinyl-acetate-homopolymers-water-based",
        subProducts: [
            {
                name: "AWA 100",
                href: "/vinyl-acetate-homopolymers-water-based/awa-100",
            },
            {
                name: "AWA H100",
                href: "/vinyl-acetate-homopolymers-water-based/awa-h100",
            },
            {
                name: "AWA H120",
                href: "/vinyl-acetate-homopolymers-water-based/awa-h120",
            },
            {
                name: "AWA H125",
                href: "/vinyl-acetate-homopolymers-water-based/awa-h125",
            },
            {
                name: "AWA H130",
                href: "/vinyl-acetate-homopolymers-water-based/awa-h130",
            },
            {
                name: "AWA 150",
                href: "/vinyl-acetate-homopolymers-water-based/awa-150",
            },
        ],
    },
    {
        name: "کوپلیمر وینیل استاتی پایه آب",
        href: "/products/vinyl-acetate-copolymers-water-based",
        subProducts: [
            {
                name: "AWA 22",
                href: "/vinyl-acetate-copolymers-water-based/awa-22",
            },
            {
                name: "AWA 220",
                href: "/vinyl-acetate-copolymers-water-based/awa-220",
            },
            {
                name: "AWA 225",
                href: "/vinyl-acetate-copolymers-water-based/awa-225",
            },
            {
                name: "AWA 55",
                href: "/vinyl-acetate-copolymers-water-based/awa-55",
            },
            {
                name: "AWA 60",
                href: "/vinyl-acetate-copolymers-water-based/awa-60",
            },
            {
                name: "AWA 66",
                href: "/vinyl-acetate-copolymers-water-based/awa-66",
            },
            {
                name: "MT 90",
                href: "/vinyl-acetate-copolymers-water-based/mt-90",
            },
        ],
    },
    {
        name: "کوپلیمر استایرن-اکرلیک پایه آب",
        href: "/products/styrene-acrylic-copolymers-water-based",
        subProducts: [
            {
                name: "SA 82",
                href: "/styrene-acrylic-copolymers-water-based/sa-82",
            },
            {
                name: "SA 83",
                href: "/styrene-acrylic-copolymers-water-based/sa-83",
            },
            {
                name: "SA 84",
                href: "/styrene-acrylic-copolymers-water-based/sa-84",
            },
            {
                name: "SA 85",
                href: "/styrene-acrylic-copolymers-water-based/sa-85",
            },
            {
                name: "SA 86",
                href: "/styrene-acrylic-copolymers-water-based/sa-86",
            },
            {
                name: "SA 87",
                href: "/styrene-acrylic-copolymers-water-based/sa-87",
            },
            {
                name: "SA 88",
                href: "/styrene-acrylic-copolymers-water-based/sa-88",
            },
            {
                name: "SA 88M",
                href: "/styrene-acrylic-copolymers-water-based/sa-88m",
            },
            {
                name: "SA 89B",
                href: "/styrene-acrylic-copolymers-water-based/sa-89b",
            },
            {
                name: "SA 90",
                href: "/styrene-acrylic-copolymers-water-based/sa-90",
            },
            {
                name: "SA 91",
                href: "/styrene-acrylic-copolymers-water-based/sa-91",
            },
            {
                name: "SA 400",
                href: "/styrene-acrylic-copolymers-water-based/sa-400",
            },
            {
                name: "SA 490H",
                href: "/styrene-acrylic-copolymers-water-based/sa-490h",
            },
            {
                name: "SA 490S",
                href: "/styrene-acrylic-copolymers-water-based/sa-490s",
            },
        ],
    },
    {
        name: "کوپلیمر اکریلیک خالص",
        href: "/products/pure-acrylic-copolymers",
        subProducts: [
            {
                name: "PA 77",
                href: "/pure-acrylic-copolymers/pa-77",
            },
            {
                name: "PA 78",
                href: "/pure-acrylic-copolymers/pa-78",
            },
            {
                name: "PA 79",
                href: "/pure-acrylic-copolymers/pa-79",
            },
            {
                name: "PA 117",
                href: "/pure-acrylic-copolymers/pa-117",
            },
            {
                name: "PA 117(II)",
                href: "/pure-acrylic-copolymers/pa-117-ii",
            },
        ],
    },
    {
        name: "ادتیوها",
        href: "/products/additives",
        subProducts: [
            { name: "A 42", href: "/additives/a-42" },
            { name: "S-710", href: "/additives/s-710" },
        ],
    },
];
