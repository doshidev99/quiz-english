import React, { Suspense } from "react";
import axios from "axios";
import { Tabs } from "antd";
import Part1 from "./pages/Part1";
import Part2 from "./pages/Part2";
import Part9 from "./pages/Part9";

const { TabPane } = Tabs;

const LuyenDe = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    // IIFE
    setIsLoading(true);
    (async function getExercise() {
      const { data } = await axios.get("https://nikaws.cf/api/getoneexam/1");
      if (data) {
        setData(data);
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <div>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Part 1" key="1">
          <Suspense fallback={<div>loading part1</div>}>
            {Object.keys(data).length !== 0 && <Part1 data={data.part1} />}
          </Suspense>
        </TabPane>
        {/* <TabPane tab="Part 2" key="2">
            {Object.keys(data).length !== 0 && <Part2 data={data.part2} />}
          </TabPane>
          <TabPane tab="Part 3.1" key="3.1">
            {Object.keys(data).length !== 0 && <Part1 data={data.part3dot1} />}
          </TabPane>
          <TabPane tab="Part 3.1" key="3">
            {Object.keys(data).length !== 0 && <Part2 data={data.part3dot2} />}
          </TabPane>

          <TabPane tab="Part 9" key="9">
            {Object.keys(data).length !== 0 && <Part9 data={data.part9} />}
          </TabPane> */}
      </Tabs>
    </div>
  );
};

export default LuyenDe;
