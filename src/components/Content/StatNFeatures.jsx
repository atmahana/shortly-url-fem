import BrandRecog from "../../assets/icon/icon-brand-recognition.svg";
import DetailedRec from "../../assets/icon/icon-detailed-records.svg";
import FullyCustom from "../../assets/icon/icon-fully-customizable.svg";

// const FEATURES = [
//   {
//     id: "1",
//     title: "Brand Recognition",
//     content:
//       "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
//     icon: BrandRecog,
//   },
//   {
//     id: "2",
//     title: "Detailed Records",
//     content:
//       "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
//     icon: DetailedRec,
//   },
//   {
//     id: "3",
//     title: "Fully Customizable",
//     content:
//       "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
//     icon: FullyCustom,
//   },
// ];

function StatNFeatures() {
  return (
    <div className="pt-16 lg:py-[96px]">
      <div className="pb-[96px]">
        <div className="text-center grid gap-6">
          <h2 className="text-[28px] font-bold text-neutralCustom-900 tracking-[-0.1rem]">
            Advanced Statistics
          </h2>
          <p className="text-base text-neutralCustom-300 leading-normal">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
      </div>
      <ul className="grid gap-12 lg:gap-x-7 lg:gap-y-0 lg:grid-cols-3 text-center lg:text-start justify-center items-center lg:mb-20 relative">
        {/* {FEATURES.map((feature, index) => (
          <li
            key={feature.id}
            className={`bg-white z-10 rounded-md px-[26px] py-9 grid gap-6 relative top-${
              index * 10
            }`}
          >
            <div className="grid justify-center relative">
              <img
                alt={`${feature.title} icon`}
                src={feature.icon}
                className="bg-secondary-500 rounded-full overflow-visible p-4 w-16 absolute -top-[70px] left-1/2 -translate-x-1/2 lg:left-8"
              />
            </div>
            <h3 className="text-[22px] font-bold text-neutralCustom-900">
              {feature.title}
            </h3>
            <p className="text-neutralCustom-300 text-base leading-normal tracking-normal">
              {feature.content}
            </p>
          </li>
        ))} */}
        <li
          key="1"
          className={`bg-white z-10 rounded-md px-[26px] py-9 grid gap-6 relative top-0`}
        >
          <div className="grid justify-center relative">
            <img
              alt="Graph icon"
              src={BrandRecog}
              className="bg-secondary-500 rounded-full overflow-visible p-4 w-16 absolute -top-[70px] left-1/2 -translate-x-1/2 lg:left-8"
            />
          </div>
          <h3 className="text-[22px] font-bold text-neutralCustom-900">
            Brand Recognition
          </h3>
          <p className="text-neutralCustom-300 text-base leading-normal tracking-normal">
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </li>
        <li
          key="2"
          className={`bg-white z-10 rounded-md px-[26px] py-9 grid gap-6 relative lg:top-10`}
        >
          <div className="grid justify-center relative">
            <img
              alt="Meter icon"
              src={DetailedRec}
              className="bg-secondary-500 rounded-full overflow-visible p-4 w-16 absolute -top-[70px] left-1/2 -translate-x-1/2 lg:left-8"
            />
          </div>
          <h3 className="text-[22px] font-bold text-neutralCustom-900">
            Detailed Records
          </h3>
          <p className="text-neutralCustom-300 text-base leading-normal tracking-normal">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </li>
        <li
          key="3"
          className={`bg-white z-10 rounded-md px-[26px] py-9 grid gap-6 relative lg:top-20`}
        >
          <div className="grid justify-center relative">
            <img
              alt="Paint brushes icon"
              src={FullyCustom}
              className="bg-secondary-500 rounded-full overflow-visible p-4 w-16 absolute -top-[70px] left-1/2 -translate-x-1/2 lg:left-8"
            />
          </div>
          <h3 className="text-[22px] font-bold text-neutralCustom-900">
            Fully Customizable
          </h3>
          <p className="text-neutralCustom-300 text-base leading-normal tracking-normal">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </li>
        <div className="absolute border-4 border-primary-500 w-1/3 rotate-90 top-64 left-1/2 -translate-x-1/2 lg:rotate-0 lg:w-1/6 lg:left-1/3 lg:top-1/2" />
        <div className="absolute border-4 border-primary-500 w-1/3 rotate-90 bottom-72 left-1/2 -translate-x-1/2 lg:rotate-0 lg:w-1/6 lg:left-2/3 lg:top-1/2" />
      </ul>
    </div>
  );
}

export default StatNFeatures;
