import { useState, useEffect } from 'react';
import { notification } from 'antd';
import { Row, Col, Form, Input, Modal, Button, Select, Tabs, Table } from 'antd';
import { getRole, delRole, creRole } from '@/services/role';
import modal from '@/components/modal';

const { TabPane } = Tabs;
const { Option } = Select;
const verify = (id)=>{
    // return editUser({id: id, status: 1})
}
export default function List() {
    const [list, setList] = useState([]);
    const [ismodal, setIsmodal] = useState(false);
    const [form] = Form.useForm();
    const updateRole = (content)=>{
        let alias = form.getFieldValue('alias');
        let conf = {
            visible: ismodal,
            closable: true,
            title: !alias?'添加角色':'修改角色',
            onOk: ()=>{
                let params = form.getFieldsValue();
                creRole(params).then((res) => {
                    if(res){
                        notification.success({
                            description: res,
                            message: '请求成功',
                        });
                        initList();
                    }
                    setIsmodal(false);
                })
            },
            onCancel: ()=>{
                setIsmodal(false);
            }
        }
        return(
            <Modal {...conf}>
                {content}
            </Modal>
        )
    }
    const editRole = (params)=>{
        if(params) form.setFieldsValue(params)
        else form.resetFields()
        setIsmodal(true);
    }
    const initList = ()=>{
        getRole().then(res=>{
            setList(res)
        })
    }
    const del = (record)=>{
        delRole({id: record.id}).then(res=>{
            if(res){
                notification.success({
                    message: '成功删除角色'
                });
                initList();
            }
        })
    }
    const columns = [
        {
          title: '序号',
          dataIndex: 'index',
          key: 'index',
          render: (text, record, index)=>(
            index+1
          )
        },
        {
          title: '角色名',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '别名',
          dataIndex: 'alias',
          key: 'alias',
          render: (text)=>(
            <span>{text}</span>
          )
        },
        {
            title: '操作',
            dataIndex: 'Id',
            key: 'Id',
            render: (text, record) => [
                <Button 
                size="small" 
                type="primary"
                onClick={()=>{
                    editRole(record)
                }}
                >修改</Button>,
                <Button 
                size="small" 
                type="primary" 
                danger 
                onClick={()=>{del(record)}}>删除</Button>,
                <Button size="small" type="ghost"
                onClick={()=>{
                    verify(record.Id).then((res)=>{
                        let l = [];
                        for (let [index, elem] of list.entries()) {
                            if(res.Id == elem.Id){
                                l.push(res)
                            }else{
                                l.push(elem)
                            }
                        }
                        setList(l);
                    })
                }}
                >审核</Button>,
            ]
        },
    ];
    useEffect(()=>{
        initList();
    }, [])
    return (
        <>
        {updateRole(
            <Form form={form}>
                <Form.Item name="name" label="角色名">
                    <Input placeholder="Username" />
                </Form.Item>
                <Form.Item name="alias" label="别名">
                    <Input placeholder="Username" />
                </Form.Item>
                {/* <Form.Item>
                    <Button size="small" type="primary" onClick={addRole}>添加</Button>
                </Form.Item> */}
            </Form>
        )}
        <Row style={{backgroundColor: '#fff'}}>
            <Col span={24}>
                <Tabs type="card" defaultActiveKey="1">
                    <TabPane tab="角色管理" key="1">
                    <Form
                    layout="inline"
                    style={{ marginBottom: 16, flexDirection: 'row-reverse' }}
                    >
                    {/* <Form.Item>
                    <Input placeholder="Username" />
                    </Form.Item> */}
                    <Form.Item>
                        <Button size="small" type="primary">删除</Button>
                    </Form.Item>
                    <Form.Item>
                        <Button size="small" type="primary" onClick={()=>{editRole()}}>添加</Button>
                    </Form.Item>
                    </Form>
                    <Table
                    rowSelection={{
                        type: 'checkbox'
                    }}
                    dataSource={list} 
                    columns={columns} />
                    </TabPane>
                    <TabPane tab="Tab 2" key="2">
                    Content of Tab Pane 2
                    </TabPane>
                    <TabPane tab="Tab 3" key="3">
                    Content of Tab Pane 3
                    </TabPane>
                </Tabs>
            </Col>
        </Row>
        </>
    );
}
