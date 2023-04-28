import bannerImg from '../../assets/koreanfood.jpg';
import classes from './Header.module.css';
import HeaderCart from './HeaderCart';
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Food App</h1>
        <HeaderCart onClick={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={bannerImg} alt='Food App Banner'/>
      </div>
    </>
  );
};

export default Header;
