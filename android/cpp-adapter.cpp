#include <jni.h>
#include "react-native-rinerf3.h"
#include "iperf_api.h"

extern "C"
JNIEXPORT jdouble JNICALL
Java_com_rinerf3_Rinerf3Module_nativeMultiply(JNIEnv *env, jclass type, jdouble a, jdouble b) {
    return rinerf3::multiply(a, b);
}

JNIEXPORT void JNICALL
Java_com_example_ipertest_IperfTest_setRole(JNIEnv *env, jclass type, jlong ipt, jchar role) {
    iperf_set_test_role((struct iperf_test*)ipt, (char)role);
}

JNIEXPORT void JNICALL
Java_com_example_ipertest_IperfTest_setServerPort(JNIEnv *env, jclass type, jlong ipt, jint server_port) {
    iperf_set_test_server_port((struct iperf_test*)ipt, server_port);
}

JNIEXPORT void JNICALL
Java_com_example_ipertest_IperfTest_setReporterInterval(JNIEnv *env, jclass type, jlong ipt, jdouble reporter_interval) {
    iperf_set_test_reporter_interval((struct iperf_test*)ipt, (double)reporter_interval);
}

JNIEXPORT void JNICALL
Java_com_example_ipertest_IperfTest_setStatsInterval(JNIEnv *env, jclass type, jlong ipt, jdouble stats_interval) {
    iperf_set_test_stats_interval((struct iperf_test*)ipt, (double)stats_interval);
}

JNIEXPORT void JNICALL
Java_com_example_ipertest_IperfTest_setBindAddress(JNIEnv *env, jclass type, jlong ipt, jstring bind_address) {
    const char *address = env->GetStringUTFChars(bind_address, 0);
    iperf_set_test_bind_address((struct iperf_test*)ipt, address);
    env->ReleaseStringUTFChars(bind_address, address);
}

JNIEXPORT void JNICALL
Java_com_example_ipertest_IperfTest_setReverse(JNIEnv *env, jclass type, jlong ipt, jint reverse) {
    iperf_set_test_reverse((struct iperf_test*)ipt, reverse);
}

JNIEXPORT void JNICALL
Java_com_example_ipertest_IperfTest_setNumStreams(JNIEnv *env, jclass type, jlong ipt, jint num_streams) {
    iperf_set_test_num_streams((struct iperf_test*)ipt, num_streams);
}

JNIEXPORT void JNICALL
Java_com_example_ipertest_IperfTest_setRate(JNIEnv *env, jclass type, jlong ipt, jlong rate) {
    iperf_set_test_rate((struct iperf_test*)ipt, (uint64_t)rate);
}

JNIEXPORT void JNICALL
Java_com_example_ipertest_IperfTest_setBlksize(JNIEnv *env, jclass type, jlong ipt, jint blksize) {
    iperf_set_test_blksize((struct iperf_test*)ipt, blksize);
}

JNIEXPORT void JNICALL
Java_com_example_ipertest_IperfTest_setServerHostname(JNIEnv *env, jclass type, jlong ipt, jstring server_hostname) {
    const char *hostname = env->GetStringUTFChars(server_hostname, 0);
    iperf_set_test_server_hostname((struct iperf_test*)ipt, hostname);
    env->ReleaseStringUTFChars(server_hostname, hostname);
}

JNIEXPORT void JNICALL
Java_com_example_ipertest_IperfTest_setDuration(JNIEnv *env, jclass type, jlong ipt, jint duration) {
    iperf_set_test_duration((struct iperf_test*)ipt, duration);
}

JNIEXPORT void JNICALL
Java_com_example_ipertest_IperfTest_setConnectTimeout(JNIEnv *env, jclass type, jlong ipt, jint connect_timeout) {
    iperf_set_test_connect_timeout((struct iperf_test*)ipt, connect_timeout);
}

JNIEXPORT void JNICALL
Java_com_example_ipertest_IperfTest_setTos(JNIEnv *env, jclass type, jlong ipt, jint tos) {
    iperf_set_test_tos((struct iperf_test*)ipt, tos);
}
