


import {HeroSection} from "../components/HeroSection"

import {About} from "../components/About"

import {Projects} from "../components/Projects"

import {SweetComments} from "../components/CommentsOthers"

import {Contact} from "../components/Contact"

import {Certificates} from "../components/Certificates"

import {Preloader} from "../components/Preloader"

export default function Home() {
  return (
   <>
   
   <Preloader />

  <HeroSection />
  
   <About />

   <Projects />

   <Certificates />

  <SweetComments />
    
   <Contact/> 


   </>
  );
}
