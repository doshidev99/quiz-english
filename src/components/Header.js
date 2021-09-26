import { PageHeader } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";

const Header = () => {
  let history = useHistory();

  return (
    <div>
      <PageHeader
        className="site-page-header"
        onBack={() => history.goBack()}
        title="Title"
        subTitle="This is a subtitle"
      />
    </div>
  );
};

export default Header;
