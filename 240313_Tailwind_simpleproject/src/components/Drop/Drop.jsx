const Drop = () => {
  return (
    <section className="bg-[#A4A4A3] mb-10 flex justify-around items-center gap-5 ">
      <div className="flex justify-start  flex-col items-start gap-5  text-white">
        <h2 className="font-bold text-3xl text-white mb-10">Drop a message</h2>
        <div>
          <label htmlFor="Name">Name</label>
          <br />
          <input
            className="pr-28 pl-2 py-3 text-black rounded-lg"
            type="text"
            placeholder="input your name"
          />
        </div>
        <br />
        <div>
          <label htmlFor="number">Mobile no.</label>
          <br />

          <input
            className="px-28 pl-2 py-3  text-black  rounded-lg  "
            type="number"
            placeholder="input your Number"
          />
        </div>
        <br />
        <div>
          <label htmlFor="message">Message</label>
          <br />
          <textarea
            className="pr-28 pl-2 py-3  text-black  rounded-lg "
            type="text-area"
            cols="19"
            rows="5"
            placeholder="input your message"
          />
        </div>
      </div>

      <div>
        <img className="mx-10 my-20 rounded-lg" src="./phone.png" alt="phone" />
      </div>
    </section>
  );
};

export default Drop;
