export default function Video() {
    return (
          <div 
            className="w-full h-full"
            data-autoplay="true"
            data-loop="true"
            data-video-url="/ideas/spring-edit.mp4"
            data-wf-ignore="true"
          > 
            <video
              className="w-full h-full"
              autoPlay
              data-wf-ignore="true"
              id="video-background"
              loop
              muted
              preload="auto"
              playsInline
            >
              <source
                src="/ideas/spring-edit.mp4"
                data-wf-ignore="true" type="video/mp4"
              />
            </video>
          </div>
    );
  }