import React, { useState, useEffect, useMemo, useContext } from 'react';
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

import template1 from 'components/BasicShop/BasicComponents/template';
import template2 from 'components/BasicPcShop/BasicComponents/template';
import mediaTpl1 from 'components/BasicShop/MediaComponents/template';
import mediaTpl2 from 'components/BasicPcShop/MediaComponents/template';
import graphTpl1 from 'components/BasicShop/VisualComponents/template';
import graphTpl2 from 'components/BasicPcShop/VisualComponents/template';

import schema1 from 'components/BasicShop/schema';
import schema2 from 'components/BasicPcShop/schema';

import { ActionCreators } from 'redux-undo';
import { StateWithHistory } from 'redux-undo';
import styles from './index.less';
import { useGetBall } from 'react-draggable-ball';
import { useAnimation } from '@/utils/tool';
import { dooringContext } from '@/layouts';

const { TabPane } = Tabs;

const Container = (props: {
  history?: any;
  location?: any;
  pstate?: any;
  cstate?: any;
  dispatch?: any;
}) => {
  const [scaleNum, setScale] = useState(1);
  const [collapsed, setCollapsed] = useState(true);

  const { pstate, cstate, dispatch } = props;
  const pointData = pstate ? pstate.pointData : [];
  const cpointData = cstate ? cstate.pointData : [];

  const context = useContext(dooringContext);
  const curPoint = useMemo(() => {
    if (context.theme === 'h5') {
      return pstate ? pstate.curPoint : {};
    } else {
      return cstate ? cstate.curPoint : {};
    }
  }, [context.theme, cstate, pstate]);

  const schema = useMemo(() => {
    if (context.theme === 'h5') {
      return schema1;
    } else {
      console.log(schema2);
      return schema2;
    }
  }, [context.theme]);

  const template = useMemo(() => {
    if (context.theme === 'h5') {
      return template1;
    } else {
      return template2;
    }
  }, [context.theme]);

  const mediaTpl = useMemo(() => {
    if (context.theme === 'h5') {
      return mediaTpl1;
    } else {
      return mediaTpl2;
    }
  }, [context.theme]);

  const graphTpl = useMemo(() => {
    if (context.theme === 'h5') {
      return graphTpl1;
    } else {
      return graphTpl2;
    }
  }, [context.theme]);

  // 指定画布的id
  let canvasId = 'js_canvas';

  const backSize = () => {
    setScale(1);
  };

  const toggleCollapsed = (checked: boolean) => {
    console.log(checked);
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

  const handleFormSave = useMemo(() => {
    if (context.theme === 'h5') {
      return (data: any) => {
        dispatch({
          type: 'editorModal/modPointData',
          payload: { ...curPoint, item: { ...curPoint.item, config: data } },
        });
      };
    } else {
      return (data: any) => {
        dispatch({
          type: 'editorPcModal/modPointData',
          payload: { ...curPoint, item: { ...curPoint.item, config: data } },
        });
      };
    }
  }, [context.theme, curPoint, dispatch]);

  const clearData = useMemo(() => {
    if (context.theme === 'h5') {
      dispatch({ type: 'editorModal/clearAll' });
    } else {
      dispatch({ type: 'editorPcModal/clearAll' });
    }
  }, [context.theme, dispatch]);

  const handleDel = useMemo(() => {
    if (context.theme === 'h5') {
      return (id: any) => {
        dispatch({
          type: 'editorModal/delPointData',
          payload: { id },
        });
      };
    } else {
      return (id: any) => {
        dispatch({
          type: 'editorPcModal/delPointData',
          payload: { id },
        });
      };
    }
  }, [context.theme, dispatch]);

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

  const [display] = useAnimation(collapsed, 500);

  const renderRight = useMemo(() => {
    if (context.theme === 'h5') {
      return (
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
      );
    } else {
      return (
        <div className={styles.attrSetting}>
          {cpointData.length && curPoint ? (
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
      );
    }
  }, [context.theme, cpointData.length, curPoint, handleDel, handleFormSave, pointData.length]);

  return (
    <div className={styles.editorWrap}>
      <HeaderComponent
        redohandler={redohandler}
        undohandler={undohandler}
        pointData={context.theme === 'h5' ? pointData : cpointData}
        clearData={clearData}
        location={props.location}
        toggleCollapsed={toggleCollapsed}
      />
      <div className={styles.container}>
        <div
          className={styles.list}
          style={{
            transform: collapsed ? 'translate(0,0)' : 'translate(-100%,0)',
            transition: 'all ease-in-out 0.5s',
            display: display ? 'none' : 'block',
          }}
        >
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
        {renderRight}
      </div>
    </div>
  );
};

export default connect((state: StateWithHistory<any>) => {
  return { pstate: state.present.editorModal, cstate: state.present.editorPcModal };
})(Container);
