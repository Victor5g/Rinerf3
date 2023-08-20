package com.rinerf3;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

@ReactModule(name = Rinerf3Module.NAME)
public class Rinerf3Module extends ReactContextBaseJavaModule {
    public static final String NAME = "Rinerf3";

    public Rinerf3Module(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    @NonNull
    public String getName() {
        return NAME;
    }

    static {
        System.loadLibrary("cpp");
    }

    // Importe as funções JNI aqui
    private static native double nativeMultiply(double a, double b);
    private static native void iperfSetTestRole(long ipt, char role);
    private static native void iperfSetTestServerPort(long ipt, int port);
    private static native void iperfSetTestReporterInterval(long ipt, double interval);
    private static native void iperfSetTestStatsInterval(long ipt, double interval);
    private static native void iperfSetTestBindAddress(long ipt, String address);
    private static native void iperfSetTestReverse(long ipt, int reverse);
    private static native void iperfSetTestNumStreams(long ipt, int numStreams);
    private static native void iperfSetTestRate(long ipt, long rate);
    private static native void iperfSetTestBlksize(long ipt, int blksize);
    private static native void iperfSetTestServerHostname(long ipt, String hostname);
    private static native void iperfSetTestDuration(long ipt, int duration);
    private static native void iperfSetTestConnectTimeout(long ipt, int timeout);
    private static native void iperfSetTestTos(long ipt, int tos);
    private static native long iperfNewTest();
    private static native void iperfFreeTest(long ipt);
    private static native int iperfDefaults(long ipt);
    private static native int iperfSetProtocol(long ipt, int protocol);


    // Métodos para chamar as funções JNI do React Native

    @ReactMethod
    public void multiply(double a, double b, Promise promise) {
        promise.resolve(nativeMultiply(a, b));
    }

    @ReactMethod
    public void setIperfRole(long ipt, String role) {
        iperfSetTestRole(ipt, role.charAt(0));
    }

    @ReactMethod
    public void setIperfServerPort(long ipt, int port) {
        iperfSetTestServerPort(ipt, port);
    }

    @ReactMethod
    public void setIperfReporterInterval(long ipt, double interval) {
        iperfSetTestReporterInterval(ipt, interval);
    }

    @ReactMethod
    public void setIperfStatsInterval(long ipt, double interval) {
        iperfSetTestStatsInterval(ipt, interval);
    }

    @ReactMethod
    public void setIperfBindAddress(long ipt, String address) {
        iperfSetTestBindAddress(ipt, address);
    }

    @ReactMethod
    public void setIperfReverse(long ipt, int reverse) {
        iperfSetTestReverse(ipt, reverse);
    }

    @ReactMethod
    public void setIperfNumStreams(long ipt, int numStreams) {
        iperfSetTestNumStreams(ipt, numStreams);
    }

    @ReactMethod
    public void setIperfRate(long ipt, long rate) {
        iperfSetTestRate(ipt, rate);
    }

    @ReactMethod
    public void setIperfBlksize(long ipt, int blksize) {
        iperfSetTestBlksize(ipt, blksize);
    }

    @ReactMethod
    public void setIperfServerHostname(long ipt, String hostname) {
        iperfSetTestServerHostname(ipt, hostname);
    }

    @ReactMethod
    public void setIperfDuration(long ipt, int duration) {
        iperfSetTestDuration(ipt, duration);
    }

    @ReactMethod
    public void setIperfConnectTimeout(long ipt, int timeout) {
        iperfSetTestConnectTimeout(ipt, timeout);
    }

    @ReactMethod
    public void setIperfTos(long ipt, int tos) {
        iperfSetTestTos(ipt, tos);
    }

    @ReactMethod
    public long iperfNew_Test() {
        return iperfNewTest();
    }

    @ReactMethod
    public void iperfFree_Test(long ipt) {
        iperfFreeTest(ipt);
    }

    @ReactMethod
    public int iperf_Defaults(long ipt) {
        return iperfDefaults(ipt);
    }

    @ReactMethod
    public void setIperf_Protocol(long ipt, int protocol) {
       iperfSetProtocol(ipt, protocol);
    }

}
