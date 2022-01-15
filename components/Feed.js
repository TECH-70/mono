import { SparklesIcon, CurrencyDollarIcon, LogoutIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import Input from "./Input";
import { onSnapshot, collection, query, orderBy } from "@firebase/firestore";
import { db } from "../firebase";
import Post from "./Post";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

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
        <div className=" p-2.5 flex items-center justify-center xl:px-0 ml-auto">
          <CurrencyDollarIcon className="cursor-pointer hover:text-green-400 transition h-6 text-white" />
          <LogoutIcon onClick={signOut} className="h-6 ml-3 mr-3 hover:text-red-600 transition cursor-pointer text-white" />
        </div>
      </div>

      <Input />
      <div className="pb-72 bg-[#1e1e1e] border-sm">
        {posts.map((post) => (
          <Post key={post.id} id={post.id} post={post.data()} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
