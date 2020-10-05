import React, { useCallback } from "react";
import { RepoItem } from "../../common/RepoItem";

export const ReposList = ({ repositories = [] }) => {
  const content = repositories.map((repoItemData) => {
    return <RepoItem {...repoItemData} key={repoItemData.id} />;
  });
  return <div>{content}</div>;
};
