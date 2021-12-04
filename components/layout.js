import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
const expenseCategory = [
  {
    name: "Groceries",
  },
  {
    name: "Credit Card",
  },
  {
    name: "Electricity",
  },
  {
    name: "Internet",
  },
  {
    name: "Water",
  },
  {
    name: "Loan",
  },
  {
    name: "Loan",
  },
  {
    name: "Loan",
  },
  {
    name: "Loan",
  },
  {
    name: "Loan",
  },
];
export default function Layout({ children, home }) {
  const value = 94;
  const valuelabel = "Completed";
  const size = 60;
  const strokeWidth = 2;
  const halfsize = size * 0.5;
  const radius = halfsize - strokeWidth * 0.5;
  const circumference = 2 * Math.PI * radius;
  const strokeval = (value * circumference) / 100;
  const dashval = strokeval + " " + circumference;
  const trackstyle = { strokeWidth };

  const indicatorstyle = {
    strokeWidth,
    strokeDasharray: dashval,
  };
  const rotateval = "rotate(-90 " + halfsize + "," + halfsize + ")";

  console.log(radius);
  return (
    <div className="h-screen bg-ex-dark">
      <div className="px-8 pt-10 mx-auto">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-100">Hello, Jenny</h1>
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-ex-purple">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
        </header>
      </div>
      <section className="pl-8 mt-10 mr-1">
        <div className="space-x-3 overflow-auto whitespace-nowrap no-scrollbar">
          {expenseCategory.map((ex) => (
            <div className="inline-block w-20 h-20 rounded-md bg-ex-pink"></div>
          ))}
        </div>
      </section>
      <div className="px-8 pt-10 mx-auto mt-4">
        <div className="relative">
          <div className="origin-top-left transform w-72 -rotate-6 h-44 rounded-2xl bg-gradient-to-r from-ex-pink to-ex-purple backdrop-filter blur-sm"></div>
          <div className="absolute inset-0 w-full origin-top-left bg-gray-400 opacity-30 tranform rounded-2xl"></div>
          <div className="absolute inset-0 px-4 py-4 text-gray-200">
            <div className="text-xl font-thin ">My balance</div>
            <div className="mt-1 text-3xl font-medium">$26,129</div>
            <div className="grid grid-cols-2 mt-3">
              <div>Spend</div>
              <div>Profit</div>
              <div className="text-2xl">+ $2,800</div>
              <div className="text-2xl">- $687</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-8 space-y-4 text-gray-200">
          <div className="flex items-center justify-between w-full">
            <div className="text-xl font-medium text-gray-200">Goal</div>
            <div className="font-thin text-md justify-self-end">See all</div>
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <div
                className="flex items-center justify-center border-2 rounded-full w-14 h-14 border-ex-pink progress"
                data-percent="0.94"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <div className="">Travel</div>
                <div>Goal: $915</div>
              </div>
            </div>
            <div className="justify-self-end">94%</div>
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <div className="flex items-center justify-center border-2 border-yellow-500 rounded-full w-14 h-14">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </div>
              <div className="ml-4">
                <div className="">Apartment</div>
                <div>Goal: $315,000</div>
              </div>
            </div>
            <div className="justify-self-end">7%</div>
          </div>
          <div>
            <svg width={size} height={size} className="donutchart">
              <circle
                r={radius}
                cx={halfsize}
                cy={halfsize}
                transform={rotateval}
                style={trackstyle}
                className="donutchart-track"
              />
              <circle
                r={radius}
                cx={halfsize}
                cy={halfsize}
                transform={rotateval}
                style={indicatorstyle}
                className="donutchart-indicator"
              />
            </svg>
          </div>

          {/* <div className="flex items-center justify-start w-full">
            <div>Logo </div>
            <div className="ml-4">
              <div className="">Travel</div>
              <div>Goal: $915</div>
            </div>
            <div className="justify-self-end">94%</div>
          </div>

          <div>
            <div>Logo</div>
            <div>
              <div>Apartment</div>
              <div>Goal: $315,000</div>
            </div>
          </div>
          <div className="justify-self-end">7%</div>
        </div> */}
        </div>
      </div>
    </div>
  );
}
