import React from "react";
import { useRouter } from "next/navigation";
import { FaHome } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { AiFillDashboard } from "react-icons/ai";

function Buttons() {
  const router = useRouter();
  return (
    <div>
      <section className="pt-1 lg:pb-1 lg:pt-[5px] ">
        <div className="container">
          <div className="flex justify-center">
            <div className="inline-flex items-center overflow-hidden rounded-lg border border-stroke ">
              <button
                onClick={() => router.push("/task-manager")}
                className="border-r border-stroke px-3 py-1 text-base font-medium text-dark btngrp"
              >
                <div className="flex items-center justify-center space-x-2">
                  <div>Manage Tasks</div>
                  <div>
                    <MdDashboard />
                  </div>
                </div>
              </button>
              <button
                onClick={() => router.push("/members")}
                className="border-r border-stroke px-3 py-1 text-base font-medium text-dark btngrp"
              >
                <div className="flex items-center justify-center space-x-2">
                  <div>Timeline</div>
                  <div>
                    <AiFillDashboard />
                  </div>
                </div>
              </button>
              <button
                onClick={() => router.push("/")}
                className="border-r border-stroke px-3 py-1 text-base font-medium text-dark btngrp"
              >
                <div className="flex items-center justify-center space-x-2">
                  <div>Home</div>
                  <div>
                    <FaHome />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Buttons;
