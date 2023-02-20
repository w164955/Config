// 由yibeizipeini 提供，key 和小白脸大佬修改完善。

let $ = {
Baidu:'https://www.baidu.com',
Google:'https://www.google.com/generate_204',
Github:'https://www.github.com',
Youtube:'https://www.youtube.com/',
Bilibili:'https://www.bilibili.com'
}

!(async () => {
await Promise.all([http('Baidu'),http('Google'),http('Github'),http('Youtube'),http('Bilibili')]).then((x)=>{
	$done({
    title: 'Network Connectivity Test',
    content: x.join('\n'),
    icon: 'network.badge.shield.half.filled',
    'icon-color': '#007aff',
  })
})
})();

function http(req) {
    return new Promise((r) => {
			let time = Date.now();
        $httpClient.post($[req], (err, resp, data) => {
            r(req +
						'\xa0\xa0\xa0\t: ' +
						(Date.now() - time)+' ms');
        });
    });
}
