const DashboardModal = ({
  title,
  show,
  children,
  close,
  action,
  closeLabel,
  actionLabel,
}) => {
  return (
    <>
      {show && (
        <div className="w-screen h-screen fixed left-0 top-0 bg-transparent z-[10000]">
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-[80%] xs:w-[400px] min-h-[150px] shadow-md pb-[30px] bg-white-cus-1 dark:bg-black-cus-1">
              {/* Modal Title */}
              <div className="bg-color-secondary text-white px-[5px] py-[3px] font-bold">
                <h2>{title}</h2>
              </div>
              {/* Modal body */}
              <div className="px-[10px] py-[10px] mb-[20px]">{children}</div>
              {/* Modal Footer */}
              <div className="w-full flex justify-center gap-[50px]">
                <button
                  onClick={() => close()}
                  className="font-bold hover:font-[500] border-none rounded px-[6px] py-[2px]"
                >
                  {closeLabel}
                </button>
                <button
                  onClick={() => action()}
                  className=" font-bold hover:font-[500] border-none rounded px-[6px] py-[2px]"
                >
                  {actionLabel}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardModal;
