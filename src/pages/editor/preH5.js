import React from 'react'
import {
  Header, Text, Notice, Qrcode, Footer, Image, List
} from '@/components/DynamicEngine/components'
import Carousel from '@/components/Carousel'
import Tab from '@/components/Tab'

export default function PrevH5(props) {
  return <div style={{width: '375px', margin: '20px auto', border: '10px solid #000', borderRadius: '20px', minHeight: '664px'}}>
    <Notice />
    <Header />
    <Carousel />
    <Text color="#000" />
    <Text text="专注于前端技术一站式配置平台" lineHeight={1.2} color="#ccc" fontSize={12} />
    <Qrcode />
    <Image />
    <Tab />
    <List />
    <Footer />
  </div>
}