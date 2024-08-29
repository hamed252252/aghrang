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
export type FilterAction =
    | { type: "SET_GRID"; payload: string }
    | { type: "SET_LIST"; payload: string };

// تعریف نوع حالت
export interface FilterState {
    filter: string;
}

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
        link: "gallery",
    },
    {
        name: "گالری ویدویی", // Video Gallery
        link: "gallery",
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
                href: "/utilities/colors-coatings/plastic-paint",
            },
            {
                name: "رنگ داخل ساختمان (اکریلیک)",
                href: "/utilities/colors-coatings/acrylic-paint",
            },
            {
                name: "پوشش نما (لاک)",
                href: "/utilities/colors-coatings/veneer-coating",
            },
            {
                name: "رنگهای هنری و دکوراتیو",
                href: "/utilities/colors-coatings/artistic-decorative-paints",
            },
            {
                name: "پوشش مینرال",
                href: "/utilities/colors-coatings/mineral-coating",
            },
            {
                name: "پوشش گرانولیت",
                href: "/utilities/colors-coatings/granolit-coating",
            },
            {
                name: "پوشش سلولزی",
                href: "/utilities/colors-coatings/cellulosic-coating",
            },
            {
                name: "رنگ نما",
                href: "/utilities/colors-coatings/outer-wall-paint",
            },
            {
                name: "آستری",
                href: "/utilities/colors-coatings/primer",
            },
            {
                name: "مولتی کالر",
                href: "/utilities/colors-coatings/multi-color",
            },
            {
                name: "رنگ استخری",
                href: "/utilities/colors-coatings/pool-paint",
            },
        ],
    },
    {
        name: "شیمی ساختمان",
        href: "/building-chemicals",
        subUtilities: [
            {
                name: "عایق رطوبتی (عایق سفید بام)",
                href: "/utilities/building-chemicals/waterproofing",
            },
            {
                name: "پوشش های آب بند",
                href: "/utilities/building-chemicals/sealing-coatings",
            },
            {
                name: "خمیر درزگیر",
                href: "/utilities/building-chemicals/joint-sealant",
            },
            {
                name: "ملات های ساختمانی",
                href: "/utilities/building-chemicals/construction-mortars",
            },
            {
                name: "پوشش های گرانولیت",
                href: "/utilities/building-chemicals/granolit-coatings",
            },
            {
                name: "چسب بتن",
                href: "/utilities/building-chemicals/concrete-adhesive",
            },
            {
                name: "چسب کاشی",
                href: "/utilities/building-chemicals/tile-adhesive",
            },
            {
                name: "چسب PVC و پنل های گچی",
                href: "/utilities/building-chemicals/pvc-adhesive",
            },
            {
                name: "کفپوش",
                href: "/utilities/building-chemicals/floor-coverings",
            },
            {
                name: "پد سلولزی",
                href: "/utilities/building-chemicals/cellulose-pads",
            },
            {
                name: "استحکام بتن",
                href: "/utilities/building-chemicals/concrete-strengthening",
            },
            {
                name: "کنیتکس",
                href: "/utilities/building-chemicals/konitex",
            },
        ],
    },
    {
        name: "صنعت چاپ و بسته بندی",
        href: "/utilities/printing-packaging",
        subUtilities: [
            {
                name: "مرکب چاپ",
                href: "/utilities/printing-packaging/printing-inks",
            },
            {
                name: "چاپ پیگمنت",
                href: "/utilities/printing-packaging/pigment-printing",
            },
            {
                name: "چسب فشار حساس",
                href: "/utilities/printing-packaging/pressure-sensitive-adhesives",
            },
            {
                name: "چسب سلفون",
                href: "/utilities/printing-packaging/selvage-adhesive",
            },
            {
                name: "چسب صحافی",
                href: "/utilities/printing-packaging/binding-adhesive",
            },
            {
                name: "تکمیل منسوجات بی بافت",
                href: "/utilities/printing-packaging/nonwoven-textile-finishing",
            },
            {
                name: "چسب بوم نقاشی",
                href: "/utilities/printing-packaging/canvas-adhesive",
            },
            {
                name: "چسب بسته بندی",
                href: "/utilities/printing-packaging/packaging-adhesives",
            },
            {
                name: "چسب شفاف (PVA15%)",
                href: "/utilities/printing-packaging/transparent-adhesive",
            },
            {
                name: "چاپ استیکر",
                href: "/utilities/printing-packaging/sticker-printing",
            },
            {
                name: "چسب باند گچی",
                href: "/utilities/printing-packaging/gummed-tape",
            },
            {
                name: "چسب کارتن",
                href: "/utilities/printing-packaging/carton-adhesive",
            },
        ],
    },
    {
        name: "صنایع چوب",
        href: "/utilities/wood-industry",
        subUtilities: [
            {
                name: "پوشش چوب",
                href: "/utilities/wood-industry/wood-coating",
            },
            {
                name: "چسب چوب",
                href: "/utilities/wood-industry/wood-adhesive",
            },
        ],
    },
    {
        name: "صنعت نساجی",
        href: "/utilities/textile-industry",
        subUtilities: [
            {
                name: "تکمیل لوردراپه",
                href: "/utilities/textile-industry/lordrape-finishing",
            },
            {
                name: "آهار فرش ماشینی",
                href: "/utilities/textile-industry/machine-carpet-stiffener",
            },
            {
                name: "آهار انواع پرده",
                href: "/utilities/textile-industry/curtain-stiffener",
            },
            {
                name: "آهار موکت",
                href: "/utilities/textile-industry/moquette-stiffener",
            },
        ],
    },
    {
        name: "ادتیوها",
        href: "/utilities/additives",
        subUtilities: [
            {
                name: "ضد کف سیلیکونی",
                href: "/utilities/additives/silicone-anti-foam",
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
                href: "/products/vinyl-acetate-homopolymers-water-based/awa-100",
            },
            {
                name: "AWA H100",
                href: "/products/vinyl-acetate-homopolymers-water-based/awa-h100",
            },
            {
                name: "AWA H120",
                href: "/products/vinyl-acetate-homopolymers-water-based/awa-h120",
            },
            {
                name: "AWA H125",
                href: "/products/vinyl-acetate-homopolymers-water-based/awa-h125",
            },
            {
                name: "AWA H130",
                href: "/products/vinyl-acetate-homopolymers-water-based/awa-h130",
            },
            {
                name: "AWA 150",
                href: "/products/vinyl-acetate-homopolymers-water-based/awa-150",
            },
        ],
    },
    {
        name: "کوپلیمر وینیل استاتی پایه آب",
        href: "/products/products/vinyl-acetate-copolymers-water-based",
        subProducts: [
            {
                name: "AWA 22",
                href: "/products/vinyl-acetate-copolymers-water-based/awa-22",
            },
            {
                name: "AWA 220",
                href: "/products/vinyl-acetate-copolymers-water-based/awa-220",
            },
            {
                name: "AWA 225",
                href: "/products/vinyl-acetate-copolymers-water-based/awa-225",
            },
            {
                name: "AWA 55",
                href: "/products/vinyl-acetate-copolymers-water-based/awa-55",
            },
            {
                name: "AWA 60",
                href: "/products/vinyl-acetate-copolymers-water-based/awa-60",
            },
            {
                name: "AWA 66",
                href: "/products/vinyl-acetate-copolymers-water-based/awa-66",
            },
            {
                name: "MT 90",
                href: "/products/vinyl-acetate-copolymers-water-based/mt-90",
            },
        ],
    },
    {
        name: "کوپلیمر استایرن-اکرلیک پایه آب",
        href: "/products/products/styrene-acrylic-copolymers-water-based",
        subProducts: [
            {
                name: "SA 82",
                href: "/products/styrene-acrylic-copolymers-water-based/sa-82",
            },
            {
                name: "SA 83",
                href: "/products/styrene-acrylic-copolymers-water-based/sa-83",
            },
            {
                name: "SA 84",
                href: "/products/styrene-acrylic-copolymers-water-based/sa-84",
            },
            {
                name: "SA 85",
                href: "/products/styrene-acrylic-copolymers-water-based/sa-85",
            },
            {
                name: "SA 86",
                href: "/products/styrene-acrylic-copolymers-water-based/sa-86",
            },
            {
                name: "SA 87",
                href: "/products/styrene-acrylic-copolymers-water-based/sa-87",
            },
            {
                name: "SA 88",
                href: "/products/styrene-acrylic-copolymers-water-based/sa-88",
            },
            {
                name: "SA 88M",
                href: "/products/styrene-acrylic-copolymers-water-based/sa-88m",
            },
            {
                name: "SA 89B",
                href: "/products/styrene-acrylic-copolymers-water-based/sa-89b",
            },
            {
                name: "SA 90",
                href: "/products/styrene-acrylic-copolymers-water-based/sa-90",
            },
            {
                name: "SA 91",
                href: "/products/styrene-acrylic-copolymers-water-based/sa-91",
            },
            {
                name: "SA 400",
                href: "/products/styrene-acrylic-copolymers-water-based/sa-400",
            },
            {
                name: "SA 490H",
                href: "/products/styrene-acrylic-copolymers-water-based/sa-490h",
            },
            {
                name: "SA 490S",
                href: "/products/styrene-acrylic-copolymers-water-based/sa-490s",
            },
        ],
    },
    {
        name: "کوپلیمر اکریلیک خالص",
        href: "/products/products/pure-acrylic-copolymers",
        subProducts: [
            {
                name: "PA 77",
                href: "/products/pure-acrylic-copolymers/pa-77",
            },
            {
                name: "PA 78",
                href: "/products/pure-acrylic-copolymers/pa-78",
            },
            {
                name: "PA 79",
                href: "/products/pure-acrylic-copolymers/pa-79",
            },
            {
                name: "PA 117",
                href: "/products/pure-acrylic-copolymers/pa-117",
            },
            {
                name: "PA 117(II)",
                href: "/products/pure-acrylic-copolymers/pa-117-ii",
            },
        ],
    },
    {
        name: "ادتیوها",
        href: "/products/products/additives",
        subProducts: [
            {
                name: "A 42",
                href: "/products/additives/a-42",
            },
            {
                name: "S-710",
                href: "/products/additives/s-710",
            },
        ],
    },
];
