import React from "react";
import {
  Form,
  Typography,
  Image,
  Row,
  Col,
  Input,
  Button,
  Checkbox,
} from "antd";
const { Title } = Typography;

const Part1 = ({ data }) => {
  const onFinish = (values) => {};

  /*
   */
  return (
    <div>
      <Title level={3}>Part 9</Title>
      <Title level={5}>Description part</Title>
      <Image
        width="100%"
        height={250}
        src={`https://nikaws.cf/${data.listPartDocumentArray[1].url}`}
      />

      <ol>
        {data.questions.map((question) => (
          <li key={question.id}>
            <div>{question.noidung_cauhoi}</div>
            <ol
              type="A"
              style={{
                padding: "20px 0",
              }}
            >
              {data.answers.map(({ cauhoi_id, dapan, noidung_dapan }) => {
                if (cauhoi_id === question.id) {
                  return <></>;
                }
              })}
            </ol>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Part1;
