var Api = {
  baseRoot: '/booktg',//https://quapp.1122dh.com
  searchRoot: '/searchtg',//http://api.easou.com

  /**
   * 获取书城Banner列表
   * @param sex 参数可以设置man/lady
   * @returns {string}
   */
  getBanner: function (sex) {
    return this.baseRoot + '/v5/base/banner_' + sex + '.html'
  },
  /**
   * 获取书城书城数据
   * @param sex 参数可以设置man/lady
   * @returns {string}
   */
  getBookCity: function (sex) {
    return this.baseRoot + '/v5/base/' + sex + '.html'
  },
  /**
   * 获取图书榜单--(热门榜单--完结榜单--推荐榜单--收藏榜单--新书榜单--评分榜单)
   * @param sex  参数可以设置man/lady
   */
  getRankList: function (sex) {
    return this.baseRoot + '/top/' + sex + '/index.html'
  },
  /**
   * 获取图书书单
   * @param sex 参数可以设置man/lady
   */
  getBookList: function (sex) {
    return this.baseRoot + '/shudan/' + sex + '/all/new/1.html'
  },
  /**
   * 通过筛选条件获取榜单列表，用于排行榜模块
   * @param sex 参数可以设置man/lady
   * @param type 参数可以设置成   最热榜单:hot  推荐榜单:commend 完结榜单:over 收藏榜单:collect  新书榜单:new  评分榜单:vote
   * @param date 周榜:week 月榜:month 总榜:total
   * @param page 表示当前页数
   */
  getCheckRankList: function (sex, type, date, page) {
    return this.baseRoot + '/top/' + sex + '/top/' + type + '/' + date + '/' + page + '.html'
  },
  /**
   * 获取图书分类
   * @returns {string}
   */
  getBookCategory: function () {
    return this.baseRoot + '/BookCategory.html'
  },
  /**
   * 获取图书详情接口
   * @param bookId 图书Id
   * @returns {string}
   */
  getBookInfo: function (bookId) {
    return this.baseRoot + '/info/' + bookId + '.html'
  },
  /**
   * 获取图书章节列表
   * @param bookId 图书Id
   * @returns {string}
   */
  getBookSection: function (bookId) {
    return this.baseRoot + '/book/' + bookId + '/'
  },

  /**
   * 获取图书章节内容
   * @param bookId 图书Id
   * @param sectionId 章节ID
   * @returns {string}
   */
  getBookSectionDetails: function (bookId, sectionId) {
    return this.baseRoot + '/book/' + bookId + '/' + sectionId + '.html'
  },

  /**
   * 获取最热1000本书籍
   * @returns {string}
   */
  getHotBook1000: function () {
    return this.baseRoot + '/StaticFiles/HotBook1000.html'
  },

  /**
   * 通过书名或者作者进行搜索
   * @param bookName 图书名称或者作者名称
   * @param searchPage 当前搜索页面
   * @param pageCount  搜索页面数量
   * @returns {string}
   */
  getBookBySearch: function (bookName, searchPage, pageCount) {
    if (!pageCount) pageCount = 20
    return this.searchRoot + '/api/bookapp/searchdzh.m?word=' + bookName + '&page_id=' + searchPage + '&count=' + pageCount + '&cid=eef_&os=ios&appverion=1049'
  }

}
export default Api
