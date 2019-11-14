import {types} from "mobx-state-tree";

export const Todo = types.model({
	title: types.string,
	done: types.optional(types.boolean, false),
});
