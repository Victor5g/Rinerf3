import uuid from 'react-native-uuid';
import {
  IperfError,
  IperfProtocol,
  IperfState,
  IperfRunnerState,
} from './enums';

import IperfThroughput from './IperfThroughput';

class IperfStreamIntervalResult {
  bytesTransferred: number = 0;
  intervalPacketCount: number = 0;
  intervalCntError: number = 0;
  intervalOutoforderPackets: number = 0;
  jitter: number = 0.0;
  intervalDuration: number = 0.0;
  startTime: number = 0.0;
  endTime: number = 0.0;
}

class IperfIntervalResult {
  id: string;
  runnerState: IperfRunnerState = IperfRunnerState.Unknown;
  streams: IperfStreamIntervalResult[] = [];
  totalBytes: number = 0;
  totalPackets: number = 0;
  totalLostPackets: number = 0;
  totalOutoforderPackets: number = 0;
  averageJitter: number = 0.0;
  averageRtt: number = 0.0;
  duration: number = 0.0;
  state: IperfState = IperfState.UNKNOWN;
  debugDescription: string = '';
  startTime: number = 0.0;
  endTime: number = 0.0;
  throughput: IperfThroughput = IperfThroughput.fromBytesPerSecond(0.0);
  error: IperfError = IperfError.UNKNOWN;
  prot: IperfProtocol = IperfProtocol.TCP;

  constructor(
    runnerState: IperfRunnerState = IperfRunnerState.Unknown,
    debugDescription: string = '',
    state: IperfState = IperfState.UNKNOWN,
    error: IperfError = IperfError.UNKNOWN,
    prot: IperfProtocol = IperfProtocol.TCP
  ) {
    this.id = String(uuid.v4());
    this.runnerState = runnerState;
    this.debugDescription = debugDescription;
    this.state = state;
    this.error = error;
    this.prot = prot;
  }

  evaluate(): void {
    let sumJitter: number = 0.0;
    for (const s of this.streams) {
      this.totalBytes += s.bytesTransferred;
      if (this.prot === IperfProtocol.UDP) {
        this.totalPackets += s.intervalPacketCount;
        this.totalLostPackets += s.intervalCntError;
        this.totalOutoforderPackets += s.intervalOutoforderPackets;
        sumJitter += s.jitter;
      }
    }
    if (this.streams.length > 0) {
      const first = this.streams[0];
      this.startTime = first?.startTime || 0;
      this.endTime = first?.endTime || 0;
      this.duration = first?.intervalDuration || 0;

      if (this.prot === IperfProtocol.UDP) {
        this.averageJitter = sumJitter / this.streams.length;
      }
      if (
        this.totalBytes &&
        first?.intervalDuration &&
        first?.intervalDuration !== 0
      ) {
        this.throughput = IperfThroughput.fromBytes(
          this.totalBytes,
          first?.intervalDuration
        );
      }
    }
  }
}

export default IperfIntervalResult;

// // Example usage
// const result = new IperfIntervalResult();
// result.runnerState = IperfRunnerState.Unknown;
// result.error = IperfError.IENONE;

// console.log("Result ID:", result.id);
// console.log("Runner State:", result.runnerState);
// console.log("Error:", result.error);
// console.log("Throughput in bps:", result.throughput.bps);
// console.log("Throughput in Kbps:", result.throughput.Kbps);
// console.log("Throughput in Mbps:", result.throughput.Mbps);
// console.log("Throughput in Gbps:", result.throughput.Gbps);
