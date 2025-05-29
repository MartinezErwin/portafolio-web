"use client";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import Link from "next/link";
import { Proyectos } from "@/data/Proyectos";

export default function ProjectSlider() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: {
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 1,
          spacing: 15,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 1,
          spacing: 20,
        },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <div className="relative">
        <div ref={sliderRef} className="keen-slider">
          {Proyectos.map((proyecto) => (
            <div key={proyecto.id} className="keen-slider__slide">
              <div className="project-card mx-auto flex h-full min-h-[400px] max-w-md flex-col items-center justify-center rounded-xl p-6 shadow-lg">
                <Image
                  src={proyecto.image}
                  alt={proyecto.title}
                  width={300}
                  height={200}
                  className="mb-4 h-48 w-full rounded-lg object-cover shadow-md"
                />
                <div className="w-full flex-1">
                  <h4 className="project-title mb-2 text-center text-xl font-semibold">
                    {proyecto.title}
                  </h4>
                  <p className="project-description mb-4 text-center text-sm">
                    {proyecto.description}
                  </p>
                </div>
                <div className="flex w-full gap-2">
                  <Link
                    href={proyecto.link}
                    target="_blank"
                    className="btn-primary flex-1 rounded-lg px-4 py-2 text-center font-medium transition-all duration-200"
                  >
                    Ver Demo
                  </Link>
                  <Link
                    href={proyecto.detailPage}
                    className="btn-secondary flex-1 rounded-lg px-4 py-2 text-center font-medium transition-all duration-200"
                  >
                    Conocer Más
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: React.MouseEvent<SVGSVGElement>) => {
                e.stopPropagation();
                instanceRef.current?.prev();
              }}
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: React.MouseEvent<SVGSVGElement>) => {
                e.stopPropagation();
                instanceRef.current?.next();
              }}
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>

      {loaded && instanceRef.current && (
        <div className="mt-4 flex justify-center space-x-2">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={`dot h-3 w-3 rounded-full transition-all duration-300 ${
                  currentSlide === idx
                    ? "dot-active scale-125"
                    : "dot-inactive hover:dot-hover"
                }`}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: React.MouseEvent<SVGSVGElement>) => void;
}) {
  const disabled = props.disabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-pointer arrow-hover";

  return (
    <svg
      onClick={props.onClick}
      className={`arrow absolute top-1/2 h-8 w-8 -translate-y-1/2 transform transition-colors duration-200 ${
        props.left ? "left-2" : "right-2"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
