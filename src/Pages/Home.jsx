import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Components/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-800">
        <div className=" flex lg:flex-nowrap flex-wrap-reverse h-screen justify-center align-middle p-10">
          <div className="min-w-fit m-auto hidden md:flex md:flex-col lg:pr-7">
            <p className=" text-9xl font-extrabold text-white">Get a</p>
            <p className=" text-9xl font-extrabold text-white"> grasp 🥳</p>
          </div>
          <div className=" h-96  w-full rounded-2xl">
            <iframe
              title="Presentation"
              src="https://www.canva.com/design/DAFo6AcdwyQ/view?embed"
              className="h-96  lg:h-[600px] m-auto w-full rounded-2xl"
              allowFullScreen
              allowTransparency
            ></iframe>
          </div>
        </div>

        <div class="container mx-auto p-8 text-white flex flex-wrap gap-8 justify-center">
          <div className="">
            <div class="bg-gray-600 rounded-xl p-6 mb-8 lg:w-[500px] max-w-screen-sm hover:scale-105 transition">
              <h2 class="text-xl font-bold mb-4">
                First-Come, First-Served (FCFS)
              </h2>
              <p class="mb-4">
                FCFS is a non-preemptive scheduling algorithm that executes
                processes based on their arrival time. The process that arrives
                first gets executed first. It has a simple implementation but
                can suffer from poor performance due to the "convoy effect,"
                where long processes delay the execution of subsequent
                processes.
              </p>
            </div>

            <div class="bg-gray-600 rounded-xl p-6 mt-4 lg:w-[500px] max-w-screen-sm hover:scale-105 transition">
              <h2 class="text-xl font-bold mb-4">Shortest Job Next (SJN)</h2>
              <p class="mb-4">
                SJN is a non-preemptive scheduling algorithm that executes the
                process with the shortest burst time first. It aims to minimize
                the average waiting time and provides optimal performance when
                all process burst times are known in advance. However, it
                requires knowing the burst times, which may not always be
                feasible.
              </p>
            </div>
          </div>
          <div className="mt-32">
            <div class="bg-gray-600 rounded-xl p-6 mt-4 mb-8 lg:w-[500px] max-w-screen-sm hover:scale-105 transition">
              <h2 class="text-xl font-bold mb-4">Round Robin (RR)</h2>
              <p class="mb-4">
                RR is a preemptive scheduling algorithm that allocates a fixed
                time quantum to each process in a cyclic manner. When a
                process's time quantum expires, it is preempted and moved to the
                back of the queue. RR provides fair execution and is commonly
                used in time-sharing systems, but it may suffer from high
                overhead when the time quantum is too small.
              </p>
            </div>

            <div class="bg-gray-600 rounded-xl p-6 mt-4 lg:w-[500px] max-w-screen-sm hover:scale-105 transition">
              <h2 class="text-xl font-bold mb-4">Priority Scheduling</h2>
              <p class="mb-4">
                Priority scheduling is a non-preemptive or preemptive algorithm
                that assigns a priority value to each process. The process with
                the highest priority gets executed first. It can be either
                static or dynamic, where the priority may change over time.
                However, it may suffer from starvation if lower-priority
                processes are continuously overshadowed by higher-priority ones.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:pl-24 lg:pr-24 bg-gray-900 m-auto lg:py-8 min-h-screen ">
        <h1 className="text-3xl font-extrabold mb-8 text-center pt-8 text-white">
          SIMULATIONS
        </h1>

        <div className="flex flex-wrap lg:flex-nowrap lg:flex-row gap-4 pl-6 pr-6 lg:pl-32 lg:pr-32">
          <Link
            to="/OS-cbp-vnr/sjf/non-preemptive"
            className="flex flex-col bg-amber-50 hover:bg-amber-100 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 hover:scale-105"
          >
            <img
              src={require("../assets/Shortest Job First (1).png")}
              className="max-w-full rounded-md transition"
              alt=""
            />
            <h2 className="text-xl font-semibold mb-2 mt-3">
              Shortest Job First (SJF)
            </h2>
            <p className="text-gray-700">
              Simulate the Shortest Job First CPU scheduling algorithm.
            </p>
          </Link>

          <Link
            to="/OS-cbp-vnr/priority/non-preemptive"
            className="flex flex-col bg-amber-50 hover:bg-amber-100 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 hover:scale-105"
          >
            <img
              src={require("../assets/Priority.png")}
              className="max-w-full rounded-md transition"
              alt=""
            />
            <h2 className="text-xl font-semibold mb-2 mt-3">
              Priority Scheduling
            </h2>
            <p className="text-gray-700">
              Simulate the Priority Scheduling CPU scheduling algorithm.
            </p>
          </Link>
          <Link
            to="/OS-cbp-vnr/fcfs"
            className="flex flex-col bg-amber-50 hover:bg-amber-100 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 hover:scale-105"
          >
            <img
              src={require("../assets/FCFS.png")}
              className="max-w-full rounded-md transition"
              alt=""
            />
            <h2 className="text-xl font-semibold mb-2 mt-3">
              First-Come, First-Served (FCFS)
            </h2>
            <p className="text-gray-700">
              Simulate the First-Come, First-Served CPU scheduling algorithm.
            </p>
          </Link>
        </div>
      </div>
      
      <div className="min-h-screen bg-gray-800 mx-auto flex flex-col pt-24">
        <div className="lg:pl-12 lg:pr-12 p-8 rounded-2xl lg:flex-row flex flex-col-reverse lg:m-auto align-middle gap-8 bg-gray-600 m-4">
          <div className="text-center">
            <p className=" text-xl font-extrabold text-white lg:pt-28 ">
              Mentor
            </p>
            <p className="text-2xl font-extrabold text-gray-200">
              Ajay Marapatla
            </p>
            <p className="text-gray-400">Assistant Professor</p>
          </div>
          <div>
            <img
              src="https://media.licdn.com/dms/image/C4D03AQHzdPS39jrEGw/profile-displayphoto-shrink_400_400/0/1668067148773?e=1695254400&v=beta&t=W0jpLLkPbUEH1MZ3DCyiDt1d7KunzC4O96YRO8xuhLU"
              alt=""
              className=" rounded-full w-[300px]"
            />
          </div>
        </div>

        <h1 className="text-4xl font-extrabold text-gray-200 text-center pt-16">
          Team KanyaRashi
        </h1>
        <div className="pl-24 pr-24 m-auto flex flex-wrap lg:flex-nowrap pt-8 gap-8 mb-24">
          <div className="flex flex-col justify-center bg-gray-600 p-4 rounded-xl transition hover:scale-110 hover:bg-gray-900">
            <img
              src={require("../assets/Lasya.jpeg")}
              className="rounded-full w-[200px]"
              alt=""
            />
            <h1 className="text-gray-200 font-extrabold text-center mt-3">
              Guthpe Lasya Reddy
            </h1>
            <p className="text-gray-300 text-center">II B.Tech AIML B</p>
            <p className="text-gray-400 text-center">21071A6690</p>
          </div>
          <div className="flex flex-col justify-center bg-gray-600 p-4 rounded-xl transition hover:scale-110 hover:bg-gray-900">
            <img
              src={require("../assets/venkat.jpeg")}
              className="rounded-full w-[200px]"
              alt=""
            />
            <h1 className="text-gray-200 font-extrabold text-center mt-3">
              Venkata Sai Jami
            </h1>
            <p className="text-gray-300 text-center">II B.Tech AIML B</p>
            <p className="text-gray-400 text-center">21071A6691</p>
          </div>
          <div className="flex flex-col justify-center bg-gray-600 p-4 rounded-xl transition hover:scale-110 hover:bg-gray-900">
            <img
              src={require("../assets/Choshik.jpeg")}
              className="rounded-full w-[200px]"
              alt=""
            />
            <h1 className="text-gray-200 font-extrabold text-center mt-3">
              Jujjuri Choshik Kumar
            </h1>
            <p className="text-gray-300 text-center">II B.Tech AIML B</p>
            <p className="text-gray-400 text-center">21071A6693</p>
          </div>
          <div className="flex flex-col justify-center bg-gray-600 p-4 rounded-xl transition hover:scale-110 hover:bg-gray-900">
            <img
              src={require("../assets/sakrin.jpeg")}
              className="rounded-full w-[200px]"
              alt=""
            />
            <h1 className="text-gray-200 font-extrabold text-center mt-3">
              Nalla Sai Krishna Reddy
            </h1>
            <p className="text-gray-300 text-center">II B.Tech AIML B</p>
            <p className="text-gray-400 text-center">21071A66A7</p>
          </div>
          <div className="flex flex-col justify-center bg-gray-600 p-4 rounded-xl transition hover:scale-110 hover:bg-gray-900">
            <img
              src={require("../assets/Yashwanth.JPG")}
              className="rounded-full w-[200px]"
              alt=""
            />
            <h1 className="text-gray-200 font-extrabold text-center mt-3">
              G Yashwanth Shankar
            </h1>
            <p className="text-gray-300 text-center">II B.Tech AIML B</p>
            <p className="text-gray-400 text-center">21071A66C9</p>
          </div>
        </div>
      </div>
      {/* <div className="min-h-screen bg-gray-800 mx-auto flex flex-col pt-24">
        <h1 className=" text-9xl font-extrabold text-center m-auto text-gray-200">Ardhamaindaaaa??</h1>
      </div>
      <div className="min-h-screen bg-gray-800 mx-auto flex flex-col pt-24">
        <img src="https://media.tenor.com/qYE51upqDpEAAAAC/ene-telugu.gif" className="w-1/2 m-auto" alt="" />
      </div> */}
    </Layout>
  );
};

export default Home;
