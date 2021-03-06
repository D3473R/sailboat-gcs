import {MAVLinkMessage} from '@ifrunistuttgart/node-mavlink';
import {readInt64LE, readUInt64LE} from '@ifrunistuttgart/node-mavlink';
import {MavCmd} from '../enums/mav-cmd';
/*
Message encoding a mission item. This message is emitted to announce
                the presence of a mission item and to set a mission item on the system.
*/
// seq Sequence uint16_t
// count Count int32_t
// command The scheduled action for the waypoint. uint16_t
export class MissionItem extends MAVLinkMessage {
	public seq!: number;
	public count!: number;
	public command!: MavCmd;
	public _message_id: number = 39;
	public _message_name: string = 'MISSION_ITEM';
	public _crc_extra: number = 143;
	public _message_fields: [string, string, boolean][] = [
		['count', 'int32_t', false],
		['seq', 'uint16_t', false],
		['command', 'uint16_t', false],
	];
}