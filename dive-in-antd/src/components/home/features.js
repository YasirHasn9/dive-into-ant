import React from "react";
import {Row , Col , Card} from "antd"
import Image1 from "../../assets/images/hero.jpeg"
const {Meta} = Card
const AppFeature = () => {
    return (
        <div id="feature" className="block featureBlock bgGray">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Features and Benefits</h2>
                    <p>Ut admodum conceptam mei,
                        cu eam tation fabulas</p>
                </div>
                <Row gutter={[16,16]}>
                    <Col span={8}>  
                        <Card
                            hoverable
                            cover={<img alt="example" src={Image1} />}>
                            <Meta title="Title is here" />
                        </Card>
                    </Col>
                    <Col span={8}>  
                        <Card
                            hoverable
                            cover={<img alt="example" src={Image1} />}>
                            <Meta title="Title is here" />
                        </Card>
                    </Col>
                    <Col span={8}>  
                        <Card
                            hoverable
                            cover={<img alt="example" src={Image1}/>}>
                            <Meta title="Title is here" />
                        </Card>
                    </Col>
                    <Col span={8}>  
                        <Card
                            hoverable
                            cover={<img alt="example" src={Image1} />}>
                            <Meta title="Title is here" />
                        </Card>
                    </Col>
                    <Col span={8}>  
                        <Card
                            hoverable
                            cover={<img alt="example" src={Image1} />}>
                            <Meta title="Title is here" />
                        </Card>
                    </Col>
                    <Col span={8}>  
                        <Card
                            hoverable
                            cover={<img alt="example" src={Image1} />}>
                            <Meta title="Title is here" />
                        </Card>
                    </Col>
                </Row>
            </div>

        </div>
    )
}

export default AppFeature