import React, {useEffect, useState} from "react";

// react icons
import {IoIosArrowDown} from "react-icons/io";
import {IoCheckmark} from "react-icons/io5";

const SingleSelectWithSearch = () => {
    const [searchValue, setSearchValue] = useState("");
    const [isOpenDropdown, setIsOpenDropdown] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const options = [
        { id: 1, name: "Option 1" },
        { id: 2, name: "Option 2" },
        { id: 3, name: "Option 3" },
        { id: 4, name: "Option 4" },
        { id: 5, name: "Option 5" },
    ];

    const filteredItems = options.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    const isSelected = (item) => {
        return selectedItem?.id === item.id;
    };

    const toggleItem = (item) => {
        setSelectedItem(item);
    };

    // outside click to off the dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (event.target.closest(".custom-select")) return;
            setTimeout(() => {
                setIsOpenDropdown(false);
            }, 200);
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
            <div className="relative custom-select w-[80%]">
                {/* Input field with search functionality */}
                <input
                    type="text"
                    placeholder="Search.."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setIsOpenDropdown(true)}
                    className={`w-full dark:border-slate-600 dark:bg-transparent dark:text-[#abc2d3] border border-gray-300 rounded-md px-3 py-2 focus:outline-none`}
                />

                <IoIosArrowDown
                    className={`${
                        isOpenDropdown ? "rotate-[180deg]" : "rotate-0"
                    } transition-all duration-300 text-[1.3rem] absolute top-[50%] transform translate-y-[-50%] right-3 text-gray-500`}
                />

                {/* Dropdown menu */}
                {isOpenDropdown && (
                    <div
                        className="absolute left-0 w-full mt-1 border dark:border-slate-700 dark:bg-slate-800 border-gray-200 rounded-md bg-white shadow-lg z-20">
                        <div className="w-full overflow-auto">
                            {filteredItems.map((item) => (
                                <p
                                    key={item.id}
                                    onClick={() => toggleItem(item)}
                                    className="cursor-pointer px-3 py-2 dark:hover:bg-slate-900/40 flex items-center hover:bg-gray-200 dark:text-[#abc2d3]"
                                >
                                    <IoCheckmark
                                        className={`${
                                            isSelected(item)
                                                ? "scale-[1] opacity-100"
                                                : "scale-[0.5] opacity-0"
                                        } mr-2 transition-all text-[1.3rem] duration-300`}
                                    />
                                    {item.name}
                                </p>
                            ))}

                            {filteredItems?.length === 0 && (
                                <p className="text-center dark:text-[#abc2d3] text-[0.9rem] text-text py-8">
                                    No search found!
                                </p>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SingleSelectWithSearch;
