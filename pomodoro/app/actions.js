export const START_TASK = "START_TASK";

export function startTask(name, time) {
	return { type: START_TASK, payload: { name, time } };
}