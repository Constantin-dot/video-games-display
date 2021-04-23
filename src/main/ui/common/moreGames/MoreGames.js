import React, { useEffect, useRef } from "react";

export const MoreGAmes = React.memo(({isAddGames, getMoreGames}) => {
    const ref = useRef();
    const refCurrent = ref.current;

    useEffect( () => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    getMoreGames();
                }
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.1
            }
        );

        if (refCurrent) {
            observer.observe(refCurrent);
        }

        return () => {
            if (refCurrent) {
                observer.unobserve(refCurrent);
            }
        };
        // eslint-disable-next-line
    }, [ref, isAddGames, getMoreGames]);

    return <>
        {isAddGames && <div ref={ref} />}
    </>;
});