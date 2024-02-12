/* eslint-disable no-shadow */
/* eslint-disable react/jsx-indent */
import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const AddSong = ({setResultSearch, resultSearch, aS}) => {
  const [listVisible, setListVisible] = useState(false);
  const node = useRef();

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
     setListVisible(!!resultSearch.length);
  },[resultSearch]);

    const handleClickOutside = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    setListVisible(false);
  };

  const openList = () => {
    resultSearch.length && setListVisible(true);
  };

  const searchSong = (e) => {
    if (e.target.value.trim()) {
      window.DZ.api(`search/track?q=${e.target.value}`, function (response) {
        setResultSearch(response.data);
      });
    } else {
      setResultSearch([]);
    }
  };

  // eslint-disable-next-line no-shadow
  const handleItem = (item) => {
    aS(item.id, item.title, item.artist.name, item.album.cover_small);
    setListVisible(false);
  };

  return (
      <div className="search-field" ref={node}>
        <span className="icon icon-add"/>
        <input id="searchSongInput" type="search" onFocus={openList} onInput={searchSong} placeholder="Add song to list"/>
        <div className={`search-result ${listVisible ? 'active' : ''}`}>
          <ul className='search-result-list'>
            {resultSearch.map((item) => (<li
                key={item.id}
                className="search-result-item"
                onClick={() => handleItem(item)}
            >
              <img src={item.album.cover_small} alt={item.album.title}/>
              <div>
                <h4 className="title">{item.artist.name}</h4>
                <span className="name">{item.title}</span>
              </div>
            </li>))
            }
          </ul>
        </div>
      </div>
  );
};

AddSong.defaultProps = {

};

AddSong.propTypes = {

};

export default AddSong;
