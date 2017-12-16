const resourcePath = 'resource/'

export　default {
  secret: 'gujianqitan', // token生成密钥
  port: 3012,
  devDBUrl: 'mongodb://192.168.99.112:12345/test',
  proDBUrl: 'mongodb://127.0.0.1:27017/test',
  resource: resourcePath,
  static: '/usr/local/Cellar/nginx/1.12.2_1/html/' + resourcePath,
}
