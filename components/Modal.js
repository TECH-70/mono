import { useRecoilState } from "recoil";
import { modalState, postIdState } from "../atoms/modalAtom";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import {
  onSnapshot,
  doc,
  addDoc,
  collection,
  serverTimestamp,
} from "@firebase/firestore";
import { db } from "../firebase";
import { useSession } from "next-auth/react";
import {
  ArrowNarrowLeftIcon,
  PaperAirplaneIcon,
  PhotographIcon,
  XIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";
import Moment from "react-moment";

function Modal() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useRecoilState(modalState);
  const [postId, setPostId] = useRecoilState(postIdState);
  const [post, setPost] = useState();
  const [comment, setComment] = useState("");
  const router = useRouter();
  //Modal.js is the popup for replying.
  useEffect(
    () =>
      onSnapshot(doc(db, "posts", postId), (snapshot) => {
        setPost(snapshot.data());
      }),
    [db]
  );

  const sendComment = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, "posts", postId, "comments"), {
      comment: comment,
      username: session.user.name,
      tag: session.user.tag,
      userImg: session.user.image,
      timestamp: serverTimestamp(),
    });

    setIsOpen(false);
    setComment("");

    router.push(`/${postId}`);
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed z-50 inset-0 pt-8" onClose={setIsOpen}>
        <div className="flex items-start justify-center min-h-[800px] sm:min-h-screen mt-[100px] pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-900"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-out duration-900"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-[#5b7083] bg-opacity-40 transition-opacity" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-[#1a1a1a] rounded-sm text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
              <div className="flex px-4 pt-5 pb-2.5 sm:px-6">
                <div className="w-full">
                  <div className="text-[#6e767d] flex gap-x-3 relative">
                    <div>
                      <div className="text-[10px] ml-[5px] mb-[-20px]">
                        (comments are permanent)
                      </div>
                      <div
                  className="w-6 h-6 cursor-pointer ml-[495px] flex hover:text-pink-300"
                  onClick={() => setIsOpen(false)}
                >
                  <XIcon className="h-[22px] text-white" />
                </div>
                    </div>
                  </div>

                  <div className="mt-3 ml-[5px] space-x-3 w-full">
                    <div className="flex-grow mt-2">
                      <input
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="What's your brain saying? 🧠"
                        rows="2"
                        className="bg-[#252525] border-b-4 outline-none text-[#d9d9d9] rounded-sm pb-0 pl-4 text-lg h-10 placeholder-gray-500 tracking-wide w-full ml-[-5px] mr-0"
                      />
                      <div className="flex items-center justify-between pt-2.5">
                        <div className="flex items-center">
                        </div>
                        <button
                          className="cursor-pointer mt-[-65px] mr-2 transition disabled:cursor-not-allowed"
                          onClick={sendComment}
                          type="submit"
                          disabled={!comment.trim()}
                        >
                          <PaperAirplaneIcon className="h-6 w-6 mr-1 text-[#fff] hover:text-black hover:ease-out duration-300"></PaperAirplaneIcon>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default Modal;
