import '@/app/ui/project.css';
import Script from 'next/script';

export default function Project() {
    return (
          <div className="padding-global">
          <div className="padding-section-medium">
            {/* <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" 
            /> */}
            <div className="max-width-xlarge">
              <h1>
                A home where visionaries bring big ideas to life
              </h1>
              {/* <div className="spacer-small" /> */}
              <div className="max-width-medium">
                <p className="text-size-large">
                  People are waiting to join in on your vision. Let's build it together and create a die-hard community around your shared values. Oh, and while we’re at it, let’s do it well because it’s bigger than any of us.
                </p>
              </div>
              {/* <div className="spacer-small" /> */}
              <div className="button-group">
                {/* <a
                  className="button-regular w-inline-block"
                  data-w-id="18ae716d-9bfe-5214-9b70-a60da53bfeb4"
                  href="/about"
                >
                  <div>
                    Get the tour
                  </div>
                  <div className="button-arrow w-embed">
                    <svg
                      fill="none"
                      height="11"
                      viewBox="0 0 15 11"
                      width="15"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.73995 0.0978275L14.1421 5.50002L8.72758 10.9146L7.46666 9.65366L10.6684 6.4519L0.914793 6.41481L0.902432 4.5976L10.6561 4.56051L7.46666 1.37111L8.73995 0.0978275Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </a> */}
                {/* <a
                  className="button-regular w-inline-block"
                  data-w-id="18ae716d-9bfe-5214-9b70-a60da53bfeb4"
                  href="/work"
                >
                  <div>
                    See our work
                  </div>
                  <div className="button-arrow w-embed">
                    <svg
                      fill="none"
                      height="11"
                      viewBox="0 0 15 11"
                      width="15"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.73995 0.0978275L14.1421 5.50002L8.72758 10.9146L7.46666 9.65366L10.6684 6.4519L0.914793 6.41481L0.902432 4.5976L10.6561 4.56051L7.46666 1.37111L8.73995 0.0978275Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </a> */}
              </div>
            </div>
          </div>
          </div>
    );
  }