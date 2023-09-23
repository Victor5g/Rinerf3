import { DeviceEventEmitter, type EmitterSubscription } from 'react-native';

const IperfNotificationName = {
  status: 'reporter',
};

class IperfNotificationManager {
  static addListener(
    notificationName: string,
    callback: (data?: any) => void
  ): EmitterSubscription {
    return DeviceEventEmitter.addListener(notificationName, callback);
  }

  static removeListener(notificationName: string): void {
    DeviceEventEmitter.removeAllListeners(notificationName);
  }

  static postNotification(notificationName: string, data?: any): void {
    DeviceEventEmitter.emit(notificationName, data);
  }
}

export { IperfNotificationName, IperfNotificationManager };

// Example usage
// IperfNotificationManager.addListener(IperfNotificationName.status,(data) => {
//     console.log('Notificação de status recebida:', data);
//   }
// );
// IperfNotificationManager.postNotification(IperfNotificationName.status, {
//   mensagem: 'Este é um exemplo de notificação de status.',
// });
// IperfNotificationManager.removeListener(IperfNotificationName.status);
