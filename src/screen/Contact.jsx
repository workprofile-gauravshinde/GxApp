import phoneIcon from "../assets/phone.svg";
import emailIcon from "../assets/email.svg";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <div
        className="h-[319px] w-full bg-lightGray bg-[url('/images/contact-mobile.png')] bg-cover  bg-no-repeat md:h-[466px] md:bg-[url('/images/contact.png')]"
        style={{ backgroundPosition: "center" }}
      ></div>
      <div className="mx-auto w-11/12 max-w-5xl space-y-8 py-8 text-center text-white md:space-y-16 md:py-24">
        <div className="space-y-4 md:space-y-8">
          <h1 className="font-secondFont text-2xl font-bold capitalize md:text-6xl ">
            Let&apos;s get in touch!
          </h1>
          <p className="mx-auto w-4/5 text-sm text-[#686565] md:text-xl">
            Give us a call or send us an email and we will get back to you as
            soon as possible!
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="bg-[#6038AC]">
            <div className="flex items-center justify-center gap-4 p-3 md:block md:gap-0 md:space-y-4 md:p-8">
              <div className="w-7 md:mx-auto md:w-fit">
                <img className="max-w-full" src={phoneIcon} alt="phone" />
              </div>
              <p className="font-spaceGrotesk text-base font-medium md:text-xl">
                <a href="tel:+1(215)874-3883" aria-label="Mob no.">
                  +1 (215) 874-3883
                </a>
              </p>
            </div>
          </div>
          <div className="bg-[#F0F0F0] text-black">
            <div className="flex items-center justify-center gap-4 p-3 md:block md:gap-0 md:space-y-4 md:p-8">
              <div className="w-7 md:mx-auto md:w-fit">
                <img className="max-w-full" src={emailIcon} alt="email" />
              </div>
              <p className="font-spaceGrotesk text-base font-medium md:text-xl">
                <a
                  href="mailto:media@sportsgamex.com"
                  aria-label="Mail Support"
                >
                  media@sportsgamex.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.532017151508!2d-75.17628262416217!3d39.95185648380224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c63714e0dd71%3A0x1e6ad8e6a8cc9589!2s104%20S%2020th%20St%20c%2C%20Philadelphia%2C%20PA%2019103%2C%20USA!5e0!3m2!1sen!2sin!4v1691503534611!5m2!1sen!2sin"
          allowFullScreen=""
          loading="eager"
          className="h-[238px] w-full border-none bg-lightGray md:h-[385px]"
          rel="noreferrer noopener"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
