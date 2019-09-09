

import axios from '../utils/axios'

export const HomeRestService = {
    // 获取信息
    getInfo: () => {
		return axios({api: 'user'})
	},
	// 获取列表
	getList: () => {
		return axios({api: 'list'})
	},
}