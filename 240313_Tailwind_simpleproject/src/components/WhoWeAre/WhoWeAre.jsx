const WhoWeAre = () => {
  return (
    <section className="flex justify-around items-center gap-2 bg-gray-200  min-h-svh">
      <div className="max-w-60 ml-10">
        <h3 className="font-bold text-3xl mb-10">Who we are </h3>
        <p className="mb-10  font-medium text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          laboriosam nostrum tempore suscipit consequatur magnam fugit amet
          optio ipsum architecto adipisci id, laudantium odio, corporis nihil
          excepturi aspernatur cupiditate voluptas.
        </p>
        <img src="./pfeil.svg" alt="pfeil" />
      </div>
      <article className="flex justify-center items-center  text-center gap-8 ">
        <div className="flex justify-center items-center flex-col gap-2">
          <img src="./chair1.png" alt="chair1" />
          <p>Light brown chair with wooden legs</p>
          <p>$100</p>
        </div>

        <div className="flex justify-center items-center flex-col gap-2">
          <img src="./chair2.png" alt="chair2" />
          <p>Black chair with long legs</p>
          <p>$500</p>
        </div>

        <div className="flex justify-center items-center flex-col gap-2">
          <img src="./chair3.png" alt="chair3" />
          <p>White chair with spiral design legs</p>
          <p>$1000</p>
        </div>
      </article>
    </section>
  );
};

export default WhoWeAre;
