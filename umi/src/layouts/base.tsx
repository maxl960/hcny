import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
import styles from '@/pages/index.less';

export default function IndexPage(props) {
    const { route, routes, children } = props
    useEffect(() => {
        console.log(props)
    })
    return (
        <Row type="flex" justify="center" align="middle" style={{ minHeight: '100vh', minWidth: '50vh' }}>
            <Col className={styles.midbox}>
                {children}
            </Col>
        </Row>
    );
}
