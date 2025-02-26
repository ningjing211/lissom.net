import Tags from '@/app/origin/tags';



export default function Philosophy() {
    return (
          <div className="philosophy px-6 flex w-full flex-col"> 
            <div className="flex text-base p-title">Philosophy </div>
            <div className="flex p-content">把未來和美味送上奶昔星球！每杯奶昔都像NASA的太空計劃一樣精心設計，滿載新鮮蔬果和創新口味。準備好，讓您的味蕾探索未來宇宙吧！</div>
            <button className="btn-fix custom-btn btn-6">
              <span>
                Read More
              </span>
            </button>
            {/* <div className="flex tags-group">
              <div className="flex items-center justify-center">
                <Tags tag="Fruit" />
                <Tags tag="Veggie" />
                <Tags tag="Spices" />
                <Tags tag="Milk" />
              </div>
            </div>   */}

          </div>
    );
  }