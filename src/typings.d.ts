declare module '*.css';
declare module '*.png';
declare module '*.less';
interface Window {
  currentCates: null | Array<string>;
}
declare module 'dom-to-image' {
  const domtoimage: any;
  export default domtoimage;
}

declare var getFaceUrl: any;
