import React, { useEffect, useRef, useState } from "react";

// icons
import { MdKeyboardArrowRight } from "react-icons/md";

// react router dom
import { Link } from "react-router-dom";
import NewBadge from "../../../Shared/NewBadge.jsx";
import UpdateBadge from "../../../Shared/UpdateBadge.jsx";
import OverviewIcon from "../../../SvgIcons/OverviewIcon.jsx";
import InstallationIcon from "../../../SvgIcons/InstallationIcon.jsx";
import ResourceIcon from "../../../SvgIcons/ResourceIcon.jsx";
import TemplatesIcon from "../../../SvgIcons/TemplatesIcon.jsx";
import HookIcon from "../../../SvgIcons/HookIcon.jsx";

const index = ({ startContent, setStartContent }) => {
  const [start, setStart] = useState(true);
  const [components, setComponents] = useState(true);
  const [blocks, setBlocks] = useState(true);
  const sidebarRef = useRef(null);

  useEffect(() => {
    if (sidebarRef.current) {
      const activeElement = sidebarRef.current.querySelector('.border-primary');
      if (activeElement) {
        activeElement.scrollIntoView({
          behavior: 'instant',
          block: 'center'
        });
      }
    }
  }, [startContent]);
  return (
      <aside
          ref={sidebarRef}
          className="py-6 px-10 pr-7 border-r h-[89vh] border-border flex-col gap-4 overflow-y-scroll sticky top-18 left-0 w-[320px] dark:bg-darkBgColor transition-all duration-500 dark:border-darkBorderColor bg-secondary z-20 1024px:flex hidden">

        {/*  get starts  */}
        <ul className='getStarted flex flex-col gap-[12px] mb-4'>

          <Link onClick={() => setStartContent(0)} to='/docs/overview' className={`${startContent === 0 && '!text-blue-600'} flex items-center group gap-[8px] hover:text-blue-600 text-[0.950rem] font-[500] cursor-pointer capitalize dark:text-darkSubTextColor text-gray-600`}>
            <span className={`${startContent === 0 && 'bg-blue-600 border-blue-600'} border p-[6px] rounded-md border-blue-200 group-hover:bg-blue-600 group-hover:border-blue-600 dark:border-slate-600 transition-all duration-200`}>
              <OverviewIcon className={`${startContent === 0 && 'text-white'} shrink-0 size-4 text-blue-600 group-hover:text-white transition-all duration-200`}/>
            </span>
            Overview
          </Link>

          <Link onClick={() => setStartContent(70)} to='/docs/installation' className={`${startContent === 70 && 'text-green-600'} flex items-center gap-[8px] hover:text-green-600 text-[0.950rem] cursor-pointer group font-[500] capitalize dark:text-darkSubTextColor text-gray-600`}>
            <span className={`${startContent === 70 && 'bg-green-600 border-green-600'} border p-[6px] rounded-md border-green-200 group-hover:bg-green-600 dark:border-slate-600 group-hover:border-green-600 transition-all duration-200`}>
              <InstallationIcon className={`${startContent === 70 && 'text-white'} shrink-0 size-4 text-green-600 group-hover:text-white transition-all duration-200`}/>
            </span>
            Installation
          </Link>

          <Link onClick={() => setStartContent(85)} to='/docs/resources' className='w-full flex items-center gap-[10px]'>
            <div className={`${startContent === 85 && 'text-purple-600'} flex items-center gap-[8px] hover:text-purple-600 group cursor-pointer text-[0.950rem] font-[500] capitalize dark:text-darkSubTextColor text-gray-600`}>
                <span className={`${startContent === 85 && 'bg-purple-600 border-purple-600'} border p-[6px] rounded-md border-purple-200 group-hover:bg-purple-600 dark:border-slate-600 group-hover:border-purple-600 transition-all duration-200`}>
              <ResourceIcon className={`${startContent === 85 && 'text-white'} shrink-0 size-4 text-purple-600 group-hover:text-white transition-all duration-200`}/>
            </span>
                Resources
            </div>
          </Link>

          <Link onClick={() => setStartContent(88)} to='/custom-hooks' className='w-full flex items-center gap-[10px]'>
            <div className={`${startContent === 88 && '!text-[#DB06F9]'} flex items-center gap-[8px] hover:text-[#DB06F9] group cursor-pointer text-[0.950rem] font-[500] capitalize dark:text-darkSubTextColor text-gray-600`}>
                <span className={`${startContent === 88 && 'bg-[#DB06F9] border-[#DB06F9]'} border p-[6px] rounded-md border-[#deb7f7] group-hover:bg-[#DB06F9] dark:border-slate-600 group-hover:border-[#DB06F9] transition-all duration-200`}>
              <HookIcon className={`${startContent === 88 && 'text-white'} shrink-0 size-4 text-[#DB06F9] group-hover:text-white transition-all duration-200`}/>
            </span>
                Custom Hooks
            </div>
          </Link>

          <Link onClick={() => setStartContent(1)} to='/templates' className={`${startContent === 1 && '!text-indigo-600'} flex items-center gap-[8px] hover:text-indigo-600 group dark:text-darkSubTextColor cursor-pointer text-[0.950rem] font-[500] capitalize text-gray-600`}>
            <span className={`${startContent === 1 && 'bg-indigo-600 border-indigo-600'} border p-[6px] rounded-md border-indigo-200 group-hover:border-indigo-600 dark:border-slate-600 group-hover:bg-indigo-600 transition-all duration-200`}>
              <TemplatesIcon className={`${startContent === 1 && 'text-white'} shrink-0 size-4 text-indigo-500 group-hover:text-white transition-all duration-200`}/>
            </span>
            Templates
          </Link>

        </ul>

        {/*  components  */}
        <div>
          <h3
              className={`${components ? 'text-[#0471d6]' : 'text-gray-500 dark:text-darkSubTextColor'} flex items-center justify-between gap-1 text-[1rem]  font-[500] capitalize cursor-pointer`}
              onClick={() => setComponents(!components)}
          >
            Components

            <MdKeyboardArrowRight
                className={`${
                    components && "rotate-[90deg] !text-[#0471d6]"
                } text-[1.5rem] text-gray-500 dark:text-darkSubTextColor transition-all duration-300`}
            />
          </h3>

          <div
              className={`grid overflow-hidden transition-all duration-500 ${
                  components ? " grid-rows-[1fr]" : " grid-rows-[0fr]"
              }`}
          >
            <ul
                className={`flex flex-col ml-2 text-text mt-3 overflow-hidden pl-4`}
            >
              <Link
                  to={"/components/all-components"}
                  className={`${
                      startContent === 2 &&
                      "border-l !font-[500] hover:!bg-[#3B9DF8] dark:!text-white rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary"
                  }   border-l dark:hover:!bg-slate-800 dark:!text-darkSubTextColor dark:!border-slate-600 border-[#9caebc] `}
                  onClick={() => setStartContent(2)}
              >
                All Components
              </Link>

              {/* inputs */}
              <Link
                  to={""}
                  className={`sectionHeader tracking-widest font-[500] relative mt-4 uppercase border-l dark:!border-slate-600 border-border !text-[0.750rem] `}
              >
                FORM
              </Link>

              <Link
                  to={"/components/input-text"}
                  className={`${
                      startContent === 3 &&
                      "border-l !font-[500] hover:!bg-[#3B9DF8] dark:!text-white rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary"
                  }   border-l border-[#9caebc] dark:hover:!bg-slate-800 dark:!text-darkSubTextColor dark:!border-slate-600 flex items-center gap-[10px]`}
                  onClick={() => setStartContent(3)}
              >
                Input

              </Link>
              <Link
                  to={"/components/input-textarea"}
                  className={`${
                      startContent === 4 &&
                      "border-l !font-[500] hover:!bg-[#3B9DF8] dark:!text-white rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary"
                  }   border-l dark:hover:!bg-slate-800 dark:!text-darkSubTextColor dark:!border-slate-600 border-[#9caebc]`}
                  onClick={() => setStartContent(4)}
              >
                Textarea
              </Link>
              <Link
                  to={"/components/input-number"}
                  className={`${
                      startContent === 5 &&
                      "border-l !font-[500] hover:!bg-[#3B9DF8] dark:!text-white rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary"
                  }   border-l dark:hover:!bg-slate-800 dark:!text-darkSubTextColor dark:!border-slate-600 border-[#9caebc] flex items-center gap-[10px]`}
                  onClick={() => setStartContent(5)}
              >
                Number

              </Link>
              <Link
                  to={"/components/input-checkbox"}
                  className={`${
                      startContent === 6 &&
                      "border-l !font-[500] hover:!bg-[#3B9DF8] dark:!text-white rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary"
                  }   border-l dark:hover:!bg-slate-800 dark:!text-darkSubTextColor dark:!border-slate-600 border-[#9caebc] flex items-center gap-[10px]`}
                  onClick={() => setStartContent(6)}
              >
                Checkbox

              </Link>
              <Link
                  to={"/components/input-switch"}
                  className={`${
                      startContent === 7 &&
                      "border-l !font-[500] hover:!bg-[#3B9DF8] dark:!text-white rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary"
                  }   border-l dark:hover:!bg-slate-800 dark:!text-darkSubTextColor dark:!border-slate-600 border-[#9caebc] flex items-center gap-[10px]`}
                  onClick={() => setStartContent(7)}
              >
                Switch

              </Link>
              <Link
                  to={"/components/strong-password"}
                  className={`${
                      startContent === 8 &&
                      "border-l !font-[500] hover:!bg-[#3B9DF8] dark:!text-white rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary"
                  }   border-l dark:hover:!bg-slate-800 dark:!text-darkSubTextColor dark:!border-slate-600 border-[#9caebc] flex items-center gap-[10px]`}
                  onClick={() => setStartContent(8)}
              >
                Strong Password

              </Link>
              <Link
                  to={"/components/input-select"}
                  className={`${
                      startContent === 9 &&
                      "border-l !font-[500] hover:!bg-[#3B9DF8] dark:!text-white rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary"
                  }   border-l dark:hover:!bg-slate-800 dark:!text-darkSubTextColor dark:!border-slate-600 border-[#9caebc] flex items-center gap-[10px]`}
                  onClick={() => setStartContent(9)}
              >
                Select

              </Link>
              <Link
                  to={"/components/input-radio"}
                  className={`${
                      startContent === 10 &&
                      "border-l !font-[500] hover:!bg-[#3B9DF8] dark:!text-white rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary"
                  }   border-l dark:hover:!bg-slate-800 dark:!text-darkSubTextColor dark:!border-slate-600 border-[#9caebc]`}
                  onClick={() => setStartContent(10)}
              >
                Radio
              </Link>
              <Link
                  to={"/components/input-range"}
                  className={`${
                      startContent === 11 &&
                      "border-l !font-[500] hover:!bg-[#3B9DF8] dark:!text-white rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary"
                  }   border-l dark:hover:!bg-slate-800 dark:!text-darkSubTextColor dark:!border-slate-600 border-[#9caebc] flex items-center gap-[10px]`}
                  onClick={() => setStartContent(11)}
              >
                Range

              </Link>
              {/*<Link*/}
              {/*  to={"/components/input-radio-group"}*/}
              {/*  className={`${*/}
              {/*    startContent === 11 &&*/}
              {/*    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"*/}
              {/*  }   border-l border-[#9caebc] flex items-center gap-[10px]`}*/}
              {/*  onClick={() => setStartContent(11)}*/}
              {/*>*/}
              {/*  Radio Group*/}

              {/*  <NewBadge/>*/}
              {/*</Link>*/}
              <Link
                  to={"/components/input-file"}
                  className={`${
                      startContent === 12 &&
                      "border-l !font-[500] hover:!bg-[#3B9DF8] dark:!text-white rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary"
                  }   border-l dark:hover:!bg-slate-800 dark:!text-darkSubTextColor dark:!border-slate-600 border-[#9caebc] `}
                  onClick={() => setStartContent(12)}
              >
                File
              </Link>
              <Link
                  to={"/components/otp-input"}
                  className={`${
                      startContent === 13 &&
                      "border-l !font-[500] hover:!bg-[#3B9DF8] dark:!text-white rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary"
                  }   border-l dark:hover:!bg-slate-800 dark:!text-darkSubTextColor dark:!border-slate-600 border-[#9caebc] flex items-center gap-[10px]`}
                  onClick={() => setStartContent(13)}
              >
                OTP Input

              </Link>

              {/* buttons */}
              <Link
                  to={""}
                  className={`sectionHeader tracking-widest  font-[500] relative mt-4 uppercase  border-l border-border !text-[0.750rem] `}
              >
                BUTTONS
              </Link>
              <Link
                  to={"/components/normal-button"}
                  className={`${
                      startContent === 14 &&
                      "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                  }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                  onClick={() => setStartContent(14)}
              >
                normal button

              </Link>
              <Link
                  to={"/components/login-buttons"}
                  className={`${
                      startContent === 15 &&
                      "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                  }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                  onClick={() => setStartContent(15)}
              >
                login Button

              </Link>
              <Link
                  to={"/components/dropdown-button"}
                  className={`${
                      startContent === 16 &&
                      "border-l rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                  }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                  onClick={() => setStartContent(16)}
              >
                Dropdown Button

              </Link>
              <Link
                  to={"/components/animated-button"}
                  className={`${
                      startContent === 17 &&
                      "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                  }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                  onClick={() => setStartContent(17)}
              >
                animated button

              </Link>

              {/* SURFACES */}
              <Link
                  to={""}
                  className={`sectionHeader tracking-widest font-[500] relative mt-4 uppercase border-l border-border !text-[0.750rem] `}
              >
                SURFACES
              </Link>
              <Link
                  to={"/components/drag-and-drop"}
                  className={`${
                      startContent === 80 &&
                      "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                  }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                  onClick={() => setStartContent(80)}
              >
                Drag & Drop
              </Link>
              <Link
                  to={"/components/cards"}
                  className={`${
                      startContent === 18 &&
                      "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                  }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                  onClick={() => setStartContent(18)}
              >
                Cards

              </Link>
              <Link
                  to={"/components/animated-cards"}
                  className={`${
                      startContent === 53 &&
                      "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                  }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                  onClick={() => setStartContent(53)}
              >
                Animated Cards
              </Link>
              <Link
                  to={"/components/according"}
                  className={`${
                      startContent === 19 &&
                      "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                  }   border-l border-[#9caebc]`}
                  onClick={() => setStartContent(19)}
              >
                Accordion
              </Link>
              {/*<Link*/}
              {/*    to={"/components/resizable-layout"}*/}
              {/*    className={`${*/}
              {/*        startContent === 20 &&*/}
              {/*        "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"*/}
              {/*    }   border-l border-[#9caebc] flex items-center gap-[10px]`}*/}
              {/*    onClick={() => setStartContent(20)}*/}
              {/*>*/}
              {/*  Resizable Layout*/}

              {/*  <NewBadge/>*/}
              {/*</Link>*/}
              <Link
                  to={"/components/appbar"}
                  className={`${
                      startContent === 20 &&
                      "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                  }   border-l border-[#9caebc] `}
                  onClick={() => setStartContent(20)}
              >
                App bar
              </Link>
              <Link
                  to={"/components/image-gallery"}
                  className={`${
                      startContent === 21 &&
                      "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                  }   border-l border-[#9caebc]`}
                  onClick={() => setStartContent(21)}
              >
                Image Gallery
              </Link>

              <Link
                  to={"/components/carousel"}
                  className={`${
                      startContent === 55 &&
                      "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                  }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                  onClick={() => setStartContent(55)}
              >
                Carousel
              </Link>

              {/* navigation */}
              <Link
                  to={""}
                  className={`sectionHeader tracking-widest font-[500] relative mt-4 uppercase border-l border-border !text-[0.750rem] `}
              >
                NAVIGATION
              </Link>
              <Link
                  to={"/components/pagination"}
                  className={`${
                      startContent === 22 &&
                      "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                  }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                  onClick={() => setStartContent(22)}
              >
                Pagination
              </Link>
              <Link
                  to={"/components/progress-bar"}
                  className={`${
                      startContent === 23 &&
                      "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                  }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                  onClick={() => setStartContent(23)}
              >
                Progress Bar

              </Link>
              <Link
                  to={"/components/chip"}
                  className={`${
                      startContent === 24 &&
                      "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                  }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                  onClick={() => setStartContent(24)}
              >
                Chip

              </Link>
              <Link
                  to={"/components/timer"}
                  className={`${
                      startContent === 210 &&
                      "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                  }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                  onClick={() => setStartContent(210)}
              >
                Timer
              </Link>
              <Link
                  to={"/components/breadcrumb"}
                  className={`${
                      startContent === 25 &&
                      "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                  }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                  onClick={() => setStartContent(25)}
              >
                Breadcrumb

              </Link>
              <Link
                  to={"/components/rating"}
                  className={`${
                      startContent === 26 &&
                      "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                  }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                  onClick={() => setStartContent(26)}
              >
                Rating

              </Link>
              <Link
                  to={"/components/stepper"}
                  className={`${
                      startContent === 27 &&
                      "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                  }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                  onClick={() => setStartContent(27)}
              >
                Stepper

              </Link>
              <Link
                  to={"/components/modal"}
                  className={`${
                      startContent === 28 &&
                      "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                  }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                  onClick={() => setStartContent(28)}
              >
                modal

              </Link>
              <Link
                  to={"/components/tabs"}
                  className={`${
                      startContent === 29 &&
                      "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                  }   border-l border-[#9caebc] `}
                  onClick={() => setStartContent(29)}
              >
                tabs
              </Link>

              {/* FEEDBACK */}
              <Link
                  to={""}
                  className={`sectionHeader tracking-widest font-[500] relative mt-4 uppercase border-l border-border !text-[0.750rem] `}
              >
                FEEDBACK
              </Link>
                <Link
                    to={"/components/context-menu"}
                    className={`${
                        startContent === 90 &&
                        "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                    }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                    onClick={() => setStartContent(90)}
                >
                    Context Menu
                </Link>
              <Link
                  to={"/components/skeleton"}
                  className={`${
                      startContent === 30 &&
                      "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                  }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                  onClick={() => setStartContent(30)}
              >
                skeleton

              </Link>
              <Link
                  to={"/components/tree-dropdown"}
                  className={`${
                      startContent === 60 &&
                      "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                  }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                  onClick={() => setStartContent(60)}
              >
                Tree Dropdown

              </Link>
              <Link
                  to={"/components/alert-message"}
                  className={`${
                      startContent === 31 &&
                      "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                  }   border-l border-[#9caebc] `}
                  onClick={() => setStartContent(31)}
              >
                alert message
              </Link>
              <Link
                  to={"/components/dialog-message"}
                  className={`${
                      startContent === 32 &&
                      "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                  }   border-l border-[#9caebc] `}
                  onClick={() => setStartContent(32)}
              >
                dialog
              </Link>
              <Link
                  to={"/components/testimonials"}
                  className={`${
                      startContent === 33 &&
                      "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                  }   border-l border-[#9caebc] `}
                  onClick={() => setStartContent(33)}
              >
                Testimonial
              </Link>
              <Link
                  to={"/components/loader"}
                  className={`${
                      startContent === 34 &&
                      "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                  }   border-l border-[#9caebc] `}
                  onClick={() => setStartContent(34)}
              >
                Loader
              </Link>
              <Link
                  to={"/components/notification"}
                  className={`${
                      startContent === 35 &&
                      "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                  }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                  onClick={() => setStartContent(35)}
              >
                Notification

              </Link>

              {/* data display */}
              <Link
                  to={""}
                  className={`sectionHeader tracking-widest font-[500] relative mt-4 uppercase  border-l border-border !text-[0.750rem] `}
              >
                DATA DISPLAY
              </Link>
              <Link
                  to={"/components/badge"}
                  className={`${
                      startContent === 36 &&
                      "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                  }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                  onClick={() => setStartContent(36)}
              >
                Badge

              </Link>
              <Link
                  to={"/components/table"}
                  className={`${
                      startContent === 100 &&
                      "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                  }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                  onClick={() => setStartContent(100)}
              >
                Table
              </Link>
              <Link
                  to={"/components/tooltip"}
                  className={`${
                      startContent === 37 &&
                      "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                  }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                  onClick={() => setStartContent(37)}
              >
                tooltip
              </Link>
              <Link
                to={"/components/pie-chart"}
                className={`${
                  startContent === 140 &&
                  "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                onClick={() => setStartContent(140)}
              >
                Pie Chart
              </Link>
              <Link
                  to={"/components/timeline"}
                  className={`${
                      startContent === 38 &&
                      "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                  }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                  onClick={() => setStartContent(38)}
              >
                timeline

              </Link>

                {/* e-commerce */}
                <Link
                    to={""}
                    className={`sectionHeader tracking-widest font-[500] relative mt-4 uppercase  border-l border-border !text-[0.750rem] `}
                >
                    E-COMMERCE
                </Link>

                <Link
                    to={"/components/product-card"}
                    className={`${
                        startContent === 108 &&
                        "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                    }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                    onClick={() => setStartContent(108)}
                >
                    Product Card

                    <NewBadge/>
                </Link>

                <Link
                    to={"/components/ads-card"}
                    className={`${
                        startContent === 109 &&
                        "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                    }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                    onClick={() => setStartContent(109)}
                >
                    Ads Card

                    <NewBadge/>
                </Link>

              {/* Randoms */}
              <Link
                  to={""}
                  className={`sectionHeader tracking-widest font-[500] relative mt-4 uppercase  border-l border-border !text-[0.750rem] `}
              >
                RANDOMS
              </Link>

              <Link
                  to={"/components/code"}
                  className={`${
                      startContent === 39 &&
                      "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                  }   border-l border-[#9caebc] `}
                  onClick={() => setStartContent(39)}
              >
                Code
              </Link>
              <Link
                  to={"/components/snippet"}
                  className={`${
                      startContent === 40 &&
                      "border-l rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                  }   border-l border-[#9caebc] `}
                  onClick={() => setStartContent(40)}
              >
                Snippet
              </Link>
            </ul>
          </div>
        </div>

        {/*  blocks  */}
        <div>
          <h3
              className={`${blocks ? 'text-[#0471d6]' : 'text-gray-500'} flex items-center justify-between gap-1 text-[1rem] font-[500] capitalize cursor-pointer`}
              onClick={() => setBlocks(!blocks)}
          >
            <div className='flex items-center gap-[10px]'>
              Blocks
            </div>

            <MdKeyboardArrowRight
                className={`${
                    blocks && "rotate-[90deg] !text-[#0471d6]"
                } text-[1.5rem] text-gray-500 transition-all duration-300`}
            />
          </h3>

          <div
              className={`grid overflow-hidden transition-all duration-500 ${
                  blocks ? " grid-rows-[1fr]" : " grid-rows-[0fr]"
              }`}
          >
            <ul
                className={`flex flex-col ml-2 text-text mt-3 overflow-hidden pl-4`}
            >
              <Link
                  to={"/blocks/all-blocks"}
                  className={`${
                      startContent === 41 &&
                      "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                  }   border-l border-[#9caebc] `}
                  onClick={() => setStartContent(41)}
              >
                All Blocks
              </Link>

              {/* sections */}
              <Link
                  to={""}
                  className={`sectionHeader tracking-widest font-[500] relative mt-4 uppercase  border-l border-border !text-[0.750rem] `}
              >
                SECTIONS
              </Link>

              <Link
                  to={"/blocks/responsive-navbar"}
                  className={`${
                      startContent === 42 &&
                      "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                  }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                  onClick={() => setStartContent(42)}
              >
                Responsive Navbar
              </Link>
              <Link
                  to={"/blocks/hero-section"}
                  className={`${
                      startContent === 43 &&
                      "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                  }   border-l border-[#9caebc]`}
                  onClick={() => setStartContent(43)}
              >
                Hero Section
              </Link>
              <Link
                  to={"/blocks/pricing-section"}
                  className={`${
                      startContent === 44 &&
                      "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                  }   border-l border-[#9caebc]`}
                  onClick={() => setStartContent(44)}
              >
                Pricing Section
              </Link>
              <Link
                  to={"/blocks/responsive-footer"}
                  className={`${
                      startContent === 45 &&
                      "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                  }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                  onClick={() => setStartContent(45)}
              >
                Responsive Footer
              </Link>
              <Link
                  to={""}
                  className={`sectionHeader tracking-widest font-[500] relative mt-4 uppercase  border-l border-border !text-[0.750rem] `}
              >
                FORM
              </Link>

              <Link
                  to={"/blocks/contact-form"}
                  className={`${
                      startContent === 46 &&
                      "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                  }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                  onClick={() => setStartContent(46)}
              >
                Contact Form
              </Link>
              {/*<Link*/}
              {/*    to={"/blocks/form-validation"}*/}
              {/*    className={`${*/}
              {/*        startContent === 43 &&*/}
              {/*        "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"*/}
              {/*    }   border-l border-[#9caebc]`}*/}
              {/*    onClick={() => setStartContent(43)}*/}
              {/*>*/}
              {/*  Form Validation*/}
              {/*</Link>*/}
              <Link
                  to={"/blocks/multi-step-form"}
                  className={`${
                      startContent === 47 &&
                      "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                  }   border-l border-[#9caebc]`}
                  onClick={() => setStartContent(47)}
              >
                Multi-Step Form
              </Link>
              <Link
                  to={"/blocks/newsletter-form"}
                  className={`${
                      startContent === 48 &&
                      "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                  }   border-l border-[#9caebc]`}
                  onClick={() => setStartContent(48)}
              >
                Newsletter Form
              </Link>

              {/* empty pages */}
              <Link
                  to={""}
                  className={`sectionHeader tracking-widest font-[500] relative mt-4 uppercase  border-l border-border !text-[0.750rem] `}
              >
                EMPTY PAGES
              </Link>

              <Link
                  to={"/blocks/404-page"}
                  className={`${
                      startContent === 49 &&
                      "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                  }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                  onClick={() => setStartContent(49)}
              >
                404 Page
              </Link>
              <Link
                  to={"/blocks/empty-page"}
                  className={`${
                      startContent === 50 &&
                      "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                  }   border-l border-[#9caebc]`}
                  onClick={() => setStartContent(50)}
              >
                Empty Page
              </Link>

                {/* e-commerce blocks */}
                <Link
                    to={""}
                    className={`sectionHeader tracking-widest font-[500] hover:font-[500] relative mt-4 uppercase  border-l border-border !text-[0.750rem] `}
                >
                    E-COMMERCE
                </Link>

                <Link
                    to={"/blocks/offer-grid"}
                    className={`${startContent === 200 &&
                    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                    }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                    onClick={() => setStartContent(200)}
                >
                    Offer Grid
                    <NewBadge/>
                </Link>
                <Link
                    to={"/blocks/product-details-page"}
                    className={`${startContent === 201 &&
                    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                    }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                    onClick={() => setStartContent(201)}
                >
                    Product Details Page
                    <NewBadge/>
                </Link>
                {/*<Link*/}
                {/*    to={"/blocks/product-filter-page"}*/}
                {/*    className={`${startContent === 202 &&*/}
                {/*    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"*/}
                {/*    }   border-l border-[#9caebc] flex items-center gap-[10px]`}*/}
                {/*    onClick={() => setStartContent(202)}*/}
                {/*>*/}
                {/*    Product Filter Page*/}
                {/*    <NewBadge/>*/}
                {/*</Link>*/}
                <Link
                    to={"/blocks/checkout-page"}
                    className={`${startContent === 203 &&
                    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                    }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                    onClick={() => setStartContent(203)}
                >
                    Checkout Page
                    <NewBadge/>
                </Link>

              {/* Randoms */}
              <Link
                  to={""}
                  className={`sectionHeader tracking-widest  font-[500] relative mt-4 uppercase  border-l border-border !text-[0.750rem] `}
              >
                RANDOM
              </Link>
              <Link
                  to={"/blocks/responsive-search-bar"}
                  className={`${
                      startContent === 51 &&
                      "border-l rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                  }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                  onClick={() => setStartContent(51)}
              >
                Responsive Search Bar
              </Link>
              <Link
                  to={"/blocks/responsive-sidebar"}
                  className={`${
                      startContent === 52 &&
                      "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                  }   border-l border-[#9caebc]`}
                  onClick={() => setStartContent(52)}
              >
                Responsive Sidebar
              </Link>
            </ul>
          </div>
        </div>
      </aside>
  );
};

export default index;
