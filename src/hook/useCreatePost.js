import { useMemo } from "react";

export const useCreatePost = (post,sort) => {
    const getSorted = useMemo(() => {
        if (sort) {
          return [...post].sort((a, b) =>
            a[sort].localeCompare(b[sort])
          );
        }
        return post;
    },[sort,post])

    return getSorted;
};

export const usePost = (query,sort,post) =>{
    const getSorted = useCreatePost(post,sort);
    const sortedandsearch = useMemo(() => {
        return getSorted.filter((posted) =>
          posted.title
            .toLocaleLowerCase()
            .includes(query.toLocaleLowerCase())
        );
      }, [query, getSorted]);

      return sortedandsearch;
}

