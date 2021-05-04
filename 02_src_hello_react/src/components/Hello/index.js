import React, { Component } from 'react';
import hello from   "./index.module.css"

export default class Hello extends Component {
    render() {
        return (
            <div className={hello.title}>
                你好啊 我是Hello组件
            </div>
        )
    }
}
