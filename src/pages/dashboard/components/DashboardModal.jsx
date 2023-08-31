import { AiOutlineClose } from "react-icons/ai";

const DashboardModal = ({ title, show, children, close }) => {
  return (
    <>
      <div
        className={`w-screen h-screen fixed left-0 top-0 transition-all bg-[rgba(0,0,0,0.7)] z-[10000]
        ${show ? "block" : "hidden"}
        `}
      >
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[80%] xs:w-[400px] min-h-[150px] shadow-md pb-[30px] bg-white-cus-1 dark:bg-black-cus-1">
            {/* Modal Title */}
            <div className="flex justify-between bg-color-secondary text-white px-[5px] py-[3px] font-bold">
              <h2>{title}</h2>
              <button className="text-bold" onClick={close}>
                <AiOutlineClose />
              </button>
            </div>
            {/* Modal body */}
            <div className="px-[10px] py-[10px] mb-[20px]">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardModal;
