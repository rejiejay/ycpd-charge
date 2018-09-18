import config from "./../config/index";
import { Indicator } from 'mint-ui';

export default {
    /**
     * 获取车主的车辆信息
	 * 
	 * @param {String} customerid 养车频道 用户标识
     */
	getCarList: function getCarList(customerid) {
		Indicator.open('正在加载数据...');

		return new Promise(function (resolve, reject) {
			$.get(config.url.getCarList, {CustomerID: customerid}, function(response, status, xhr) {
				Indicator.close();

				if (response && response.Code === 200 && response.Data instanceof Array) {
					resolve(response.Data);
				} else {
					reject('获取车主的车辆信息失败, 原因: ' + response.Msg);
				}
			});
		});
	},

    /**
     * 删除 车主汽车
	 * @param {String} CarID 车唯一标识
     */
	deleteCar: function deleteCar(CarID) {

		Indicator.open('正在提交数据...');

		return new Promise(function (resolve, reject) {
			$.ajax({
				url: config.url.deleteCar,
				type: "POST",
				dataType : 'json',
				data: {
					CarID: CarID,
				},
				success: function(res){
					Indicator.close();
					if (res && res.Code === 200 && res.Msg === '') {
						resolve(res);
					} else {
						reject('删除车辆信息失败，原因:' + res.Msg);
					}
				},
				error: function (XMLHttpRequest, textStatus, errorThrown) {
					Indicator.close();
					reject('向服务器发起请求车主删除车辆信息失败, 原因: ' + errorThrown);
				}
			});
		});

	},
}
