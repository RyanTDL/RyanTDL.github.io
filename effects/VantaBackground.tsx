// components/VantaBackground.tsx
import React, { useEffect, useRef, useState } from 'react';
import HALO from '@/node_modules/vanta/dist/vanta.halo.min.js';
import * as THREE from '@/node_modules/three';

const VantaBackground = () => {
    const [vantaEffect, setVantaEffect] = useState(null);
    const vantaRef = useRef(null);

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
            HALO({
                el: vantaRef.current,
                THREE: THREE,
                // xOffset: 0.25,
                // yOffset: 0.1,
                size: 1,
                amplitudeFactor: 1,
                //baseColor: 0x5420b6,
                // backgroundColor: 0xd0e16
            }))
        }

        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect]);

    return (
        <div className='w-full h-screen border-2'>
            <div ref={vantaRef}> 
                <div className='w-full h-screen border-2'></div>
                {/* <h1 className='font-extrabold text-transparent text-6xl  bg-clip-text bg-gradient-to-r from-pink-600 to-purple-500'>Introducing Me:</h1> */}
            </div>
        </div>
    )
}

export default VantaBackground;
