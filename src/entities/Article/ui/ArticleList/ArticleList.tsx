import {
 HTMLAttributeAnchorTarget, MutableRefObject, useCallback,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Virtualize } from 'shared/ui/Virtualize/Virtualize';
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
    onScrollEnd?: () => void,
    parentRef?: MutableRefObject<HTMLDivElement>,
    withVirtualized?: boolean,
    lastIndex?: number,
    setLastIndex?: (index: number) => void,
}

export const ArticleList = (props: ArticleListProps) => {
    const {
        className, articles, view = 'GRID', isLoading, target,
        onScrollEnd, parentRef, withVirtualized = true, lastIndex, setLastIndex,
    } = props;

    const renderArticles = useCallback((index: number, article: Article) => (
        <ArticleListItem
          article={ article }
          view={ view }
          key={ article.id }
          target={ target }
          index={ index }
          setLastIndex={ setLastIndex }
        />
    ), [setLastIndex, target, view]);

    const renderSkeleton = useCallback((index: number) => (<ArticleListItemSkeleton view={ view } key={ index } />), [view]);

    return (
        <div className={ classNames(cls.ArticleList, {}, [className]) }>
            {
                withVirtualized
                    ? (
                        <Virtualize
                          data={ articles.length ? articles : Array(3).fill(0) }
                          renderNode={ renderArticles }
                          view={ view }
                          isLoading={ isLoading }
                          renderSkeleton={ renderSkeleton }
                          onScrollEnd={ onScrollEnd }
                          parentRef={ parentRef }
                          lastIndex={ lastIndex }
                        />
                    )
                    : (
                        <>
                            {
                                articles.length
                                ? articles.map((article, index) => renderArticles(index, article))
                                : null
                            }
                            {
                                isLoading && new Array(view === 'LIST' ? 3 : 9)
                                .fill(0)
                                .map((elem, index) => renderSkeleton(index))
                            }
                        </>
                )
            }
        </div>
    );
};