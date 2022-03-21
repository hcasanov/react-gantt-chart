// *** NPM ***
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

// *** OTHER ***
import BarSmall, {
	IProps as IBarSmallProps,
	defaultProps as barSmallDefaultProps,
} from "./BarSmall";

// *** CONSTANTS ***
const TASK: IBarSmallProps["task"] = {
	index: 1,
	typeInternal: "task",
	x1: 0,
	x2: 200,
	y: 0,
	height: 50,
	progressX: 0,
	progressWidth: 100,
	barCornerRadius: 5,
	handleWidth: 10,
	barChildren: [],
	styles: {
		backgroundColor: "black",
		backgroundSelectedColor: "yellow",
		progressColor: "green",
		progressSelectedColor: "orange",
	},
	id: "1",
	name: "Test",
	start: new Date(2021, 10, 21),
	end: new Date(2021, 10, 20),
	progress: 50,
	type: "task",
	dependencies: [],
	hideChildren: true,
	isDisabled: false,
	project: undefined,
};

export default {
	title: "lib/containers/Bars/BarSmall",
	component: BarSmall,
} as ComponentMeta<typeof BarSmall>;

const Template: ComponentStory<typeof BarSmall> = (args) => {
	return (
		<svg style={{ overflow: "visible" }}>
			<BarSmall {...args} />
		</svg>
	);
};

export const Original = Template.bind({});
Original.args = {
	...barSmallDefaultProps,
	task: TASK,
	isDateChangeable: true,
	isProgressChangeable: true,
	onEventStart: (...args) => console.log(args),
};

export const DisableDateChange = Template.bind({});
DisableDateChange.args = {
	...Original.args,
	isDateChangeable: false,
};

export const DisableProgressChange = Template.bind({});
DisableProgressChange.args = {
	...Original.args,
	isProgressChangeable: false,
};
