let regex_body = '</body>';
let JavaScript = '<script async="async" src="https://cdn.jsdelivr.net/gh/JokinYang/qx_sharegpt/sharegpt_logic.js"></script></body>';
let body = $response.body.replace(regex_body, JavaScript);
$done({
    body
});


