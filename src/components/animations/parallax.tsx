import { useEffect, useRef } from "react";

type props = {
    children: React.ReactNode
}

export const Parallax = ({ children }: props) => {
    const ref = useRef<HTMLDivElement>(null)

    const handleScroll = () => {
        // 処理書く
    }

    const io = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {    
            if (entry.isIntersecting) {
                window.addEventListener("scroll", handleScroll);
            } else {
                window.removeEventListener("scroll", handleScroll);
            }
        });
    });

    useEffect(() => {
        if(ref.current) io.observe(ref.current)
        return () => {
            io.disconnect()
            window.removeEventListener("scroll", handleScroll);
        };
    },[])

    return (
        <div ref={ref}>{children}</div>
    )
}