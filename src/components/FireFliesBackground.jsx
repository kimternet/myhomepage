"use client"
import React, { useState, useEffect } from 'react'

const createFirefly = () => ({
    id: Math.random(),
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDuration: `${Math.random()*5 + 5}s`,
    size: Math.random() * 8 + 15
});

const FireFliesBackground = () => {
    const [fireflies, setFireflies] = useState([])

    useEffect(() => {
        const initialFireflies = Array(10).fill().map(() => createFirefly());
        setFireflies(initialFireflies);

        const addFireflyPeriodically = () => {
            const newFirefly = createFirefly();
            setFireflies(currentFireflies => 
                [
                    ...currentFireflies.slice(-24),
                    newFirefly
                ]);
        };

        const interval = setInterval(addFireflyPeriodically, 800);

        return () => clearInterval(interval)
    }, []);


  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
        {
            fireflies.map((firefly) => {
                return <div key={firefly.id}
                className="absolute rounded-full bg-firefly-radial"
                style={{
                    top: firefly.top,
                    left: firefly.left,
                    width: `${firefly.size}px`,
                    height: `${firefly.size}px`,
                    animation: `move ${firefly.animationDuration} infinite alternate`,
                    opacity: Math.random() * 0.5 + 0.5
                }}
                ></div>
            })
        }
    </div>
  )
}

export default FireFliesBackground
