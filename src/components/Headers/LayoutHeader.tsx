import { Col, Layout, Menu, Row } from "antd";
import Link from "next/link";
import { memo } from "react";
import HeaderLogo from "components/Logos/HeaderLogo";

const LayoutHeader = () => {
  return (
    <Layout.Header className="flex w-full p-0 bg-darkGrey min-h-[80px]">
      <Row
        className="w-full max-w-none sm:max-w-[calc(100%-30px)] lg:max-w-[1170px]"
        justify="space-between"
        align="middle"
        typeof="flex"
      >
        <Col className="flex items-center" span={24} lg={24}>
          <Link href="/">
            <HeaderLogo />
          </Link>

          <nav className="hidden lg:flex flex-grow ml-8 bg-darkGrey border-none">

          </nav>
        </Col>
      </Row>
    </Layout.Header>
  );
};

export default memo(LayoutHeader);
