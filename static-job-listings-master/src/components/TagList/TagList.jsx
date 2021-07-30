import React from "react";
import * as S from "./TagList.styles";
import { ReactComponent as RemoveIcon } from "assets/images/icon-remove.svg";
import CustomButton from "components/CustomButton/CustomButton";

function TagList({
  tags,
  itemHasRemoveIcon,
  onRemoveItem,
  onItemClick,
  isFilterList,
  ...otherProps
}) {
  return (
    <S.TagList {...otherProps}>
      {tags.map((tag, idx) => (
        <S.TagListItem
          onClick={onItemClick ? () => onItemClick(tag) : null}
          type={itemHasRemoveIcon && "remove"}
          key={idx}
        >
          <span>{tag}</span>
          {itemHasRemoveIcon && (
            <CustomButton isRemoveTagButton onClick={() => onRemoveItem(tag)}>
              <RemoveIcon />
            </CustomButton>
          )}
        </S.TagListItem>
      ))}
    </S.TagList>
  );
}

export default TagList;
