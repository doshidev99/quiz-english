import React from "react";
import { Form, Typography, Image, Row, Col, Input, Button } from "antd";
const { Title } = Typography;



const Part1 = ({ data }) => {
  const onFinish = (values) => {
    const answersCheck = data.answers;
    let formatAnswer = [];
    answersCheck.map(
      (answer) => answer.dapan === 1 && formatAnswer.push(answer)
    );

    // eslint-disable-next-line no-console
    console.log(formatAnswer, "<----");
    const dapan_nguoidung = Object.values(values);
  };

  /*
   */
  return (
    <div>
      <Title level={3}>Part 1</Title>
      <Title level={5}>Description part</Title>
      <Image
        width="100%"
        height={250}
        src={`https://nikaws.cf/${data.listPartDocumentArray[0].url}`}
      />

      <Row gutter={[16, 32]} justify="space-between">
        <Col span={12}>
          <ol>
            {data.questions.map((question) => (
              <li
                key={question.id}
                style={{
                  paddingBottom: 40,
                }}
              >
                {question.noidung_cauhoi}
              </li>
            ))}
          </ol>
        </Col>
        <Col span={12}>
          <ol type="A">
            {data.answers.map((elm) => (
              <li
                key={elm.id}
                style={{
                  paddingTop: 10,
                }}
              >
                <Image
                  height="100%"
                  src={`https://nikaws.cf/${elm.url}`}
                  alt=""
                  className="w-100 h-100"
                />
              </li>
            ))}
          </ol>
        </Col>
      </Row>

      {/* https://ant.design/components/form/#Form */}
      <Form
        name="basic"
        // labelCol={{ span: 1 }}
        // wrapperCol={{ span: 3 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={() => {}}
        autoComplete="off"
      >
        <div
          style={{
            display: "flex",
          }}
        >
          {data.questions.map((question, index) => (
            // {data.document.map((question, index) => (
            <Form.Item
              label={index + 1}
              name={question.id}
              rules={[{ required: true, message: "Bạn cần nhập field này !" }]}
            >
              <Input />
            </Form.Item>
          ))}
        </div>

        <Form.Item
          style={{
            marginTop: 20,
          }}
          wrapperCol={{
            offset: 21,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Part1;
