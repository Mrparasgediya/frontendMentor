import React from "react";
import * as S from "./FilterPanel.styles";
import TagList from "components/TagList/TagList";

function FilterPanel({ tags, onRemoveFilterTag, onClearFilter }) {
  return (
    <S.FilterPanelContainer>
      {tags.length > 0 ? (
        <TagList
          tags={tags}
          onRemoveItem={onRemoveFilterTag}
          itemHasRemoveIcon
          isFilterList
        />
      ) : (
        <S.FilterPanelText>Select tags to filter</S.FilterPanelText>
      )}
      <S.FilterPanelText type="clear" onClick={onClearFilter}>
        clear
      </S.FilterPanelText>
    </S.FilterPanelContainer>
  );
}

export default FilterPanel;
