import React, { useRef, useState } from 'react';
import { ReactComponent as ArrowDown } from 'assets/select-icons/caret-down.svg';
import { useCloseByClick } from 'hooks/useCloseByClick';
import { useCloseByEsc } from 'hooks/useCloseByEsc';

import { useMaxMenuHeight } from './hooks/useMaxMenuHeight';
import { ISelectProps } from './types/select-props.interface';
import { getSelectItemByValue } from './utils/get-select-item-by-value.util';

import * as S from './Select.styled';

export const Select: React.FC<ISelectProps> = ({
  items,
  currentValue,
  isDisabled = false,
  className,
  onChange,
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const selectButtonRef = useRef<HTMLButtonElement>(null);

  const activeItem = getSelectItemByValue(items, currentValue);
  const maxMenuHeight = useMaxMenuHeight(isOpened, selectButtonRef);

  const handleSelectButtonClick = (event: React.MouseEvent) => {
    event.stopPropagation();
      setIsOpened((prev) => !prev);
  };

  const handleItemClick = (newValue: string) => {
    if (newValue !== currentValue) {
      onChange(newValue);
    }
  };

  const closeMenu = () => {
      setIsOpened(false);
  };

  useCloseByEsc({ isShown: isOpened, cb: closeMenu });
  useCloseByClick({isShown: isOpened, cb: closeMenu});

  return (
    <S.SelectContainer className={className}>
      <S.SelectButton
        ref={selectButtonRef}
        $isActive={isOpened}
        onClick={handleSelectButtonClick}
        disabled={isDisabled}
        type="button"
      >
        {activeItem?.text && <S.SelectButtonText>{activeItem?.text}</S.SelectButtonText>}
        <ArrowDown />
      </S.SelectButton>

      <S.SelectMenu $isOpened={isOpened} $maxMenuHeight={maxMenuHeight}>
        <S.MenuList $itemsLength={items.length} $isOpened={isOpened}>
          {items.map(({ text, value }) => (
            <S.MenuItem key={value}>
              <S.MenuButton
                type="button"
                onClick={() => handleItemClick(value)}
                tabIndex={isOpened ? 0 : -1}
              >
                {text && (
                  <S.MenuButtonText $isActive={value === currentValue} $isOpened={isOpened}>
                    {text}
                  </S.MenuButtonText>
                )}
              </S.MenuButton>
            </S.MenuItem>
          ))}
        </S.MenuList>
      </S.SelectMenu>
    </S.SelectContainer>
  );
};
