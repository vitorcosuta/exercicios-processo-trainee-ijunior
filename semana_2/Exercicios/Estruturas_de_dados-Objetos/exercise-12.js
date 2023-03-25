const url = new URL('http://example.com/path/index.html?message=hello&who=world&from_where=brazil');

let url_obj = {};
let hostname = url.hostname, pathname = url.pathname;
let params = url.searchParams;

url_obj['hostname'] = hostname;
url_obj['pathname'] = pathname;

params.forEach((value, key) => {
    url_obj[`${key}`] = value;
});

console.log(url_obj);
