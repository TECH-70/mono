import { useEffect, useState } from "react";
import { ArrowCircleUpIcon } from "@heroicons/react/outline";
import { classNames } from "../../styles/classNames";

export const ScrollToTop = () => {
  const [isVisable, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <div className="fixed bottom-5 right-2">
      <button
        type="button"
        onClick={scrollToTop}
        className={classNames(
          isVisable ? "opactiy-100" : "opacity-0",
          "inline-flex items-center p-3 rounded-full shadow-sm text-white bg-[#111] transition-opacity hover:bg-[black] focus:outline-none focus-ring-2 focus:ring-offset-2 focus:ring-pink-500"
        )}
      >
        <ArrowCircleUpIcon className="h-8 w-8" aria-hidden="true" />
      </button>
    </div>
  );
};
