import emitter from './mitt';

export default function (response, title = '更新') {
  if (response.data.success) {
    emitter.emit('push', {
      title: `${title}成功`,
      message: response.data.message,
    });
  } else {
    const content = typeof response.data.message === 'string'
      ? [response.data.message] : response.data.message;
    emitter.emit('push', {
      title: `${title}失敗`,
      message: content.join(),
    });
  }
}
