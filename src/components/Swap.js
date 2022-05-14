import React from 'react';

const Swap = () => {
  return (
    <>
      <div className='c-block'>
        <div className='c-block__header'>
          <p className='c-block__text'>Swap</p>
          <div className='c-block__icon'>&copy;</div>
        </div>
        <form className='c-block__form'>
          <div className='c-block__field'>
            <input className='c-block__input' placeholder='0.0'></input>
            <button className='c-block__select'>ETH</button>
          </div>
          <button className='c-block__switch'>
            <span className='sr-only'>Switch content</span>
          </button>
          <div className='c-block__field'>
            <input className='c-block__input' placeholder='0.0'></input>
            <button className='c-block__select'>Select a Token</button>
          </div>
          <button className='c-block__button' type='button'>
            Connect Wallet
          </button>
        </form>
      </div>
    </>
  );
};

export default Swap;
