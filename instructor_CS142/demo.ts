const userLeft = false;
const userWatchingCatMeme = true;

function watchTutorialCallBack(callback, errorCallback) {
  if (userLeft) {
    errorCallback({
      name: 'User Left',
      message: ':('
    })
  } else if (userWatchingCatMeme) {
    errorCallback({
      name: 'User Watching Cat Meme',
      message: 'Cat > WebDevSimplified'
    })
  } else {
    callback('Thumbs up and Subscribe');
  }
}

watchTutorialCallBack((message: string) => {
  console.log('Success: ' + message)
}, (error) => {
  console.log(error.name + ' ' + error.message)
})
