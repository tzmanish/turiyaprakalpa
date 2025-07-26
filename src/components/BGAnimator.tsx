import { useState, useEffect, useRef } from 'react';
import { getRandomArbitrary } from '../utils/numGenerator';

import BgShape1 from '../assets/bg/BgShape1';
import BgShape2 from '../assets/bg/BgShape2';
import BgShape3 from '../assets/bg/BgShape3';
import BgShape4 from '../assets/bg/BgShape4';
import BgShape5 from '../assets/bg/BgShape5';
import BgShape6 from '../assets/bg/BgShape6';
import BgShape7 from '../assets/bg/BgShape7';
import BgShape8 from '../assets/bg/BgShape8';
import BgShape9 from '../assets/bg/BgShape9';
import BgShape10 from '../assets/bg/BgShape10';
import BgShape11 from '../assets/bg/BgShape11';
import BgShape12 from '../assets/bg/BgShape12';


// const BGAnimator = () => {
//     const containerRef = useRef(null);
//     const animationRef = useRef<number | null>(null);
//     const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });

//     const shapeConfigs = [];
//     const componentList = [BgShape1, BgShape2, BgShape3, BgShape4, BgShape5, BgShape6, BgShape7, BgShape8, BgShape9, BgShape10, BgShape11, BgShape12];
//     for (let i = 0; i < componentList.length; i++) {
//         shapeConfigs.push({
//             id: i + 1,
//             Component: componentList[i % componentList.length],
//             x: getRandomArbitrary(0, 1920),
//             y: getRandomArbitrary(0, 1080),
//             size: getRandomArbitrary(40, 60),
//             speed: getRandomArbitrary(0.2, 0.5),
//             vx: -1 * getRandomArbitrary(0.2, 0.5),
//             vy: -1 * getRandomArbitrary(0.2, 0.5),
//             rotation: getRandomArbitrary(10, 40),
//             rotationSpeed: getRandomArbitrary(0.2, 0.4),
//             rotationDirection: Math.random() < 0.5 ? 1 : -1
//         });
//     }

//     const [shapes, setShapes] = useState(shapeConfigs);

//     useEffect(() => {
//         const updateDimensions = () => {
//             if (containerRef.current) {
//                 setDimensions({
//                     width: window.innerWidth,
//                     height: window.innerHeight
//                 });
//             }
//         };

//         updateDimensions();
//         window.addEventListener('resize', updateDimensions);
//         return () => window.removeEventListener('resize', updateDimensions);
//     }, []);

//     useEffect(() => {
//         const animate = () => {
//             setShapes(prevShapes =>
//                 prevShapes.map(shape => {
//                     let newX = shape.x + (shape.vx * shape.speed);
//                     let newY = shape.y + (shape.vy * shape.speed);
//                     let newVx = shape.vx;
//                     let newVy = shape.vy;

//                     const margin = shape.size / 2;

//                     if (newX <= margin) {
//                         newVx = Math.abs(newVx);
//                         newX = margin;
//                     } else if (newX >= dimensions.width - margin) {
//                         newVx = -Math.abs(newVx);
//                         newX = dimensions.width - margin;
//                     }

//                     if (newY <= margin) {
//                         newVy = Math.abs(newVy);
//                         newY = margin;
//                     } else if (newY >= dimensions.height - margin) {
//                         newVy = -Math.abs(newVy);
//                         newY = dimensions.height - margin;
//                     }

//                     const newRotation = shape.rotation + (shape.rotationSpeed * shape.rotationDirection);

//                     return {
//                         ...shape,
//                         x: newX,
//                         y: newY,
//                         vx: newVx,
//                         vy: newVy,
//                         rotation: newRotation % 360 
//                     };
//                 })
//             );

//             animationRef.current = requestAnimationFrame(animate);
//         };

//         animationRef.current = requestAnimationFrame(animate);

//         return () => {
//             if (animationRef.current) {
//                 cancelAnimationFrame(animationRef.current);
//             }
//         };
//     }, [dimensions]);

//     return (
//         <div ref={containerRef} className="h-screen w-screen fixed top-0 left-0 -z-20 overflow-hidden">
//             <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20" />
//             <div className="absolute inset-0 -z-10">
//                 {shapes.map(shape => {
//                     const ShapeComponent = shape.Component;
//                     return (
//                         <ShapeComponent
//                             key={shape.id}
//                             style={{
//                                 left: shape.x - shape.size / 2,
//                                 top: shape.y - shape.size / 2,
//                                 transform: `rotate(${shape.rotation}deg)`,
//                             }}
//                         />
//                     );
//                 })}
//             </div>
//         </div>
//     );
// }


const BGAnimator = () => {
    const containerRef = useRef(null);

    const createUniformShapes = (width: number, height: number) => {
        const componentList = [BgShape1, BgShape2, BgShape3, BgShape4, BgShape5, BgShape6, BgShape7, BgShape8, BgShape9, BgShape10, BgShape11, BgShape12];
        interface ShapeConfig {
            id: number;
            Component: React.ComponentType<{ style: React.CSSProperties }>;
            x: number;
            y: number;
            size: number;
            rotation: number;
        }

        const shapeConfigs: ShapeConfig[] = [];
        const minDistance = 120;
        
        const cols = Math.ceil(Math.sqrt(componentList.length));
        const rows = Math.ceil(componentList.length / cols);
        const cellWidth = width / cols;
        const cellHeight = height / rows;
        
        for (let i = 0; i < componentList.length; i++) {
            const row = Math.floor(i / cols);
            const col = i % cols;
            
            const baseCellX = col * cellWidth + cellWidth / 2;
            const baseCellY = row * cellHeight + cellHeight / 2;
            
            const margin = 60;
            const offsetX = getRandomArbitrary(-cellWidth/3, cellWidth/3);
            const offsetY = getRandomArbitrary(-cellHeight/3, cellHeight/3);
            
            let x = Math.max(margin, Math.min(width - margin, baseCellX + offsetX));
            let y = Math.max(margin, Math.min(height - margin, baseCellY + offsetY));
            
            let attempts = 0;
            while (attempts < 20 && shapeConfigs.some(shape => {
                const distance = Math.sqrt(Math.pow(x - shape.x, 2) + Math.pow(y - shape.y, 2));
                return distance < minDistance;
            })) {
                x = Math.max(margin, Math.min(width - margin, baseCellX + getRandomArbitrary(-cellWidth/2, cellWidth/2)));
                y = Math.max(margin, Math.min(height - margin, baseCellY + getRandomArbitrary(-cellHeight/2, cellHeight/2)));
                attempts++;
            }
            
            shapeConfigs.push({
                id: i + 1,
                Component: componentList[i % componentList.length],
                x: x,
                y: y,
                size: getRandomArbitrary(40, 60),
                rotation: getRandomArbitrary(0, 360)
            });
        }
        
        return shapeConfigs;
    };

    const [shapes, setShapes] = useState(() => createUniformShapes(1920, 1080));

    useEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current) {
                const newDimensions = {
                    width: window.innerWidth,
                    height: window.innerHeight
                };
                setShapes(createUniformShapes(newDimensions.width, newDimensions.height));
            }
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    return (
        <div ref={containerRef} className="h-screen w-screen fixed top-0 left-0 -z-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20" />
            <div className="absolute inset-0 -z-10">
                {shapes.map(shape => {
                    const ShapeComponent = shape.Component;
                    return (
                        <ShapeComponent
                            key={shape.id}
                            style={{
                                left: shape.x - shape.size / 2,
                                top: shape.y - shape.size / 2,
                                transform: `rotate(${shape.rotation}deg)`,
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default BGAnimator