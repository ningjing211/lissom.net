import '@/app/ui/ideas/featured.css';

const videoURLs = {
    leftTopMotorcycle: '/left-top.mp4',
    rightTopHorse: '/right-top-horse.mp4',
    leftDownColors: '/left-down-colors.mp4',
    rightDownMan: '/right-down-man.mp4',
  };

export default function Feature() {
    return (
        <div>
            <div className="padding-section-medium special-section">
                <div className="heading-style-h6">
                    Presence 
                </div>
                <div className="spacer-tiny" />
                <h2 className="heading-style-h4  alice-regular">
                   Refined | Visionary | Grace
                </h2>
                <div className="spacer-medium" />
                <div className="home-work_gallery w-dyn-list">
                    <div
                    className="work_gallery w-dyn-items"
                    role="list"
                    >
                    <div
                        className="gallery_item is-hover w-dyn-item"
                        role="listitem"
                    >
                        

                        <a
                        className="gallery_link w-inline-block"
                        href="/philosophy"
                        >
                        <img
                            alt="Stalder Coaching"
                            className="gallery_image w-dyn-bind-empty"
                            loading="lazy"
                            src=""
                        />
                        <div className="gallery_video hide-mobile-landscape w-embed">
                            <div
                            className="w-background-video w-background-video-atom hero_media-item-video"
                            data-autoplay="true"
                            data-loop="true"
                            data-video-url={videoURLs.leftTopMotorcycle}
                            data-wf-ignore="true"
                            >
                            <video
                                autoPlay
                                data-object-fit="cover"
                                data-wf-ignore="true"
                                loop
                                muted
                                playsInline
                            >
                                <source
                                data-wf-ignore="true"
                                src={videoURLs.leftTopMotorcycle}
                                />
                            </video>
                            </div>
                        </div>
                        <div className="gallery_video is-mobile w-embed">
                            <div
                            className="w-background-video w-background-video-atom hero_media-item-video"
                            data-autoplay="true"
                            data-loop="true"
                            data-video-url={videoURLs.leftTopMotorcycle}
                            data-wf-ignore="true"
                            >
                            <video
                                autoPlay
                                data-object-fit="cover"
                                data-wf-ignore="true"
                                loop
                                muted
                                playsInline
                            >
                                <source
                                data-wf-ignore="true"
                                src={videoURLs.leftTopMotorcycle}
                                />
                            </video>
                            </div>
                        </div>
                        <div className="entry-link-title first-link">Philosophy</div>
                        {/* <div className="text">
                            <svg>
                                <defs>
                                <mask
                                    height="100%"
                                    id="mask"
                                    width="100%"
                                    x="0"
                                    y="0"
                                >
                                    <rect
                                    height="100%"
                                    id="alpha"
                                    width="100%"
                                    x="0"
                                    y="0"
                                    />
                                    <text
                                    dy="1.58em"
                                    id="title"
                                    x="50%"
                                    y="0"
                                    >
                                    philosophy
                                    </text>
                                    <text
                                    dy="9.8em"
                                    id="subtitle"
                                    x="50%"
                                    y="0"
                                    >
                                    that we hold on
                                    </text>
                                </mask>
                                </defs>
                                <rect
                                height="100%"
                                id="base"
                                width="100%"
                                x="0"
                                y="0"
                                />
                            </svg>
                        </div> */}
                        </a>
                        <div className="work_tag-container">
                        {/* <div
                            className="tag is-white"
                            style={{
                            rotate: 'none',
                            scale: 'none',
                            transform: 'translate(0px, 0px)',
                            translate: 'none'
                            }}
                        >
                            <div>
                            Culture
                            </div>
                        </div> */}
                        <div className="w-dyn-list">
                            <div
                            className="services-tags w-dyn-items"
                            role="list"
                            >
                            {/* <div
                                className="tag w-dyn-item"
                                role="listitem"
                                style={{
                                rotate: 'none',
                                scale: 'none',
                                transform: 'translate(0px, 0px)',
                                translate: 'none'
                                }}
                            >
                                <div>
                                Believe
                                </div>
                            </div>
                            <div
                                className="tag w-dyn-item"
                                role="listitem"
                                style={{
                                rotate: 'none',
                                scale: 'none',
                                transform: 'translate(0px, 0px)',
                                translate: 'none'
                                }}
                            >
                                <div>
                                Imagine
                                </div>
                            </div> */}
                            {/* <div
                                className="tag w-dyn-item"
                                role="listitem"
                                style={{
                                rotate: 'none',
                                scale: 'none',
                                transform: 'translate(0px, 0px)',
                                translate: 'none'
                                }}
                            >
                                <div>
                                Consulting
                                </div>
                            </div> */}
                            </div>
                        </div>
                        </div>
                    </div>
                    <div
                        className="gallery_item is-hover w-dyn-item"
                        role="listitem"
                    >
                        

                        <a
                        className="gallery_link w-inline-block"
                        href="/core_value"
                        >
                        <img
                            alt="Janine Wachsmann"
                            className="gallery_image w-dyn-bind-empty"
                            loading="lazy"
                            src=""
                        />
                        <div className="gallery_video hide-mobile-landscape w-embed">
                            <div
                            className="w-background-video w-background-video-atom hero_media-item-video"
                            data-autoplay="true"
                            data-loop="true"
                            data-video-url={videoURLs.rightTopHorse}
                            data-wf-ignore="true"
                            >
                            <video
                                autoPlay
                                data-object-fit="cover"
                                data-wf-ignore="true"
                                loop
                                muted
                                playsInline
                            >
                                <source
                                data-wf-ignore="true"
                                src={videoURLs.rightTopHorse}
                                />
                            </video>
                            </div>
                        </div>
                        <div className="gallery_video is-mobile w-embed">
                            <div
                            className="w-background-video w-background-video-atom hero_media-item-video"
                            data-autoplay="true"
                            data-loop="true"
                            data-video-url={videoURLs.rightTopHorse}
                            data-wf-ignore="true"
                            >
                            <video
                                autoPlay
                                data-object-fit="cover"
                                data-wf-ignore="true"
                                loop
                                muted
                                playsInline
                            >
                                <source
                                data-wf-ignore="true"
                                src={videoURLs.rightTopHorse}
                                />
                            </video>
                            </div>
                        </div>
                        <div className="entry-link-title">Value</div>
                        {/* <div className="text">
                            <svg>
                                <defs>
                                <mask
                                    height="100%"
                                    id="mask2"
                                    width="100%"
                                    x="0"
                                    y="0"
                                >
                                    <rect
                                    height="100%"
                                    id="alpha2"
                                    width="100%"
                                    x="0"
                                    y="0"
                                    />
                                    <text
                                    dy="1.58em"
                                    id="title2"
                                    x="50%"
                                    y="0"
                                    >
                                    Value
                                    </text>
                                    <text
                                    dy="9.8em"
                                    id="subtitle2"
                                    x="50%"
                                    y="0"
                                    >
                                    the core we own
                                    </text>
                                </mask>
                                </defs>
                                <rect
                                height="100%"
                                id="base2"
                                width="100%"
                                x="0"
                                y="0"
                                />
                            </svg>
                        </div> */}
                        </a>
                        <div className="work_tag-container">
                        {/* <div
                            className="tag is-white"
                            style={{
                            rotate: 'none',
                            scale: 'none',
                            transform: 'translate(0px, 0px)',
                            translate: 'none'
                            }}
                        >
                            <div>
                            Architecture
                            </div>
                        </div> */}
                        <div className="w-dyn-list">
                            <div
                            className="services-tags w-dyn-items"
                            role="list"
                            >
                            {/* <div
                                className="tag w-dyn-item"
                                role="listitem"
                                style={{
                                rotate: 'none',
                                scale: 'none',
                                transform: 'translate(0px, 0px)',
                                translate: 'none'
                                }}
                            >
                                <div>
                                Team
                                </div>
                            </div> */}
                            {/* <div
                                className="tag w-dyn-item"
                                role="listitem"
                                style={{
                                rotate: 'none',
                                scale: 'none',
                                transform: 'translate(0px, 0px)',
                                translate: 'none'
                                }}
                            >
                                <div>
                                Design
                                </div>
                            </div> */}
                            {/* <div
                                className="tag w-dyn-item"
                                role="listitem"
                                style={{
                                rotate: 'none',
                                scale: 'none',
                                transform: 'translate(0px, 0px)',
                                translate: 'none'
                                }}
                            >
                                <div>
                                Soul
                                </div>
                            </div>
                            <div
                                className="tag w-dyn-item"
                                role="listitem"
                                style={{
                                rotate: 'none',
                                scale: 'none',
                                transform: 'translate(0px, 0px)',
                                translate: 'none'
                                }}
                            >
                                <div>
                                AI
                                </div>
                            </div> */}
                            </div>
                        </div>
                        </div>
                    </div>
                    <div
                        className="gallery_item is-hover w-dyn-item"
                        role="listitem"
                    >
                        
                        <a
                        className="gallery_link w-inline-block"
                        href="/roots"
                        >
                        <img
                            alt="Alignment Labs"
                            className="gallery_image w-dyn-bind-empty"
                            loading="lazy"
                            src=""
                        />
                        <div className="gallery_video hide-mobile-landscape w-embed">
                            <div
                            className="w-background-video w-background-video-atom hero_media-item-video"
                            data-autoplay="true"
                            data-loop="true"
                            data-video-url={videoURLs.leftDownColors}
                            data-wf-ignore="true"
                            >
                            <video
                                autoPlay
                                data-object-fit="cover"
                                data-wf-ignore="true"
                                loop
                                muted
                                playsInline
                            >
                                <source
                                data-wf-ignore="true"
                                src={videoURLs.leftDownColors}
                                />
                            </video>
                            </div>
                        </div>
                        <div className="gallery_video is-mobile w-embed">
                            <div
                            className="w-background-video w-background-video-atom hero_media-item-video"
                            data-autoplay="true"
                            data-loop="true"
                            data-video-url={videoURLs.leftDownColors}
                            data-wf-ignore="true"
                            >
                            <video
                                autoPlay
                                data-object-fit="cover"
                                data-wf-ignore="true"
                                loop
                                muted
                                playsInline
                            >
                                <source
                                data-wf-ignore="true"
                                src={videoURLs.leftDownColors}
                                />
                            </video>
                            </div>
                        </div>
                        <div className="entry-link-title">Roots</div>
                        {/* <div className="text">
                            <svg>
                                <defs>
                                <mask
                                    height="100%"
                                    id="mask3"
                                    width="100%"
                                    x="0"
                                    y="0"
                                >
                                    <rect
                                    height="100%"
                                    id="alpha3"
                                    width="100%"
                                    x="0"
                                    y="0"
                                    />
                                    <text
                                    dy="1.58em"
                                    id="title3"
                                    x="50%"
                                    y="0"
                                    >
                                    Roots
                                    </text>
                                    <text
                                    dy="9.8em"
                                    id="subtitle3"
                                    x="50%"
                                    y="0"
                                    >
                                    burst out of surprise
                                    </text>
                                </mask>
                                </defs>
                                <rect
                                height="100%"
                                id="base3"
                                width="100%"
                                x="0"
                                y="0"
                                />
                            </svg>
                        </div> */}
                        </a>
                        <div className="work_tag-container">
                        {/* <div className="tag is-white">
                            <div>
                            Saas
                            </div>
                        </div> */}
                        <div className="w-dyn-list">
                            <div
                            className="services-tags w-dyn-items"
                            role="list"
                            >
                            {/* <div
                                className="tag w-dyn-item"
                                role="listitem"
                            >
                                <div>
                                Life
                                </div>
                            </div> */}
                            {/* <div
                                className="tag w-dyn-item"
                                role="listitem"
                            >
                                <div>
                                Websites
                                </div>
                            </div> */}
                            {/* <div
                                className="tag w-dyn-item"
                                role="listitem"
                            >
                                <div>
                                Love
                                </div>
                            </div>
                            <div
                                className="tag w-dyn-item"
                                role="listitem"
                            >
                                <div>
                                Essense
                                </div>
                            </div> */}
                            {/* <div
                                className="tag w-dyn-item"
                                role="listitem"
                            >
                                <div>
                                Ecosystems
                                </div>
                            </div> */}
                            </div>
                        </div>
                        </div>
                    </div>
                    <div
                        className="gallery_item is-hover w-dyn-item"
                        role="listitem"
                    >                        
                        <a
                        className="gallery_link w-inline-block"
                        href="/vision"
                        >
                        <img
                            alt="INME Wellness"
                            className="gallery_image w-dyn-bind-empty"
                            loading="lazy"
                            src=""
                        />
                        <div className="gallery_video hide-mobile-landscape w-embed">
                            <div
                            className="w-background-video w-background-video-atom hero_media-item-video video-fix"
                            data-autoplay="true"
                            data-loop="true"
                            data-video-url="/left-down-colors.mp4"
                            data-wf-ignore="true"
                            >
                            <video
                                autoPlay
                                data-object-fit="cover"
                                data-wf-ignore="true"
                                loop
                                muted
                                playsInline
                            >
                                <source
                                data-wf-ignore="true"
                                src="/left-down-colors.mp4"
                                />
                            </video>
                            </div>
                        </div>
                        <div className="gallery_video is-mobile w-embed">
                            <div
                            className="w-background-video w-background-video-atom hero_media-item-video video-fix"
                            data-autoplay="true"
                            data-loop="true"
                            data-video-url={videoURLs.rightDownMan}
                            data-wf-ignore="true"
                            >
                            <video
                                autoPlay
                                data-object-fit="cover"
                                data-wf-ignore="true"
                                loop
                                muted
                                playsInline
                            >
                                <source
                                data-wf-ignore="true"
                                src={videoURLs.rightDownMan}
                                />
                            </video>
                            </div>
                        </div>
                        <div className="entry-link-title">Vision</div>
                        {/* <div className="text">
                            <svg>
                                <defs>
                                <mask
                                    height="100%"
                                    id="mask4"
                                    width="100%"
                                    x="0"
                                    y="0"
                                >
                                    <rect
                                    height="100%"
                                    id="alpha4"
                                    width="100%"
                                    x="0"
                                    y="0"
                                    />
                                    <text
                                    dy="1.58em"
                                    id="title4"
                                    x="50%"
                                    y="0"
                                    >
                                    Vision
                                    </text>
                                    <text
                                    dy="9.8em"
                                    id="subtitle4"
                                    x="50%"
                                    y="0"
                                    >
                                    Thinking ahead like daily
                                    </text>
                                </mask>
                                </defs>
                                <rect
                                height="100%"
                                id="base4"
                                width="100%"
                                x="0"
                                y="0"
                                />
                            </svg>
                        </div> */}
                        </a>
                        <div className="work_tag-container">
                        {/* <div className="tag is-white">
                            <div>
                            Innovation
                            </div>
                        </div> */}
                        <div className="w-dyn-list">
                            <div
                            className="services-tags w-dyn-items"
                            role="list"
                            >
                            {/* <div
                                className="tag w-dyn-item"
                                role="listitem"
                            >
                                <div>
                                Milestone
                                </div>
                            </div>
                            <div
                                className="tag w-dyn-item"
                                role="listitem"
                            >
                                <div>
                                Partner
                                </div>
                            </div> */}
                            {/* <div
                                className="tag w-dyn-item"
                                role="listitem"
                            >
                                <div>
                                Marketing
                                </div>
                            </div> */}
                            </div>
                        </div>
                        </div>
                    </div>
  
                    </div>
                </div>
                {/* <div className="spacer-medium" /> */}
                {/* <a
                    className="button-huge w-inline-block"
                    data-w-id="cb0bc7ff-ee3d-964c-96de-3178e76c4247"
                    href="/work"
                >
                    <div className="button-large-text">
                    See more work
                    </div>
                    <img
                    alt=""
                    className="button-big-huge-arrow"
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/622a4648cd061df13d6df135/65a895645bcd541488e77436_icon-arrow-sm-black.svg"
                    />
                </a> */}
                </div>
        </div>
)};