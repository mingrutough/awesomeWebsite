import home from '@/components/website/home';
import notes from '@/components/website/notes/notes';
import aboutMe from '@/components/website/aboutMe/aboutMe';
import collection from '@/components/website/collection/collection';
import highFreAccess from '@/components/website/highFreAccess/highFreAccess';
import photoAlbum from '@/components/website/photoAlbum/photoAlbum';
import poppin from '@/components/website/poppin/poppin';
import todoList from '@/components/website/todoList/todoList';

export default [
  {
    path: 'home',
    name: 'home',
    component: home,
  },
  {
    path: 'notes',
    name: 'notes',
    component: notes,
  },
  {
    path: 'aboutMe',
    name: 'aboutMe',
    component: aboutMe,
  },
  {
    path: 'collection',
    name: 'collection',
    component: collection,
  },
  {
    path: 'highFreAccess',
    name: 'highFreAccess',
    component: highFreAccess,
  },
  {
    path: 'photoAlbum',
    name: 'photoAlbum',
    component: photoAlbum,
  },
  {
    path: 'poppin',
    name: 'poppin',
    component: poppin,
  },
  {
    path: 'todoList',
    name: 'todoList',
    component: todoList,
  },
];
