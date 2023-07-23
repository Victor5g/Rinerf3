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

  private static native double nativeMultiply(double a, double b);
  private static native void setRole(long ipt, char role);
  private static native void setServerPort(long ipt, int server_port);
  private static native void setReporterInterval(long ipt, double reporter_interval);
  private static native void setStatsInterval(long ipt, double stats_interval);
  private static native void setBindAddress(long ipt, String bind_address);
  private static native void setReverse(long ipt, int reverse);
  private static native void setNumStreams(long ipt, int num_streams);
  private static native void setRate(long ipt, long rate);
  private static native void setBlksize(long ipt, int blksize);
  private static native void setServerHostname(long ipt, String server_hostname);
  private static native void setDuration(long ipt, int duration);
  private static native void setConnectTimeout(long ipt, int connect_timeout);
  private static native void setTos(long ipt, int tos);

  // Example method
  // See https://reactnative.dev/docs/native-modules-android
  @ReactMethod
  public void multiply(double a, double b, Promise promise) {
    promise.resolve(nativeMultiply(a, b));
  }

@ReactMethod
    public void setIperfRole(long ipt, char role) {
        setRole(ipt, role);
    }

    @ReactMethod
    public void setIperfServerPort(long ipt, int server_port) {
        setServerPort(ipt, server_port);
    }

    @ReactMethod
    public void setIperfReporterInterval(long ipt, double reporter_interval) {
        setReporterInterval(ipt, reporter_interval);
    }

    @ReactMethod
    public void setIperfStatsInterval(long ipt, double stats_interval) {
        setStatsInterval(ipt, stats_interval);
    }

    @ReactMethod
    public void setIperfBindAddress(long ipt, String bind_address) {
        setBindAddress(ipt, bind_address);
    }

    @ReactMethod
    public void setIperfReverse(long ipt, int reverse) {
        setReverse(ipt, reverse);
    }

    @ReactMethod
    public void setIperfNumStreams(long ipt, int num_streams) {
        setNumStreams(ipt, num_streams);
    }

    @ReactMethod
    public void setIperfRate(long ipt, long rate) {
        setRate(ipt, rate);
    }

    @ReactMethod
    public void setIperfBlksize(long ipt, int blksize) {
        setBlksize(ipt, blksize);
    }

    @ReactMethod
    public void setIperfServerHostname(long ipt, String server_hostname) {
        setServerHostname(ipt, server_hostname);
    }

    @ReactMethod
    public void setIperfDuration(long ipt, int duration) {
        setDuration(ipt, duration);
    }

    @ReactMethod
    public void setIperfConnectTimeout(long ipt, int connect_timeout) {
        setConnectTimeout(ipt, connect_timeout);
    }

    @ReactMethod
    public void setIperfTos(long ipt, int tos) {
        setTos(ipt, tos);
    }

}
