import React from "react";
import PieChart from "./PieChart";
import CircularPie from "./CircularPie";
import CircularPie1 from "./CircularPie1";
import CircularPie2 from "./CircularPie2";

const Body = () => {
  return (
    <div className="w-828 h-108  p-4 flex flex-col gap-4 text-sm">
      <h2 className="text-sm font-semibold">Your Answer:</h2>
      <p >
        The most challenging software for me is specifically Telluride is Figma.
        Yeah. Figma and Adobe Illustrator, which is, they are quite <span className="bg-yellow-500">nuanced and</span>
        all the constraints and, uh, small, small things that need to be learned
        up. Yeah. This question, it almost took <span className="bg-red-500">three to four</span> months to <span className="bg-blue-500">complete</span>
        an entire software of Adobe Illustrator.
      </p>
      <p>
        The most challenging software for me is specifically Telluride is Figma.
        Yeah. Figma and Adobe Illustrator, which is, they are quite nuanced and
        all the constraints and, uh, small, small things that need to be learned
        up. Yeah. This question, it almost took three to four months to complete
        an entire software of Adobe Illustrator.
      </p>
      <p>
        The most challenging software for me is specifically Telluride is Figma.
        Yeah. Figma and Adobe Illustrator, which is, they are quite nuanced and
        all the constraints and, uh, small, small things that need to be learned
        up.
      </p>
      
      <div className="flex justify-around mx-16">
        <div className="flex  items-center  space-x-2">
          <div className="w-10 h-2 bg-red-500"></div>
          <div>Grammatical error</div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-10 h-2 bg-yellow-500"></div>
          <div>Vocabulary error</div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-10 h-2 bg-blue-500"></div>
          <div>Spelling error</div>
        </div>
      </div>
      <hr className="border-t-2 border-blue-500 font-bold" />

      <div>
        <h2 className="text-xl font-semibold m-4">Management Score:</h2>
        <div className="flex gap-4">
          <div className="">
            {/* <PieChart/> */}
            <CircularPie />
            <span className="text-sm text-blue-700">Score:59%</span>
          </div>
          
          <div>
            <h2>Focus Management</h2>
            <p>
              Focus Score: Focus score refers to the ability of an individual to
              concentrate and direct their attention towards a specific task or
              information.{" "}
            </p>
            <br />
            
            <hr className="border-t-2 border- [#D9D9D9]font-bold" />
          </div>
        </div>
        <div className="flex gap-4">
          <div>
          {/* <PieChart/> */}
          <CircularPie1/>
          <span className="text-sm text-green-700">Score:74%</span>
          </div>
          <div>
            <h2>Time Management</h2>
            <p>
              Time Management: Time management is the practice of planning,
              organizing, and allocating time to tasks and activities in a way
              that maximizes productivity and efficiency.{" "}
            </p>
            <br />
            <hr className="border-t-2 border- [#D9D9D9]font-bold" />
          </div>
        </div>
        <div className="flex gap-4">
          <div>
          {/* <PieChart/> */}
          <CircularPie2/>
          <span className="text-sm text-red-700">Score:39%</span>

          </div>
          <div>
            <h2>Critical Thinking</h2>
            <p>
              Critical thinking is the process of analyzing, evaluating, and
              interpreting information or situations in a logical and systematic
              manner.{" "}
            </p>
            <hr className="border-t-2 border- [#D9D9D9]font-bold" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
