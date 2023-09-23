export interface InterfaceIperfTime {
  secs: number;
  usecs: number;
}
export interface interfaceIperfTimeDiff {
  secs: number;
  usecs: number;
}
export interface InterfaceIperfIntervalResults {
  bytesTransferred: number;
  intervalStartTime: InterfaceIperfTime;
  intervalEndTime: InterfaceIperfTime;
  intervalDuration: number;
  intervalPacketCount: number;
  intervalOutoforderPackets: number;
  intervalCntError: number;
  packetCount: number;
  jitter: number;
  rTT: number;
  outoforderPackets: number;
  cntError: number;
  omitted: number;
  tcpInfo?: any; // Generic
  intervalRetrans: number;
  intervalSacks: number;
  sndCwnd: number;
  customData: any; // Generic
  rttvar: number;
  pmtu: number;
}
