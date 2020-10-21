import React from "react";
import { Collapse, Button } from 'antd';

const { Panel } = Collapse;

const AppFaq = () => {
    return (
        <div className="block faqBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Common Asked Questions</h2>
                    <p>lorem shsddsh dffv erpp.</p>
                </div>
            <Collapse defaultActiveKey={['1']}>
                <Panel header="This is panel header 1" key="1">
                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est pariatur debitis totam, dignissimos qui, officia, in blanditiis assumenda nulla esse molestiae veritatis? Qui deleniti ab assumenda est velit eligendi maiores.</p>
                </Panel>
                <Panel header="This is panel header 2" key="2">
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est pariatur debitis totam, dignissimos qui, officia, in blanditiis assumenda nulla esse molestiae veritatis? Qui deleniti ab assumenda est velit eligendi maiores.</p>
                </Panel>
                <Panel header="This is panel header 3" key="3">
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est pariatur debitis totam, dignissimos qui, officia, in blanditiis assumenda nulla esse molestiae veritatis? Qui deleniti ab assumenda est velit eligendi maiores.</p>
                </Panel>
                <Panel header="This is panel header 2" key="4">
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est pariatur debitis totam, dignissimos qui, officia, in blanditiis assumenda nulla esse molestiae veritatis? Qui deleniti ab assumenda est velit eligendi maiores.</p>
                </Panel>
                <Panel header="This is panel header 3" key="5">
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est pariatur debitis totam, dignissimos qui, officia, in blanditiis assumenda nulla esse molestiae veritatis? Qui deleniti ab assumenda est velit eligendi maiores.</p>
                </Panel>
                <Panel header="This is panel header 2" key="6">
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est pariatur debitis totam, dignissimos qui, officia, in blanditiis assumenda nulla esse molestiae veritatis? Qui deleniti ab assumenda est velit eligendi maiores.</p>
                </Panel>
                <Panel header="This is panel header 3" key="7">
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est pariatur debitis totam, dignissimos qui, officia, in blanditiis assumenda nulla esse molestiae veritatis? Qui deleniti ab assumenda est velit eligendi maiores.</p>
                </Panel>
            </Collapse>
            <div className="quickSupport">
              <h3>This is the title </h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est pariatur debitis totam, dignissimos qui, officia, in blanditiis assumenda</p>
              <Button  type="primary" size="large">
                <i className="fas fa-envelope"></i>
                Email us</Button>
            </div>
            </div>
        </div>
    )
}

export default AppFaq