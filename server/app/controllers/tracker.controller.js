const axios = require('axios');
const querystring = require('querystring');

const handleAxiosError = (error) => {
	console.log('[Error Config]', error.config);
	
	if (error.response) {
		console.log('[Error Response]');
		// console.log(error.response.data);
		console.log(error.response.status);
		// console.log(error.response.headers);
	} else if (error.request) {
		console.log('[Error Request]', error.request);
	} else {
		console.log('[Error Message]', error.message);
	}
}
const handleAxiosResponse = (resp) => {
	return new Promise((resolve, reject) => {
		const data = {
			status: resp.status,
			data: null,
			message: null
		};
		
		switch (resp.status) {
			case 200:
				data.data = resp.data;
				data.message = '정상적으로 처리되었습니다.';
				resolve(data);
				break;
			case 101:
				data.message = '발급된 고유키가 존재 하지 않습니다.';
				resolve(data);
				break;
			case 102:
				data.message = '만료된 키입니다.';
				resolve(data);
				break;
			case 103:
				data.message = '키 사용량이 초과되었습니다.';
				resolve(data);
				break;
			case 104:
				data.message = '유효하지 않은 운송장 번호 혹은 택배사 코드를 입력하였습니다.';
				resolve(data);
				break;
			case 105:
				data.message = '동일한 운송장의 하루 요청 제한 건수를 초과하였습니다.';
				resolve(data);
				break;
			case 106:
				data.message = '운송장 번호를 조회하는 중 에러가 발생했습니다.';
				resolve(data);
				break;
			case 404:
				data.message = '해당 정보를 찾을 수 없습니다.';
				resolve(data);
				break;
			case 500:
				data.message = '스마트택배 배송조회 API의 서버로 부터 에러가 발생했습니다.';
				resolve(data);
				break;
		}
	});
};
const getTrackingData = async (companyCode, invoiceNumber) => {
	const baseUrl = 'http://info.sweettracker.co.kr';
	const trackingApi = '/api/v1/trackingInfo';
	const apiKey = process.env.SWEET_TRACKER_API_KEY;
	const queryString = querystring.stringify({
		t_key: apiKey,
		t_code: companyCode,
		t_invoice: invoiceNumber
	});
	const url = `${baseUrl}${trackingApi}?${queryString}`;
	
	try {
		const resp = await axios({
			method: 'get',
			url: url
		});
		
		return await handleAxiosResponse(resp);
	} catch(e) {
		handleAxiosError(e);
	}
};

exports.trackDelivery = async (req, res) => {
	const { companyCode, invoiceNumber } = req.body;
	const data = await getTrackingData(companyCode, invoiceNumber);
	
	res.status(200).json(data);
};
