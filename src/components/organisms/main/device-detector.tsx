import { useState, useEffect } from 'react';

type DeviceType = 'mobile' | 'desktop' | '';

const DeviceDetector = () => {
  const [deviceType, setDeviceType]: [DeviceType, (deviceType: DeviceType) => void] = useState<DeviceType>('');

  useEffect(() => {
    const hasTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints;

    if (hasTouchScreen) {
      setDeviceType('mobile');
    } else {
      setDeviceType('desktop');
    }
  }, []);

  return deviceType;
};

export default DeviceDetector;
