import type {
  InterfaceIperfIntervalResults,
  InterfaceIperfTime,
  interfaceIperfTimeDiff,
} from './Interface';
export class IperfStreamIntervalResult {
  public bytesTransferred: number = 0;
  public intervalDuration: number = 0;
  public intervalPacketCount: number = 0;
  public intervalOutoforderPackets: number = 0;
  public intervalCntError: number = 0;

  public packetCount: number = 0;
  public jitter: number = 0;
  public outoforderPackets: number = 0;
  public cnt_error: number = 0;
  public omitted: number = 0;

  public intervalRetrans: number = 0;
  public intervalSacks: number = 0;
  public sndCwnd: number = 0;
  public rtt: number = 0;
  public rttvar: number = 0;
  public pmtu: number = 0;

  public startTime: number = 0;
  public endTime: number = 0;
  public intervalTimeDiff: number = 0;

  constructor(results: InterfaceIperfIntervalResults) {
    const diff = IperfStreamIntervalResult.rinerfTimeDiff(
      results.intervalEndTime,
      results.intervalStartTime
    );

    this.startTime =
      results.intervalStartTime.secs + results.intervalStartTime.usecs * 1e-6;
    this.endTime =
      results.intervalEndTime.secs + results.intervalEndTime.usecs * 1e-6;
    this.intervalTimeDiff = diff.secs + diff.usecs * 1e-6;

    this.bytesTransferred = results.bytesTransferred;
    this.intervalDuration = results.intervalDuration;
    this.intervalPacketCount = results.intervalPacketCount;
    this.intervalOutoforderPackets = results.intervalOutoforderPackets;
    this.intervalCntError = results.intervalCntError;

    this.packetCount = results.packetCount;
    this.jitter = results.jitter;
    this.outoforderPackets = results.outoforderPackets;
    this.cnt_error = results.cntError;
    this.omitted = results.omitted;

    this.intervalRetrans = results.intervalRetrans;
    this.intervalSacks = results.intervalSacks;
    this.sndCwnd = results.sndCwnd;
    this.rtt = results.rTT;
    this.rttvar = results.rttvar;
    this.pmtu = results.pmtu;
  }

  static iperfTimeCompare = (
    t1: InterfaceIperfTime,
    t2: InterfaceIperfTime
  ): number => {
    if (t1.secs === t2.secs) {
      if (t1.usecs === t2.usecs) {
        return 0;
      } else if (t1.usecs > t2.usecs) {
        return 1;
      }
    } else if (t1.secs > t2.secs) {
      return 1;
    }
    return -1;
  };

  static rinerfTimeDiff(
    time1: InterfaceIperfTime,
    time2: InterfaceIperfTime
  ): interfaceIperfTimeDiff {
    const diff: interfaceIperfTimeDiff = {
      secs: 0,
      usecs: 0,
    };
    let cmp = 0;
    cmp = IperfStreamIntervalResult.iperfTimeCompare(time1, time2);
    if (cmp === 0) {
      diff.secs = 0;
      diff.usecs = 0;
    } else if (cmp === 1) {
      diff.secs = time1.secs - time2.secs;
      diff.usecs = time1.usecs;
      if (diff.usecs < time2.usecs) {
        diff.secs -= 1;
        diff.usecs += 1000000;
      }
      diff.usecs = diff.usecs - time2.usecs;
    } else {
      diff.secs = time2.secs - time1.secs;
      diff.usecs = time2.usecs;
      if (diff.usecs < time1.usecs) {
        diff.secs -= 1;
        diff.usecs += 1000000;
      }
      diff.usecs = diff.usecs - time1.usecs;
    }

    return {
      secs: diff.secs,
      usecs: diff.usecs,
    };
  }
}
