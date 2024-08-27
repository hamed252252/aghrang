import { Separator } from "@/components/ui/separator";
import {
    Truck,
    Clock,
    Gift,
    CreditCard,
} from "lucide-react";
interface SidebarProps {
    categories: string[];
    shippingInfo: string;
}

const Sidebar: React.FC<SidebarProps> = ({
    categories,
    shippingInfo,
}) => (
    <aside
        dir="ltr"
        className="w-full flex flex-col items-end justify-start text-right rounded-md shadow-xl shadow-slate-300 md:w-3/4  lg:w-full p-4 bg-gray-100"
    >
        <div className="mb-4">
            <h3 className="text-2xl my font-bold mb-4">
                برند
            </h3>
            <ul className=" text-slate-400">
                {categories.map((category, index) => (
                    <li key={index}>{category}</li>
                ))}
            </ul>
        </div>
        <Separator className="my-4" />
        <div
            dir="rtl"
            className="p-4 bg-gray-100 rounded-lg "
        >
            <div className="flex items-start mb-4">
                <Truck
                    className="text-violet-600"
                    size={24}
                />
                <div className="ml-3">
                    <div className="font-semibold text-gray-800">
                        ارسال رایگان
                    </div>
                    <div className="text-sm text-gray-500">
                        ارسال رایگان به سراسر جهان
                    </div>
                </div>
            </div>

            <div className="flex items-start mb-4">
                <Clock
                    className="text-violet-600"
                    size={24}
                />
                <div className="ml-3">
                    <div className="font-semibold text-gray-800">
                        X 24 7 سرویس
                    </div>
                    <div className="text-sm text-gray-500">
                        خدمات آنلاین برای مشتری جدید
                    </div>
                </div>
            </div>

            <div className="flex items-start mb-4">
                <Gift
                    className="text-violet-600"
                    size={24}
                />
                <div className="ml-3">
                    <div className="font-semibold text-gray-800">
                        پیشنهاد جشنواره
                    </div>
                    <div className="text-sm text-gray-500">
                        جشنواره ویژه آنلاین جدید
                    </div>
                </div>
            </div>

            <div className="flex items-start">
                <CreditCard
                    className="text-violet-600"
                    size={24}
                />
                <div className="ml-3">
                    <div className="font-semibold text-gray-800">
                        پرداخت آنلاین
                    </div>
                    <div className="text-sm text-gray-500">
                        بر خلاف باور عمومی.
                    </div>
                </div>
            </div>
        </div>
    </aside>
);

export default Sidebar;
