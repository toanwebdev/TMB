export interface ISummary {
	id: number
	title: string
	subtitle: string
	value: string
	percent: number
}

export interface IChartData {
	labels: Array<string>
	data: Array<number>
}

export interface ISummarySpecial {
	title: string
	value: string
	chartData: IChartData
}
