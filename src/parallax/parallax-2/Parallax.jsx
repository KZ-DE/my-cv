/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */

import "./styles.css";
import foto from "./my.png";
import ig from "./ig.png";
import lin from "./in.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import logo from "./logo.svg";
import { useEffect, useRef } from "react";

export const Parallax = () => {
  const containerRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const sections = gsap.utils.toArray(".panel");
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + containerRef.current.offsetWidth,
      },
    });
  }, []);

  return (
    <>
      <nav>
        <img src={logo} />
        <a href="#home"> Home </a>
        <a href="#skiles"> Skills </a>
        <a href="#futer"> Contact </a>
      </nav>
      <section className="banner" id="home">
        <div className="banner-content">
          <h2>Hi, Welcome To My CV</h2>
          {/* <h3>TAUFIK HIDAYAT</h3> */}
        </div>
      </section>
      <div ref={containerRef} className="container">
        <section className="description panel blue">
          <main className="border">
            <img src={foto} className="foto" />
            <h1>TAUFIK HIDAYAT</h1>
            <h1> MAHASISWA</h1>
          </main>
        </section>
        <section className="panel red">
          <h2>ABAUTE ME</h2>
          <p>
            Hello, Perkenalkan nama saya Taufik Hidayat. Asal saya dari
            banyuwangi, tempat tanggal lahir BALIKPAPAN 01-September-2001. Saya
            seorang Mahasiswa Teknik Elektro Universitas Jember Angkatan 2022.
          </p>
        </section>
        <section className="description panel blue" id="skiles">
          <h2>SKILLS</h2>
          <p className="skil">
            <ul>
              <li>
                Memahami Dasar Bahasa Pemrogaman C++, Python, dan JavaScript
              </li>
              <li>Memahami Komponen - Kopmponen Dasar Elektronika</li>
              <li>
                Mempunyai Pengalaman Kerja 1 Tahun Di Bidang Service Laptop
              </li>
            </ul>
          </p>
        </section>
        <section className="panel red">
          <h2>EDUCATIONAL BACKGROUND</h2>
          <p className="skil">
            <ul>
              <li>2009 - 2015 "SDN 2 SAMBILMULYO"</li>
              <li>2015 - 2018 "MTsN 2 BANYUWANGI"</li>
              <li>2018 - 2021 "SMKN 1 TEGALSARI"</li>
            </ul>
          </p>
        </section>
      </div>
      <section className="footer" id="futer">
        <h2>Contact</h2>
        <div className="sosmed">
          <div>
            <img src={ig} alt="my ig" className="fot" />
            <h3>Taufikfck_</h3>
          </div>
          <div>
            <img src={lin} alt="Linkeid" className="in" />
            <h3>Taufik Hidayat</h3>
          </div>
        </div>
      </section>
    </>
  );
};
