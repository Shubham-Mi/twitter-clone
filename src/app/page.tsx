import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-12">
        <div className="col-span-3 flex justify-start">
          <div className="text-4xl hover:bg-hover-background h-fit rounded-full p-2 cursor-pointer">
            <FaXTwitter />
          </div>
        </div>
        <div className="col-span-6">Tweets</div>
        <div className="col-span-3">Suggestions</div>
      </div>
    </div>
  );
}
