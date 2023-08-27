import axios from './index'
namespace Cover {
    export interface coverName {
        imgName: string,
    }
}
// 上传文章封面
export const uploadCover = (params: Cover.coverName) => {
    return axios.get<Cover.coverName>('/image', params);
}
