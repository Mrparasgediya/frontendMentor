import React, { useEffect, useRef } from "react";
import * as S from "./LazyImage.styles";

function LazyImage({ src, alt }) {
  const imageRef = useRef();
  useEffect(() => {
    const currentImage = imageRef.current;
    const intersactionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            currentImage.src = src;
            observer.unobserve(currentImage);
          }
        });
      },
      {
        threshold: 0.25,
      }
    );
    intersactionObserver.observe(currentImage);

    return () => {
      intersactionObserver.disconnect(currentImage);
    };
  }, [src]);

  return <S.LazyImage ref={imageRef} src={""} alt={alt} loading="lazy" />;
}

export default LazyImage;
