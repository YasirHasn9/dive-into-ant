import React from "react"
import { Modal, Button } from 'antd';

class AppWorks extends  React.Component {
    state = { visible: false };

    showModal = () => {
      this.setState({
        visible: true,
      });
    };
  
  
    handleCancel = e => {
      console.log(e);
      this.setState({
        visible: false,
      });
    };
  
    render(){
        return (
            <div id="works" className="block worksBlock">
                <div className="container-fluid">
                    <div className="titleHolder">
                     <h2> How It works</h2>
                     <p>Lorem Horee herpp rjje</p>
                    </div>
                    <div className="contentHolder">
                    <Button type="primary" onClick={this.showModal}>
                           <div><i className="fas fa-play"></i></div>
                    </Button>

                    </div>
                 
        <Modal
          title="title"
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer={null}
        >
            <iframe title="YouTube video about how to use Ant design" width="100%" height="350" src="https://www.youtube.com/watch?v=Bs4ZODVvHsQ"></iframe>
        </Modal>
                </div>
            </div>
        )
    }
}

export default AppWorks