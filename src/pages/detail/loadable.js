/**
 * @author zhouzh
 * @date 2018-12-31 18:11
 */
import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./index'),
  loading: () => {
    return (<div>正在加载</div>)
  },
});

export default ()=> <LoadableComponent />;
