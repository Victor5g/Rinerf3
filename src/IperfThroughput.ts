class IperfThroughput {
  rawValue: number;

  constructor(initValue: number) {
    this.rawValue = initValue;
  }

  get bps(): number {
    return this.rawValue * 8;
  }

  get Kbps(): number {
    return this.bps / 1024;
  }

  get Mbps(): number {
    return this.Kbps / 1024;
  }

  get Gbps(): number {
    return this.Mbps / 1024;
  }

  static fromBytesPerSecond(initValue: number): IperfThroughput {
    return new IperfThroughput(initValue);
  }

  static fromBytes(initValue: number, seconds: number): IperfThroughput {
    return new IperfThroughput(initValue / seconds);
  }
}

export default IperfThroughput;

/* Example usage
const throughput1 = IperfThroughput.fromBytesPerSecond(1024);
console.log("Throughput in bps:", throughput1.bps);
console.log("Throughput in Kbps:", throughput1.Kbps);
console.log("Throughput in Mbps:", throughput1.Mbps);
console.log("Throughput in Gbps:", throughput1.Gbps);
*/
