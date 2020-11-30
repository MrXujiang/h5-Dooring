import React, { useState, useEffect, useMemo, useCallback, useContext, useRef } from 'react';
import { Result, Tabs, Button } from 'antd';
import {
  PieChartOutlined,
  PlayCircleOutlined,
  HighlightOutlined,
  DoubleRightOutlined,
  DoubleLeftOutlined,
} from '@ant-design/icons';
import { connect } from 'dva';
import HeaderComponent from './components/Header';
import CanvasControl from './components/CanvasControl';
import SourceBox from './SourceBox';
import TargetBox from './TargetBox';
import Calibration from 'components/Calibration';
import DynamicEngine, { componentsType } from 'components/DynamicEngine';
import FormEditor from 'components/PanelComponents/FormEditor';

import template1 from 'components/BasicShop/BasicComponents/template';
import mediaTpl1 from 'components/BasicShop/MediaComponents/template';
import graphTpl1 from 'components/BasicShop/VisualComponents/template';

import schemaH5 from 'components/BasicShop/schema';
import { ActionCreators, StateWithHistory } from 'redux-undo';
import { dooringContext } from '@/layouts';
import { throttle } from '@/utils/tool';

import styles from './index.less';

const { TabPane } = Tabs;

const Container = (props: {
  history?: any;
  location?: any;
  pstate?: any;
  cstate?: any;
  dispatch?: any;
}) => {
  const [scaleNum, setScale] = useState(1);
  const [collapsed, setCollapsed] = useState(false);
  const [rightColla, setRightColla] = useState(true);
  const { pstate, cstate, dispatch } = props;
  const pointData = pstate ? pstate.pointData : [];
  const cpointData = cstate ? cstate.pointData : [];

  const changeCollapse = useMemo(() => {
    return (c: boolean) => {
      setCollapsed(c);
    };
  }, []);
  const changeRightColla = useMemo(() => {
    return (c: boolean) => {
      setRightColla(c);
    };
  }, []);
  const context = useContext(dooringContext);
  const curPoint = pstate ? pstate.curPoint : {};

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
    setDragState({ x: 0, y: 0 });
  };

  const CpIcon = {
    base: <HighlightOutlined />,
    media: <PlayCircleOutlined />,
    visible: <PieChartOutlined />,
  };

  const generateHeader = useMemo(() => {
    return (type: componentsType, text: string) => {
      return (
        <div>
          {CpIcon[type]} {text}
        </div>
      );
    };
  }, [CpIcon]);

  const handleSlider = useMemo(() => {
    return (type: any) => {
      if (type) {
        setScale((prev: number) => +(prev + 0.1).toFixed(1));
      } else {
        setScale((prev: number) => +(prev - 0.1).toFixed(1));
      }
    };
  }, []);

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

  const clearData = useCallback(() => {
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

  const redohandler = useMemo(() => {
    return () => {
      dispatch(ActionCreators.redo());
    };
  }, [dispatch]);

  const undohandler = useMemo(() => {
    return () => {
      dispatch(ActionCreators.undo());
    };
  }, [dispatch]);

  const importTpl = data => {
    dispatch({
      type: 'editorModal/importTplData',
      payload: data,
    });
  };

  useEffect(() => {
    if (window.innerWidth < 1024) {
      props.history.push('/mobileTip');
    } //待修改
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (pstate.curPoint && pstate.curPoint.status === 'inToCanvas') {
      setRightColla(false);
    }
  }, [pstate.curPoint]);

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
  }, [graphTpl, mediaTpl, template]);

  // 当前画布的位置
  const [dragstate, setDragState] = useState({ x: 0, y: 0 });

  const ref = useRef<HTMLDivElement>(null);
  const renderRight = useMemo(() => {
    if (context.theme === 'h5') {
      return (
        <div
          ref={ref}
          className={styles.attrSetting}
          style={{
            transition: 'all ease-in-out 0.5s',
            transform: rightColla ? 'translate(100%,0)' : 'translate(0,0)',
          }}
        >
          {pointData.length && curPoint ? (
            <>
              <div className={styles.tit}>属性设置</div>
              <FormEditor
                config={curPoint.item.editableEl}
                uid={curPoint.id}
                defaultValue={curPoint.item.config}
                onSave={handleFormSave}
                onDel={handleDel}
                rightPannelRef={ref}
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
        <div
          className={styles.attrSetting}
          style={{
            transition: 'all ease-in-out 0.5s',
            transform: rightColla ? 'translate(100%,0)' : 'translate(0,0)',
          }}
        >
          {cpointData.length && curPoint ? (
            <>
              <div className={styles.tit}>属性设置</div>
              <FormEditor
                config={curPoint.item.editableEl}
                uid={curPoint.id}
                defaultValue={curPoint.item.config}
                onSave={handleFormSave}
                onDel={handleDel}
                rightPannelRef={ref}
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
  }, [
    context.theme,
    cpointData.length,
    curPoint,
    handleDel,
    handleFormSave,
    pointData.length,
    rightColla,
  ]);

  const tabRender = useMemo(() => {
    if (collapsed) {
      return (
        <>
          <TabPane tab={generateHeader('base', '')} key="1"></TabPane>
          <TabPane tab={generateHeader('media', '')} key="2"></TabPane>
          <TabPane tab={generateHeader('visible', '')} key="3"></TabPane>
        </>
      );
    } else {
      return (
        <>
          <TabPane tab={generateHeader('base', '')} key="1">
            <div className={styles.ctitle}>基础组件</div>
            {template.map((value, i) => {
              return (
                <TargetBox item={value} key={i} canvasId={canvasId}>
                  <DynamicEngine
                    {...value}
                    config={schemaH5[value.type as keyof typeof schemaH5].config}
                    componentsType="base"
                    isTpl={true}
                  />
                </TargetBox>
              );
            })}
          </TabPane>
          <TabPane tab={generateHeader('media', '')} key="2">
            <div className={styles.ctitle}>媒体组件</div>
            {mediaTpl.map((value, i) => (
              <TargetBox item={value} key={i} canvasId={canvasId}>
                <DynamicEngine
                  {...value}
                  config={schemaH5[value.type as keyof typeof schemaH5].config}
                  componentsType="media"
                  isTpl={true}
                />
              </TargetBox>
            ))}
          </TabPane>
          <TabPane tab={generateHeader('visible', '')} key="3">
            <div className={styles.ctitle}>可视化组件</div>
            {graphTpl.map((value, i) => (
              <TargetBox item={value} key={i} canvasId={canvasId}>
                <DynamicEngine
                  {...value}
                  config={schemaH5[value.type as keyof typeof schemaH5].config}
                  componentsType={'visible' as componentsType}
                  isTpl={true}
                />
              </TargetBox>
            ))}
          </TabPane>
        </>
      );
    }
  }, [canvasId, collapsed, generateHeader, graphTpl, mediaTpl, schemaH5, template]);

  const containerRef = useRef<HTMLDivElement>(null);

  // down和up时候调用,移动过程无需调用 记录拖拽的信息,canvas(当前画布),mouse(鼠标点击位置)
  const [diffmove, setDiffMove] = useState({
    canvas: { x: 0, y: 0 },
    mouse: { x: 0, y: 0 },
    move: false,
  });

  // 尝试使用useCallback创建函数,方便理解
  const mousedownfn = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === containerRef.current) {
        // 鼠标点击时候缓存当前鼠标位置和画布位置
        setDiffMove({
          canvas: {
            x: dragstate.x,
            y: dragstate.y,
          },
          mouse: {
            x: e.clientX,
            y: e.clientY,
          },
          move: true,
        });
      }
    },
    [dragstate],
  );

  const mousemovefn = useMemo(() => {
    return (e: React.MouseEvent<HTMLDivElement>) => {
      if (diffmove.move) {
        const diffx: number = e.clientX - diffmove.mouse.x + diffmove.canvas.x;
        const diffy: number = e.clientY - diffmove.mouse.y + diffmove.canvas.y;

        setDragState({
          x: diffx,
          y: diffy,
        });
      }
    };
  }, [diffmove.move]);

  const mouseupfn = useMemo(() => {
    return () => {
      setDiffMove({
        canvas: { x: 0, y: 0 },
        mouse: { x: 0, y: 0 },
        move: false,
      });
    };
  }, []);

  const onwheelFn = useMemo(() => {
    return (e: React.WheelEvent<HTMLDivElement>) => {
      if (e.deltaY < 0) {
        setDragState(prev => ({
          x: prev.x,
          y: prev.y + 40,
        }));
      } else {
        setDragState(prev => ({
          x: prev.x,
          y: prev.y - 40,
        }));
      }
    };
  }, []);

  useEffect(() => {
    if (diffmove.move && containerRef.current) {
      containerRef.current.style.cursor = 'move';
    } else {
      containerRef.current!.style.cursor = 'default';
    }
  }, [diffmove.move]);

  return (
    <div className={styles.editorWrap}>
      <HeaderComponent
        redohandler={redohandler}
        undohandler={undohandler}
        pointData={pointData}
        clearData={clearData}
        location={props.location}
        importTpl={importTpl}
      />
      <div className={styles.container}>
        <div
          className={styles.list}
          style={{
            transition: 'all ease-in-out 0.5s',
            position: 'fixed',
            width: collapsed ? '50px' : '350px',
            zIndex: 200,
            boxShadow: 'none',
          }}
        >
          <div className={styles.componentList}>
            <Tabs
              className="editorTabclass"
              onTabClick={() => changeCollapse(false)}
              defaultActiveKey="1"
              tabPosition={'left'}
            >
              {tabRender}
            </Tabs>
          </div>
          <div
            className={styles.collapsed}
            style={{ position: 'absolute', bottom: '80px', left: '20px' }}
            onClick={() => changeCollapse(!collapsed)}
          >
            {collapsed ? <DoubleRightOutlined /> : <DoubleLeftOutlined />}
          </div>
        </div>
        <div
          style={{
            width: collapsed ? '50px' : '350px',
            transition: 'all ease-in-out 0.5s',
          }}
        ></div>

        <div
          className={styles.tickMark}
          id="calibration"
          ref={containerRef}
          onMouseDown={e => mousedownfn(e)}
          onMouseMove={throttle(mousemovefn, 500)}
          onMouseUp={mouseupfn}
          onMouseLeave={mouseupfn}
          onWheel={onwheelFn}
        >
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
          <CanvasControl scaleNum={scaleNum} handleSlider={handleSlider} backSize={backSize} />
        </div>
        {renderRight}
        <div
          className={styles.rightcolla}
          style={{
            position: 'absolute',
            right: rightColla ? 0 : '304px',
            transform: 'translate(0,-50%)',
            transition: 'all ease-in-out 0.5s',
          }}
          onClick={() => changeRightColla(!rightColla)}
        >
          {!rightColla ? <DoubleRightOutlined /> : <DoubleLeftOutlined />}
        </div>
        <div
          style={{
            width: rightColla ? 0 : '279px',
            position: 'absolute',
            transform: 'translate(0,-10%)',
            transition: 'all ease-in-out 0.5s',
            textAlign: 'center',
            bottom: -5,
            right: rightColla ? 0 : 16,
            background: 'hsla(0,0%,88.2%,.7)',
            padding: rightColla ? 0 : '10px',
          }}
        >
          <Button block type="primary" onClick={() => handleDel(curPoint.id)}>
            删除
          </Button>
        </div>
        <div
          style={{
            width: rightColla ? 0 : '304px',
            transition: 'all ease-in-out 0.5s',
          }}
        ></div>
      </div>
    </div>
  );
};

export default connect((state: StateWithHistory<any>) => {
  return { pstate: state.present.editorModal, cstate: state.present.editorPcModal };
})(Container);
