import React from 'react';
import { Modal } from 'antd'
export default function ContentComment({ data, visibleMond }) {
    console.log(data)
    console.log('visibleMond', visibleMond)
    return (
        <>
            <div className="group-content">
                <Modal
                    title="Vertically centered modal dialog"
                    visible={visibleMond}
                    // onOk={() => { setVisible(false) }}
                    // onCancel={() => { setVisible(false) }}
                >
                    <p>some contents...</p>
                    <p>some contents...</p>
                    <p>some contents...</p>
                </Modal>
            </div>
        </>
    )
}