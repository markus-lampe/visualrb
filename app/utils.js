app.utils = (() => {
  const module = {}

  module.formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return '0 bytes';

    const k = 1024;
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    const s = ['bytes', 'kb', 'mb', 'gb'];

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(decimals))} ${s[i]}`;
  }
  
  return module
})()
