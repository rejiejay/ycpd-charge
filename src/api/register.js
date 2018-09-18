import config from "./../config/index";
import { Indicator } from 'mint-ui';

export default {
    /**
     * 获取人机验证码
	 * @param {String} OpenID 用户唯一ID
     */
	getMachineCode: function getMachineCode(OpenID) {
		return config.url.getMachineCode + '?openid=' + OpenID + '&id=' + Math.floor(Math.random() * 1000);
    },
    
    /**
     * 获取 短信验证码
	 * @param {String} Mobile 手机号码 
	 * @param {String} Code 图形验证码
	 * @param {String} OpenID 用户唯一ID
     */
	getMobileCode: function getMobileCode(Mobile, Code, OpenID) {

		Indicator.open('正在加载数据...');

		return new Promise(function (resolve, reject) {
			$.ajax({
				url: config.url.getMobileCode,
				type: "POST",
				dataType : 'json',
				data: {
					Mobile: Mobile,
					OpenID: OpenID,
					Code: Code,
				},
				success: function(res){
					Indicator.close();
					if (res && res.Code === 200 && res.Msg === '') {
						resolve(res);
					} else {
						reject(res.Msg);
					}
				},
				error: function (XMLHttpRequest, textStatus, errorThrown) {
					Indicator.close();
					reject('向服务器发起请求短信验证码失败, 原因: ' + errorThrown);
				}
			});
		});
	},

    /**
     * 校验手机与短信验证码是否正确
	 * @param {String} phoneValue 手机号码
	 * @param {String} verifyNumber 短信验证码
     */
	verifyMobileCodeNumber: function verifyMobileCodeNumber(phoneValue, verifyNumber) {
		Indicator.open('正在加载数据...');
		
		return new Promise(function (resolve, reject) {
			$.get(config.url.checkVerifyCode, {
				mobile: phoneValue, // 手机号码
				code: verifyNumber // 短信验证码
			}, function(response, status, xhr) {
				Indicator.close();
				if (response && response.Code === 200 && response.Msg === '') {
					resolve();
				} else {
					reject('短信验证码错误！');
				}
			});
		});
	},
};
