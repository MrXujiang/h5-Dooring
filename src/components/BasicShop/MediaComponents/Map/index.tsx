import React, { memo } from 'react';
import { Map, Marker, Label, APILoader } from '@uiw/react-baidu-map';
import styles from './index.less';
import { IMapConfig } from './schema';
import logo from '@/assets/map@2x.png';

const Mapcomponent = memo((props: IMapConfig & { isTpl: boolean }) => {
  const { ak, location, position, isTpl } = props;
  return (
    <>
      {isTpl ? (
        <div>
          <img src={logo} style={{ width: '100%' }} alt="h5-dooring音频播放组件"></img>
        </div>
      ) : (
        <div className={styles.mapWrap}>
          <APILoader akay={ak}>
            <Map widget={['NavigationControl']} zoom={13}>
              <Marker animation={2} position={{ lng: position[0], lat: position[1] }} />
              <Label
                content={location}
                position={{ lng: position[0], lat: position[1] }}
                style={{
                  color: '#000',
                  borderColor: '#06c',
                  padding: '3px 10px',
                  borderRadius: '6px',
                }}
              />
            </Map>
          </APILoader>
        </div>
      )}
    </>
  );
});

export default Mapcomponent;
