import { IperfRole, IperfDirection, IperfProtocol } from './enums';

class IperfConfiguration {
  address: string | undefined = '127.0.0.1';
  numStreams: number = 2;
  role: IperfRole = IperfRole.CLIENT;
  reverse: IperfDirection = IperfDirection.DOWNLOAD;
  port: number = 5201;
  prot: IperfProtocol = IperfProtocol.TCP;
  rate: number = 1024 * 1024;
  duration: number | undefined;
  timeout: number | undefined;
  tos: number | undefined;
  reporterInterval: number | undefined;
  statsInterval: number | undefined;
  constructor() {}
}

export default IperfConfiguration;

// // Example usage
// const iperfConfig = new IperfConfiguration();
// iperfConfig.address = "192.168.1.1";
// iperfConfig.numStreams = 4;
// iperfConfig.role = IperfRole.SERVER;
// iperfConfig.reverse = IperfDirection.UPLOAD;
// iperfConfig.port = 8080;
// iperfConfig.prot = IperfProtocol.UDP;
// iperfConfig.rate = 512 * 1024; // 512 Kbps
// iperfConfig.duration = 60; // 60 seconds
// iperfConfig.timeout = 10; // 10 seconds
// iperfConfig.tos = 5; // Type of Service
// iperfConfig.reporterInterval = 5; // 5 seconds
// iperfConfig.statsInterval = 2; // 2 seconds

// console.log(iperfConfig);
