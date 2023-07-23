#import "Rinerf3.h"

@implementation Rinerf3
RCT_EXPORT_MODULE()

// Example method
// See // https://reactnative.dev/docs/native-modules-ios
RCT_EXPORT_METHOD(multiply:(double)a
                  b:(double)b
                  resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject)
{
    NSNumber *result = @(rinerf3::multiply(a, b));

    resolve(result);
}


@end
