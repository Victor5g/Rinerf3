#ifdef __cplusplus
#import "react-native-rinerf3.h"
#endif

#ifdef RCT_NEW_ARCH_ENABLED
#import "RNRinerf3Spec.h"

@interface Rinerf3 : NSObject <NativeRinerf3Spec>
#else
#import <React/RCTBridgeModule.h>

@interface Rinerf3 : NSObject <RCTBridgeModule>
#endif

@end
