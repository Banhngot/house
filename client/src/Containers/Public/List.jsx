import React, { useEffect, useState } from "react";
import { Button, Item } from "../../Component";
import { getPosts, getPostsLimit } from "../../Store/actions/post";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const List = ({ categoryCode }) => {
  console.log(categoryCode);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const { posts } = useSelector((state) => state.post);
  const [sort, setSort] = useState(0);

  useEffect(() => {
    let params = [];
    for (let entry of searchParams.entries()) {
      params.push(entry);
    }
    let searchParamsObj = {};
    params?.forEach((i) => {
      if (Object.keys(searchParamsObj)?.some((item) => item === i[0])) {
        searchParamsObj[i[0]] = [...searchParamsObj[i[0]], i[1]];
      } else {
        searchParamsObj = { ...searchParamsObj, [i[0]]: [i[1]] };
      }
    });
    console.log(searchParamsObj);
    if (categoryCode) searchParamsObj.categoryCode = categoryCode;
    if (sort === 1) searchParamsObj.order = ["createdAt", "DESC"];
    dispatch(getPostsLimit(searchParamsObj));
  }, [searchParams, categoryCode, sort]);

  return (
    <div className="w-full p-2 bg-white shadow-md rounded-md px-6">
      <div className="flex items-center justify-between my-3">
        <h4 className="text-xl font-semibold">Danh sách tin đăng</h4>
        <span>Cập nhật: 12:05 25/08/2022</span>
      </div>
      <div className="flex items-center gap-2 my-2">
        <span>Sắp xếp:</span>
        <span
          onClick={() => setSort(0)}
          className={`bg-gray-200 p-2 rounded-md cursor-pointer hover:bg-orange-300 ${
            sort === 0 && "bg-orange-300"
          }`}
        >
          Mặc định
        </span>
        <span
          onClick={() => setSort(1)}
          className={`bg-gray-200 p-2 rounded-md cursor-pointer hover:bg-orange-300 ${
            sort === 1 && "bg-orange-300"
          }`}
        >
          Mới nhất
        </span>
      </div>
      <div className="items">
        {posts?.length > 0 &&
          posts.map((item) => {
            return (
              <Item
                key={item?.id}
                address={item?.address}
                attributes={item?.attributes}
                description={JSON.parse(item?.description)}
                images={JSON.parse(item?.images?.image)}
                star={+item?.star}
                title={item?.title}
                user={item?.user}
                id={item?.id}
              />
            );
          })}
      </div>
    </div>
  );
};

export default List;
