import { AliasToken } from 'antd/es/theme/interface';

export const darkToken: Partial<AliasToken> = {
  colorTextLightSolid: '#000000',
  colorBgLayout: '#000000',
  colorBgContainer: '#111111',
  colorBgElevated: '#222222',
  colorBgSpotlight: '#444444',
  colorBorder: '#333333',
  colorBorderSecondary: '#333333',
  colorText: '#ffffff',
  colorTextSecondary: '#999999',
  colorTextTertiary: '#888888',
  colorTextQuaternary: '#666666',
  colorPrimary: '#ffffff',
  colorInfo: '#0070f3',
  colorSuccess: '#50e3c2',
  colorWarning: '#f5a623',
  colorError: '#ee0000',
  colorFillQuaternary: 'rgba(0,0,0,0)',
  borderRadius: 5,
  borderRadiusXS: 3,
  borderRadiusSM: 3,
  borderRadiusLG: 8,
  controlHeight: 36,
  boxShadow: '0 12px 20px 6px rgb(0 0 0 / 0.08)',
  boxShadowSecondary:
    '0 2px 8px 2px rgb(0 0 0 / 0.07), 0 2px 4px -1px rgb(0 0 0 / 0.04)',
};

export const lightToken: Partial<AliasToken> = {
  ...darkToken,
  colorTextLightSolid: '#ffffff',
  colorBgLayout: '#ffffff',
  colorBgContainer: '#fafafa',
  colorBgElevated: '#f2f2f2',
  colorBgSpotlight: '#999999',
  colorBorder: '#eaeaea',
  colorBorderSecondary: '#eaeaea',
  colorText: '#000000',
  colorTextSecondary: '#444444',
  colorTextTertiary: '#666666',
  colorTextQuaternary: '#888888',
  colorPrimary: '#000000',
  boxShadow: '0 12px 20px 6px rgb(104 112 118 / 0.08)',
  boxShadowSecondary:
    '0 2px 8px 2px rgb(104 112 118 / 0.07), 0 2px 4px -1px rgb(104 112 118 / 0.04)',
};
