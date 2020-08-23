import React, { useRef, memo } from 'react'
import { Button, Input, Popover, Modal } from 'antd'
import {
  ArrowLeftOutlined,
  MobileOutlined,
  DownloadOutlined,
  CopyOutlined
} from '@ant-design/icons'
import QRCode from 'qrcode.react'
import { saveAs } from 'file-saver'
import req from '@/utils/req'
import Code from '@/assets/code.png'

import styles from './index.less'

const { confirm } = Modal;

const isDev = process.env.NODE_ENV === 'development';

const HeaderComponent = memo((props) => {
  const { pointData, location } = props
  const iptRef = useRef(null)

  const toPreview = () => {
    localStorage.setItem('pointData', JSON.stringify(pointData))
    savePreview()
    setTimeout(() => {
      window.open(isDev ? `/preview?tid=${props.location.query.tid}` : `http://io.nainor.com/h5_plus/preview?tid=${props.location.query.tid}`)
    }, 600)
  }

  const content = () => {
    const { tid } = location.query || ''
    return <QRCode value={`${window.location.protocol}//${window.location.host}/h5_plus/preview?tid=${tid}`} />
  }

  const handleSaveTpl = () => {
    confirm({
      title: '确定要保存吗？',
      content: <div className={styles.saveForm}>
        <div className={styles.formIpt}>
          <span>模版名称：</span><Input ref={iptRef} />
        </div>
        <div className={styles.formIpt}>
          <span>访问链接：</span><Input disabled value="暂未开放，保存之后可以在模版库中访问" />
        </div>
      </div>,
      okText: '保存',
      cancelText: '取消',
      onOk() {
        let name = iptRef.current.state.value
        req.post('/visible/tpl/save', { name, tpl: pointData }).then(res => {
          console.log(res)
        })
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  const useTemplate = () => {
    Modal.info({
        title: '该功能正在升级，可以关注下方公众号实时查看动态',
        content: (
            <div style={{textAlign: 'center'}}>
               <img src={Code} alt="趣谈前端" style={{width: "180px"}} />
            </div>
        ),
        okText: '客官知道啦'
    })
  }

  const downLoadJson = () => {
    const jsonStr = JSON.stringify(pointData)
    const blob = new Blob([jsonStr], { type: "text/plain;charset=utf-8" })
    saveAs(blob, "template.json")
  }

  const toLogin = () => {
    const { tid } = props.location.query || ''
    window.location.href = `/h5_plus/login?tid=${tid}`
  }

  const savePreview = () => {
    const { tid } = props.location.query || ''
    req.post('/visible/preview', { tid, tpl: pointData })
  }

  return (
    <div className={styles.header}>
        <div className={styles.logoArea}>
          <div className={styles.backBtn} onClick={toLogin}><ArrowLeftOutlined /></div>
          <div className={styles.logo}>Dooring</div>
        </div>
        <div className={styles.controlArea}>
          <div className={styles.tit}>H5可视化编辑器</div>
        </div>
        <div className={styles.btnArea}>
          <Button type="primary" style={{marginRight: '9px'}} onClick={useTemplate}>使用模版库</Button>
          <Button type="primary" style={{marginRight: '9px'}} onClick={handleSaveTpl} disabled={!pointData.length}><DownloadOutlined />保存</Button>
          <Button style={{marginRight: '9px'}} title="下载json文件" onClick={downLoadJson} disabled={!pointData.length}><CopyOutlined /></Button>
          <Popover placement="bottom" title={null} content={content} trigger="click">
            <Button style={{marginRight: '9px'}} onClick={savePreview} disabled={!pointData.length}><MobileOutlined /></Button>
          </Popover>
          <Button onClick={toPreview} disabled={!pointData.length}>预览</Button>
        </div>
    </div>
  )
})

export default HeaderComponent
