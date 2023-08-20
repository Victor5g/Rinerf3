#include <jni.h>
#include "react-native-rinerf3.h"
#include "iperf_api.h"

extern "C"
JNIEXPORT jdouble JNICALL
Java_com_rinerf3_Rinerf3Module_nativeMultiply(JNIEnv *env, jclass type, jdouble a, jdouble b) {
    return rinerf3::multiply(a, b);
}

JNIEXPORT void JNICALL
Java_com_rinerf3_Rinerf3Module_iperfSetTestRole(JNIEnv *env, jclass type, jlong ipt, jchar role) {
    iperf_set_test_role(reinterpret_cast<iperf_test *>(ipt), static_cast<char>(role));
}

JNIEXPORT void JNICALL
Java_com_rinerf3_Rinerf3Module_iperfSetTestServerPort(JNIEnv *env, jclass type, jlong ipt, jint port) {
    iperf_set_test_server_port(reinterpret_cast<iperf_test *>(ipt), static_cast<int>(port));
}

JNIEXPORT void JNICALL
Java_com_rinerf3_Rinerf3Module_iperfSetTestReporterInterval(JNIEnv *env, jclass type, jlong ipt, jdouble interval) {
    iperf_set_test_reporter_interval(reinterpret_cast<iperf_test *>(ipt), static_cast<double>(interval));
}

JNIEXPORT void JNICALL
Java_com_rinerf3_Rinerf3Module_iperfSetTestStatsInterval(JNIEnv *env, jclass type, jlong ipt, jdouble interval) {
    iperf_set_test_stats_interval(reinterpret_cast<iperf_test *>(ipt), static_cast<double>(interval));
}

JNIEXPORT void JNICALL
Java_com_rinerf3_Rinerf3Module_iperfSetTestBindAddress(JNIEnv *env, jclass type, jlong ipt, jstring address) {
    const char *cAddress = env->GetStringUTFChars(address, nullptr);
    iperf_set_test_bind_address(reinterpret_cast<iperf_test *>(ipt), cAddress);
    env->ReleaseStringUTFChars(address, cAddress);
}

JNIEXPORT void JNICALL
Java_com_rinerf3_Rinerf3Module_iperfSetTestReverse(JNIEnv *env, jclass type, jlong ipt, jint reverse) {
    iperf_set_test_reverse(reinterpret_cast<iperf_test *>(ipt), static_cast<int>(reverse));
}

JNIEXPORT void JNICALL
Java_com_rinerf3_Rinerf3Module_iperfSetTestNumStreams(JNIEnv *env, jclass type, jlong ipt, jint numStreams) {
    iperf_set_test_num_streams(reinterpret_cast<iperf_test *>(ipt), static_cast<int>(numStreams));
}

JNIEXPORT void JNICALL
Java_com_rinerf3_Rinerf3Module_iperfSetTestRate(JNIEnv *env, jclass type, jlong ipt, jlong rate) {
    iperf_set_test_rate(reinterpret_cast<iperf_test *>(ipt), static_cast<uint64_t>(rate));
}

JNIEXPORT void JNICALL
Java_com_rinerf3_Rinerf3Module_iperfSetTestBlksize(JNIEnv *env, jclass type, jlong ipt, jint blksize) {
    iperf_set_test_blksize(reinterpret_cast<iperf_test *>(ipt), static_cast<int>(blksize));
}

JNIEXPORT void JNICALL
Java_com_rinerf3_Rinerf3Module_iperfSetTestServerHostname(JNIEnv *env, jclass type, jlong ipt, jstring hostname) {
    const char *cHostname = env->GetStringUTFChars(hostname, nullptr);
    iperf_set_test_server_hostname(reinterpret_cast<iperf_test *>(ipt), cHostname);
    env->ReleaseStringUTFChars(hostname, cHostname);
}

JNIEXPORT void JNICALL
Java_com_rinerf3_Rinerf3Module_iperfSetTestDuration(JNIEnv *env, jclass type, jlong ipt, jint duration) {
    iperf_set_test_duration(reinterpret_cast<iperf_test *>(ipt), static_cast<int>(duration));
}

JNIEXPORT void JNICALL
Java_com_rinerf3_Rinerf3Module_iperfSetTestConnectTimeout(JNIEnv *env, jclass type, jlong ipt, jint timeout) {
    iperf_set_test_connect_timeout(reinterpret_cast<iperf_test *>(ipt), static_cast<int>(timeout));
}

JNIEXPORT void JNICALL
Java_com_rinerf3_Rinerf3Module_iperfSetTestTos(JNIEnv *env, jclass type, jlong ipt, jint tos) {
    iperf_set_test_tos(reinterpret_cast<iperf_test *>(ipt), static_cast<int>(tos));
}

JNIEXPORT jlong JNICALL
Java_com_rinerf3_Rinerf3Module_iperfNewTest(JNIEnv *env, jclass type) {
    return reinterpret_cast<jlong>(iperf_new_test());
}

JNIEXPORT void JNICALL
Java_com_rinerf3_Rinerf3Module_iperfFreeTest(JNIEnv *env, jclass type, jlong ipt) {
    iperf_free_test(reinterpret_cast<iperf_test *>(ipt));
}

JNIEXPORT jint JNICALL
Java_com_rinerf3_Rinerf3Module_iperfDefaults(JNIEnv *env, jclass type, jlong ipt) {
    return iperf_defaults(reinterpret_cast<iperf_test *>(ipt));
}

JNIEXPORT jint JNICALL
Java_com_rinerf3_Rinerf3Module_iperfSetProtocol(JNIEnv *env, jclass type, jlong ipt, jint protocol) {
    return set_protocol(reinterpret_cast<iperf_test *>(ipt), protocol);
}