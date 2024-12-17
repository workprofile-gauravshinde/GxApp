import { Col, Row, Collapse } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import {
  GX_FAQS,
  GxAppConst,
} from "../../../utils/ConstantPageData/GxAppConstantData";
import { MotionAnimate } from "react-motion-animate";

const Faqs = () => {
  return (
    <MotionAnimate animation="scrollFadeIn" scrollPositions={[0.1, 0.9]}>
      <Row justify={"center"} className="relative px-5 py-24">
        <div className="why_sports_gamex_purpal"></div>
        <Col xs={24} xl={11} id={"gxApp-faq"}>
          <Col xs={24} xl={24} className="mb-14 text-center">
            <MotionAnimate animation="fadeInUp" reset={true}>
              <h3 className="text-3xl font-bold text-white md:text-5xl">
                {GxAppConst.sectionSixHead}
              </h3>
            </MotionAnimate>
            <MotionAnimate animation="fadeInUp" reset={true}>
              <h3 className="text-3xl font-bold text-lightPurple md:text-5xl">
                {GxAppConst.sectionSixHeadTwo}
              </h3>
            </MotionAnimate>
          </Col>

          <MotionAnimate animation="fadeInUp" reset={true}>
            <Collapse
              defaultActiveKey={["1"]}
              expandIcon={
                ({ isActive }) =>
                  isActive ? <MinusOutlined /> : <PlusOutlined /> // Conditional rendering of icons based on panel state
              }
              expandIconPosition={"end"}
              size="middle"
              accordion
              items={GX_FAQS}
              ghost={true}
              contentBg={"transparent"}
            />
          </MotionAnimate>
        </Col>
        <div className="gxApp-spread-background-lightWhite"></div>
      </Row>
    </MotionAnimate>
  );
};

export default Faqs;
