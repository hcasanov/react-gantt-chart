// *** NPM ***
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

// *** OTHER ***
import TaskItemOriginal, {
	IProps as ITaskItemOriginalProps,
	defaultProps as taskItemOriginalDefaultProps,
} from "./TaskItemOriginal";

// *** CONSTANTS ***
const TASK: ITaskItemOriginalProps["task"] = {
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
	title: "Examples/TaskItem/TaskItemOriginal",
	component: TaskItemOriginal,
} as ComponentMeta<typeof TaskItemOriginal>;

const Template: ComponentStory<typeof TaskItemOriginal> = (args) => {
	return <TaskItemOriginal {...args} />;
};

export const Original = Template.bind({});
Original.args = {
	...taskItemOriginalDefaultProps,
	task: TASK,
	rtl: false,
	isDateChangeable: true,
	isProgressChangeable: true,
	isDelete: false,
	isSelected: false,
	taskHeight: 50,
	arrowIndent: 5,
	onEventStart: (...args) => console.log(args),
};
