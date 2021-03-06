import {MAVLinkMessage} from '@ifrunistuttgart/node-mavlink';
import {readInt64LE, readUInt64LE} from '@ifrunistuttgart/node-mavlink';
/*
Status generated by radio and injected into MAVLink stream.
*/
// rssi Local (message sender) recieved signal strength indication in device-dependent units/scale. Values: [0-254], 255: invalid/unknown. uint8_t
// remrssi Remote (message receiver) signal strength indication in device-dependent units/scale. Values: [0-254], 255: invalid/unknown. uint8_t
// txbuf Remaining free transmitter buffer space. uint8_t
// noise Local background noise level. These are device dependent RSSI values (scale as approx 2x dB on SiK radios). Values: [0-254], 255: invalid/unknown. uint8_t
// remnoise Remote background noise level. These are device dependent RSSI values (scale as approx 2x dB on SiK radios). Values: [0-254], 255: invalid/unknown. uint8_t
// rxerrors Count of radio packet receive errors (since boot). uint16_t
// fixed Count of error corrected radio packets (since boot). uint16_t
export class RadioStatus extends MAVLinkMessage {
	public rssi!: number;
	public remrssi!: number;
	public txbuf!: number;
	public noise!: number;
	public remnoise!: number;
	public rxerrors!: number;
	public fixed!: number;
	public _message_id: number = 109;
	public _message_name: string = 'RADIO_STATUS';
	public _crc_extra: number = 185;
	public _message_fields: [string, string, boolean][] = [
		['rxerrors', 'uint16_t', false],
		['fixed', 'uint16_t', false],
		['rssi', 'uint8_t', false],
		['remrssi', 'uint8_t', false],
		['txbuf', 'uint8_t', false],
		['noise', 'uint8_t', false],
		['remnoise', 'uint8_t', false],
	];
}