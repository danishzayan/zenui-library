// react helmet
import { Helmet } from "react-helmet";

// components
import OverviewFooter from "../../../../../../Shared/OverviewFooter";

// contents for scrollspy
import { timelineContents } from "../../../../../../Utils/ContentsConfig/DataDisplayContents";
import { useScrollSpy } from "../../../../../../CustomHooks/useScrollSpy";

import MilestoneTimeline from "./MilestoneTimeline";
import WorkProgressTimeline from "./WorkProgressTimeline";
import TreeTimeline from "./TreeTimeline";
import MilestoneIconTimeline from "./MilestoneIconTimeline";

const Timeline = () => {
  const sectionIds = timelineContents.map((item) => item.href.slice(1));
  const activeSection = useScrollSpy(sectionIds);

  return (
    <>
      <aside className="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10">
        <div>
          <MilestoneTimeline />
          <WorkProgressTimeline />
          <TreeTimeline />
          <MilestoneIconTimeline />

          <OverviewFooter
            backUrl="/components/tooltip"
            backName="tooltip"
            forwardName="product card"
            forwardUrl="/components/product-card"
          />
        </div>

        <div className="1024px:flex hidden flex-col gap-4 sticky top-4 right-0 w-[48%]">
          <h2 className="text-[0.9rem] font-[600] text-text tracking-widest">
            CONTENTS
          </h2>
          {timelineContents.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`${
                activeSection === item.href.slice(1) &&
                "!text-primary !border-primary"
              } text-[0.9rem] text-text border-l border-transparent pl-4`}
            >
              {item.title}
            </a>
          ))}
        </div>
      </aside>
      <Helmet>
        <title>Data Display - Timeline</title>
      </Helmet>
    </>
  );
};

export default Timeline;
