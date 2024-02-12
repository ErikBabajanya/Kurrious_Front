export default function page() {
  return (
    <div className="w-full h-[100vh] flex justify-center">
      <div className="max-w-[425px] h-[537.32px] flex flex-col items-center">
        <div className="max-w-[134.44px] max-h-[133.36px] mt-[25px]">
          <div className="w-full h-[90.5px] bg-black"></div>
          <div className="w-full h-[38px] flex justify-center">
            <div className="max-w-[112px] g-[38px] text-[31.59px] leading-[37.9px] font-sans">
              kurrious
            </div>
          </div>
        </div>
        <div className="max-w-[425px] h-[537.32px] mt-[30px]">
          <div className="w-full h-[38px] flex justify-center items-center">
            <div className="font-inter text-[28px] leading-[38.09px] font-semibold text-center">
              Create your account
            </div>
          </div>

          <form className="max-w-[425px] h-[294px] pt-[24px] gap-2">
            <div className="max-w-[425px] h-[71px] flex flex-col justify-between">
              <label className="font-inter font-medium size-[14px] leading-[16-94px] text-[#425466]">
                Email
              </label>
              <input
                className="w-[425px] h-[46px] rounded-md	inputBg"
                placeholder="Type your e-mail "
              />
            </div>
            <div className="max-w-[425px] h-[71px] flex flex-col justify-between">
              <div className="max-w-[425px] h-[17px]">
                <label className="font-inter font-medium size-[14px] leading-[16-94px] text-[#425466]">
                  password
                </label>
              </div>
              <input
                className="w-[425px] h-[46px] rounded-md	inputBg"
                placeholder="Type your password"
              />
            </div>
            <span className="font-inter font-normal	 text-[11px] leading-[12px]">
              Must be 8 characters at least
            </span>
            <div className="max-w-[425px] h-[46px] mt-[25px]">
              <button className="w-[425px] h-[46px] rounded-lg buttonBg ">
                <span className="font-inter font-medium size-[14px] leading-[14px]">
                  Sign up
                </span>
              </button>
            </div>
          </form>
        </div>
        <div>
          <span className="font-inter font-semibold	size-[14px] leading-[24px] text-[#718096]">
            Already have an account?
          </span>
          <button>
            <span className="font-inter font-semibold size-[14px] leading-[24px] text-[#16192C]">
              Sign up
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
