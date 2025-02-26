import '@/app/ui/main-outline.css';

import Video from '@/app/origin/video';
import Philosophy from '@/app/origin/philosophy';
import Vision from '@/app/origin/vision';
import Project from '@/app/origin/project';
import GetInTouch from '@/app/origin/getintouch';
import Service from '@/app/origin/service';
import Parallax from '@/app/origin/parallax';

import '@/app/ui/btn.css';
import '@/app/ui/philosophy.css';



export default function Header() {
    return (
        <div className="w-full h-full"> 

            <nav>
                <a href="#video" data-anchor="video">Show</a>
                <a href="#brand" data-anchor="brand">Brand</a>
                <a href="#origin" data-anchor="origin">Origin</a>
                <a href="#philosophy" data-anchor="philosophy">Philosophy</a>
                {/* <a href="#work" data-anchor="work">Work</a> */}
                
                {/* <a href="#service" data-anchor="service">Service</a>
                <a href="#getintouch" data-anchor="getintouch">Getintouch</a> */}

                <div className="progress-bar"></div>
            </nav>


            <section id="video" className="videoSection">
                <Video />
            </section>

            
            <Parallax />
            
            

             {/* <section id="philosophy">
                <Philosophy />
            </section> */}

            
            {/* <section id="vision">
                <Vision />
            </section>  */}
            
            
            <section id="project" className="project-section">
                <Project />
            </section>
            
            {/*        
            <section id="service">
                <Service />
            </section>
            
            <section id="getintouch">
                <GetInTouch />
            </section> */}

        </div>
    );
  }