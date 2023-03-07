export function groupBy<T, K extends keyof T>(arr: T[], key: K): Record<any, any> {
	// 根据数组对象中某一属性进行分组
	const result: Record<any, any> = {}
	return arr.reduce((total, item) => {
		// @ts-ignore
		;(total[item[key]] = total[item[key]] || []).push(item)
		return total
	}, result)
}
