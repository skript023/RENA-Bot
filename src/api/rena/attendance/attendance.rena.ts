import { rena } from "../rena.api";

class AttendanceService
{
	async weeklyReport(start?: string, end?: string): Promise<ResponseServer<Attendance>>
	{
		const path = start && end ? `/attendance/report/weekly?start=${start}&end=${end}`: `/attendance/report/weekly`;
		const response = await rena.get(path);

		return response.data;
	}

	async weeklyReportCheck(start?: string, end?: string): Promise<ResponseServer<Attendance>>
	{
		const path = start && end ? `/attendance/report/check?start=${start}&end=${end}` : `/attendance/report/check`;
		const response = await rena.get(path);

		return response.data;
	}

	async present(): Promise<ResponseServer<Attendance>>
	{
		const response = await rena.post(`/attendance/attend`);

		return response.data;
	}
}

export const attendance = new AttendanceService();
