import { IperfError } from './enums';

class IperfErrorDescription {
  static getErrorDescription(error: IperfError): string {
    switch (error) {
      case IperfError.UNKNOWN:
        return 'Unknown error';
      case IperfError.IENONE:
        return 'No error';
      /* Parameter errors */
      case IperfError.IESERVCLIENT:
        return 'Iperf cannot be both server and client';
      case IperfError.IENOROLE:
        return 'Iperf must either be a client (-c) or server (-s)';
      case IperfError.IESERVERONLY:
        return 'This option is server only';
      case IperfError.IECLIENTONLY:
        return 'This option is client only';
      case IperfError.IEDURATION:
        return 'test duration too long. Maximum value = %dMAX_TIME';
      case IperfError.IENUMSTREAMS:
        return 'Number of parallel streams too large. Maximum value = %dMAX_STREAMS';
      case IperfError.IEBLOCKSIZE:
        return 'Block size too large. Maximum value = %dMAX_BLOCKSIZE';
      case IperfError.IEBUFSIZE:
        return 'Socket buffer size too large. Maximum value = %dMAX_TCP_BUFFER';
      case IperfError.IEINTERVAL:
        return 'Invalid report interval (min = %gMIN_INTERVAL max = %gMAX_INTERVAL seconds)';
      case IperfError.IEMSS:
        return 'MSS too large. Maximum value = %dMAX_MSS';
      case IperfError.IENOSENDFILE:
        return 'This OS does not support sendfile';
      case IperfError.IEOMIT:
        return 'Bogus value for --omit';
      case IperfError.IEUNIMP:
        return 'Not implemented yet';
      case IperfError.IEFILE:
        return "-F file couldn't be opened";
      case IperfError.IEBURST:
        return 'Invalid burst count. Maximum value = %dMAX_BURST';
      case IperfError.IEENDCONDITIONS:
        return 'Only one test end condition (-t -n -k) may be specified';
      case IperfError.IELOGFILE:
        return "Can't open log file";
      case IperfError.IENOSCTP:
        return 'No SCTP support available';
      case IperfError.IEBIND:
        return 'UNUSED:  Local port specified with no local bind option';
      case IperfError.IEUDPBLOCKSIZE:
        return 'Block size invalid';
      case IperfError.IEBADTOS:
        return 'Bad TOS value';
      case IperfError.IESETCLIENTAUTH:
        return 'Bad configuration of client authentication';
      case IperfError.IESETSERVERAUTH:
        return 'Bad configuration of server authentication';
      case IperfError.IEBADFORMAT:
        return 'Bad format argument to -f';
      case IperfError.IEREVERSEBIDIR:
        return 'Iperf cannot be both reverse and bidirectional';
      case IperfError.IEBADPORT:
        return 'Bad port number';
      case IperfError.IETOTALRATE:
        return "Total required bandwidth is larger than server's limit";
      case IperfError.IETOTALINTERVAL:
        return 'Invalid time interval for calculating average data rate';
      /* Test errors */
      case IperfError.IENEWTEST:
        return 'Unable to create a new test (check perror)';
      case IperfError.IEINITTEST:
        return 'Test initialization failed (check perror)';
      case IperfError.IELISTEN:
        return 'Unable to listen for connections (check perror)';
      case IperfError.IECONNECT:
        return 'Unable to connect to server (check herror/perror) [from netdial]';
      case IperfError.IEACCEPT:
        return 'Unable to accept connection from client (check herror/perror)';
      case IperfError.IESENDCOOKIE:
        return 'Unable to send cookie to server (check perror)';
      case IperfError.IERECVCOOKIE:
        return 'Unable to receive cookie from client (check perror)';
      case IperfError.IECTRLWRITE:
        return 'Unable to write to the control socket (check perror)';
      case IperfError.IECTRLREAD:
        return 'Unable to read from the control socket (check perror)';
      case IperfError.IECTRLCLOSE:
        return 'Control socket has closed unexpectedly';
      case IperfError.IEMESSAGE:
        return 'Received an unknown message';
      case IperfError.IESENDMESSAGE:
        return 'Unable to send control message to client/server (check perror)';
      case IperfError.IERECVMESSAGE:
        return 'Unable to receive control message from client/server (check perror)';
      case IperfError.IESENDPARAMS:
        return 'Unable to send parameters to server (check perror)';
      case IperfError.IERECVPARAMS:
        return 'Unable to receive parameters from client (check perror)';
      case IperfError.IEPACKAGERESULTS:
        return 'Unable to package results (check perror)';
      case IperfError.IESENDRESULTS:
        return 'Unable to send results to client/server (check perror)';
      case IperfError.IERECVRESULTS:
        return 'Unable to receive results from client/server (check perror)';
      case IperfError.IESELECT:
        return 'Select failed (check perror)';
      case IperfError.IECLIENTTERM:
        return 'The client has terminated';
      case IperfError.IESERVERTERM:
        return 'The server has terminated';
      case IperfError.IEACCESSDENIED:
        return 'The server is busy running a test. Try again later.';
      case IperfError.IESETNODELAY:
        return 'Unable to set TCP/SCTP NODELAY (check perror)';
      case IperfError.IESETMSS:
        return 'Unable to set TCP/SCTP MSS (check perror)';
      case IperfError.IESETBUF:
        return 'Unable to set socket buffer size (check perror)';
      case IperfError.IESETTOS:
        return 'Unable to set IP TOS (check perror)';
      case IperfError.IESETCOS:
        return 'Unable to set IPv6 traffic class (check perror)';
      case IperfError.IESETFLOW:
        return 'Unable to set IPv6 flow label';
      case IperfError.IEREUSEADDR:
        return 'Unable to set reuse address on socket (check perror)';
      case IperfError.IENONBLOCKING:
        return 'Unable to set socket to non-blocking (check perror)';
      case IperfError.IESETWINDOWSIZE:
        return 'Unable to set socket window size (check perror)';
      case IperfError.IEPROTOCOL:
        return 'Protocol does not exist';
      case IperfError.IEAFFINITY:
        return 'Unable to set CPU affinity (check perror)';
      case IperfError.IEDAEMON:
        return 'Unable to become a daemon process';
      case IperfError.IESETCONGESTION:
        return 'Unable to set TCP_CONGESTION';
      case IperfError.IEPIDFILE:
        return 'Unable to write PID file';
      case IperfError.IEV6ONLY:
        return 'Unable to set/unset IPV6_V6ONLY (check perror)';
      case IperfError.IESETSCTPDISABLEFRAG:
        return 'Unable to set SCTP Fragmentation (check perror)';
      case IperfError.IESETSCTPNSTREAM:
        return 'Unable to set SCTP number of streams (check perror)';
      case IperfError.IESETSCTPBINDX:
        return 'Unable to process sctp_bindx() parameters';
      case IperfError.IESETPACING:
        return 'Unable to set socket pacing rate';
      case IperfError.IESETBUF2:
        return 'Socket buffer size incorrect (written value != read value)';
      case IperfError.IEAUTHTEST:
        return 'Test authorization failed';
      /* Stream errors */
      case IperfError.IECREATESTREAM:
        return 'Unable to create a new stream (check herror/perror)';
      case IperfError.IEINITSTREAM:
        return 'Unable to initialize stream (check herror/perror)';
      case IperfError.IESTREAMLISTEN:
        return 'Unable to start stream listener (check perror)';
      case IperfError.IESTREAMCONNECT:
        return 'Unable to connect stream (check herror/perror)';
      case IperfError.IESTREAMACCEPT:
        return 'Unable to accepte stream connection (check perror)';
      case IperfError.IESTREAMWRITE:
        return 'Unable to write to stream socket (check perror)';
      case IperfError.IESTREAMREAD:
        return 'Unable to read from stream (check perror)';
      case IperfError.IESTREAMCLOSE:
        return 'Stream has closed unexpectedly';
      case IperfError.IESTREAMID:
        return 'Stream has invalid ID';
      /* Timer errors */
      case IperfError.IENEWTIMER:
        return 'Unable to create new timer (check perror)';
      case IperfError.IEUPDATETIMER:
        return 'Unable to update timer (check perror)';
      case IperfError.INIT_ERROR:
        return 'iperf_new_test failed';
      case IperfError.INIT_ERROR_DEFAULTS:
        return 'iperf_defaults failed';
      default:
        return 'Unknown error code';
    }
  }
}

export default IperfErrorDescription;

/* Example usage
const error = IperfError.IENONE;
const description = IperfErrorDescription.getErrorDescription(error);
console.log(description);
*/
