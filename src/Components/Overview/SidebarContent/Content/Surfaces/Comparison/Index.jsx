import React, { useState } from 'react';

// react helmet
import { Helmet } from 'react-helmet';

// components
import ContentHeader from '../../../../../../Shared/ContentHeader.jsx';
import OverviewFooter from '../../../../../../Shared/OverviewFooter.jsx';
import Showcode from '../../../../../../Shared/ShowCode.jsx';

// contents for scrollspy
import {comparisonContents} from '../../../../../../Utils/ContentsConfig/SurfacesContents.js';
import { useScrollSpy } from '../../../../../../CustomHooks/useScrollSpy.js';
import {useToggleCardView} from "../../../../../../CustomHooks/ButtonToggle.js";

import VerticalComparisonExample from "./VerticalComparisonExample.jsx";
import HorizontalComparisonExample from "./HorizontalComparisonExample.jsx";

const Index = () => {
    const sectionIds = comparisonContents.map((item) => item.href.slice(1));
    const activeSection = useScrollSpy(sectionIds);

    const toggle = useToggleCardView()

    // toggle
    const [verticalComparisonPreview, setVerticalComparisonPreview] = useState(true);
    const [verticalComparisonCode, setVerticalComparisonCode] = useState(false);

    const [horizontalComparisonPreview, setHorizontalComparisonPreview] = useState(true);
    const [horizontalComparisonCode, setHorizontalComparisonCode] = useState(false);;

    return (
        <>
            <aside className='flex items-start gap-6 justify-between w-full 640px:pl-[2.5rem] px-6 640px:px-10'>
                <div className='w-full 425px:w-[80%]'>

                    <ContentHeader id='vertical_comparison' text={'Vertical comparison'} />

                    <p className='w-full 425px:w-[80%] text-text text-[1rem]'>
                        Compare items side-by-side in a vertical layout for clear and easy analysis.
                    </p>

                    {/* First Index Container */}
                    <div className='w-full 425px:w-[90%] border border-border rounded mt-8'>
                        <div className='relative'>
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${verticalComparisonPreview
                                    ? 'translate-x-[0px] !w-[100px]'
                                    : 'translate-x-[106px] rounded-br'
                                }`}
                            ></div>
                            <button
                                className={`${verticalComparisonPreview && 'text-tabTextColor'
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={()=> toggle(setVerticalComparisonPreview, setVerticalComparisonCode, true)}
                            >
                                Preview
                            </button>
                            <button
                                className={`${verticalComparisonCode && 'text-tabTextColor'
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={()=> toggle(setVerticalComparisonPreview, setVerticalComparisonCode, false)}
                            >
                                Code
                            </button>
                        </div>

                        {verticalComparisonPreview && (
                            <div className='p-8 mb-4 flex flex-col items-center gap-5 h-[400px] justify-center'>
                                <VerticalComparisonExample/>
                            </div>
                        )}

                        {verticalComparisonCode && (
                            <Showcode
                                code='
import { useState, useRef, useEffect } from "react";

const VerticalComparisonCard = () => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef(null);
    const isDragging = useRef(false);

    // handle mouse move and calculate the comparison
    const handleMove = (clientY) => {
        if (!isDragging.current) return;

        const container = containerRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const y = Math.min(Math.max(0, clientY - rect.top), rect.height);
        const position = (y / rect.height) * 100;

        setSliderPosition(position);
    };

    const handleMouseMove = (e) => handleMove(e.clientY);
    const handleTouchMove = (e) => handleMove(e.touches[0].clientY);

    // start dragging
    const startDragging = () => {
        isDragging.current = true;
    };

    // stop the comparison dragging
    const stopDragging = () => {
        isDragging.current = false;
    };

    useEffect(() => {
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", stopDragging);
        document.addEventListener("touchmove", handleTouchMove, { passive: true });
        document.addEventListener("touchend", stopDragging);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", stopDragging);
            document.removeEventListener("touchmove", handleTouchMove);
            document.removeEventListener("touchend", stopDragging);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-full select-none bg-gray-100"
        >
            {/* Before Image */}
            <img
                src="https://i.ibb.co.com/YXzxRBv/before.png"
                alt="Before"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* After Image */}
            <img
                src="https://i.ibb.co.com/1ZKL4wK/after.png"
                alt="After"
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                    clipPath: `polygon(0 0, 100% 0, 100% ${sliderPosition}%, 0 ${sliderPosition}%)`
                }}
            />

            {/* Slider Handle */}
            <div
                className="absolute left-0 right-0 h-0.5 bg-white cursor-ns-resize"
                style={{ top: `${sliderPosition}%` }}
                onMouseDown={startDragging}
                onTouchStart={startDragging}
            >
                <div className="absolute top-1/2 left-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-full h-full rounded-full bg-[#0FABCA] border-[3px] border-white shadow-lg flex items-center justify-center">
                        <div className="flex gap-[5px] justify-evenly rotate-90">
                            <div className="w-0.5 h-4 bg-white"></div>
                            <div className="w-0.5 h-4 bg-white"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerticalComparisonCard;
                                '
                            />
                        )}
                    </div>

                    <div className='mt-8'>
                        <ContentHeader id='horizontal_comparison' text={'Horizontal comparison'} />
                    </div>

                    <p className='w-full 425px:w-[80%] text-text text-[1rem]'>
                        Compare items side-by-side in a horizontal layout for clear and easy analysis.
                    </p>

                    {/* First Index Container */}
                    <div className='w-full 425px:w-[90%] border border-border rounded mt-8'>
                        <div className='relative'>
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${horizontalComparisonPreview
                                    ? 'translate-x-[0px] !w-[100px]'
                                    : 'translate-x-[106px] rounded-br'
                                }`}
                            ></div>
                            <button
                                className={`${horizontalComparisonPreview && 'text-tabTextColor'
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={()=> toggle(setHorizontalComparisonPreview, setHorizontalComparisonCode, true)}
                            >
                                Preview
                            </button>
                            <button
                                className={`${verticalComparisonCode && 'text-tabTextColor'
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={()=> toggle(setHorizontalComparisonPreview, setHorizontalComparisonCode, false)}
                            >
                                Code
                            </button>
                        </div>

                        {horizontalComparisonPreview && (
                            <div className='p-8 mb-4 flex flex-col items-center gap-5 h-[400px] justify-center'>
                                <HorizontalComparisonExample/>
                            </div>
                        )}

                        {horizontalComparisonCode && (
                            <Showcode
                                code='
import { useState, useRef, useEffect } from "react";

const HorizontalComparisonCard = () => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef(null);
    const isDragging = useRef(false);

    const handleMove = (clientX) => {
        if (!isDragging.current) return;

        const container = containerRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const x = Math.min(Math.max(0, clientX - rect.left), rect.width);
        const position = (x / rect.width) * 100;

        setSliderPosition(position);
    };

    const handleMouseMove = (e) => handleMove(e.clientX);
    const handleTouchMove = (e) => handleMove(e.touches[0].clientX);

    const startDragging = () => {
        isDragging.current = true;
    };

    const stopDragging = () => {
        isDragging.current = false;
    };

    useEffect(() => {
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", stopDragging);
        document.addEventListener("touchmove", handleTouchMove, { passive: true });
        document.addEventListener("touchend", stopDragging);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", stopDragging);
            document.removeEventListener("touchmove", handleTouchMove);
            document.removeEventListener("touchend", stopDragging);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full aspect-video select-none bg-gray-100"
        >
            {/* Before Image */}
            <img
                src="https://i.ibb.co.com/YXzxRBv/before.png"
                alt="Before"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* After Image */}
            <img
                src="https://i.ibb.co.com/1ZKL4wK/after.png"
                alt="After"
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                    clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
                }}
            />

            {/* Slider Handle */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
                style={{ left: `${sliderPosition}%` }}
                onMouseDown={startDragging}
                onTouchStart={startDragging}
            >
                <div className="absolute top-1/2 left-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-full h-full rounded-full border-[3px] border-white bg-[#0FABCA] shadow-lg flex items-center justify-center">
                        <div className="flex gap-[5px] justify-evenly">
                            <div className="w-0.5 h-4 bg-white"></div>
                            <div className="w-0.5 h-4 bg-white"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HorizontalComparisonCard;
                                '
                            />
                        )}
                    </div>

                    <OverviewFooter
                        backUrl='/components/drag-and-drop'
                        backName='Drag & Drop'
                        forwardName='Cards'
                        forwardUrl='/components/cards'
                    />
                </div>

                <div className='1024px:flex hidden flex-col gap-4 sticky top-4 right-0 w-[35%]'>
                    <h2 className='text-[0.9rem] font-[600] text-text tracking-widest'>
                        CONTENTS
                    </h2>
                    {comparisonContents.map((item) => (
                        <a
                            key={item.id}
                            href={item.href}
                            className={`${activeSection === item.href.slice(1) &&
                            '!text-primary !border-primary'
                            } text-[0.9rem] text-text border-l border-transparent pl-4`}
                        >
                            {item.title}
                        </a>
                    ))}
                </div>
            </aside>
            <Helmet>
                <title>Surfaces - Comparison Card</title>
            </Helmet>
        </>
    );
};

export default Index;
