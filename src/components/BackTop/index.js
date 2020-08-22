import { memo } from 'react'
import { BackToTop, Icon } from 'zarm'

const themeObj = {
  simple: { bgColor: '#fff', color: '#999' },
  black: { bgColor: '#000', color: '#fff' },
  danger: { bgColor: '#ff5050', color: '#fff' },
  primary: { bgColor: '#00bc71', color: '#fff' },
  blue: { bgColor: '#06c', color: '#fff' }
}
const BackTop = memo((props) => {
  const {
   theme = 'simple'
  } = props
  
  return <BackToTop>
            <div style={{
              width: 48,
              height: 48,
              lineHeight: '48px',
              textAlign: 'center',
              backgroundColor: themeObj[theme].bgColor,
              color: themeObj[theme].color,
              fontSize: 20,
              borderRadius: 30,
              boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.2)',
              cursor: 'pointer',
            }}>
              <Icon type="arrow-top" />
            </div>
          </BackToTop>
})

export default BackTop