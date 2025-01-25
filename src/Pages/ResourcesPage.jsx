import React from "react";

// Components
import Resources from "../Components/Overview/SidebarContent/Content/Resources/Resouces.jsx";
import ContentPageLayout from "../Shared/ContentPageLayout.jsx";

const OverviewPage = () => {
    return (
       <ContentPageLayout>
           <Resources />
       </ContentPageLayout>
    );
};

export default OverviewPage;
