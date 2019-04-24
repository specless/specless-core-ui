import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import Carousel from '../carousel';
import Input from '../input';
import Icon from '../icon';
import cn from 'classnames';

export interface ISubNavCarousel {
}

// Should have a search box on the very top
// Should only show back button if children.length > 0 and currentPanel > 0
// Never show nav-buttons along the bottom
// Children should have access to next() method to progress to next slide
// Children should have access to search box value in order to filter children

const SubNavCarousel: React.FunctionComponent<ISubNavCarousel> = (props) => {
  const { children } = props;

  const _numChildren = React.Children.count(children);
  const [_searchTerm, _setSearchTerm] = useState<string>('');
  const [_currentSlide, _setCurrentSlide] = useState<number>(0);
  const [_shouldShowBackBtn, _setShouldShowBackBtn] = useState<boolean>(false);

  const _ref = useRef<Carousel>();
  const _carousel = _ref.current;

  const _progressToNextSlide = () => {
    if (
      _carousel
      && _numChildren > 1
      && _currentSlide < _numChildren - 1
    ) {
      _carousel.next();
    }
  };
  const _progressToPrevSlide = () => {
    if (
      _carousel
      && _numChildren > 1
      && _currentSlide > 0
    ) {
      _carousel.prev();
    }
  };
  const _handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: {
        value,
      },
    } = event;
    _setSearchTerm(value);
  };
  const _handleAfterChange = (current) => {
    _setShouldShowBackBtn(!!current);
    _setCurrentSlide(current);
  };
  return <div>
    <div>
      <Input
        prefix={
          _shouldShowBackBtn
            ? <Icon
              type='caret-left'
              onClick={_progressToPrevSlide}
            />
            : undefined
        }
        suffix={<Icon type='search'/>}
        value={_searchTerm}
        onChange={_handleSearchChange}
      />
    </div>
    <Carousel
      ref={_ref}
      afterChange={_handleAfterChange}
    >
      {
        React.Children.map(children, (child) => {
          if (!_carousel) {
            return child;
          }
          return React.cloneElement(child as any, {
            onClick: _progressToNextSlide,
          });
        })
      }
    </Carousel>
  </div>;
};

export default SubNavCarousel;