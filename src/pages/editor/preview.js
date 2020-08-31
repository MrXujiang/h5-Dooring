import React, { memo, useEffect, useState } from 'react'
import GridLayout from 'react-grid-layout'
import DynamicEngine from 'components/DynamicEngine'
import req from '@/utils/req'
import styles from './index.less'

// 可视化组件类型
// const componentTypes = ['Column', 'Pie']

const isMac = navigator.platform.indexOf('Mac') === 0

const pcStyle = {
  width: isMac ? 395 : 412,
  margin: '20px auto', 
  border: '10px solid #000', 
  borderRadius: '20px', 
  height: '684px', 
  overflow: 'auto'
}

const PreviewPage = memo((props) => {
  const [pointData, setPointData] = useState(() => {
    let pointDataStr = localStorage.getItem('pointData')
    let points
  
    try{
      points = JSON.parse(pointDataStr) || []
    }catch(err) {
      points = []
    }
    return points.map(item => ({...item, point: {...item.point, isDraggable: false, isResizable: false } }))
  })

  const vw = window.innerWidth

  useEffect(() => {
    const  { tid } = props.location.query
    const timer = null
    req.get('/visible/preview/get', { params: { tid } }).then(res => {
      setPointData(res.map(item => ({...item, point: {...item.point, isDraggable: false, isResizable: false } })))
    }).catch(err => {
      timer = setTimeout(() => {
        window.close()
      }, 3000)
    })
    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <div style={vw > 800 ? pcStyle : {}}>
      <GridLayout 
        className={styles.layout} 
        cols={24} 
        rowHeight={2} 
        width={vw > 800 ? 375 :vw }
        margin={[0,0]}
        id="xx"
      >
        {
          pointData.map(value => 
            <div className={styles.dragItem} key={value.id} data-grid={value.point}>
              <DynamicEngine {...value.item} />
            </div>
          )
        }
      </GridLayout>
    </div>
  )
})

export default PreviewPage
