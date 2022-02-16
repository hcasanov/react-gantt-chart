// *** NPM ***
import React, { useRef } from "react";

// *** OTHER ***
import TaskList, { IProps as ITaskListProps } from "./TaskList";
import TaskListHeader, {
	defaultProps as taskListHeaderDefaultProps,
} from "./components/TaskListHeader";
import TaskListTable, {
	IProps as ITaskListTableProps,
	defaultProps as taskListTableDefaultProps,
} from "./components/TaskListTable";
import {
	FONT_FAMILY,
	FONT_SIZE,
	HEADER_HEIGHT,
	ROW_HEIGHT,
	ROW_WIDTH,
} from "../Gantt/constants";

export default {
	title: "TaskList/TaskList",
	component: TaskList,
};

// *** CONSTANTS ***
const TASKS: ITaskListTableProps["tasks"] = [
	{
		start: new Date(2022, 10, 10),
		end: new Date(2022, 10, 20),
		name: "Some Project 1",
		id: "ProjectSample 1",
		progress: 25,
		type: "project",
		hideChildren: false,
	},
	{
		start: new Date(2022, 10, 11),
		end: new Date(2022, 10, 22),
		name: "Some Project 2",
		id: "ProjectSample 2",
		progress: 25,
		type: "project",
	},
	{
		start: new Date(2022, 10, 12),
		end: new Date(2022, 10, 24),
		name: "Some Project 3",
		id: "ProjectSample 3",
		progress: 25,
		type: "project",
	},
];

// Default
export const Simple = () => {
	// *** USE REF ***
	const taskListRef = useRef(null);

	const props: ITaskListProps = {
		// components
		TaskListHeader: TaskListHeader,
		TaskListTable: TaskListTable,
		// components props
		taskListHeaderProps: {
			rootStyle: {
				...taskListHeaderDefaultProps.rootStyle,
				fontFamily: "sans-serif",
				fontSize: "20px",
			},
			headerStyle: {
				...taskListHeaderDefaultProps.headerStyle,
				height: HEADER_HEIGHT - 2,
			},
			columnStyle: {
				...taskListHeaderDefaultProps.columnStyle,
				minWidth: ROW_WIDTH,
				textAlign: "center",
			},
			columnSeparatorStyle: {
				...taskListHeaderDefaultProps.columnSeparatorStyle,
				height: HEADER_HEIGHT * 0.5,
				marginTop: HEADER_HEIGHT * 0.2,
			},
		},
		taskListTableProps: {
			tasks: TASKS,
			locale: "en-GB",
			onExpanderClick: (e) => console.log(e),

			// style
			rootStyle: {
				...taskListTableDefaultProps.rootStyle,
				fontFamily: FONT_FAMILY,
				fontSize: FONT_SIZE,
			},
			tableRowStyle: {
				...taskListTableDefaultProps.tableRowStyle,
				height: ROW_HEIGHT,
			},
			tableCellStyle: {
				...taskListTableDefaultProps.tableCellStyle,
				minWidth: ROW_WIDTH,
				maxWidth: ROW_WIDTH,
			},
		},
		// styles
		taskListTableWrapperStyles: {},
		// refs
		taskListRef: taskListRef,
	};

	return <TaskList {...props} />;
};