import PropTypes from "prop-types";
import {
  Form,
  Checkbox,
  Typography,
  Image,
  Row,
  Col,
  Input,
  Button,
} from "antd";
const { Title } = Typography;

const Part2 = ({ data }) => {
  return (
    <div>
      <Title level={3}>Part 2</Title>
      <Title level={5}>Description part</Title>
      <Image
        width="100%"
        height={250}
        src={`https://nikaws.cf/${data.listPartDocumentArray[0].url}`}
      />

      <ol>
        {data.questions.map((question) => (
          <li key={question.id}>
            <div>{question.noidung_cauhoi}</div>
            <ol type="A" style={{
              padding: '20px 0'
            }}>
              {data.answers.map(({ cauhoi_id, dapan, noidung_dapan }) => {
                if (cauhoi_id === question.id) {
                  return (
                    <Checkbox onChange={() => {}}>{noidung_dapan}</Checkbox>
                  );
                }
              })}
            </ol>
          </li>
        ))}
      </ol>
  
    </div>
  );
};

Part2.propTypes = {};

export default Part2;
