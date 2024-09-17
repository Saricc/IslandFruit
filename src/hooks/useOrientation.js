// useOrientation.js
import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';



export function useOrientation() {
  const [orientation, setOrientation] = useState("PORTRAIT");

  useEffect(() => {
    const onChange = ({ window: { width, height } }) => {
      if (width < height) {
        setOrientation("PORTRAIT");
      } else {
        setOrientation("LANDSCAPE");
      }
    };

    const subscription = Dimensions.addEventListener('change', onChange);

    // Cleanup the subscription on unmount
    return () => {
      subscription?.remove();
    };
  }, []);
 return orientation;
}

 