import React from "react"
import {Row, Col} from "antd"
const items = [
    {
      key: '1',
      icon: <i className="fas fa-chart-pie"></i>,
      title: 'High Performance',
      content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
    },
    {
      key: '2',
      icon: <i className="fas fa-desktop"></i>,
      title: 'Flat Design',
      content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
    },
    {
      key: '3',
      icon: <i className="fas fa-database"></i>,
      title: 'Simplified Workflow',
      content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
    },
  ]

const AppAbout = () => {
    return (
        <div id="about" className="block aboutBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>About Us</h2>
                    <p>Work better together. Schedule meetings</p>
                </div>
                <div  className="contentHolder">
                    <p >
                      'An vim odio ocurreret consetetur, justo constituto 
                        ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren 
                        urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias 
                        consectetuer mel. Ut admodum conceptam mei,
                        cu eam tation fabul mel. Ut admodum conceptam mei,
                        cu eam tation fabulas aabulas aas abhorreant. His ex mandamus.
                        cu eam tation fabulas aabulas aas abhorreant. His ex mandamus.
                        cu eam tation fabulas aabulas aas abhorreant. His ex mandamus.
                    </p>
                </div>
                {/* ant provides a responsive grid system 
                the gutter here represents the margin and between col and top */}
                <Row gutter={[16, 16]}>
                    {
                        items.map(item => {
                            return (
                                // the gird system is represented by 24 where each span is box 
                                // span = 8 then the grid is 3 boxes 
                                // span = 12 then the grid is 2 boxes 
                                // span = 4 then the grid is 6 boxes 
                                // span = 6 then the grid is 4 boxes 
                                // <Col md={{span:5, offset:1}} key={item.key}>
                                <Col 
                                md={{span:5, offset:1}}
                                md={{ span: 8 }} 
                                key={item.key}>
                                    <div className="content">
                                        <div className="icon">
                                            {item.icon}
                                        </div>
                                        <h3>{item.title}</h3>
                                        <p>{item.content}</p>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
        </div>
    )
}

export default AppAbout