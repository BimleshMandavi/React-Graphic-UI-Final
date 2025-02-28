const SocialMediaUI = () => {
  return (
    <div className="bg-[#F9F5EC] h-[703px] flex justify-center items-center p-8">
      <div className="w-[1393px]">
        <div className="flex justify-start">
          <h1 className="font-Helvetica text-[48px] font-normal">
            Get Access to the <span className="text-[#9857F8]">Top 1%</span>{" "}
          </h1>
        </div>

        <div className="flex justify-between items-center">
          <div className="w-[570px]">
            <div className="flex gap-5">
              <div className="text-[16px] font-Helvetica font-normal border-b-2 border-[#1700EB]  text-[#1700EB] border-1 cursor-pointer">
                For Candidates
              </div>
              <div className="text-[16px] font-Helvetica font-normal text-[#B0B0B0] cursor-pointer">
                For Enterprises
              </div>
            </div>

            <div>
              <div className="text-[32px] w-[445px] font-Helvetica font-bold pt-4">
                <p> Designera carefully</p>
                <p>screens and onboards talent,</p>
                <p>boasting a network of over</p>
                <p className="text-[#6252FF]"> 100,000 skilled designers.</p>
              </div>
              <div className="pt-4">
                <p className="text-[20px]">
                  We match you with the best creator and ensure content
                  diversity, customized expertise, and editorial excellence.
                </p>
              </div>
              <div className="pt-10">
                <button className="bg-[#1700EB] text-white h-[37px] w-[153px] rounded-md">
                  Get Hired
                </button>
              </div>
            </div>
          </div>
          <div>
            <img src="/top.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaUI;
