import React, { useEffect } from 'react';
import ProLayout, { PageContainer } from '@ant-design/pro-layout';
import { Link, connect } from 'umi';
import routes from '../../config/routes'
import Bread from '../components/bread';

function IndexPage(props) {
    const { route, children } = props
    const toggleModal = () => {
        console.log('modal')
    }
    useEffect(() => {
        console.log(props)
    })
    return (
        <ProLayout
            menu={{
                defaultOpenAll: true,
                request: async () => {
                    // console.log(routes)
                    return routes;
                },
            }}
            menuItemRender={(menuItemProps, defaultDom) => {
                if (menuItemProps.isUrl || menuItemProps.children || !menuItemProps.path) {
                    return defaultDom;
                }

                return <Link to={menuItemProps.path}>{defaultDom}</Link>;
            }}
            headerRender={() => (<Bread parent={props}></Bread>)}
        >
            <PageContainer
                header={{
                    title: '页面标题',
                }}
                content="欢迎使用"
            >
                {children}
            </PageContainer>
        </ProLayout>
    );
}

export default connect(({ user }) => ({ user }))(IndexPage);