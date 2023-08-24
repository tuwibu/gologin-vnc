export interface ResponseApi<TData> {
  success: boolean;
  message?: string;
  data?: TData;
}
export interface ProfileState {
  id: string;
  name: string;
  value: {
    webgl: number;
    canvas: number;
    clientRects: number;
    audioContext: number;
    mediaDevices: {
      uid: string;
    }
  };
  fingerprint: FingerprintState;
}
export interface FingerprintState {
  navigator: {
    language: string;
    platform: string;
    userAgent: string;
    resolution: string;
    deviceMemory: number;
    maxTouchPoints: number;
    hardwareConcurrency: number;
  };
  mediaDevices: {
    audioInputs?: number;
    videoInputs?: number;
    audioOutputs?: number;
  };
  webGLMetadata: {
    mode: string;
    vendor: string;
    renderer: string;
  };
  webglParams: any;
  devicePixelRatio: number;
  os: 'android' | 'windows' | 'linux' | 'mac' | 'macm1';
  fonts: string[];
}