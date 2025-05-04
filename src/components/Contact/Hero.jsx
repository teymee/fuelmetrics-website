//ASSETS
import email from "@/assets/svg/white-email.svg";
import phone from "@/assets/svg/white-phone.svg";
import address from "@/assets/svg/white-address.svg";

export default function Hero() {
  return (
    <section className="hero-bg h-screen 3xl:h-[60vh]">
      <section className="  mx-auto flex-start [ flex-col lg:flex-row gap-y-4 ]  [ lg:w-9/12 w-[90%] ]  [ lg:pt-[10%] pt-[30%] ]">
        {/* INFO  */}
        <section className="flex flex-col gap-y-4">
          <section className="text-white space-y-8">
            {/* SECTION ADDRESS */}
            <section className="flex-start gap-x-4">
              <img src={address} alt="" />

              <section className="text-left space-y-6">
                <p className="font-bold text-[20px]">Address</p>
                <div className="space-y-2">
                  <h2 className="text-[18px] font-medium">Head office</h2>
                  <p className="text-sm">
                    18 Ilupeju by-pass, <br /> Lagos
                  </p>
                </div>
                <section className="flex-items-center [ lg:gap-x-8 gap-x-6 ]">
                  <div className="space-y-2">
                    <h2 className="text-[18px] font-medium">Abuja office</h2>
                    <p className="text-sm">
                      Plot 6, Asokoro district, <br />
                      Abuja
                    </p>
                  </div>
                  <div className="w-[1px] h-[60px] bg-white"></div>
                  <div className="space-y-2">
                    <h2 className="text-[18px] font-medium">PH office</h2>
                    <p className="text-sm">
                      42, Trans-amadi road, <br />
                      Port, Harcourt
                    </p>
                  </div>
                </section>
              </section>
            </section>

            {/* SECTION PHONE */}
            <section className="flex-items-center gap-x-4">
              <img src={phone} alt="" className="self-start" />

              <section className="text-left space-y-2 font-bold">
                <p className="text-[20px]">Telephone</p>
                <p className="text-sm text-green-600">+234 913 104 8999</p>
              </section>
            </section>

            {/* SECTION PHONE */}
            <section className="flex-items-center gap-x-4">
              <img src={email} alt="" className="self-start" />

              <section className="text-left space-y-2 font-bold">
                <p className="text-[20px]">Email</p>
                <p className="text-sm text-green-600">enquiries@epump.africa</p>
                <p className="text-sm text-green-600">info@epump.africa</p>
              </section>
            </section>
          </section>
        </section>
        {/* FORM */}
        <section className="lg:w-[528px]">
          <section className="bg-white [ lg:h-[700px] lg:pt-40 lg:py-20 py-10 ] rounded-4xl ">
            <section className="w-[75%] mx-auto space-y-4">
              <h2 className="text-[20px] text-left font-bold">
                Send us a message
              </h2>
              <section className="space-y-8">
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full border-grey-500 outline-none border-2 rounded-lg pl-3 py-2 placeholder:text-sm"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border-grey-500 outline-none border-2 rounded-lg pl-3  py-2 placeholder:text-sm"
                />

                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="4"
                  placeholder="Type message"
                  className="w-full border-grey-500 outline-none border-2 rounded-lg pl-3  py-2 placeholder:text-sm"
                ></textarea>

                <div className="w-full  center-content">
                  <button className="bg-primary text-white w-9/12 py-2 rounded-lg">
                    Send
                  </button>
                </div>
              </section>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}
