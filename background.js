document.addEventListener('visibilitychange', function () {
  if (document.visibilityState === 'visible') {
    console.log('hi')
  }
})