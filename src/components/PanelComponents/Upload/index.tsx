import React from 'react';
import { Upload, Modal, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import ImgCrop from 'antd-img-crop';
import styles from './index.less';
import { UploadFile, UploadChangeParam, RcFile } from 'antd/lib/upload/interface';
import { isDev } from '@/utils/tool';
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
  cropRate?: boolean;
  isCrop?: boolean;
}

class PicturesWall extends React.Component<PicturesWallType> {
  state = {
    previewVisible: false,
    previewImage: '',
    previewTitle: '',
    fileList: this.props.fileList || [],
  };

  handleCancel = () => this.setState({ previewVisible: false });

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

  render() {
    const { previewVisible, previewImage, fileList, previewTitle } = this.state;
    const {
      // 配置自己的服务器地址
      action = isDev ? 'http://192.168.1.6:3000/api/xxx' : 'http://xxxx',
      headers,
      withCredentials = true,
      maxLen = 1,
    } = this.props;

    const uploadButton = (
      <div>
        <PlusOutlined />
        <div className="ant-upload-text">上传</div>
      </div>
    );

    return (
      <ImgCrop
        modalTitle="裁剪图片"
        modalOk="确定"
        modalCancel="取消"
        rotate={true}
        aspect={375 / 158}
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
        <Modal
          visible={previewVisible}
          title={previewTitle}
          footer={null}
          onCancel={this.handleCancel}
        >
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </ImgCrop>
    );
  }
}

export default PicturesWall;
