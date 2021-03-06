export const noPromiseApis = new Set([
  'getEnvInfoSync',
  'isLoginSync',
  'createARCameraContext',
  'createAnimationVideo',
  'createRtcRoomContext',
  'getURLQuery',
  'setURLQuery'
])

export const needPromiseApis = new Set([
  'addEventOnCalendar',
  'chooseAlbum',
  'closeCommunityEditor',
  'getSwanId',
  'requestPolymerPayment',
  'navigateBackSmartProgram',
  'navigateToSmartProgram',
  'setPageInfo',
  'closeReplyEditor',
  'deleteBookShelf',
  'deleteEventOnCalendar',
  'getSystemRiskInfo',
  'insertBookshelf',
  'loadSubPackage',
  'openCommunityEditor',
  'openReplyEditor',
  'openShare',
  'setDocumentTitle',
  'setMetaDescription',
  'setMetaKeywords',
  'shareFile',
  'subscribeService',
  'updateBookshelfReadTime'
])
