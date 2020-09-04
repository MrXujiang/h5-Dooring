declare module 'video-react' {
  type PreloadType = 'auto' | 'metadata' | 'none';

  interface PlayerPropsType {
    children?: any;

    width?: string | number;
    height?: string | number;
    fluid?: boolean; // = true;
    muted?: boolean; // = false;
    playsInline?: boolean; // = false;
    aspectRatio?: string; // = 'auto';
    className?: string;
    videoId?: string;

    startTime?: number;
    loop?: boolean;
    autoPlay?: boolean;
    src?: string;
    poster?: string;
    preload?: PreloadType; // = 'auto';

    onLoadStart?: ReactEventHandler;
    onWaiting?: ReactEventHandler;
    onCanPlay?: ReactEventHandler;
    onCanPlayThrough?: ReactEventHandler;
    onPlaying?: ReactEventHandler;
    onEnded?: ReactEventHandler;
    onSeeking?: ReactEventHandler;
    onSeeked?: ReactEventHandler;
    onPlay?: ReactEventHandler;
    onPause?: ReactEventHandler;
    onProgress?: ReactEventHandler;
    onDurationChange?: ReactEventHandler;
    onError?: ReactEventHandler;
    onSuspend?: ReactEventHandler;
    onAbort?: ReactEventHandler;
    onEmptied?: ReactEventHandler;
    onStalled?: ReactEventHandler;
    onLoadedMetadata?: ReactEventHandler;
    onLoadedData?: ReactEventHandler;
    onTimeUpdate?: ReactEventHandler;
    onRateChange?: ReactEventHandler;
    onVolumeChange?: ReactEventHandler;

    store?: object;
  }

  class Player extends React.Component<PlayerPropsType> {
    readonly video: Video;

    getDefaultChildren(originalChildren): Array<React.Component>;

    getChildren(props): Array<React.Component>;

    setWidthOrHeight(style: object, name: string, value: string | number);

    getStyle(): object;

    // get redux state
    // { player, operation }
    getState(): object;

    // get playback rate
    get playbackRate(): number;

    // set playback rate
    // speed of video
    set playbackRate(rate: number);

    get muted(): boolean;

    set muted(val: boolean);

    get volume(): number;

    set volume(val: number);

    // video width
    get videoWidth(): number;

    // video height
    get videoHeight(): number;

    // play the video
    play();

    // pause the video
    pause();

    // Change the video source and re-load the video:
    load();

    // Add a new text track to the video
    addTextTrack(kind: TextTrackKind, label?: string, language?: string): TextTrack;

    // Check if your browser can play different types of video:
    canPlayType(type: string): CanPlayTypeResult;

    // seek video by time
    seek(time: number);

    // jump forward x seconds
    forward(seconds: number);

    // jump back x seconds
    replay(seconds: number);

    // enter or exist full screen
    toggleFullscreen();

    // subscribe to player state change
    subscribeToStateChange(listener: (state: any, prevState: any) => void);
  }

  interface VideoPropsType {
    actions?: object;
    player?: object;
    children?: any;
    startTime?: number;
    loop?: boolean;
    muted?: boolean;
    autoPlay?: boolean;
    playsInline?: boolean;
    src?: string;
    poster?: string;
    className?: string;
    preload?: PreloadType;
    crossOrigin?: string;

    onLoadStart?: ReactEventHandler;
    onWaiting?: ReactEventHandler;
    onCanPlay?: ReactEventHandler;
    onCanPlayThrough?: ReactEventHandler;
    onPlaying?: ReactEventHandler;
    onEnded?: ReactEventHandler;
    onSeeking?: ReactEventHandler;
    onSeeked?: ReactEventHandler;
    onPlay?: ReactEventHandler;
    onPause?: ReactEventHandler;
    onProgress?: ReactEventHandler;
    onDurationChange?: ReactEventHandler;
    onError?: ReactEventHandler;
    onSuspend?: ReactEventHandler;
    onAbort?: ReactEventHandler;
    onEmptied?: ReactEventHandler;
    onStalled?: ReactEventHandler;
    onLoadedMetadata?: ReactEventHandler;
    onLoadedData?: ReactEventHandler;
    onTimeUpdate?: ReactEventHandler;
    onRateChange?: ReactEventHandler;
    onVolumeChange?: ReactEventHandler;
    onResize?: ReactEventHandler;
  }

  class Video extends React.Component<VideoPropsType> {
    // get all video properties
    getProperties(): any;

    // get playback rate
    get playbackRate(): number;

    // set playback rate
    // speed of video
    set playbackRate(rate: number);

    get muted(): boolean;

    set muted(val: boolean);

    get volume(): number;

    set volume(val: number);

    // video width
    get videoWidth(): number;

    // video height
    get videoHeight(): number;

    // play the video
    play();

    // pause the video
    pause();

    // Change the video source and re-load the video:
    load();

    // Add a new text track to the video
    addTextTrack(kind: TextTrackKind, label?: string, language?: string): TextTrack;

    // Check if your browser can play different types of video:
    canPlayType(type: string): CanPlayTypeResult;

    // toggle play
    togglePlay();

    // seek video by time
    seek(time: number);

    // jump forward x seconds
    forward(seconds: number);

    // jump back x seconds
    replay(seconds: number);

    // enter or exist full screen
    toggleFullscreen();
  }

  interface BigPlayButtonPropsType {
    actions?: object;
    player?: object;
    position?: 'center' | 'left-top'; // = 'left';
    className?: string;
  }

  class BigPlayButton extends React.Component<BigPlayButtonPropsType> {}

  interface LoadingSpinnerPropsType {
    player?: object;
    className?: string;
  }
  class LoadingSpinner extends React.Component<LoadingSpinnerPropsType> {}

  interface PosterImagePropsType {
    poster?: string;
    player?: object;
    actions?: object;
    className?: string;
  }
  class PosterImage extends React.Component<PosterImagePropsType> {}

  interface BezelPropsType {
    manager?: object;
    className?: string;
  }
  class Bezel extends React.Component<BezelPropsType> {}

  interface ShortcutPropsType {
    clickable?: boolean; // = true;
    dblclickable?: boolean; // = true;
    manager?: object;
    actions?: object;
    player?: object;
    shortcuts?: Array<any>;
  }
  class Shortcut extends React.Component<ShortcutPropsType> {}

  interface ControlBarPropsType {
    children?: any;
    autoHide?: boolean; // = true;
    autoHideTime?: number; // used in Player
    disableDefaultControls?: boolean;
    disableCompletely?: boolean; // = false;
    className?: string;
  }
  class ControlBar extends React.Component<ControlBarPropsType> {}

  interface PlayTogglePropsType {
    actions?: object;
    player?: object;
    className?: string;
  }
  class PlayToggle extends React.Component<PlayTogglePropsType> {}

  type ForwardSecondsType = 5 | 10 | 30;
  interface ForwardControlPropsType {
    actions?: object;
    className?: string;
    seconds?: ForwardSecondsType; // = 10;
  }
  class ForwardControl extends React.Component<ForwardControlPropsType> {}

  interface ReplayControlPropsType {
    actions?: object;
    className?: string;
    seconds?: ForwardSecondsType; // = 10;
  }
  class ReplayControl extends React.Component<ReplayControlPropsType> {}

  interface FullscreenTogglePropsType {
    actions?: object;
    player?: object;
    className?: string;
  }
  class FullscreenToggle extends React.Component<FullscreenTogglePropsType> {}

  interface ProgressControlPropsType {
    player?: object;
    className?: string;
  }
  class ProgressControl extends React.Component<ProgressControlPropsType> {}

  interface SeekBarPropsType {
    player?: object;
    mouseTime?: object;
    actions?: object;
    className?: string;
  }
  class SeekBar extends React.Component<SeekBarPropsType> {
    /**
     * Get percentage of video played
     *
     * @return {Number} Percentage played
     * @method getPercent
     */
    getPercent(): number;
  }

  interface SliderPropsType {
    className?: string;
    onMouseDown?: ReactEventHandler;
    onMouseMove?: ReactEventHandler;
    stepForward?: Function;
    stepBack?: Function;
    sliderActive?: ReactEventHandler;
    sliderInactive?: ReactEventHandler;
    onMouseUp?: ReactEventHandler;
    onFocus?: ReactEventHandler;
    onBlur?: ReactEventHandler;
    onClick?: ReactEventHandler;
    getPercent?: () => number;
    vertical?: boolean;
    children?: ReactNode;
    label?: string;
    valuenow?: string;
    valuetext?: string;
  }
  class Slider extends React.Component<SliderPropsType> {}

  interface PlayProgressBarPropsType {
    currentTime?: number;
    duration?: number;
    percentage?: string;
    className?: string;
  }
  class PlayProgressBar extends React.Component<PlayProgressBarPropsType> {}

  interface LoadProgressBarPropsType {
    duration?: number;
    buffered?: object;
    className?: string;
  }
  const LoadProgressBar: React.FC<LoadProgressBarPropsType>;

  interface MouseTimeDisplayPropsType {
    duration?: number;
    mouseTime?: {
      time: number;
      position: number;
    };
    className?: string;
    text?: string;
  }
  const MouseTimeDisplay: React.FC<MouseTimeDisplayPropsType>;

  interface RemainingTimeDisplayPropsType {
    player?: {
      currentTime: number;
      duration: number;
    };
    className?: string;
  }
  const RemainingTimeDisplay: React.FC<RemainingTimeDisplayPropsType>;

  interface CurrentTimeDisplayPropsType {
    player?: {
      currentTime: number;
      duration: number;
    };
    className?: string;
  }
  const CurrentTimeDisplay: React.FC<CurrentTimeDisplayPropsType>;

  interface DurationDisplayPropsType {
    player?: {
      duration: number;
    };
    className?: string;
  }
  const DurationDisplay: React.FC<DurationDisplayPropsType>;

  interface TimeDividerPropsType {
    separator?: string;
    className?: string;
  }
  const TimeDivider: React.FC<TimeDividerPropsType>;

  interface VolumeMenuButtonPropsType {
    player?: {
      volume: number;
      muted: boolean;
    };
    actions?: object;
    vertical?: boolean;
    className?: string;
    alwaysShowVolume?: boolean;
  }
  class VolumeMenuButton extends React.Component<VolumeMenuButtonPropsType> {
    get volumeLevel(): number;
  }

  interface PlaybackRateMenuButtonPropsType {
    player?: object;
    actions?: object;
    rates?: Array<number>; // = [2, 1.5, 1.25, 1, 0.5, 0.25];
    className?: string;
  }
  class PlaybackRateMenuButton extends React.Component<PlaybackRateMenuButtonPropsType> {}

  interface ClosedCaptionButtonPropsType {
    player?: object;
    actions?: object;
    className?: string;
    offMenuText?: string; // = 'Off';
    showOffMenu?: boolean; // = true;
    kinds?: Array<string>; // = ['captions', 'subtitles']; // `kind`s of TextTrack to look for to associate it with this menu.
  }
  class ClosedCaptionButton extends React.Component<ClosedCaptionButtonPropsType> {}

  class PlaybackRate extends React.Component {}

  interface MenuButtonPropsType {
    inline?: boolean;
    items?: Array<any>;
    className?: string;
    onSelectItem?: ReactEventHandler;
    children?: any;
    selectedIndex?: number;
  }
  class MenuButton extends React.Component<MenuButtonPropsType> {}

  namespace playerActions {
    type OPERATE = 'video-react/OPERATE';
    type FULLSCREEN_CHANGE = 'video-react/FULLSCREEN_CHANGE';
    type PLAYER_ACTIVATE = 'video-react/PLAYER_ACTIVATE';
    type USER_ACTIVATE = 'video-react/USER_ACTIVATE';

    function handleFullscreenChange(
      isFullscreen: boolean,
    ): {
      type: FULLSCREEN_CHANGE;
      isFullscreen;
    };

    function activate(
      activity,
    ): {
      type: PLAYER_ACTIVATE;
      activity;
    };

    function userActivate(
      activity,
    ): {
      type: USER_ACTIVATE;
      activity;
    };

    function play(operation: {
      action: 'play';
      source: string;
    }): {
      type: OPERATE;
      operation;
    };

    function pause(operation: {
      action: 'pause';
      source: string;
    }): {
      type: OPERATE;
      operation;
    };

    function togglePlay(operation?: {
      action: 'toggle-play';
      source: string;
    }): {
      type: OPERATE;
      operation;
    };

    // seek video by time
    function seek(
      time: number,
      operation?: {
        action: 'seek';
        source: string;
      },
    ): {
      type: OPERATE;
      operation;
    };

    // jump forward x seconds
    function forward(
      seconds: number,
      operation?: {
        action: string;
        source: string;
      },
    ): {
      type: OPERATE;
      operation;
    };

    // jump back x seconds
    function replay(
      seconds: number,
      operation?: {
        action: string;
        source: string;
      },
    ): {
      type: OPERATE;
      operation;
    };

    function changeRate(
      rate: number,
      operation?: {
        action: 'change-rate';
        source: string;
      },
    ): {
      type: OPERATE;
      operation;
    };

    function changeVolume(
      volume: number,
      operation?: {
        action: 'change-volume';
        source: string;
      },
    ): {
      type: OPERATE;
      operation;
    };

    function mute(
      muted: boolean,
      operation?: {
        action: 'muted' | 'unmuted';
        source: string;
      },
    ): {
      type: OPERATE;
      operation;
    };

    function toggleFullscreen(player): { type: string; [key: string]: any };
  }

  namespace videoActions {
    type LOAD_START = 'video-react/LOAD_START';
    type CAN_PLAY = 'video-react/CAN_PLAY';
    type WAITING = 'video-react/WAITING';
    type CAN_PLAY_THROUGH = 'video-react/CAN_PLAY_THROUGH';
    type PLAYING = 'video-react/PLAYING';
    type PLAY = 'video-react/PLAY';
    type PAUSE = 'video-react/PAUSE';
    type END = 'video-react/END';
    type SEEKING = 'video-react/SEEKING';
    type SEEKED = 'video-react/SEEKED';
    type SEEKING_TIME = 'video-react/SEEKING_TIME';
    type END_SEEKING = 'video-react/END_SEEKING';
    type DURATION_CHANGE = 'video-react/DURATION_CHANGE';
    type TIME_UPDATE = 'video-react/TIME_UPDATE';
    type VOLUME_CHANGE = 'video-react/VOLUME_CHANGE';
    type PROGRESS_CHANGE = 'video-react/PROGRESS_CHANGE';
    type RATE_CHANGE = 'video-react/RATE_CHANGE';
    type SUSPEND = 'video-react/SUSPEND';
    type ABORT = 'video-react/ABORT';
    type EMPTIED = 'video-react/EMPTIED';
    type STALLED = 'video-react/STALLED';
    type LOADED_META_DATA = 'video-react/LOADED_META_DATA';
    type LOADED_DATA = 'video-react/LOADED_DATA';
    type RESIZE = 'video-react/RESIZE';
    type ERROR = 'video-react/ERROR';
    type ACTIVATE_TEXT_TRACK = 'video-react/ACTIVATE_TEXT_TRACK';

    function handleLoadStart(
      videoProps,
    ): {
      type: LOAD_START;
      videoProps;
    };

    function handleCanPlay(
      videoProps,
    ): {
      type: CAN_PLAY;
      videoProps;
    };

    function handleWaiting(
      videoProps,
    ): {
      type: WAITING;
      videoProps;
    };

    function handleCanPlayThrough(
      videoProps,
    ): {
      type: CAN_PLAY_THROUGH;
      videoProps;
    };

    function handlePlaying(
      videoProps,
    ): {
      type: PLAYING;
      videoProps;
    };

    function handlePlay(
      videoProps,
    ): {
      type: PLAY;
      videoProps;
    };

    function handlePause(
      videoProps,
    ): {
      type: PAUSE;
      videoProps;
    };

    function handleEnd(
      videoProps,
    ): {
      type: END;
      videoProps;
    };

    function handleSeeking(
      videoProps,
    ): {
      type: SEEKING;
      videoProps;
    };

    function handleSeeked(
      videoProps,
    ): {
      type: SEEKED;
      videoProps;
    };

    function handleDurationChange(
      videoProps,
    ): {
      type: DURATION_CHANGE;
      videoProps;
    };

    function handleTimeUpdate(
      videoProps,
    ): {
      type: TIME_UPDATE;
      videoProps;
    };

    function handleVolumeChange(
      videoProps,
    ): {
      type: VOLUME_CHANGE;
      videoProps;
    };

    function handleProgressChange(
      videoProps,
    ): {
      type: PROGRESS_CHANGE;
      videoProps;
    };

    function handleRateChange(
      videoProps,
    ): {
      type: RATE_CHANGE;
      videoProps;
    };

    function handleSuspend(
      videoProps,
    ): {
      type: SUSPEND;
      videoProps;
    };

    function handleAbort(
      videoProps,
    ): {
      type: ABORT;
      videoProps;
    };

    function handleEmptied(
      videoProps,
    ): {
      type: EMPTIED;
      videoProps;
    };

    function handleStalled(
      videoProps,
    ): {
      type: STALLED;
      videoProps;
    };

    function handleLoadedMetaData(
      videoProps,
    ): {
      type: LOADED_META_DATA;
      videoProps;
    };

    function handleLoadedData(
      videoProps,
    ): {
      type: LOADED_DATA;
      videoProps;
    };

    function handleResize(
      videoProps,
    ): {
      type: RESIZE;
      videoProps;
    };

    function handleError(
      videoProps,
    ): {
      type: ERROR;
      videoProps;
    };

    function handleSeekingTime(
      time,
    ): {
      type: SEEKING_TIME;
      time;
    };

    function handleEndSeeking(
      time,
    ): {
      type: END_SEEKING;
      time;
    };

    function activateTextTrack(
      textTrack,
    ): {
      type: ACTIVATE_TEXT_TRACK;
      textTrack;
    };
  }

  function playerReducer(state: any, action: any);
  function operationReducer(state: any, action: any);
}
