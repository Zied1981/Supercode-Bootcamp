import { Link } from "react-router-dom";

const Subscribe = () => {
  return (
    <section className="relative min-h-70">
      <article className="flex justify-center items-center gap-16 mb-28 ">
        <div className=" flex flex-col gap-1">
          <Link>Our Company</Link>
          <Link>About us</Link>
          <Link>Become a Partner</Link>
          <Link>Contact us</Link>
        </div>
        <div className=" flex flex-col gap-1">
          <Link>LEARN MORE</Link>
          <Link>How it works</Link>
          <Link>FAQs</Link>
          <Link>Terms and Conditions</Link>
          <Link>Private Policy</Link>
        </div>
        <div>
          <h5>Subscribe</h5>
          <div>
            <input
              className="px-10 py-3 bg-[#CDC8CC] rounded-lg"
              type="email"
              placeholder="input your email adress"
            />
            <input
              className="px-7 py-3 text-white bg-black rounded-lg"
              type="Submit"
              value="Send"
            />
          </div>
          <div className="bg-black h-10 w-11 px-3 py-3 absolute bottom-16 right-0 ">
            <img src="./Vector.png" alt="pfeil" />
          </div>
        </div>
      </article>
      <p className="bg-black px-5 py-3 text-white mb-2">
        By using this website you accept our Terms and use and Private Policy
      </p>
    </section>
  );
};

export default Subscribe;
