import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { animateWithGsap } from "../utils/animations";
import { explore1Img, explore2Img, exploreVideo } from "../utils";
import gsap from "gsap";

const Features = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.to("#exploreVideo", {
      scrollTrigger: {
        trigger: "exploreVideo",
        toggleActions:'play pause reverse restart',
        start: '-10% bottom',
      },
      onComplete: () => {
        videoRef.current.play()
      }
    })
    animateWithGsap("#features_title", {
      y: 0,
      opacity: 1,
    });
    animateWithGsap(
      ".g_grow",
      {
        scale: 1,
        opacity: 1,
        ease: "power1",
      },
      {
        scrub: 5.5,
      }
    );
    animateWithGsap(".g_text", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
    });
  }, []);

  return (
    <section className="h-full common-padding bg-zinc relative overflow-hidden">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h1 id="features_title" className="section-heading">
            Explore
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="mt-32 mb-24 pl-24">
            <h2 className="text-5xl lg:text-7xl font-semibold">iPhone.</h2>
            <h2 className="text-5xl lg:text-7xl font-semibold">
              Forged in Titanum.
            </h2>
          </div>
          <div className="flex-center flex-col sm:px-10">
            <div className="relative h-[50vh] w-full flex items-center">
              <video
                playsInline
                id="exploreVideo"
                className="w-full h-full object-cover object-center"
                preload="none"
                muted
                autoPlay
                ref={videoRef}
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>
            <div className="flex flex-col w-full relative">
              <div className="feature-video-container">
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    src={explore1Img}
                    alt="titanium"
                    className="feature-video g_grow"
                  />
                </div>
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    src={explore2Img}
                    alt="titanium2"
                    className="feature-video g_grow"
                  />
                </div>
              </div>
              <div className="feature-text-container">
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    iPhone 15 Pro is{" "}
                    <span className="text-white">
                      El iPhone 15, lanzado en 2023, presenta un diseño con
                      marco de aluminio y parte trasera de vidrio, disponible en
                      varios colores y con pantallas Super Retina XDR de 6.1 y
                      6.7 pulgadas. Utiliza el chip A16 Bionic y viene con iOS
                      17
                    </span>
                    Cuenta con una cámara trasera dual de 48 MP y una frontal de
                    12 MP. La batería ofrece una duración mejorada y es
                    compatible con carga rápida y inalámbrica, además de un
                    puerto USB-C.
                  </p>
                </div>

                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    El Titanium es{" "}
                    <span className="text-white">
                      Materiales: Marco de aluminio y parte trasera de vidrio.
                      Colores: Disponible en varios colores, incluyendo negro,
                      azul, verde, amarillo y rosa. Pantalla: Pantalla Super
                      Retina XDR de 6.1 pulgadas y 6.7
                      pulgadas, con tecnología OLED que ofrece
                      colores vibrantes y negros profundos.
                    </span>
                    Procesador: Chip A16 Bionic, el mismo utilizado en la                     generación anterior Pro, lo que ofrece un rendimiento
                    superior y eficiencia energética. Memoria: Disponible en
                    variantes de almacenamiento de 128GB, 256GB y 512GB. Sistema
                    Operativo: iOS 17, con nuevas funcionalidades y mejoras en
                    la experiencia del usuario.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
