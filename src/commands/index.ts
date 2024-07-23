import * as ping from "./ping";
import * as sigsubstract from './sigsubstract';
import * as info from './info';
import * as clear from './clear';
import * as checkRole from './check-role';
import * as removeRole from './remove-role';
import * as weeklyReportCheck from './weekly-report-check';
import * as weeklyReport from './weekly-report';
import * as present from './attendance';

export const commands = {
    ping,
    sigsubstract,
	info,
	clear,
	checkRole,
	removeRole,
	weeklyReportCheck,
	weeklyReport,
	present
};
