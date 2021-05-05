const mutations = {
  // 播放状态
  setPlayingState (state, playing) {
    state.playing = playing
  },
  // 设置顺序播放列表
  setSequenceList (state, list) {
    state.sequenceList = list
  },
  // 设置播放列表
  setPlaylist (state, list) {
    state.playlist = list
  },
  setPlayMode (state, mode) {
    state.playMode = mode
  },
  setCurrentIndex (state, index) {
    state.currentIndex = index
  },
  setFullScreen (state, fullScreen) {
    state.fullScreen = fullScreen
  },
  setFavoriteList (state, list) {
    state.favoriteList = list
  },
  addSongLyric (state, { song, lyric }) {
    state.sequenceList.map((item) => {
      if (item.mid === song.mid) {
        item.lyric = lyric
      }
      return item
    })
  },
  setSearchHistory (state, searches) {
    state.searchHistory = searches
  },
  setPlayHistory (state, songs) {
    state.playHistory = songs
  }
}

export default mutations
