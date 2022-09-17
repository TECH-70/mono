import {
  PaperAirplaneIcon,
  PhotographIcon,
  XIcon,
} from "@heroicons/react/outline";
import { useRef, useState } from "react";
import { db, storage } from "../firebase";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "@firebase/firestore";
import { getDownloadURL, ref, uploadString } from "@firebase/storage";
import { signOut, useSession } from "next-auth/react";

function Input() {
  const { data: session } = useSession();
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const filePickerRef = useRef(null);
  const [showEmojis, setShowEmojis] = useState(false);

  const sendPost = async () => {
    if (loading) return;
    setLoading(true);

    const docRef = await addDoc(collection(db, "posts"), {
      id: session.user.uid,
      username: session.user.name,
      userImg: session.user.image,
      tag: session.user.tag,
      text: input,
      timestamp: serverTimestamp(),
    });

    const imageRef = ref(storage, `posts/${docRef.id}/image`);

    if (selectedFile) {
      await uploadString(imageRef, selectedFile, "data_url").then(async () => {
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "posts", docRef.id), {
          image: downloadURL,
        });
      });
    }

    setLoading(false);
    setInput("");
    setSelectedFile(null);
    setShowEmojis(false);
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setInput(input + emoji);
  };

  return (
    <div
      className={`border-[#252525] border-b-4 p-3 flex space-x-3 overflow-y-scroll scrollbar-hide ${
        loading && "opacity-60"
      }`}
    >
      <div className="flex w-full">
        <div className={`${selectedFile && "pb-7"} ${input && "space-y-2.5"}`}>
        
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="How's life sailing? 🌊 "
            rows="2"
            className="bg-[#252525] border-b-4 outline-none text-[#d9d9d9] rounded-sm pb-0 pl-4 text-lg h-10 placeholder-gray-500 tracking-wide w-[563px] ml-[-5px] mr-0 overflow-hidden"
          />

          {selectedFile && (
            <div className="relative mt-5">
              <div
                className="absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer"
                onClick={() => setSelectedFile(null)}
              >
                <XIcon className="text-[#fff] font-bold h-5" />
              </div>
              <img
                src={selectedFile}
                alt=""
                className="rounded-sm max-h-80 max-w-[545px] object-contain"
              />
            </div>
          )}
        </div>
        {!loading && (
          <div className="h-10 w-50 bg-[#252525] border-b-4 outline-none">
          <div className="flex items-center pt-2.5 ml-auto">
            <div className="flex items-center">
          <div className="mt-[-10px] mr-1 ml-1">
              <div
                className="icon"
                onClick={() => filePickerRef.current.click()}
              >
                <PhotographIcon className="text-[#ffffff] position-fixed first-letter: h-[22px] hover:text-black hover:ease-out duration-300" />
                <input
                  type="file"
                  ref={filePickerRef}
                  hidden
                  onChange={addImageToPost}
                />
              </div>
            </div>
            
            <button
              className="cursor-pointer mr-2 transition disabled:cursor-not-allowed"
              disabled={!input && !selectedFile}
              onClick={sendPost}
            ><PaperAirplaneIcon className="h-6 w-6 mt-[-10px] mr-1 text-[#fff] hover:text-black hover:ease-out duration-300"></PaperAirplaneIcon>
            </button>
            </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Input;
