import { Col, Row, Collapse } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import {
  GX_FAQS,
  GxAppConst,
} from "../../../utils/ConstantPageData/GxAppConstantData";

const Faqs = () => {
  return (
    <Row justify={"center"} className="relative px-5 py-16 md:py-24 bg-mainBackgroundTwo">
      <div className="why_sports_gamex_purpal"></div>
      <Col xs={24} md={22} xl={15} id={"gxApp-faq"}>
        <Col xs={24} xl={24} className="mb-10 md:mb-14 text-center">
          <p className="text-3xl font-bold text-white md:text-5xl">
            {GxAppConst.sectionSixHead}
          </p>
          <p className="text-3xl font-bold text-white md:text-5xl">
            {GxAppConst.sectionSixHeadTwo}
          </p>
        </Col>
        <Collapse
          defaultActiveKey={["1"]}
          expandIcon={
            ({ isActive }) => (isActive ? <MinusOutlined /> : <PlusOutlined />) // Conditional rendering of icons based on panel state
          }
          expandIconPosition={"end"}
          size="middle"
          accordion
          items={GX_FAQS}
          ghost={true}
          contentBg={"transparent"}
        />
      </Col>
      <div className="gxApp-spread-background-lightWhite"></div>
    </Row>
  );
};

export default Faqs;
