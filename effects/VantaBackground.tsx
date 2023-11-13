// components/VantaBackground.tsx
import React, { useEffect, useRef, useState } from 'react';
import HALO from '@/node_modules/vanta/dist/vanta.halo.min.js';
import * as THREE from '@/node_modules/three';

const VantaBackground = ({ children }) => {
    const [vantaEffect, setVantaEffect] = useState(null);
    const vantaRef = useRef(null);

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(HALO({
                el: vantaRef.current,
                THREE: THREE,
                // xOffset: 0.25,
                // yOffset: 0.1,
                size: 1.5,
                amplitudeFactor: 1.5,
                //////BackgroundColor: 0x131a43,
            }))
        }

        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect]);

    return <div ref={vantaRef}>{children}</div>;
    };

export default VantaBackground;
