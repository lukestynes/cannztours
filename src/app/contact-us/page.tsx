import IconText from "@/components/icontext";
import Image from "next/image";

export default function ContactUsPage() {
  return (
    <div className="py-20" id="contact">
      <h1 className="mb-10 text-center text-5xl font-extrabold">
        Get in Touch
      </h1>
      <div className="hero">
        <div className="hero-content flex-col gap-20 lg:flex-row">
          <div className="flex-col justify-center">
            <p className="text-3xl font-medium">
              Ready to book your dream tour?
            </p>
            <p className="mb-10 pt-2 text-2xl font-normal">
              Let us know how we can help
            </p>
            <form>
              <div className="flex-col justify-center">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered mb-2 w-full text-lg text-primary placeholder-primary focus:outline-none"
                />
              </div>
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered mb-2 w-full text-lg text-primary placeholder-primary focus:outline-none"
              />
              <textarea
                className="textarea textarea-bordered textarea-lg mb-2 min-h-40 w-full px-4 py-2 text-primary placeholder-primary focus:outline-none"
                placeholder="Your message"
              ></textarea>
              <div className="flex justify-center">
                <button className="btn btn-primary mt-5 rounded-3xl font-normal">
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div>
            <div className="">
              <h3 className="text-xl font-bold ">Contact Details</h3>
              <IconText
                src="/images/email.svg"
                alt="Email"
                text="info@cannztours.com"
                link="mailto:info@cannztours.com"
                width={20}
                height={20}
              />
              <IconText
                src="/images/phone.svg"
                alt="Phone"
                text="+64 21 1811 570 (mobile)"
                link="tel:+64211811570"
                width={20}
                height={20}
              />
              {/* <IconText
                src="/images/phone.svg"
                alt="Phone"
                text="+64 21 1811 570 (landline)"
                link="tel:+64211811570"
                width={20}
                height={20}
  />*/}
              <h3 className="mt-5 text-xl font-bold">Location</h3>
              <div className="py-2">
                <div className="flex">
                  <Image
                    src="/images/location.svg"
                    alt="Location"
                    width={20}
                    height={20}
                  />
                  <p className="ml-2">Christchurch, New Zealand</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
