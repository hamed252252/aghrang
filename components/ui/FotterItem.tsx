import React from "react";

type footerProp = {
    text: String;
};
const FotterItem = ({ text }: footerProp) => {
    return (
        <div className="flex justify-center items-center font-iransans">
            <div className="w-1 h-1 bg-green-300 mx-2 rounded-full"></div>
            <div>{text}</div>
        </div>
    );
};

export default FotterItem;
