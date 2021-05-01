import { useEffect, useRef } from "react";

export const GetMoreGamesHook = ({isAddGames, getMoreGames}) => {
    const ref = useRef();

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

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                // eslint-disable-next-line
                observer.unobserve(ref.current);
            }
        };
        // eslint-disable-next-line
    }, [ref, isAddGames, getMoreGames]);

    return {ref}
};