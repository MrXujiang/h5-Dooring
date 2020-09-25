import React, { useState, useEffect, useMemo } from 'react';
import { Slider, Result, Tabs, Alert } from 'antd';
import {
  PieChartOutlined,
  ExpandOutlined,
  PlayCircleOutlined,
  HighlightOutlined,
  ReloadOutlined,
} from '@ant-design/icons';
import TextLoop from 'react-text-loop';
import { connect } from 'dva';
import HeaderComponent from './components/Header';
import SourceBox from './SourceBox';
import TargetBox from './TargetBox';
import Calibration from 'components/Calibration';
import DynamicEngine, { componentsType } from 'components/DynamicEngine';
import FormEditor from 'components/PanelComponents/FormEditor';
import template from 'components/BasicShop/BasicComponents/template';
import mediaTpl from 'components/BasicShop/MediaComponents/template';
import graphTpl from 'components/BasicShop/VisualComponents/template';
import schema from 'components/BasicShop/schema';
import { ActionCreators } from 'redux-undo';
import { StateWithHistory } from 'redux-undo';
import styles from './index.less';
import { useGetBall } from 'react-draggable-ball';

const { TabPane } = Tabs;

const Container = (props: { history?: any; location?: any; pstate?: any; dispatch?: any }) => {
  const [scaleNum, setScale] = useState(1);
  const [collapsed, setCollapsed] = useState(false);

  const { pstate, dispatch } = props;
  const pointData = pstate ? pstate.pointData : {};
  const curPoint = pstate ? pstate.curPoint : {};
  // 指定画布的id
  let canvasId = 'js_canvas';

  const backSize = () => {
    setScale(1);
  };

  const toggleCollapsed = (checked: boolean) => {
    setCollapsed(checked);
  };

  const CpIcon = {
    base: <HighlightOutlined />,
    media: <PlayCircleOutlined />,
    visible: <PieChartOutlined />,
  };

  const generateHeader = (type: componentsType, text: string) => {
    return (
      <div>
        {CpIcon[type]} {text}
      </div>
    );
  };

  const handleSliderChange = (v: number) => {
    setScale(prev => (v >= 150 ? 1.5 : v / 100));
  };

  const handleSlider = (type: any) => {
    if (type) {
      setScale(prev => (prev >= 1.5 ? 1.5 : prev + 0.1));
    } else {
      setScale(prev => (prev <= 0.5 ? 0.5 : prev - 0.1));
    }
  };
  const handleFormSave = (data: any) => {
    dispatch({
      type: 'editorModal/modPointData',
      payload: { ...curPoint, item: { ...curPoint.item, config: data } },
    });
  };

  const clearData = () => {
    dispatch({ type: 'editorModal/clearAll' });
  };

  const handleDel = (id: any) => {
    dispatch({
      type: 'editorModal/delPointData',
      payload: { id },
    });
  };
  const redohandler = () => {
    dispatch(ActionCreators.redo());
  };
  const undohandler = () => {
    dispatch(ActionCreators.undo());
  };
  useEffect(() => {
    if (window.innerWidth < 1024) {
      props.history.push('/mobileTip');
    } //待修改
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const allType = useMemo(() => {
    let arr: string[] = [];
    template.forEach(v => {
      arr.push(v.type);
    });
    mediaTpl.forEach(v => {
      arr.push(v.type);
    });
    graphTpl.forEach(v => {
      arr.push(v.type);
    });
    return arr;
  }, []);

  const [dragstate, setDragState] = useState({ x: 0, y: 0 });
  const [render] = useGetBall(setDragState, {
    innerStyle: { top: '10px', left: '10px', cursor: 'pointer' },
    ratioSpeed: { x: 1.2, y: 1.2 },
    intervalDelay: 5,
  });

  return (
    <div className={styles.editorWrap}>
      <HeaderComponent
        redohandler={redohandler}
        undohandler={undohandler}
        pointData={pointData}
        clearData={clearData}
        location={props.location}
        toggleCollapsed={toggleCollapsed}
      />
      <div className={styles.container}>
        <div className={!collapsed ? styles.list : styles.collapsed}>
          <div className={styles.searchBar}>
            <Alert
              banner
              message={
                <TextLoop mask>
                  <div>Dooring升级啦！</div>
                  <div>已有1000+人使用</div>
                  <div>持续迭代中...</div>
                </TextLoop>
              }
            />
          </div>
          <div className={styles.componentList}>
            <Tabs defaultActiveKey="1">
              <TabPane tab={generateHeader('base', '基础组件')} key="1">
                {template.map((value, i) => {
                  return (
                    <TargetBox item={value} key={i} canvasId={canvasId}>
                      <DynamicEngine
                        {...value}
                        config={schema[value.type as keyof typeof schema].config}
                        componentsType="base"
                        isTpl={true}
                      />
                    </TargetBox>
                  );
                })}
              </TabPane>
              <TabPane tab={generateHeader('media', '媒体组件')} key="2">
                {mediaTpl.map((value, i) => (
                  <TargetBox item={value} key={i} canvasId={canvasId}>
                    <DynamicEngine
                      {...value}
                      config={schema[value.type as keyof typeof schema].config}
                      componentsType="media"
                      isTpl={true}
                    />
                  </TargetBox>
                ))}
              </TabPane>
              <TabPane tab={generateHeader('visible', '可视化组件')} key="3">
                {graphTpl.map((value, i) => (
                  <TargetBox item={value} key={i} canvasId={canvasId}>
                    <DynamicEngine
                      {...value}
                      config={schema[value.type as keyof typeof schema].config}
                      componentsType={'visible' as componentsType}
                      isTpl={true}
                    />
                  </TargetBox>
                ))}
              </TabPane>
            </Tabs>
          </div>
        </div>
        <div className={styles.tickMark} id="calibration">
          <div className={styles.tickMarkTop}>
            <Calibration direction="up" id="calibrationUp" multiple={scaleNum} />
          </div>
          <div className={styles.tickMarkLeft}>
            <Calibration direction="right" id="calibrationRight" multiple={scaleNum} />
          </div>
          <SourceBox
            dragState={dragstate}
            setDragState={setDragState}
            scaleNum={scaleNum}
            canvasId={canvasId}
            allType={allType}
          />

          <div className={styles.resetBall}>
            <ReloadOutlined onClick={() => setDragState({ x: 0, y: 0 })} />
          </div>
          <div className={styles.controllBall}>{render}</div>

          <div className={styles.sliderWrap}>
            <span className={styles.sliderBtn} onClick={handleSlider.bind(this, 1)}>
              +
            </span>
            <Slider
              vertical
              defaultValue={100}
              className={styles.slider}
              onChange={handleSliderChange}
              min={50}
              max={150}
              value={scaleNum * 100}
            />
            <span className={styles.sliderBtn} onClick={handleSlider.bind(this, 0)}>
              -
            </span>
          </div>
          <div className={styles.backSize}>
            <ExpandOutlined onClick={backSize} />
          </div>
        </div>
        <div className={styles.attrSetting}>
          {pointData.length && curPoint ? (
            <>
              <div className={styles.tit}>属性设置</div>
              <FormEditor
                config={curPoint.item.editableEl}
                uid={curPoint.id}
                defaultValue={curPoint.item.config}
                onSave={handleFormSave}
                onDel={handleDel}
              />
            </>
          ) : (
            <div style={{ paddingTop: '100px' }}>
              <Result
                status="404"
                title="还没有数据哦"
                subTitle="赶快拖拽组件来生成你的H5页面吧～"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default connect((state: StateWithHistory<any>) => {
  return { pstate: state.present.editorModal };
})(Container);
