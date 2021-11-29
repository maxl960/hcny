import React, { Component, useEffect } from 'react';
import { List } from 'antd';

function ListComp(props) {
    useEffect(() => {
        // console.log(props)
    })
    return (
        <List
            size="small"
            header={<div>Header</div>}
            footer={<div>Footer</div>}
            bordered
            dataSource={data}
            renderItem={item => <List.Item>{item}</List.Item>}
        />
    )
}
export default ListComp
