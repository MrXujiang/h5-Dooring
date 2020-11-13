import React from 'react';
import { Upload, Modal, message, Tabs, Result } from 'antd';
import { PlusOutlined, CheckCircleFilled } from '@ant-design/icons';
import ImgCrop from 'antd-img-crop';
import classnames from 'classnames';
import { UploadFile, UploadChangeParam, RcFile } from 'antd/lib/upload/interface';
import { isDev, unParams, uuid } from '@/utils/tool';
import req from '@/utils/req';
import styles from './index.less';

const { TabPane } = Tabs;

// 维护图片分类映射
const wallCateName: any = {
  photo: '照片',
  bg: '背景',
  chahua: '插画',
};

function getBase64(file: File | Blob) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });
}

interface PicturesWallType {
  fileList?: UploadFile<any>[];
  action?: string;
  headers?: any;
  withCredentials?: boolean;
  maxLen?: number;
  onChange?: (v: any) => void;
  cropRate?: number | boolean;
  isCrop?: boolean;
}

class PicturesWall extends React.Component<PicturesWallType> {
  state = {
    previewVisible: false,
    previewImage: '',
    wallModalVisible: false,
    previewTitle: '',
    imgBed: {
      photo: [],
      bg: [],
      chahua: [],
    },
    curSelectedImg: '',
    fileList: this.props.fileList || [],
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handleModalCancel = () => this.setState({ wallModalVisible: false });

  handlePreview = async (file: UploadFile<any>) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj!);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle: file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1),
    });
  };

  handleWallSelect = (url: string) => {
    this.setState({
      wallModalVisible: true,
    });
  };

  handleImgSelected = (url: string) => {
    this.setState({
      curSelectedImg: url,
    });
  };

  handleWallShow = () => {
    this.setState({
      wallModalVisible: true,
    });
  };

  handleModalOk = () => {
    const fileList = [
      {
        uid: uuid(8, 16),
        name: 'h5-dooring图片库',
        status: 'done',
        url: this.state.curSelectedImg,
      },
    ];
    this.props.onChange && this.props.onChange(fileList);
    this.setState({ fileList, wallModalVisible: false });
  };

  handleChange = ({ file, fileList }: UploadChangeParam<UploadFile<any>>) => {
    this.setState({ fileList });
    if (file.status === 'done') {
      const files = fileList.map(item => {
        const { uid, name, status } = item;
        const url = item.url || item.response.result.url;
        return { uid, name, status, url };
      });
      this.props.onChange && this.props.onChange(files);
    }
  };

  handleBeforeUpload = (file: RcFile) => {
    const isJpgOrPng =
      file.type === 'image/jpeg' ||
      file.type === 'image/png' ||
      file.type === 'image/jpg' ||
      file.type === 'image/gif';
    if (!isJpgOrPng) {
      message.error('只能上传格式为jpeg/png/gif的图片');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('图片必须小于2MB!');
    }
    return isJpgOrPng && isLt2M;
  };

  componentDidMount() {
    // req.get(`/visible/bed/get?tid=${unParams(location.search)!.tid}`).then(res => {
    //   res &&
    //     this.setState({
    //       imgBed: res,
    //     });
    // });
  }

  render() {
    const {
      previewVisible,
      previewImage,
      fileList,
      previewTitle,
      wallModalVisible,
      imgBed,
      curSelectedImg,
    } = this.state;
    const {
      action = isDev ? 'http://192.168.1.8:3000/api/v0/files/upload/free' : '你的服务器地址',
      headers,
      withCredentials = true,
      maxLen = 1,
      cropRate = 375 / 158,
      isCrop,
    } = this.props;

    const uploadButton = (
      <div>
        <PlusOutlined />
        <div className="ant-upload-text">上传</div>
      </div>
    );

    const cates = Object.keys(imgBed);

    return (
      <>
        {isCrop ? (
          <ImgCrop
            modalTitle="裁剪图片"
            modalOk="确定"
            modalCancel="取消"
            rotate={true}
            aspect={cropRate}
          >
            <Upload
              fileList={fileList}
              onPreview={this.handlePreview}
              onChange={this.handleChange}
              name="file"
              listType="picture-card"
              className={styles.avatarUploader}
              action={action}
              withCredentials={withCredentials}
              headers={{
                'x-requested-with': localStorage.getItem('user') || '',
                authorization: localStorage.getItem('token') || '',
                ...headers,
              }}
              beforeUpload={this.handleBeforeUpload}
            >
              {fileList.length >= maxLen ? null : uploadButton}
            </Upload>
          </ImgCrop>
        ) : (
          <Upload
            fileList={fileList}
            onPreview={this.handlePreview}
            onChange={this.handleChange}
            name="file"
            listType="picture-card"
            className={styles.avatarUploader}
            action={action}
            withCredentials={withCredentials}
            headers={{
              'x-requested-with': localStorage.getItem('user') || '',
              authorization: localStorage.getItem('token') || '',
              ...headers,
            }}
            beforeUpload={this.handleBeforeUpload}
          >
            {fileList.length >= maxLen ? null : uploadButton}
          </Upload>
        )}
        <div className={styles.wallBtn} onClick={this.handleWallShow}>
          图片库
        </div>
        <Modal
          visible={previewVisible}
          title={previewTitle}
          footer={null}
          onCancel={this.handleCancel}
        >
          <img alt="预览图片" style={{ width: '100%' }} src={previewImage} />
        </Modal>
        <Modal
          visible={wallModalVisible}
          title="图片库"
          okText="确定"
          cancelText="取消"
          width={860}
          onCancel={this.handleModalCancel}
          onOk={this.handleModalOk}
        >
          <Tabs defaultActiveKey={cates[0]} tabPosition="left" style={{ height: 520 }}>
            {cates.map((item, i) => {
              return (
                <TabPane tab={wallCateName[item]} key={item}>
                  <div className={styles.imgBox}>
                    {(imgBed as any)[item] &&
                      (imgBed as any)[item].map((item: string, i: number) => {
                        return (
                          <div
                            className={classnames(
                              styles.imgItem,
                              curSelectedImg === item ? styles.seleted : '',
                            )}
                            key={i}
                            onClick={() => this.handleImgSelected(item)}
                          >
                            <img src={item} alt="趣谈前端-h5-dooring" />
                            <span className={styles.iconBtn}>
                              <CheckCircleFilled />
                            </span>
                          </div>
                        );
                      })}
                  </div>
                </TabPane>
              );
            })}
            <TabPane tab="更多" key="more">
              <Result status="500" title="Dooring温馨提示" subTitle="更多素材, 正在筹备中..." />
            </TabPane>
          </Tabs>
        </Modal>
      </>
    );
  }
}

export default PicturesWall;
