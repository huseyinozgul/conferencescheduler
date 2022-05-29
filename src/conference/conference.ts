import { Track } from "../track";

export class Conference {
    private _tracks: Track[] = [];

    get tracks(): Track[] {
        return this._tracks;
    }

    getCurrentTrack(): Track | undefined {
        const tracksN = this._tracks.length - 1;

        if (tracksN < 0) return undefined
        
        return this._tracks[tracksN];
    }

    addTrack(): Track {
        const track = new Track(this._tracks.length+1);
        this._tracks.push(track);
        return track;
    }

    print() {
        console.log('tracks', this.tracks);
        this.tracks.forEach(track => track.print());
    }
}