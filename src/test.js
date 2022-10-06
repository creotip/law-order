import { fetch } from 'node-fetch'

fetch('https://www.ynet.co.il/iphone/json/api/talkbacks/vote', {
	headers: {
		accept: 'application/json, text/plain, */*',
		'accept-language': 'en-US,en;q=0.9,he;q=0.8,ru;q=0.7',
		'cache-control': 'no-cache',
		'content-type': 'application/json;charset=UTF-8',
		pragma: 'no-cache',
		'sec-ch-ua': '"Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"',
		'sec-ch-ua-mobile': '?0',
		'sec-ch-ua-platform': '"macOS"',
		'sec-fetch-dest': 'empty',
		'sec-fetch-mode': 'cors',
		'sec-fetch-site': 'same-origin',
		cookie:
			'ab-checking=62; dcsyncundefined=true; tmcundefined=1; __adblocker=true; _gcl_au=1.1.2072003038.1665047378; _pprv=eyJjb25zZW50Ijp7IjAiOnsibW9kZSI6Im9wdC1pbiJ9LCIxIjp7Im1vZGUiOiJvcHQtaW4ifSwiMiI6eyJtb2RlIjoib3B0LWluIn0sIjMiOnsibW9kZSI6Im9wdC1pbiJ9LCI0Ijp7Im1vZGUiOiJvcHQtaW4ifSwiNSI6eyJtb2RlIjoib3B0LWluIn0sIjYiOnsibW9kZSI6Im9wdC1pbiJ9LCI3Ijp7Im1vZGUiOiJvcHQtaW4ifX19; _pctx=%7Bu%7DN4IgDghg5gpgagSxgdwJIBMQC4QBsAcyArgOwBuALgB4C2AVgHboBOArBWCADQhEDOMZn2wMiuXD36CAyhQgV%2B2EBAYB7BtxB8EFGBiUBGAwBYDATgBsx-PgAMtg63xHjAJlYgAvkA; _pcid=%7B%22browserId%22%3A%22l8wu7vtxrghcc1f7%22%7D; __pnahc=1; __tbc=%7Bkpex%7DQ3fapmO-0rdgivY3SE-tF-l4v2pGY_JeVPPYJDipZHbb7-Vhfa4KzhZaNLwRfB8a; __pat=10800000; __pvi=eyJpZCI6InYtbDh3dTd2dTZhbXdrOGRnbiIsImRvbWFpbiI6Ii55bmV0LmNvLmlsIiwidGltZSI6MTY2NTA0NzM3OTE5NX0%3D; xbc=%7Bkpex%7DHV_9sFUnaibpHhGbogh2YPtItw4Llq8z_8GfI-B-gJn167xJwTk1CcK1VrBG0IQ6dp--KaxVVmHfZz5H6s4ZkS893MvEPuI15U9LqxndOEuxTiCnvp1SNH82L8Jq6e06yUIRrHYkSxnGZdf-fnaME1k31F1_wTKLCJ7GIh0J9Ng; _ga=GA1.3.1421462848.1665047378; _gid=GA1.3.1286732708.1665047379; _gat_ext1=1; _dc_gtm_UA-10772561-46=1; _dc_gtm_UA-151979718-3=1; permutive-id=dc6a413f-e97f-45b3-a3e8-17fc261d9e45; _tt_enable_cookie=1; _ttp=9739c292-f95a-4f15-a44e-d3320b6baac2; cX_S=l8wu7wxvtk6kpmw7; cX_P=l8wu7vtxrghcc1f7; __gpi=UID=00000b02f78ba1b0:T=1665047380:RT=1665047380:S=ALNI_MYc3UY3dLnc8D4hr4PSF-EBBVmKyQ; FCNEC=%5B%5B%22AKsRol9psPw11aP0WcvEJ7wd3khUYrZYMJ0_fqRn3tU5XttKQjO1IWUF7_iU7Of_xM79N4Ficb7iGxxX5V6Qzu-Vcs1HquC4A0aJzJHRmtXZY8TGxvkQfxRj2B8_AY65HFs6A6_F5PfEzua_vDb9j-jHzyom_n7Ypg%3D%3D%22%5D%2Cnull%2C%5B%5D%5D; __gads=ID=9db443e8020166aa:T=1665047380:S=ALNI_MYpRq4-StOuqpeHba5LCwxkSl_shw; cX_G=cx%3A3v3mrwmlb0udpla3rn0tu3n7z%3A500ok3vpegs2; _ga_B0H8ZSFBCE=GS1.1.1665045359.171.1.1665047383.0.0.0; _cc_id=4fb27c5cbd11168d9ed0abeff26acc04; panoramaId_expiry=1665652186102; panoramaId=628dc5da9589a0499c29066a07e716d53938f97c9e9d01d8c8900a3c326ff26e',
		Referer: 'https://www.ynet.co.il/news/article/sji6xujzs',
		'Referrer-Policy': 'strict-origin-when-cross-origin',
	},
	body: '{"article_id":"sji6xujzs","talkback_id":81962305,"talkback_like":true,"talkback_unlike":false,"vote_type":"3state"}',
	method: 'POST',
})
