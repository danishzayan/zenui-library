import React, { useState } from "react";

// react helmet
import { Helmet } from "react-helmet";

// components
import ContentHeader from "../../../../../Shared/ContentHeader";
import Showcode from "../../../../../Shared/Component/ShowCode.jsx";
import OverviewFooter from "../../../../../Shared/OverviewFooter";

// contents for scrollspy
import { accordionContents } from '../../../../../Utils/ContentsConfig/SurfacesContents';
import { useScrollSpy } from '../../../../../CustomHooks/useScrollSpy';

// icons
import { FaChevronDown, FaPlus } from "react-icons/fa6";

import ComponentDescription from "../../../../../Shared/Component/ComponentDescription.jsx";
import ToggleTab from "../../../../../Shared/Component/ToggleTab.jsx";
import ComponentWrapper from "../../../../../Shared/Component/ComponentWrapper.jsx";
import ContentNavbar from "../../../../../Shared/Component/ContentNavbar.jsx";

const According = () => {
  // defaultAccording
  const [defaultAccordingPreview, setDefaultAccordingPreview] = useState(true);
  const [defaultAccordingCode, setDefaultAccordingCode] = useState(false);

  const sectionIds = accordionContents.map(item => item.href.slice(1));
  const activeSection = useScrollSpy(sectionIds);

  // borderAccording
  const [borderAccordingPreview, setBorderAccordingPreview] = useState(true);
  const [borderAccordingCode, setBorderAccordingCode] = useState(false);

  // bgAccording
  const [bgAccordingPreview, setBgAccordingPreview] = useState(true);
  const [bgAccordingCode, setBgAccordingCode] = useState(false);

  const accordingData = [
    {
      title: "What is the purpose of wireframing in design?",
      description:
        "Wireframing outlines the basic structure and layout of a design, serving as a visual guide before detailed development.",
    },
    {
      title: "Why is user-centered design important?",
      description:
        "User-centered design ensures products meet the needs and preferences of the end-users, enhancing usability and satisfaction.",
    },
    {
      title: "What role does contrast play in graphic design?",
      description:
        "Contrast in graphic design emphasizes differences, making elements stand out and improving visual hierarchy.",
    },

    {
      title: "Define the term 'responsive design' in web development.",
      description:
        "Responsive design ensures web pages adapt to various screen sizes, providing an optimal user experience on different devices.",
    },

    {
      title: "What is the significance of color theory in design?",
      description:
        "Color theory guides the selection and combination of colors to evoke specific emotions, enhance readability, and create visually appealing designs.",
    },
  ];
  const [isAccordingOpen, setIsAccordingOpen] = useState(0);
  const handleClick = (index) =>
    setIsAccordingOpen((prevIndex) => (prevIndex === index ? null : index));

  // second according
  const [isPlusAccording, setIsPlusAccording] = useState(null);
  const handleBorderClick = (index) =>
    setIsPlusAccording((prevIndex) => (prevIndex === index ? null : index));

  // bgAccording
  const [bgAccording, setBgAccording] = useState(null);
  const handleBgAccording = (index) =>
    setBgAccording((prevIndex) => (prevIndex === index ? null : index));

  return (
    <>
      <aside className='flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10'>
        <div className='w-full 425px:w-[80%]'>
          <ContentHeader id='default_open' text={'default open'} />

          <ComponentDescription text='This is a default opened accordion component. Explore content with
            immediate visibility upon access.'/>

          <ToggleTab code={defaultAccordingCode} setPreview={setDefaultAccordingPreview} setCode={setDefaultAccordingCode} preview={defaultAccordingPreview}/>

          <ComponentWrapper>
            {defaultAccordingPreview && (
                <div className='p-8 mb-4 flex items-center flex-col gap-5 justify-center'>
                  <div className='flex gap-3 flex-col w-full'>
                    {accordingData?.map((according, index) => (
                        <article
                            key={index}
                            className='border-b dark:border-slate-700 border-border rounded py-3'
                        >
                          <div
                              className='flex gap-2 cursor-pointer items-center justify-between w-full'
                              onClick={() => handleClick(index)}
                          >
                            <h2 className='text-primary font-[600] text-[1.2rem]'>
                              {according.title}
                            </h2>
                            <p>
                              <FaChevronDown
                                  className={`text-[1.2rem] dark:text-slate-600 text-text transition-all duration-300 ${
                                      isAccordingOpen === index &&
                                      'rotate-[180deg] !text-primary'
                                  }`}
                              />
                            </p>
                          </div>
                          <div
                              className={`grid transition-all duration-300 overflow-hidden ease-in-out ${
                                  isAccordingOpen === index
                                      ? 'grid-rows-[1fr] opacity-100 mt-4'
                                      : 'grid-rows-[0fr] opacity-0'
                              }`}
                          >
                            <p className='text-text dark:text-[#abc2d3] text-[0.9rem] overflow-hidden'>
                              {according.description}
                            </p>
                          </div>
                        </article>
                    ))}
                  </div>
                </div>
            )}

            {defaultAccordingCode && (
                <Showcode
                    code='
import React, {useState} from "react";

// react icons
import {FaChevronDown} from "react-icons/fa6";

const Accordion = () => {
    const accordingData = [
        {
            title: "What is the purpose of wireframing in design?",
            description:
                "Wireframing outlines the basic structure and layout of a design, serving as a visual guide before detailed development.",
        },
        {
            title: "Why is user-centered design important?",
            description:
                "User-centered design ensures products meet the needs and preferences of the end-users, enhancing usability and satisfaction.",
        },
        {
            title: "What role does contrast play in graphic design?",
            description:
                "Contrast in graphic design emphasizes differences, making elements stand out and improving visual hierarchy.",
        },

        {
            title: `Define the term "responsive design" in web development.`,
            description:
                "Responsive design ensures web pages adapt to various screen sizes, providing an optimal user experience on different devices.",
        },

        {
            title: "What is the significance of color theory in design?",
            description:
                "Color theory guides the selection and combination of colors to evoke specific emotions, enhance readability, and create visually appealing designs.",
        },
    ];

    const [isAccordingOpen, setIsAccordingOpen] = useState(0);

    const handleClick = (index) =>
        setIsAccordingOpen((prevIndex) => (prevIndex === index ? null : index));

    return (
        <div className="flex gap-3 flex-col w-full">
            {accordingData?.map((according, index) => (
                <article
                    key={index}
                    className="border-b dark:border-slate-700 border-border rounded py-3"
                >
                    <div
                        className="flex gap-2 cursor-pointer items-center justify-between w-full"
                        onClick={() => handleClick(index)}
                    >
                        <h2 className="text-[#3B9DF8] font-[600] text-[1.2rem]">
                            {according.title}
                        </h2>
                        <p>
                            <FaChevronDown
                                className={`text-[1.2rem] dark:text-slate-600 text-text transition-all duration-300 ${
                                    isAccordingOpen === index &&
                                    "rotate-[180deg] !text-[#3B9DF8]"
                                }`}
                            />
                        </p>
                    </div>
                    <div
                        className={`grid transition-all duration-300 overflow-hidden ease-in-out ${
                            isAccordingOpen === index
                                ? "grid-rows-[1fr] opacity-100 mt-4"
                                : "grid-rows-[0fr] opacity-0"
                        }`}
                    >
                        <p className="text-[#424242] dark:text-[#abc2d3] text-[0.9rem] overflow-hidden">
                            {according.description}
                        </p>
                    </div>
                </article>
            ))}
        </div>
    );
};

export default Accordion;
              '
                />
            )}
          </ComponentWrapper>

          <div className='mt-8'>
            <ContentHeader id='border_according' text={'Border Accordion'} />
          </div>

          <ComponentDescription text='This is a border accordion with toggle component. Expand and
            collapse sections with distinct border styling for clarity.'/>

          <ToggleTab code={borderAccordingCode} preview={borderAccordingPreview} setCode={setBorderAccordingCode} setPreview={setBorderAccordingPreview}/>

          <ComponentWrapper>
            {borderAccordingPreview && (
                <div className='p-8 mb-4 flex items-center flex-col gap-5 justify-center'>
                  <div className='flex gap-3 flex-col w-full'>
                    {accordingData?.map((according, index) => (
                        <article
                            key={index}
                            className='border dark:border-slate-700 border-border rounded p-3'
                        >
                          <div
                              className='flex gap-2 cursor-pointer items-center justify-between w-full'
                              onClick={() => handleBorderClick(index)}
                          >
                            <h2 className='text-primary font-[600] text-[1.2rem]'>
                              {according.title}
                            </h2>
                            <p>
                              <FaPlus
                                  className={`text-[1.3rem] dark:text-slate-600 text-text transition-all duration-300 ${
                                      isPlusAccording === index &&
                                      'rotate-[45deg] !text-primary'
                                  }`}
                              />
                            </p>
                          </div>
                          <div
                              className={`grid transition-all duration-300 overflow-hidden ease-in-out ${
                                  isPlusAccording === index
                                      ? 'grid-rows-[1fr] opacity-100 mt-4'
                                      : 'grid-rows-[0fr] opacity-0'
                              }`}
                          >
                            <p className='text-text dark:text-[#abc2d3] text-[0.9rem] overflow-hidden'>
                              {according.description}
                            </p>
                          </div>
                        </article>
                    ))}
                  </div>
                </div>
            )}

            {borderAccordingCode && (
                <Showcode
                    code='
import React, {useState} from "react";

// react icons
import {FaPlus} from "react-icons/fa6";

const Accordion = () => {
    const accordingData = [
        {
            title: "What is the purpose of wireframing in design?",
            description:
                "Wireframing outlines the basic structure and layout of a design, serving as a visual guide before detailed development.",
        },
        {
            title: "Why is user-centered design important?",
            description:
                "User-centered design ensures products meet the needs and preferences of the end-users, enhancing usability and satisfaction.",
        },
        {
            title: "What role does contrast play in graphic design?",
            description:
                "Contrast in graphic design emphasizes differences, making elements stand out and improving visual hierarchy.",
        },

        {
            title: `Define the term "responsive design" in web development.`,
            description:
                "Responsive design ensures web pages adapt to various screen sizes, providing an optimal user experience on different devices.",
        },

        {
            title: "What is the significance of color theory in design?",
            description:
                "Color theory guides the selection and combination of colors to evoke specific emotions, enhance readability, and create visually appealing designs.",
        },
    ];

    const [isPlusAccording, setIsPlusAccording] = useState(null);

    const handleBorderClick = (index) =>
        setIsPlusAccording((prevIndex) => (prevIndex === index ? null : index));

    return (
        <div className="flex gap-3 flex-col w-full">
            {accordingData?.map((according, index) => (
                <article
                    key={index}
                    className="border dark:border-slate-700 border-[#e5eaf2] rounded p-3"
                >
                    <div
                        className="flex gap-2 cursor-pointer items-center justify-between w-full"
                        onClick={() => handleBorderClick(index)}
                    >
                        <h2 className="text-[#3B9DF8] font-[600] text-[1.2rem]">
                            {according.title}
                        </h2>
                        <p>
                            <FaPlus
                                className={`text-[1.3rem] dark:text-slate-600 text-text transition-all duration-300 ${
                                    isPlusAccording === index &&
                                    "rotate-[45deg] !text-[#3B9DF8]"
                                }`}
                            />
                        </p>
                    </div>
                    <div
                        className={`grid transition-all duration-300 overflow-hidden ease-in-out ${
                            isPlusAccording === index
                                ? "grid-rows-[1fr] opacity-100 mt-4"
                                : "grid-rows-[0fr] opacity-0"
                        }`}
                    >
                        <p className="text-[#424242] dark:text-[#abc2d3] text-[0.9rem] overflow-hidden">
                            {according.description}
                        </p>
                    </div>
                </article>
            ))}
        </div>
    );
};

export default Accordion;
              '
                />
            )}
          </ComponentWrapper>

          <div className='mt-8'>
            <ContentHeader
              id='background_according'
              text={'background Accordion'}
            />
          </div>

          <ComponentDescription text='This is a background color accordion with toggle component. Expand
            and collapse sections with distinct background colors for visual
            differentiation.'/>

          <ToggleTab code={bgAccordingCode} setPreview={setBgAccordingPreview} setCode={setBgAccordingCode} preview={bgAccordingPreview}/>

          <ComponentWrapper>
            {bgAccordingPreview && (
                <div className='p-8 mb-4 flex items-center flex-col gap-5 justify-center'>
                  <div className='flex gap-3 flex-col w-full'>
                    {accordingData?.map((according, index) => (
                        <article key={index} className='bg-border dark:bg-transparent rounded'>
                          <div
                              className={`${bgAccording === index ? 'rounded-t-sm' : 'rounded'} flex gap-2 cursor-pointer items-center justify-between dark:bg-slate-800 w-full bg-gray-700 p-3`}
                              onClick={() => handleBgAccording(index)}
                          >
                            <h2
                                className={`dark:text-[#abc2d3] text-secondary font-[600] text-[1.2rem]`}
                            >
                              {according.title}
                            </h2>
                            <svg
                                className='dark:fill-[#abc2d3] fill-[#ffffff] shrink-0 ml-8'
                                width='16'
                                height='16'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                              <rect
                                  y='7'
                                  width='16'
                                  height='2'
                                  rx='1'
                                  className={`transform origin-center transition duration-200 ease-out ${
                                      bgAccording === index && '!rotate-180'
                                  }`}
                              />
                              <rect
                                  y='7'
                                  width='16'
                                  height='2'
                                  rx='1'
                                  className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                                      bgAccording === index && '!rotate-180'
                                  }`}
                              />
                            </svg>
                          </div>
                          <div
                              className={`grid transition-all duration-300 dark:bg-slate-900 overflow-hidden ease-in-out bg-gray-100 ${
                                  bgAccording === index
                                      ? 'grid-rows-[1fr] opacity-100 px-3 py-3'
                                      : 'grid-rows-[0fr] opacity-0 px-3'
                              }`}
                          >
                            <div className='text-text dark:text-[#abc2d3] text-[0.9rem] overflow-hidden'>
                              {according.description}
                            </div>
                          </div>
                        </article>
                    ))}
                  </div>
                </div>
            )}

            {bgAccordingCode && (
                <Showcode
                    code='
import React, {useState} from "react";

const Accordion = () => {
    const accordingData = [
        {
            title: "What is the purpose of wireframing in design?",
            description:
                "Wireframing outlines the basic structure and layout of a design, serving as a visual guide before detailed development.",
        },
        {
            title: "Why is user-centered design important?",
            description:
                "User-centered design ensures products meet the needs and preferences of the end-users, enhancing usability and satisfaction.",
        },
        {
            title: "What role does contrast play in graphic design?",
            description:
                "Contrast in graphic design emphasizes differences, making elements stand out and improving visual hierarchy.",
        },

        {
            title: `Define the term "responsive design" in web development.`,
            description:
                "Responsive design ensures web pages adapt to various screen sizes, providing an optimal user experience on different devices.",
        },

        {
            title: "What is the significance of color theory in design?",
            description:
                "Color theory guides the selection and combination of colors to evoke specific emotions, enhance readability, and create visually appealing designs.",
        },
    ];

    const [bgAccording, setBgAccording] = useState(null);

    const handleBgAccording = (index) =>
        setBgAccording((prevIndex) => (prevIndex === index ? null : index));

    return (
        <div className="flex gap-3 flex-col w-full">
            {accordingData?.map((according, index) => (
                <article key={index} className="bg-[#e5eaf2] dark:bg-transparent rounded">
                    <div
                        className={`${bgAccording === index ? "rounded-t-sm" : "rounded"} flex gap-2 cursor-pointer items-center justify-between dark:bg-slate-800 w-full bg-gray-700 p-3`}
                        onClick={() => handleBgAccording(index)}
                    >
                        <h2
                            className={`dark:text-[#abc2d3] text-white font-[600] text-[1.2rem]`}
                        >
                            {according.title}
                        </h2>
                        <svg
                            className="dark:fill-[#abc2d3] fill-[#ffffff] shrink-0 ml-8"
                            width="16"
                            height="16"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                y="7"
                                width="16"
                                height="2"
                                rx="1"
                                className={`transform origin-center transition duration-200 ease-out ${
                                    bgAccording === index && "!rotate-180"
                                }`}
                            />
                            <rect
                                y="7"
                                width="16"
                                height="2"
                                rx="1"
                                className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                                    bgAccording === index && "!rotate-180"
                                }`}
                            />
                        </svg>
                    </div>
                    <div
                        className={`grid transition-all duration-300 dark:bg-slate-900 overflow-hidden ease-in-out bg-gray-100 ${
                            bgAccording === index
                                ? "grid-rows-[1fr] opacity-100 px-3 py-3"
                                : "grid-rows-[0fr] opacity-0 px-3"
                        }`}
                    >
                        <div className="text-[#424242] dark:text-[#abc2d3] text-[0.9rem] overflow-hidden">
                            {according.description}
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
};

export default Accordion;
              '
                />
            )}
          </ComponentWrapper>

          <OverviewFooter
            backUrl='/components/animated-cards'
            backName='animated cards'
            forwardName='app bar'
            forwardUrl='/components/appbar'
          />
        </div>

        <ContentNavbar activeSection={activeSection} contents={accordionContents} width='35%'/>

      </aside>
      <Helmet>
        <title>Surfaces - Accordion</title>
      </Helmet>
    </>
  );
};

export default According;
