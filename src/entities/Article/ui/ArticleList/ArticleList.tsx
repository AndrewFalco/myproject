import { HTMLAttributeAnchorTarget, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string,
    articles: Article[],
    isLoading?: boolean,
    view?: ArticleView,
    target?: HTMLAttributeAnchorTarget,
}

export const ArticleList = (props: ArticleListProps) => {
    const {
        className, articles, view = 'GRID', isLoading, target,
    } = props;

    const renderArticles = useCallback((article: Article) => (
        <ArticleListItem
          article={ article }
          view={ view }
          key={ article.id }
          target={ target }
        />
    ), [target, view]);

    return (
        <div className={ classNames(cls.ArticleList, {}, [className]) }>
            {
              articles.length
                ? articles.map(renderArticles)
                : null
            }
            {
              isLoading && new Array(view === 'LIST' ? 3 : 9)
                .fill(0)
              // eslint-disable-next-line react/no-array-index-key
                .map((elem, index) => <ArticleListItemSkeleton view={ view } key={ index } />)
            }
        </div>
    );
};
