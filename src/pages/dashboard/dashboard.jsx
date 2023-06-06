import Navbar from "../../components/Navbar";
const dashoard = () => {
  return (
    <main>
      <Navbar />
      <section className="px-20 bg-white">
        <div className="px-9 py-4 bg-[#D9D9D9] w-[1300px] h-[268px] flex items-start">
          <article>
            <span className="text-xs opacity-70 font-manropeRegular">
              Filters
            </span>
            <div className="mt-2 flex items-center">
              <select
                name=""
                id=""
                className="border-none bg-[#DBB4DA] rounded-[4px] w-[118px] text-xs focus:outline-none"
              >
                <option value="">Roundtrip</option>
                <option value="">Roundtrip</option>
                <option value="">Roundtrip</option>
              </select>
              <span className="ml-2 bg-[#DBB4DA] rounded-[4px] w-[125px] pl-3 py-[8px] text-xs">
                1 passenger
              </span>
              <select
                name=""
                id=""
                className="ml-2 border-none bg-[#DBB4DA] rounded-[4px] w-[118px] text-xs focus:outline-none"
              >
                <option value="">Economy</option>
                <option value="">Economy</option>
                <option value="">Economy</option>
              </select>
            </div>
            <section className="flex items-center">
              <div className="mt-9 rounded-[4px] bg-[#FFF5FD] px-[14px] w-64">
                <span className="text-xs opacity-70 font-manropeRegular">
                  From where
                </span>
                <p className="mt-1 pb-4 text-sm">City or Airport</p>
              </div>
              <div className="mt-9 rounded-[4px] bg-[#FFF5FD] px-[14px] w-64 ml-10">
                <span className="text-xs opacity-70 font-manropeRegular">
                  To where
                </span>
                <p className="mt-1 pb-4 text-sm">City or Airport</p>
              </div>
            </section>
          </article>
          <article className="h-[181px] border border-[#660058] opacity-80 mx-10 mt-11"></article>
        </div>
      </section>
      <section></section>
    </main>
  );
};

export default dashoard;
