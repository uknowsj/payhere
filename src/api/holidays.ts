import { Holiday } from '@/types'

type GetHolidayInfo = (year: number) => Promise<Holiday[]>

export const getHolidayInfo: GetHolidayInfo = async (year) => {
	try {
		const res = await fetch(`https://date.nager.at/api/v3/publicholidays/${year}/KR`)
		return await res.json()
	} catch (err) {
		// TODO 에러 처리
		console.error(err)
	}
}
