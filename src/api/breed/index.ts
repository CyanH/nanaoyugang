import request from '@/utils/request';

//摄像头信息
export function getVideoData(params: { plantWlwId: string }) {
  return request({
    url: 'plant/videoData',
    method: 'get',
    params,
  });
}
