// *** NPM ***
import React from "react";

// *** OTHER ***
import Bar from "../Bar";
import BarDateHandle from "../components/BarDateHandle";
import { BarTask } from "../../../types/bar-task";
import { GanttContentMoveAction } from "../../../types/gantt-task-actions";
import BarDisplay, {
	defaultProps as barDisplayDefaultProps,
} from "../components/BarDisplay";

// *** CONSTANTS ***
const BAR_HEIGHT = 48;
const BAR_DATE_HEIGHT = 10;
const BAR_DATE_PADDING = 8;
const BAR_DATE_STROKE_WIDTH = 2;

// *** TYPES ***
export interface IProps {
	task: BarTask;
	rtl: boolean;
	onEventStart: (
		action: GanttContentMoveAction,
		selectedTask: BarTask,
		event?: React.MouseEvent | React.KeyboardEvent
	) => any;
	isDateChangeable: boolean;
}

const BarNationalResources = (props: IProps) => {
	// *** PROPS ***
	const { task, onEventStart, isDateChangeable } = props;

	// *** CONDITIONALS ***
	// bar display
	const barDisplay = (
		<BarDisplay
			x={task.x1}
			y={task.y}
			progressX={task.progressX}
			progressWidth={task.progressWidth}
			barCornerRadius={BAR_DATE_HEIGHT / 2}
			onMouseDown={(e: React.MouseEvent<Element, MouseEvent>) => {
				isDateChangeable === true && onEventStart("move", task, e);
			}}
			// style
			rootStyle={{
				...barDisplayDefaultProps.rootStyle,
				height: `${BAR_HEIGHT}px`,
			}}
			barStyle={{
				...barDisplayDefaultProps.barStyle,
				height: `${BAR_HEIGHT}px`,
				fill: "#E0E3E7",
				stroke: "green",
				strokeWidth: "1px",
			}}
			progressStyle={{
				...barDisplayDefaultProps.progressStyle,
				height: `${BAR_HEIGHT}px`,
				fill: "transparent",
			}}
		/>
	);

	// left bar date handle
	const leftBarDateHandle = (
		<BarDateHandle
			x={task.x1 + BAR_DATE_PADDING + BAR_DATE_STROKE_WIDTH}
			y={task.y + BAR_HEIGHT / 2 - BAR_DATE_HEIGHT / 2}
			height={BAR_DATE_HEIGHT}
			width={task.handleWidth}
			barCornerRadius={BAR_DATE_HEIGHT / 2}
			onMouseDown={(e) => onEventStart("start", task, e)}
			// style
			rootStyle={{
				fill: "#A9ADB2",
				stroke: "white",
				strokeWidth: `${BAR_DATE_STROKE_WIDTH}px`,
				// cursor: "ew-resize",
				opacity: 1,
				visibility: "visible",
			}}
		/>
	);

	// right bar date handle
	const rightBarDateHandle = (
		<BarDateHandle
			x={task.x2 - task.handleWidth - BAR_DATE_PADDING - BAR_DATE_STROKE_WIDTH}
			y={task.y + BAR_HEIGHT / 2 - BAR_DATE_HEIGHT / 2}
			height={BAR_DATE_HEIGHT}
			width={task.handleWidth}
			barCornerRadius={BAR_DATE_HEIGHT / 2}
			onMouseDown={(e) => onEventStart("end", task, e)}
			// style
			rootStyle={{
				fill: "#A9ADB2",
				stroke: "white",
				strokeWidth: `${BAR_DATE_STROKE_WIDTH}px`,
				// cursor: "ew-resize",
				opacity: 1,
				visibility: "visible",
			}}
		/>
	);

	return (
		<svg style={{ overflow: "visible" }}>
			<Bar
				rtl={false}
				isDateChangeable={true}
				isProgressChangeable={true}
				// components
				barDisplay={barDisplay}
				leftBarDateHandle={leftBarDateHandle}
				rightBarDateHandle={rightBarDateHandle}
			/>
		</svg>
	);
};

export default BarNationalResources;
