"use client"

import { useEffect, useState } from "react";

const useScreenSize = () => {


    const [screenSize, setScreensize] = useState()

    useEffect(() => {
        function getScreenSize() {
            return window.innerWidth;

        }

        function handleResize() {
            setScreensize(getScreenSize())

        }

        handleResize();

        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)

    }, [])


    return screenSize;
}

export default useScreenSize;