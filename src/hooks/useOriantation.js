import {useEffect, useState} from 'react';
import { Dimensions } from 'react-native';

const screenDimentions = Dimensions.get('screen');

const useOriantation = () => {
  const [oriantation, setoriantation] = useState({
      isPortrait: screenDimentions.height >= screenDimentions.width,
      screenWidth: screenDimentions.width,
        screenHeight: screenDimentions.height,
        scale: screenDimentions.scale,
        fontScale: screenDimentions.fontScale,
  });

  useEffect(() => {
    const onDiensionChange = ({ window, screen }) => {
        const isPortrait = screen.height >= screen.width;
        console.warn('isPortrait', isPortrait);
      setoriantation({
        isPortrait,
        screenWidth: screen.width,
        screenHeight: screen.height,
        scale: screen.scale,
        fontScale: screen.fontScale,
      });
    };

    const subscription = Dimensions.addEventListener('change', onDiensionChange);

    return () => subscription?.remove();
  }, []);

  return {
    oriantation,
  };
};

export default useOriantation;
