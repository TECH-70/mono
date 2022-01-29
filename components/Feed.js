import {
  CurrencyDollarIcon,
  ExclamationIcon,
  LogoutIcon,
} from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import Input from "./Input";
import { onSnapshot, collection, query, orderBy } from "@firebase/firestore";
import { db } from "../firebase";
import Post from "./Post";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { QuestionMarkCircleIcon } from "@heroicons/react/outline";

function Feed() {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );

  return (
    <div className="flex-grow max-w-2xl sm:ml-[73px] xl:ml-[370px]">
      <div className="text-[#d9d9d9] flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 bg-[#1a1a1a]">
        <h1 className="sm:visible text-3xl mt-3 mb-3 md:invisible">Monotone</h1>
        <div className=" p-2.5 flex items-center justify-center xl:px-0 ml-auto">
          <a href="mailto:arctycstudios@gmail.com?subject=&body=#Hi, please post the bug which you have encountered to the monotone team. We will get back to you shortly.">
            <ExclamationIcon className="cursor-pointer hover:text-[#cc8143] mb-3 transition mt-3 h-6 text-[#c4c4c4] mr-3" />
          </a>
          <a href="https://monotone-web.netlify.app/">
            <QuestionMarkCircleIcon className="cursor-pointer hover:text-[#64cc43] mb-3 transition mt-3 h-6 text-[#c4c4c4]" />{" "}
          </a>
          <a href="https://www.buymeacoffee.com/ArctycStudios">
            {" "}
            <CurrencyDollarIcon className="cursor-pointer mb-3 hover:text-[#f6bc3e] mt-3 ml-3 transition h-6 text-[#c4c4c4]" />{" "}
          </a>
          <LogoutIcon
            onClick={signOut}
            className="h-6 ml-3 mr-3 hover:text-[#eb5a55] transition mt-3 mb-3 cursor-pointer text-[#c4c4c4]"
          />
        </div>
      </div>

      <Input />
      <div className="bg-[#1e1e1e] border-sm">
        {posts.map((post) => (
          <Post key={post.id} id={post.id} post={post.data()} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
