import { createContext, FC, ReactNode, useCallback,useEffect, useState } from "react";

interface scrollObserverProps {
    children: ReactNode;
    // add other props here
  }

interface ScrollValue {
    scrollY: number
}

export const ScrollContext = createContext<ScrollValue>({
    scrollY: 0
})

const ScrollObserver: FC<scrollObserverProps> = ({children}) => {
    const [scrollY, setScrollY] = useState(0)
    const handleScroll = useCallback(()=> {
        setScrollY(window.scrollY)
    }, [])

    useEffect(() => {
        document.addEventListener('scroll', handleScroll, {passive: true})
        return () => document.removeEventListener('scroll', handleScroll)
    },[handleScroll])

    return ( 
        <ScrollContext.Provider value={{scrollY}}>
            {children}
        </ScrollContext.Provider>
    )
}

export default ScrollObserver;