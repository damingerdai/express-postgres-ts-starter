export type PartialWithArray<T> = {
	[P in keyof T]?: T[P] | Array<T[P]>;
};
