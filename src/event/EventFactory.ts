import { LIGHTNING } from "../constants";
import { getLastWord, getDurationFromString } from "../helpers";
import { LightningEvent } from "./LightningEvent";
import { TalkingEvent } from "./TalkingEvent";

export class EventFactory {
    static createEvent(eventStr: string): TalkingEvent | LightningEvent | undefined {
        if(!eventStr) {
            return undefined;
        }
        const eventLastWord = getLastWord(eventStr);
        if (eventLastWord === LIGHTNING) {
            return new LightningEvent(eventStr);
        } else {
            const duration = getDurationFromString(eventLastWord);
            return new TalkingEvent(eventStr, duration);
        }
    }
}