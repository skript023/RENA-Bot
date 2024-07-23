import * as ping from "./ping";
import * as sigsubstract from './sigsubstract';
import * as info from './info';
import * as clear from './clear';
import * as check_role from './check-role';
import * as remove_role from './remove-role';
import * as weekly_report_check from './weekly-report-check';
import * as weekly_report from './weekly-report';
import * as present from './attendance';
import * as get_role from './get-role';
import * as set_role from './set-role';
import * as kick from './kick';
import * as ban from './ban';

export const commands = {
    ping,
    sigsubstract,
	info,
	clear,
	check_role,
	remove_role,
	weekly_report_check,
	weekly_report,
	present,
	get_role,
	set_role,
	kick,
	ban
};
