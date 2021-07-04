import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Steps
} from "antd";

const { Step } = Steps;

class FormSizeDemo extends React.Component {
  render() {
    // const [componentSize, setComponentSize] = useState("default");

    // const onFormLayoutChange = ({ size }) => {
    //   setComponentSize(size);
    // };
    const state = {
      current: 0
    };

    const onChange = (current) => {
      console.log("onChange:", current);
      this.setState({ current });
    };
    console.log(state);
    return (
      <>
        {" "}
        <h1>
          中国纪念馆百佳榜
          <br />
          信息采集表
        </h1>
        <div id="step">
          {" "}
          <Steps
            size="small"
            direction="vertical"
            current={0}
            onChange={onChange}
          >
            <Step title="采集表封面" />
            <Step title="基本情况" />
            <Step title="外部资源" />
            <Step title="内部资源" />
            <Step title="管理运行" />
            <Step title="业务部分" />
            <Step title="行业效益与影响" />
          </Steps>
        </div>
        <div id="main-loop">
          <div id="form1">
            <Form
              labelCol={{
                span: 4
              }}
              wrapperCol={{
                span: 14
              }}
              layout="horizontal"
              // initialValues={{
              //   size: componentSize
              // }}
              // onValuesChange={onFormLayoutChange}
              size="small"
            >
              <Form.Item label="填表单位">
                <Input />
              </Form.Item>
              <Form.Item label="填表人">
                <Input />
              </Form.Item>
              <Form.Item label="联系电话">
                <Input />
              </Form.Item>
              <Form.Item label="工作邮箱">
                <Input />
              </Form.Item>
              <Form.Item label="填表日期">
                <DatePicker />
              </Form.Item>
            </Form>
          </div>
          <div id="btn-div">
            <Button
              type="primary"
              id="next"
              onClick={() => window.location.assign("html/basic.html")}
            >
              下一步
            </Button>
          </div>
        </div>
      </>
    );
  }
}

ReactDOM.render(<FormSizeDemo />, document.getElementById("container"));
