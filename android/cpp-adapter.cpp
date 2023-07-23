#include <jni.h>
#include "react-native-rinerf3.h"

extern "C"
JNIEXPORT jdouble JNICALL
Java_com_rinerf3_Rinerf3Module_nativeMultiply(JNIEnv *env, jclass type, jdouble a, jdouble b) {
    return rinerf3::multiply(a, b);
}
