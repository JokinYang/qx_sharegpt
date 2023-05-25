let regex_body = '</body>';
let js = '<script defer src="https://cdn.jsdelivr.net/gh/domeccleston/sharegpt/sharegpt-extension/index.js"></script></body>';
let body = $response.body.replace(regex_body, js);
$done({
    body
});


