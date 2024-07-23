import * as ping from "./ping";
import * as sigsubstract from './sig-substract';
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
import * as avatar from './avatar';

export const commands = {
    ping,
    'sig-substract': sigsubstract,
	info,
	clear,
	'check-role': check_role,
	'remove-role': remove_role,
	'weekly-report-check': weekly_report_check,
	'weekly-report': weekly_report,
	present,
	'get-role': get_role,
	'set-role': set_role,
	kick,
	ban,
	avatar
};
