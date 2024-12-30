import React, { useState, useRef } from "react";

// components
import OverviewFooter from "../../../../../Shared/OverviewFooter";
import ContentHeader from "../../../../../Shared/ContentHeader";

// react helmet
import { Helmet } from "react-helmet";

// showing the code
import Showcode from "../../../../../Shared/ShowCode";

// contents for scrollspy
import { otpInputContents } from '../../../../../Utils/ContentsConfig/InputContents';
import { useScrollSpy } from '../../../../../CustomHooks/useScrollSpy';

import ComponentDescription from '../../../../../Shared/ComponentDescription';
import ComponentWrapper from '../../../../../Shared/ComponentWrapper';
import ToggleTab from '../../../../../Shared/ToggleTab';
import ContentNavbar from '../../../../../Shared/ContentNavbar';

const OtpInput = () => {
    const sectionIds = otpInputContents.map((item) => item.href.slice(1));
    const activeSection = useScrollSpy(sectionIds);

    // custom navigation
    const [customNavigatePreview, setCustomNavigationPreview] = useState(true);
    const [customNavigationCode, setCustomNavigationCode] = useState(false);

    // auto navigation
    const [autoNavigationPreview, setAutoNavigationPreview] = useState(true);
    const [autoNavigationCode, setAutoNavigationCode] = useState(false);

    // actions
    const [autoOtp, setAutoOtp] = useState('')

    const length = 4

    const onChange = (value) => {
        setAutoOtp(value)
    }
    const autoNavigationInputs = useRef([])

    const handleAutoNavigationInputChange = (e, index) => {
        const { value } = e.target;
        const newOtp = [...autoNavigationInputs.current.map(input => input.value)];

        // Ensure only a single digit is entered per box
        if (/^[0-9]$/.test(value) && value.length === 1) {
            newOtp[index] = value;
            onChange(newOtp.join(''));

            if (index < length - 1) {
                autoNavigationInputs.current[index + 1].focus();
            }
        } else if (value === '') {
            newOtp[index] = '';
            onChange(newOtp.join(''));
        } else {
            e.target.value = value.slice(0, 1);
        }
    };

    // for custom navigation
    const handleCustomNavigationInputChange = (e, index) => {
        const { value } = e.target;
        const newOtp = [...autoNavigationInputs.current.map(input => input.value)];

        if (/^[0-9]$/.test(value) && value.length === 1) {
            newOtp[index] = value;
            onChange(newOtp.join(''));
        } else if (value === '') {
            newOtp[index] = '';
            onChange(newOtp.join(''));
        } else {
            e.target.value = value.slice(0, 1);
        }
    };

    const handleAutoNavigationKeydown = (e, index) => {
        if (e.key === 'Backspace' && !autoNavigationInputs.current[index].value && index > 0) {
            autoNavigationInputs.current[index - 1].focus()
        }
    }


    return (
        <>
            <aside className="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10">
                <div>
                    <ContentHeader text={"custom navigation"} id={"custom_navigation"}/>

                    <ComponentDescription text='Custom OTP input field with navigation controls, allowing users to easily move between digits for seamless entry.'/>

                    <ToggleTab code={customNavigationCode} setCode={setCustomNavigationCode} preview={customNavigatePreview} setPreview={setCustomNavigationPreview}/>

                    <ComponentWrapper>
                        {customNavigatePreview && (
                            <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                                <div className='grid grid-cols-4 gap-[10px] w-full 1024px:w-[50%]'>
                                    {
                                        Array.from({length}).map((_, index) => (
                                            <input
                                                key={index}
                                                ref={(el) => (autoNavigationInputs.current[index] = el)}
                                                className='p-3 text-center dark:bg-transparent dark:border-slate-700 dark:text-[#abc2d3] dark:placeholder:text-slate-500 border border-[#bcbcbc] rounded-md outline-none focus:border-primary'
                                                placeholder='0'
                                                max="1"
                                                onChange={(e) => handleCustomNavigationInputChange(e, index)}
                                                type='number'
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                        )}

                        {customNavigationCode && (
                            <Showcode
                                code='
import React, {useRef, useState} from "react";

const OtpInput = () => {
    const [autoOtp, setAutoOtp] = useState("")
    const navigationInputs = useRef([])

    const length = 4

    const onChange = (value) => {
        setAutoOtp(value)
    }

    const handleInputChange = (e, index) => {
        const { value } = e.target;
        const newOtp = [...navigationInputs.current.map(input => input.value)];

        if (/^[0-9]$/.test(value) && value.length === 1) {
            newOtp[index] = value;
            onChange(newOtp.join(""));
        } else if (value === "") {
            newOtp[index] = "";
            onChange(newOtp.join(""));
        } else {
            e.target.value = value.slice(0, 1);
        }
    };

    return (
        <div className="grid grid-cols-4 gap-[10px] w-full md:w-[50%]">
            {
                Array.from({length}).map((_, index) => (
                    <input
                        key={index}
                        ref={(el) => (navigationInputs.current[index] = el)}
                        className="p-3 text-center dark:bg-transparent dark:border-slate-700 dark:text-[#abc2d3] dark:placeholder:text-slate-500 border border-[#bcbcbc] rounded-md outline-none focus:border-[#3B9DF8]"
                        placeholder="0"
                        max="1"
                        onChange={(e) => handleInputChange(e, index)}
                        type="number"
                    />
                ))
            }
        </div>
    );
};

export default OtpInput;
                                '
                            />
                        )}
                    </ComponentWrapper>

                    <div className="mt-8">
                        <ContentHeader text={"Keyboard navigation"} id={"keyboard_navigation"}/>
                    </div>

                    <ComponentDescription text='OTP input field with keyboard navigation, enabling users to move between digits using arrow keys
                        for quick and efficient entry.'/>

                    <ToggleTab code={autoNavigationCode} setCode={setAutoNavigationCode} setPreview={setAutoNavigationPreview} preview={autoNavigationPreview}/>

                    <ComponentWrapper>
                        {autoNavigationPreview && (
                            <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                                <div className='grid grid-cols-4 gap-[10px] w-full 1024px:w-[50%]'>
                                    {
                                        Array.from({length}).map((_, index) => (
                                            <input
                                                key={index}
                                                ref={(el) => (autoNavigationInputs.current[index] = el)}
                                                className='p-3 text-center dark:bg-transparent dark:border-slate-700 dark:text-[#abc2d3] dark:placeholder:text-slate-500 border border-[#bcbcbc] rounded-md outline-none focus:border-primary'
                                                placeholder='0'
                                                max="1"
                                                onChange={(e) => handleAutoNavigationInputChange(e, index)}
                                                onKeyDown={(e) => handleAutoNavigationKeydown(e, index)}
                                                type='number'
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                        )}

                        {autoNavigationCode && (
                            <Showcode
                                code='
import React, {useRef, useState} from "react";

const OtpInput = () => {
    const [autoOtp, setAutoOtp] = useState("")
    const navigationInputs = useRef([])

    const length = 4

    const onChange = (value) => {
        setAutoOtp(value)
    }

    const handleInputChange = (e, index) => {
        const { value } = e.target;
        const newOtp = [...navigationInputs.current.map(input => input.value)];

        // Ensure only a single digit is entered per box
        if (/^[0-9]$/.test(value) && value.length === 1) {
            newOtp[index] = value;
            onChange(newOtp.join(""));

            if (index < length - 1) {
                navigationInputs.current[index + 1].focus();
            }
        } else if (value === "") {
            newOtp[index] = "";
            onChange(newOtp.join(""));
        } else {
            e.target.value = value.slice(0, 1);
        }
    };

    const handleKeydown = (e, index) => {
        if (e.key === "Backspace" && !navigationInputs.current[index].value && index > 0) {
            navigationInputs.current[index - 1].focus()
        }
    }

    return (
        <div className="grid grid-cols-4 gap-[10px] w-full md:w-[50%]">
            {
                Array.from({length}).map((_, index) => (
                    <input
                        key={index}
                        ref={(el) => (navigationInputs.current[index] = el)}
                        className="p-3 text-center dark:bg-transparent dark:border-slate-700 dark:text-[#abc2d3] dark:placeholder:text-slate-500 border border-[#bcbcbc] rounded-md outline-none focus:border-[#3B9DF8]"
                        placeholder="0"
                        max="1"
                        onChange={(e) => handleInputChange(e, index)}
                        onKeyDown={(e) => handleKeydown(e, index)}
                        type="number"
                    />
                ))
            }
        </div>
    );
};

export default OtpInput;
                                '
                            />
                        )}
                    </ComponentWrapper>

                    <OverviewFooter backUrl='/components/input-file' backName='file' forwardName='normal button'
                                    forwardUrl='/components/normal-button'/>
                </div>

                <ContentNavbar contents={otpInputContents} activeSection={activeSection}/>

            </aside>
            <Helmet>
                <title>Form - OTP Input</title>
            </Helmet>
        </>
    );
};

export default OtpInput;
