/* empty css              */import{j as o}from"./jsx-runtime.cd4c1fc9.js";import"./index.1ee78cc0.js";const t=()=>o("div",{className:"text-red-500",children:"Test comp "});var p={parameters:{storySource:{source:`// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
import {TestComp} from "./TestComp";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";

export default {
    title: 'Component/Test',
    component: TestComp,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof TestComp>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TestComp> = () => <TestComp  />

export const Primary = Template.bind({});
`,locationsMap:{primary:{startLoc:{col:50,line:16},endLoc:{col:69,line:16},startBody:{col:50,line:16},endBody:{col:69,line:16}}}}},title:"Component/Test",component:t,argTypes:{backgroundColor:{control:"color"}}};const e=()=>o(t,{}),a=e.bind({}),m=["Primary"];export{a as Primary,m as __namedExportsOrder,p as default};
//# sourceMappingURL=CardSlider.stories.dd58a268.js.map
