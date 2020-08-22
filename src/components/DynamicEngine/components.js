import { memo } from 'react'
import { NoticeBar } from 'zarm'
import styles from './components.less'

const Header = memo((props) => {
  const { 
    bgColor,
    logo,
    logoText,
    fontSize,
    color
  } = props
  return <header className={styles.header} style={{backgroundColor: bgColor}}>
      <div className={styles.logo}>
        <img src={logo && logo[0].url} alt={logoText} />
      </div>
      <div className={styles.title} style={{fontSize, color}}>{ logoText }</div>
  </header>
})

const Text = memo((props) => {
  const { 
    align,
    text,
    fontSize,
    color,
    lineHeight
  } = props
  return <div className={styles.textWrap} style={{color, textAlign: align, fontSize, lineHeight}}>
      { text }
  </div>
})

const Notice = memo((props) => {
  const {
    text,
    speed,
    theme,
    link,
    isClose = false
  } = props
  return <NoticeBar theme={theme} closable={isClose} speed={speed}><a style={{color: 'inherit'}}>{ text }</a></NoticeBar>
})

const Qrcode = memo((props) => {
  const {
    qrcode,
    text,
    color,
    fontSize = 14
  } = props
  return <div style={{width: '240px', margin: '16px auto'}}>
           <img src={qrcode && qrcode[0].url} alt={text} style={{width: '100%'}} />
           <div style={{textAlign: 'center', color, fontSize, paddingTop: '8px'}}>{ text }</div>
         </div>
})

const Footer = memo((props) => {
  const {
    bgColor,
    text,
    color,
    align,
    fontSize,
    height
  } = props
  return <footer style={{backgroundColor: bgColor, color, fontSize, textAlign: align, height, lineHeight: height + 'px'}}>{ text }</footer>
})

const Image = memo((props) => {
  const {
    imgUrl,
    round = 0
  } = props
  return <div style={{borderRadius: round, width: '100%', textAlign: 'center', overflow: 'hidden'}}>
          <img src={imgUrl && imgUrl[0].url} alt="" style={{width: '100%'}} />
        </div>
})

const List = memo((props) => {
  const {
    round,
    sourceData,
    imgSize,
    fontSize,
    color
  } = props
  return <div className={styles.list}>
    <div className={styles.sourceList}>
    {
            sourceData.map((item, i) => {
              return <div className={styles.sourceItem} key={i}>
                      <div className={styles.imgWrap}>
                        <img src={item.imgUrl[0] ? item.imgUrl[0].url : 'http://io.nainor.com/uploads/01_173e15d3493.png'} alt={item.desc} style={{width: imgSize, height: imgSize, objectFit: 'cover', borderRadius: round}} />
                      </div>
                      <div className={styles.content}>
                        <a className={styles.tit} style={{fontSize, color}} href={item.link ? item.link : '#'}>
                          { item.title }
                          <div className={styles.desc} style={{fontSize: fontSize*0.8, color: 'rgba(0,0,0, .3)'}}>{ item.desc }</div>
                        </a>
                      </div>
                    </div>
            })
    }
    </div>
  </div> 
})

export {
  Header,
  Text,
  Notice,
  Qrcode,
  Footer,
  Image,
  List
}