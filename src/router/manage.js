/*
 * @Author: mingru
 * @Date: 2017-08-09 15:56:48
 * @Last Modified by: mingru
 * @Last Modified time: 2018-03-12 20:42:33
 */
import ManageIndex from '@/components/manage/manageIndex';
import NewBlog from '@/components/manage/manageChildPages/newBlog';
import BlogList from '@/components/manage/manageChildPages/blogList';
import NewTag from '@/components/manage/manageChildPages/newTag';
// import TagList from '@/components/manage/manageChildPages/tagList';
import NewArticle from '@/components/manage/manageChildPages/newArticle';
import ArticleList from '@/components/manage/manageChildPages/articleList';
import SelfSetting from '@/components/manage/manageChildPages/selfSetting';
import CommentManage from '@/components/manage/manageChildPages/commentManage';

export default [
  {
    path: 'home',
    name: '后台管理主页',
    component: ManageIndex,
  },
  {
    path: 'new-blog',
    name: '新建文章',
    component: NewBlog,
  },
  {
    path: 'blog-list',
    name: '已发表文章',
    component: BlogList,
  },
  {
    path: 'new-tag',
    name: '新建标签',
    component: NewTag,
  },
  {
    path: 'tag-list',
    name: '已建立标签',
    component: BlogList,
  },
  {
    path: 'new-article',
    name: '新建外链',
    component: NewArticle,
  },
  {
    path: 'article-list',
    name: '已发布外链',
    component: ArticleList,
  },
  {
    path: 'setting',
    name: '个人设置',
    component: SelfSetting,
  },
  {
    path: 'comment',
    name: '评论管理',
    component: CommentManage,
  },
];
