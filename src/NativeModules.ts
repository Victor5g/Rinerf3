import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-rinerf3' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const Rinerf3 = NativeModules.Rinerf3
  ? NativeModules.Rinerf3
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function setIperfRole(ipt: number, role: string) {
  Rinerf3.setIperfRole(ipt, role);
}

export function setIperfServerPort(ipt: number, port: number) {
  Rinerf3.setIperfServerPort(ipt, port);
}

export function setIperfReporterInterval(ipt: number, interval: number) {
  Rinerf3.setIperfReporterInterval(ipt, interval);
}

export function setIperfStatsInterval(ipt: number, interval: number) {
  Rinerf3.setIperfStatsInterval(ipt, interval);
}

export function setIperfBindAddress(ipt: number, address: string) {
  Rinerf3.setIperfBindAddress(ipt, address);
}

export function setIperfReverse(ipt: number, reverse: number) {
  Rinerf3.setIperfReverse(ipt, reverse);
}

export function setIperfNumStreams(ipt: number, numStreams: number) {
  Rinerf3.setIperfNumStreams(ipt, numStreams);
}

export function setIperfRate(ipt: number, rate: number) {
  Rinerf3.setIperfRate(ipt, rate);
}

export function setIperfBlksize(ipt: number, blksize: number) {
  Rinerf3.setIperfBlksize(ipt, blksize);
}

export function setIperfServerHostname(ipt: number, hostname: string) {
  Rinerf3.setIperfServerHostname(ipt, hostname);
}

export function setIperfDuration(ipt: number, duration: number) {
  Rinerf3.setIperfDuration(ipt, duration);
}

export function setIperfConnectTimeout(ipt: number, timeout: number) {
  Rinerf3.setIperfConnectTimeout(ipt, timeout);
}

export function setIperfTos(ipt: number, tos: number) {
  Rinerf3.setIperfTos(ipt, tos);
}

export function iperfNewTest(): number {
  return Rinerf3.iperfNew_Test();
}

export function iperfFreeTest(ipt: number) {
  Rinerf3.iperfFree_Test(ipt);
}

export function iperfDefaults(ipt: number): Promise<number> {
  return Rinerf3.iperf_Defaults(ipt);
}

export function setIperfProtocol(ipt: number, protocol: number) {
  Rinerf3.setIperf_Protocol(ipt, protocol);
}
